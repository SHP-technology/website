from rest_framework import serializers
from .models import FAQ, TeamMember, Testimonial, Service

class FAQSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = ['id', 'question', 'answer', 'category', 'order']


class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = ['id', 'name', 'initials', 'role', 'bio', 'photo_url', 'linkedin_url', 'github_url', 'order']


class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = ['id', 'name', 'role', 'company', 'quote', 'avatar', 'rating', 'order']


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ['id', 'title', 'slug', 'tagline', 'description', 'icon', 'price', 'order']
