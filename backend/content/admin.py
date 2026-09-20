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
    list_display = ('subject', 'recipient', 'sender', 'status_badge', 'resend_id', 'created_at')
    list_filter = ('status', 'created_at')
    search_fields = ('recipient', 'subject', 'resend_id', 'error_message', 'body_text')
    readonly_fields = ('created_at', 'sent_at', 'resend_id', 'error_message', 'metadata_display', 'html_preview')
    actions = ['retry_send_emails']

    def status_badge(self, obj):
        if obj.status == 'sent':
            return format_html(
                '<span style="background-color: #10b981; color: white; padding: 3px 8px; border-radius: 9999px; font-weight: bold; font-size: 11px;">SENT</span>'
            )
        elif obj.status == 'failed':
            return format_html(
                '<span style="background-color: #ef4444; color: white; padding: 3px 8px; border-radius: 9999px; font-weight: bold; font-size: 11px;">FAILED</span>'
            )
        return format_html(
            '<span style="background-color: #f59e0b; color: white; padding: 3px 8px; border-radius: 9999px; font-weight: bold; font-size: 11px;">PENDING</span>'
        )
    status_badge.short_description = "Status"

    def metadata_display(self, obj):
        return format_html("<pre>{}</pre>", str(obj.metadata))
    metadata_display.short_description = "Metadata"

    def html_preview(self, obj):
        if obj.body_html:
            return format_html(
                '<div style="max-height: 400px; overflow-y: auto; border: 1px solid #ccc; padding: 12px; border-radius: 4px; background: #fff; color: #000;">{}</div>',
                format_html(obj.body_html)
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

