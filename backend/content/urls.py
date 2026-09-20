from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    FAQViewSet,
    TeamMemberViewSet,
    TestimonialViewSet,
    ServiceViewSet,
    send_email_view,
    contact_inquiry_view,
)

router = DefaultRouter()
router.register('faqs', FAQViewSet, basename='faq')
router.register('team', TeamMemberViewSet, basename='team')
router.register('testimonials', TestimonialViewSet, basename='testimonial')
router.register('services', ServiceViewSet, basename='service')

urlpatterns = [
    path('send-email/', send_email_view, name='send-email'),
    path('contact/', contact_inquiry_view, name='contact-inquiry'),
    path('', include(router.urls)),
]

