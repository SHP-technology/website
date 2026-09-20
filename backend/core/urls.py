from django.contrib import admin
from django.urls import path, include
from content.views import (
    root_api_index,
    email_dashboard_view,
    dashboard_send_email_api,
    dashboard_resend_email_api,
    dashboard_email_detail_api,
)

urlpatterns = [
    path('', root_api_index, name='root-index'),
    path('admin/', admin.site.urls),
    path('dashboard/emails/', email_dashboard_view, name='email-dashboard'),
    path('dashboard/emails/api/send/', dashboard_send_email_api, name='dashboard-send-email-api'),
    path('dashboard/emails/api/resend/<int:log_id>/', dashboard_resend_email_api, name='dashboard-resend-email-api'),
    path('dashboard/emails/api/detail/<int:log_id>/', dashboard_email_detail_api, name='dashboard-email-detail-api'),
    path('api/', include('content.urls')),
]

