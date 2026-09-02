import os
from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from content.models import FAQ, TeamMember, Testimonial, Service

class Command(BaseCommand):
    help = 'Seeds initial data for FAQs, Team Members, Testimonials, Services, and Superuser'

    def handle(self, *args, **options):
        self.stdout.write("Seeding data...")

        # 0. Create Superuser if not exists
        User = get_user_model()
        admin_username = os.environ.get('ADMIN_USERNAME', 'admin')
        admin_email = os.environ.get('ADMIN_EMAIL', 'admin@shptechnology.online')
        admin_password = os.environ.get('ADMIN_PASSWORD', 'admin123')

        user, created = User.objects.get_or_create(username=admin_username, defaults={'email': admin_email})
        if created:
            user.set_password(admin_password)
            user.is_staff = True
            user.is_superuser = True
            user.save()
            self.stdout.write(self.style.SUCCESS(f"Created superuser '{admin_username}' ({admin_email})"))
        else:
            # Ensure email and password are updated if needed
            user.email = admin_email
            user.set_password(admin_password)
            user.is_staff = True
            user.is_superuser = True
            user.save()
            self.stdout.write(f"Updated superuser '{admin_username}' credentials.")

        # 1. FAQs
        faqs = [
            {
                'question': 'How quickly can your engineering team onboard and begin development?',
                'answer': 'Our senior engineering pods can integrate into your project repository within 3 to 5 business days following initial technical alignment and NDA execution.',
                'category': 'Onboarding',
                'order': 1
            },
            {
                'question': 'Who owns the intellectual property (IP) of code written by SHP Technology?',
                'answer': 'You retain 100% full ownership of all code, architecture blueprints, database schemas, and documentation produced during our contract.',
                'category': 'Legal & IP',
                'order': 2
            },
            {
                'question': 'What software development methodology do you follow?',
                'answer': 'We utilize a transparent 6-stage engineering process (Understand -> Plan -> Build -> Test -> Deploy -> Improve) with bi-weekly sprint demos and continuous integration.',
                'category': 'Process',
                'order': 3
            },
            {
                'question': 'Do you provide post-deployment maintenance and SLA support?',
                'answer': 'Yes. We offer 24/7 Site Reliability Engineering (SRE) monitoring, zero-downtime deployment maintenance, and guaranteed response SLAs.',
                'category': 'Support',
                'order': 4
            }
        ]

        for item in faqs:
            FAQ.objects.get_or_create(question=item['question'], defaults=item)

        # 2. Team Members
        team = [
            {
                'name': 'Harsh Patel',
                'initials': 'HP',
                'role': 'Founder',
                'bio': 'Founder of the company, focused on business strategy, technology solutions, automation, and overall company growth.',
                'order': 1
            },
            {
                'name': 'Sandesh Patel',
                'initials': 'SP',
                'role': 'Co-Founder & Head of Full-Stack Development',
                'bio': 'Co-Founder and Head of Full-Stack Development, specializing in building scalable, modern web applications and robust full-stack solutions.',
                'order': 2
            },
            {
                'name': 'Prachi Dabar',
                'initials': 'PD',
                'role': 'Sales Manager',
                'bio': 'Drives client relations, strategic account management, and business development to align enterprise client goals with SHP Technology engineering solutions.',
                'order': 3
            },
            {
                'name': 'Shivam Patel',
                'initials': 'SP',
                'role': 'Full-Stack Developer',
                'bio': 'Specializes in building responsive web interfaces, high-performance APIs, and scalable full-stack application components.',
                'order': 4
            },
            {
                'name': 'Mohit Verma',
                'initials': 'MV',
                'role': 'Sales Lead',
                'bio': 'Leads sales strategy and prospective client engagements, ensuring tailored technical solutions and transparent onboarding for partners.',
                'order': 5
            },
            {
                'name': 'Aparna Verma',
                'initials': 'AV',
                'role': 'Operations Manager',
                'bio': 'Oversees operational efficiency, project coordination, resource allocation, and team workflows to guarantee seamless project delivery.',
                'order': 6
            }
        ]

        for item in team:
            TeamMember.objects.get_or_create(name=item['name'], role=item['role'], defaults=item)

        # 3. Testimonials
        testimonials = [
            {
                'name': 'ASP Association',
                'role': 'Product Operations Lead',
                'company': 'ASP Association',
                'quote': 'SHP Technologies helped ASP Association build a custom Chrome extension to organize and manage workspace browser tabs. Their team delivered a lightweight, lightning-fast tool that greatly boosted our team productivity.',
                'rating': 5,
                'order': 1
            }
        ]

        for item in testimonials:
            Testimonial.objects.get_or_create(name=item['name'], company=item['company'], defaults=item)

        self.stdout.write(self.style.SUCCESS("Successfully seeded initial data!"))
