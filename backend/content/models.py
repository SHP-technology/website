from django.db import models

class FAQ(models.Model):
    question = models.CharField(max_length=500, help_text="The question text")
    answer = models.TextField(help_text="Detailed answer text")
    category = models.CharField(max_length=100, default="General", help_text="e.g. General, Pricing, Security")
    order = models.PositiveIntegerField(default=0, help_text="Display order (lower numbers show first)")
    is_active = models.BooleanField(default=True, help_text="Visible on website")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order', 'created_at']
        verbose_name = "FAQ"
        verbose_name_plural = "FAQs"

    def __str__(self):
        return self.question


class TeamMember(models.Model):
    name = models.CharField(max_length=200)
    initials = models.CharField(max_length=10, blank=True, help_text="e.g. HP, SP")
    role = models.CharField(max_length=200, help_text="e.g. Founder, Full-Stack Developer")
    bio = models.TextField()
    photo_url = models.URLField(max_length=500, blank=True, null=True, help_text="Optional profile photo URL")
    linkedin_url = models.URLField(max_length=500, blank=True, null=True)
    github_url = models.URLField(max_length=500, blank=True, null=True)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order', 'created_at']
        verbose_name = "Team Member"
        verbose_name_plural = "Team Members"

    def __str__(self):
        return f"{self.name} - {self.role}"


class Testimonial(models.Model):
    name = models.CharField(max_length=200)
    role = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    quote = models.TextField()
    avatar = models.URLField(max_length=500, blank=True, null=True)
    rating = models.PositiveSmallIntegerField(default=5)
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order', 'created_at']

    def __str__(self):
        return f"{self.name} ({self.company})"


class Service(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True)
    tagline = models.CharField(max_length=300)
    description = models.TextField()
    icon = models.CharField(max_length=100, default="code", help_text="Icon identifier")
    price = models.CharField(max_length=100, blank=True, default="")
    order = models.PositiveIntegerField(default=0)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['order', 'id']

    def __str__(self):
        return self.title
