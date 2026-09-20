from django.core.management.base import BaseCommand
from core.email import send_email


class Command(BaseCommand):
    help = "Send a test email using the Resend API service"

    def add_arguments(self, parser):
        parser.add_argument(
            "--to",
            type=str,
            default="founder.shp@gmail.com",
            help="Recipient email address",
        )
        parser.add_argument(
            "--subject",
            type=str,
            default="Test Email from SHP Technology Backend",
            help="Subject line",
        )
        parser.add_argument(
            "--message",
            type=str,
            default="Hello! This is a test email sent from SHP Technology backend via Resend.",
            help="Message body",
        )

    def handle(self, *args, **options):
        to = options["to"]
        subject = options["subject"]
        message = options["message"]

        self.stdout.write(f"Attempting to send email to: {to}...")

        result = send_email(
            to=to,
            subject=subject,
            text=message,
            html=f"<p>{message}</p>",
        )

        if result.get("success"):
            self.stdout.write(self.style.SUCCESS(f"Email sent successfully! Resend ID: {result.get('id')}"))
        else:
            self.stdout.write(self.style.ERROR(f"Failed to send email: {result.get('error')}"))
