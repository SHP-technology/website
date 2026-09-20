"""
Email sending service powered by Resend API.
Provides robust transactional email sending with automatic EmailLog audit tracking.
"""

import json
import logging
import urllib.request
import urllib.error
from typing import List, Union, Optional, Dict, Any
from django.conf import settings
from django.utils import timezone

logger = logging.getLogger(__name__)

RESEND_API_URL = "https://api.resend.com/emails"


def send_email(
    to: Union[str, List[str]],
    subject: str,
    html: Optional[str] = None,
    text: Optional[str] = None,
    from_email: Optional[str] = None,
    reply_to: Optional[Union[str, List[str]]] = None,
    cc: Optional[Union[str, List[str]]] = None,
    bcc: Optional[Union[str, List[str]]] = None,
    record_log: bool = True,
    metadata: Optional[Dict[str, Any]] = None,
) -> Dict[str, Any]:
    """
    Sends an email using the Resend REST API and logs the attempt in EmailLog model.

    Args:
        to: Single email string or list of email addresses.
        subject: Subject line.
        html: HTML email body (optional).
        text: Plain-text fallback body (optional).
        from_email: Sender email (defaults to settings.RESEND_FROM_EMAIL).
        reply_to: Reply-to address or list of addresses.
        cc: Carbon copy recipient(s).
        bcc: Blind carbon copy recipient(s).
        record_log: If True, persists transaction in EmailLog.
        metadata: Extra contextual key-value dict to store in EmailLog.

    Returns:
        Dict with status and response payload:
        {"success": True, "id": "...", "log_id": ..., "data": {...}} or
        {"success": False, "error": "...", "log_id": ...}
    """
    from content.models import EmailLog

    api_key = getattr(settings, "RESEND_API_KEY", "")
    sender = from_email or getattr(settings, "RESEND_FROM_EMAIL", "SHP Technology <onboarding@resend.dev>")

    # Normalize 'to' to list
    recipients = [to] if isinstance(to, str) else list(to)
    recipient_str = ", ".join(recipients) if recipients else ""

    log_entry = None
    if record_log:
        try:
            log_entry = EmailLog.objects.create(
                sender=sender,
                recipient=recipient_str,
                subject=subject,
                body_text=text or "",
                body_html=html or "",
                status="pending",
                metadata=metadata or {},
            )
        except Exception as log_err:
            logger.warning("Failed to create initial EmailLog: %s", log_err)

    if not api_key:
        err_msg = "RESEND_API_KEY is not configured in settings."
        logger.error(err_msg)
        if log_entry:
            log_entry.status = "failed"
            log_entry.error_message = err_msg
            log_entry.save(update_fields=["status", "error_message"])
        return {"success": False, "error": err_msg, "log_id": log_entry.id if log_entry else None}

    if not recipients:
        err_msg = "Recipient list 'to' cannot be empty."
        if log_entry:
            log_entry.status = "failed"
            log_entry.error_message = err_msg
            log_entry.save(update_fields=["status", "error_message"])
        return {"success": False, "error": err_msg, "log_id": log_entry.id if log_entry else None}

    # Prepare payload
    payload: Dict[str, Any] = {
        "from": sender,
        "to": recipients,
        "subject": subject,
    }

    if html:
        payload["html"] = html
    if text:
        payload["text"] = text
    if not html and not text:
        payload["text"] = "(Empty body)"

    if reply_to:
        payload["reply_to"] = [reply_to] if isinstance(reply_to, str) else list(reply_to)
    if cc:
        payload["cc"] = [cc] if isinstance(cc, str) else list(cc)
    if bcc:
        payload["bcc"] = [bcc] if isinstance(bcc, str) else list(bcc)

    try:
        data = json.dumps(payload).encode("utf-8")
        req = urllib.request.Request(
            RESEND_API_URL,
            data=data,
            headers={
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json",
                "User-Agent": "SHPTechnology-Backend/1.0",
            },
            method="POST",
        )

        with urllib.request.urlopen(req, timeout=10) as response:
            res_body = response.read().decode("utf-8")
            res_json = json.loads(res_body)
            resend_id = res_json.get("id")
            logger.info("Email sent successfully: id=%s", resend_id)

            if log_entry:
                log_entry.status = "sent"
                log_entry.resend_id = resend_id
                log_entry.sent_at = timezone.now()
                log_entry.save(update_fields=["status", "resend_id", "sent_at"])

            return {
                "success": True,
                "id": resend_id,
                "log_id": log_entry.id if log_entry else None,
                "data": res_json,
            }

    except urllib.error.HTTPError as e:
        error_content = e.read().decode("utf-8")
        try:
            error_json = json.loads(error_content)
            error_message = error_json.get("message", error_content)
        except Exception:
            error_message = error_content

        logger.error("Resend API HTTPError [%s]: %s", e.code, error_message)

        if log_entry:
            log_entry.status = "failed"
            log_entry.error_message = f"HTTP {e.code}: {error_message}"
            log_entry.save(update_fields=["status", "error_message"])

        return {
            "success": False,
            "status_code": e.code,
            "error": error_message,
            "log_id": log_entry.id if log_entry else None,
        }
    except Exception as exc:
        logger.exception("Unexpected error sending email via Resend: %s", exc)
        if log_entry:
            log_entry.status = "failed"
            log_entry.error_message = str(exc)
            log_entry.save(update_fields=["status", "error_message"])

        return {
            "success": False,
            "error": str(exc),
            "log_id": log_entry.id if log_entry else None,
        }


def resend_email_log(log_id: int) -> Dict[str, Any]:
    """
    Retries sending an email based on an existing EmailLog record.
    """
    from content.models import EmailLog

    try:
        log_entry = EmailLog.objects.get(id=log_id)
    except EmailLog.DoesNotExist:
        return {"success": False, "error": f"Email log #{log_id} not found."}

    recipients = [r.strip() for r in log_entry.recipient.split(",") if r.strip()]

    result = send_email(
        to=recipients,
        subject=log_entry.subject,
        html=log_entry.body_html if log_entry.body_html else None,
        text=log_entry.body_text if log_entry.body_text else None,
        from_email=log_entry.sender,
        record_log=False,
    )

    if result.get("success"):
        log_entry.status = "sent"
        log_entry.resend_id = result.get("id")
        log_entry.error_message = None
        log_entry.sent_at = timezone.now()
        log_entry.save()
    else:
        log_entry.status = "failed"
        log_entry.error_message = f"Retry Failed: {result.get('error')}"
        log_entry.save()

    return result


def send_contact_notification(
    name: str,
    email: str,
    subject: str,
    message: str,
    phone: str = "",
    company: str = "",
) -> Dict[str, Any]:
    """
    Helper to send an internal notification when a user submits the contact form.
    """
    admin_recipient = getattr(settings, "ADMIN_EMAIL", "founder.shp@gmail.com")
    email_subject = f"[New Lead] {subject} - from {name}"
    
    html = f"""
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #0f172a; color: #fff; padding: 20px;">
            <h2 style="margin: 0; font-size: 20px;">SHP Technology — New Contact Lead</h2>
        </div>
        <div style="padding: 24px;">
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> <a href="mailto:{email}">{email}</a></p>
            {f'<p><strong>Phone:</strong> {phone}</p>' if phone else ''}
            {f'<p><strong>Company:</strong> {company}</p>' if company else ''}
            <p><strong>Subject/Service:</strong> {subject}</p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
            <p><strong>Message:</strong></p>
            <div style="background-color: #f8fafc; padding: 16px; border-radius: 6px; white-space: pre-wrap;">{message}</div>
        </div>
        <div style="background-color: #f1f5f9; padding: 12px 24px; font-size: 12px; color: #64748b;">
            SHP Technology Automated Lead System
        </div>
    </div>
    """

    text = f"""
New Contact Lead from SHP Technology Website:
Name: {name}
Email: {email}
Phone: {phone}
Company: {company}
Subject: {subject}

Message:
{message}
    """

    return send_email(
        to=admin_recipient,
        subject=email_subject,
        html=html,
        text=text,
        reply_to=email,
        metadata={"source": "contact_form", "lead_email": email, "lead_name": name},
    )
