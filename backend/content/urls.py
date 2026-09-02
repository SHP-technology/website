from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FAQViewSet, TeamMemberViewSet, TestimonialViewSet, ServiceViewSet

router = DefaultRouter()
router.register('faqs', FAQViewSet, basename='faq')
router.register('team', TeamMemberViewSet, basename='team')
router.register('testimonials', TestimonialViewSet, basename='testimonial')
router.register('services', ServiceViewSet, basename='service')

urlpatterns = [
    path('', include(router.urls)),
]
