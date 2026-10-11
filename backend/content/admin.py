from django.contrib import admin
from django.utils.html import format_html
from .models import FAQ, TeamMember, Testimonial, Service, EmailLog
from core.email import resend_email_log

@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = ('question', 'category', 'order', 'is_active', 'updated_at')
    list_filter = ('category', 'is_active')
    search_fields = ('question', 'answer')
    list_editable = ('order', 'is_active')


@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ('name', 'role', 'initials', 'order', 'is_active')
    list_filter = ('is_active',)
    search_fields = ('name', 'role', 'bio')
    list_editable = ('order', 'is_active')


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('name', 'company', 'role', 'rating', 'order', 'is_active')
    list_filter = ('rating', 'is_active')
    search_fields = ('name', 'company', 'quote')
    list_editable = ('order', 'is_active')


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'price', 'order', 'is_active')
    list_filter = ('is_active',)
    search_fields = ('title', 'tagline', 'description')
    prepopulated_fields = {'slug': ('title',)}
    list_editable = ('order', 'is_active')


@admin.register(EmailLog)
class EmailLogAdmin(admin.ModelAdmin):
    list_display = ('subject', 'recipient', 'sender', 'status_badge', 'resend_id', 'created_at', 'studio_link')
    list_filter = ('status', 'created_at')
    search_fields = ('recipient', 'subject', 'resend_id', 'error_message', 'body_text')
    readonly_fields = ('created_at', 'sent_at', 'resend_id', 'error_message', 'metadata_display', 'html_preview')
    actions = ['retry_send_emails']

    def status_badge(self, obj):
        if obj.status == 'sent':
            return format_html(
                '<span style="background: rgba(16, 185, 129, 0.15); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.3); padding: 3px 8px; border-radius: 9999px; font-weight: 700; font-size: 11px; letter-spacing: 0.03em;">SENT</span>'
            )
        elif obj.status == 'failed':
            return format_html(
                '<span style="background: rgba(239, 68, 68, 0.15); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.3); padding: 3px 8px; border-radius: 9999px; font-weight: 700; font-size: 11px; letter-spacing: 0.03em;">FAILED</span>'
            )
        return format_html(
            '<span style="background: rgba(245, 158, 11, 0.15); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.3); padding: 3px 8px; border-radius: 9999px; font-weight: 700; font-size: 11px; letter-spacing: 0.03em;">PENDING</span>'
        )
    status_badge.short_description = "Status"

    def studio_link(self, obj):
        return format_html(
            '<a href="/dashboard/emails/" class="btn btn-xs btn-outline-primary" style="padding: 2px 7px; font-size: 11px; text-decoration: none;">'
            '<i class="fas fa-paper-plane me-1"></i> Studio</a>'
        )
    studio_link.short_description = "Email Studio"

    def metadata_display(self, obj):
        import json
        formatted_json = json.dumps(obj.metadata, indent=2) if obj.metadata else "{}"
        return format_html('<pre style="background: #f8fafc; border: 1px solid #e2e8f0; color: #0f172a; padding: 12px; border-radius: 6px; font-size: 12px; max-height: 200px; overflow-y: auto;">{}</pre>', formatted_json)
    metadata_display.short_description = "Metadata"

    def html_preview(self, obj):
        if obj.body_html:
            from django.utils.safestring import mark_safe
            return format_html(
                '<div style="max-height: 480px; overflow-y: auto; border: 1px solid #e2e8f0; padding: 16px; border-radius: 8px; background: #ffffff; color: #1e293b; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">'
                '{}</div>',
                mark_safe(obj.body_html)
            )
        return "No HTML body provided"
    html_preview.short_description = "Rendered HTML Preview"

    @admin.action(description="Retry sending selected emails")
    def retry_send_emails(self, request, queryset):
        success_count = 0
        fail_count = 0
        for log_entry in queryset:
            res = resend_email_log(log_entry.id)
            if res.get('success'):
                success_count += 1
            else:
                fail_count += 1
        self.message_user(
            request,
            f"Retry finished: {success_count} succeeded, {fail_count} failed."
        )

