import json
from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from rest_framework import viewsets, status
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response


from .models import FAQ, TeamMember, Testimonial, Service, EmailLog
from .serializers import FAQSerializer, TeamMemberSerializer, TestimonialSerializer, ServiceSerializer
from core.email import send_email, send_contact_notification, resend_email_log


# -------------------------------------------------------------------------
# Content ViewSets
# -------------------------------------------------------------------------

class FAQViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = FAQ.objects.filter(is_active=True)
    serializer_class = FAQSerializer


class TeamMemberViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = TeamMember.objects.filter(is_active=True)
    serializer_class = TeamMemberSerializer


class TestimonialViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Testimonial.objects.filter(is_active=True)
    serializer_class = TestimonialSerializer


class ServiceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Service.objects.filter(is_active=True)
    serializer_class = ServiceSerializer


# -------------------------------------------------------------------------
# Root API Index
# -------------------------------------------------------------------------

@api_view(['GET'])
def root_api_index(request):
    return Response({
        "status": "online",
        "service": "SHP Technology Backend API",
        "version": "1.0.0",
        "admin_dashboard": "/admin/",
        "email_studio_dashboard": "/dashboard/emails/",
        "endpoints": {
            "faqs": "/api/faqs/",
            "team": "/api/team/",
            "testimonials": "/api/testimonials/",
            "services": "/api/services/",
            "send_email": "/api/send-email/",
            "contact": "/api/contact/"
        }
    })


# -------------------------------------------------------------------------
# Public Email APIs
# -------------------------------------------------------------------------

@api_view(['POST'])
@authentication_classes([])
@permission_classes([AllowAny])
def send_email_view(request):
    """
    POST /api/send-email/
    Send arbitrary transactional email using Resend.
    """
    data = request.data
    to = data.get('to')
    subject = data.get('subject')
    html = data.get('html')
    text = data.get('text')
    from_email = data.get('from_email')
    reply_to = data.get('reply_to')

    if not to or not subject:
        return Response(
            {"success": False, "error": "Both 'to' and 'subject' fields are required."},
            status=status.HTTP_400_BAD_REQUEST
        )

    result = send_email(
        to=to,
        subject=subject,
        html=html,
        text=text,
        from_email=from_email,
        reply_to=reply_to,
    )

    if result.get('success'):
        return Response(result, status=status.HTTP_200_OK)
    return Response(result, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
@authentication_classes([])
@permission_classes([AllowAny])
def contact_inquiry_view(request):

    """
    POST /api/contact/
    Handle public contact form inquiry and dispatch lead email.
    """
    data = request.data
    name = data.get('name', 'Anonymous')
    email = data.get('email', '')
    subject = data.get('subject', 'General Inquiry')
    message = data.get('message', '')
    phone = data.get('phone', '')
    company = data.get('company', '')

    if not email or not message:
        return Response(
            {"success": False, "error": "'email' and 'message' are required."},
            status=status.HTTP_400_BAD_REQUEST
        )

    result = send_contact_notification(
        name=name,
        email=email,
        subject=subject,
        message=message,
        phone=phone,
        company=company,
    )

    if result.get('success'):
        return Response({"success": True, "message": "Inquiry received and lead email sent."}, status=status.HTTP_200_OK)
    return Response({"success": False, "error": result.get('error')}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# -------------------------------------------------------------------------
# Custom Email Studio Dashboard Views & APIs
# -------------------------------------------------------------------------

def email_dashboard_view(request):
    """
    GET /dashboard/emails/
    Renders custom full-page Email Studio & Audit Dashboard.
    """
    email_logs = EmailLog.objects.all().order_by('-created_at')[:200]
    total_count = EmailLog.objects.count()
    sent_count = EmailLog.objects.filter(status='sent').count()
    failed_count = EmailLog.objects.filter(status='failed').count()
    pending_count = EmailLog.objects.filter(status='pending').count()

    success_rate = round((sent_count / total_count * 100), 1) if total_count > 0 else 100.0

    sender_options = [
        {
            "id": "hello",
            "name": "SHP Technology (Hello)",
            "address": "hello@shptechnology.online",
            "full": "SHP Technology <hello@shptechnology.online>",
            "category": "Inquiries & General",
            "badge": "Primary"
        },
        {
            "id": "support",
            "name": "SHP Support Team",
            "address": "support@shptechnology.online",
            "full": "SHP Support <support@shptechnology.online>",
            "category": "Customer & Tech Support",
            "badge": "Support"
        },
        {
            "id": "admin",
            "name": "SHP Administration",
            "address": "admin@shptechnology.online",
            "full": "SHP Admin <admin@shptechnology.online>",
            "category": "Management & Operations",
            "badge": "Admin"
        },
        {
            "id": "sales",
            "name": "SHP Sales & Growth",
            "address": "sales@shptechnology.online",
            "full": "SHP Sales <sales@shptechnology.online>",
            "category": "Proposals & Contracts",
            "badge": "Sales"
        },
        {
            "id": "careers",
            "name": "SHP Careers & HR",
            "address": "careers@shptechnology.online",
            "full": "SHP Careers <careers@shptechnology.online>",
            "category": "Recruitment & Hiring",
            "badge": "Careers"
        },
        {
            "id": "info",
            "name": "SHP Info Desk",
            "address": "info@shptechnology.online",
            "full": "SHP Info <info@shptechnology.online>",
            "category": "Public Information",
            "badge": "Info"
        },
        {
            "id": "sandbox",
            "name": "Resend Sandbox (Testing)",
            "address": "onboarding@resend.dev",
            "full": "SHP Technology <onboarding@resend.dev>",
            "category": "Testing / Sandbox",
            "badge": "Sandbox"
        },
    ]

    context = {
        "email_logs": email_logs,
        "total_count": total_count,
        "sent_count": sent_count,
        "failed_count": failed_count,
        "pending_count": pending_count,
        "success_rate": success_rate,
        "sender_options": sender_options,
        "resend_configured": bool(getattr(settings, "RESEND_API_KEY", "")),
        "default_from_email": getattr(settings, "RESEND_FROM_EMAIL", "SHP Technology <onboarding@resend.dev>"),
        "company_email": getattr(settings, "COMPANY_EMAIL", "hello@shptechnology.online"),
    }
    return render(request, "email_dashboard.html", context)



@csrf_exempt
@api_view(['POST'])
@authentication_classes([])
@permission_classes([AllowAny])
def dashboard_send_email_api(request):
    """
    POST /dashboard/emails/api/send/
    Dispatches a new email from the custom dashboard studio.
    """
    data = request.data
    to = data.get('to')
    subject = data.get('subject')
    html = data.get('html')
    text = data.get('text')
    from_email = data.get('from_email')

    if not to or not subject:
        return JsonResponse({"success": False, "error": "Recipient and Subject are required."}, status=400)

    result = send_email(
        to=to,
        subject=subject,
        html=html,
        text=text,
        from_email=from_email,
        record_log=True,
        metadata={"source": "custom_dashboard_studio"}
    )

    status_code = 200 if result.get('success') else 400
    return JsonResponse(result, status=status_code)


@csrf_exempt
@api_view(['POST'])
@authentication_classes([])
@permission_classes([AllowAny])
def dashboard_resend_email_api(request, log_id):
    """
    POST /dashboard/emails/api/resend/<int:log_id>/
    Retries sending an email by its log ID.
    """
    result = resend_email_log(log_id)
    status_code = 200 if result.get('success') else 400
    return JsonResponse(result, status=status_code)


@api_view(['GET'])
@authentication_classes([])
@permission_classes([AllowAny])
def dashboard_email_detail_api(request, log_id):

    """
    GET /dashboard/emails/api/detail/<int:log_id>/
    Returns detailed email payload for modal preview.
    """
    log = get_object_or_404(EmailLog, id=log_id)
    return JsonResponse({
        "success": True,
        "log": {
            "id": log.id,
            "sender": log.sender,
            "recipient": log.recipient,
            "subject": log.subject,
            "body_html": log.body_html,
            "body_text": log.body_text,
            "status": log.status,
            "resend_id": log.resend_id,
            "error_message": log.error_message,
            "created_at": log.created_at.strftime("%b %d, %Y · %H:%M:%S UTC"),
            "sent_at": log.sent_at.strftime("%b %d, %Y · %H:%M:%S UTC") if log.sent_at else None,
            "metadata": log.metadata,
        }
    })
