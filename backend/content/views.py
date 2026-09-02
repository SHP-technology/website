from rest_framework import viewsets
from .models import FAQ, TeamMember, Testimonial, Service
from .serializers import FAQSerializer, TeamMemberSerializer, TestimonialSerializer, ServiceSerializer

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

from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def root_api_index(request):
    return Response({
        "status": "online",
        "service": "SHP Technology Backend API",
        "version": "1.0.0",
        "admin_dashboard": "/admin/",
        "endpoints": {
            "faqs": "/api/faqs/",
            "team": "/api/team/",
            "testimonials": "/api/testimonials/",
            "services": "/api/services/"
        }
    })
