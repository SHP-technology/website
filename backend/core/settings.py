"""
╔══════════════════════════════════════════════════════════════════════════════╗
║                    SHP TECHNOLOGY — Django Backend Settings                 ║
║                                                                              ║
║  Company   :  SHP Technology Inc.                                            ║
║  Founded   :  2019                                                           ║
║  HQ        :  Madan Mahal Station, Jabalpur, MP, India — 482001              ║
║  Website   :  https://www.shptechnology.online                               ║
║  API Base  :  https://api.shptechnology.online                               ║
║  Hosting   :  Render.com  (backend)  |  Vercel + Cloudflare (frontend)      ║
║  Email     :  hello@shptechnology.online  (primary)                          ║
║  Phone     :  +91 9301885654                                                 ║
║  Admin     :  founder.shp@gmail.com                                          ║
║                                                                              ║
║  Build • Automate • Grow                                                     ║
╚══════════════════════════════════════════════════════════════════════════════╝

Environment Variables are loaded from `backend/.env`.
Set DEBUG=False and provide a strong SECRET_KEY in production (Render.com envVars).
"""

import os
import logging
from pathlib import Path

# ─── Base Directory ───────────────────────────────────────────────────────────
BASE_DIR = Path(__file__).resolve().parent.parent

# ─── Load .env File (stdlib only — no python-dotenv required) ─────────────────
_env_file = BASE_DIR / '.env'
if _env_file.exists():
    with open(_env_file, 'r', encoding='utf-8') as _f:
        for _line in _f:
            _line = _line.strip()
            if _line and not _line.startswith('#') and '=' in _line:
                _key, _val = _line.split('=', 1)
                os.environ.setdefault(_key.strip(), _val.strip())


# ══════════════════════════════════════════════════════════════════════════════
#  §1  SECURITY & CORE
# ══════════════════════════════════════════════════════════════════════════════

SECRET_KEY = os.environ.get(
    'SECRET_KEY',
    'django-insecure-shp-tech-backend-secret-key-change-in-prod'
)

DEBUG = os.environ.get('DEBUG', 'True').lower() in ('true', '1', 'yes')

# Allowed Hosts — '*' is fine for local dev; Render sets ALLOWED_HOSTS in env
_allowed_hosts_raw = os.environ.get('ALLOWED_HOSTS', '*')
if _allowed_hosts_raw.strip() == '*':
    ALLOWED_HOSTS = ['*']
else:
    ALLOWED_HOSTS = [h.strip() for h in _allowed_hosts_raw.split(',') if h.strip()]
    ALLOWED_HOSTS += [
        'localhost',
        '127.0.0.1',
        'shptech.onrender.com',
        'shptechnology.online',
        'www.shptechnology.online',
    ]

# Trust the X-Forwarded-Proto header from Render's reverse proxy
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
USE_X_FORWARDED_HOST = True


# ══════════════════════════════════════════════════════════════════════════════
#  §2  PRODUCTION SECURITY HARDENING
#      (all cookies & headers are sent only over HTTPS in prod)
# ══════════════════════════════════════════════════════════════════════════════

if not DEBUG:
    # Force browsers to use HTTPS for 1 year; include subdomains
    SECURE_HSTS_SECONDS = 31_536_000          # 1 year
    SECURE_HSTS_INCLUDE_SUBDOMAINS = True
    SECURE_HSTS_PRELOAD = True

    # Prevent content-type sniffing
    SECURE_CONTENT_TYPE_NOSNIFF = True

    # XSS protection header (legacy browsers)
    SECURE_BROWSER_XSS_FILTER = True

    # Redirect plain HTTP → HTTPS
    SECURE_SSL_REDIRECT = True

    # Session & CSRF cookies only over HTTPS
    SESSION_COOKIE_SECURE = True
    CSRF_COOKIE_SECURE = True

    # Clickjacking protection (deny framing from other origins)
    X_FRAME_OPTIONS = 'DENY'

    # Referrer policy
    SECURE_REFERRER_POLICY = 'strict-origin-when-cross-origin'
else:
    # Relaxed for local dev
    X_FRAME_OPTIONS = 'SAMEORIGIN'
    SECURE_CONTENT_TYPE_NOSNIFF = True


# ══════════════════════════════════════════════════════════════════════════════
#  §3  INSTALLED APPLICATIONS
# ══════════════════════════════════════════════════════════════════════════════

INSTALLED_APPS = [
    # ── Jazzmin must come BEFORE django.contrib.admin ──
    'jazzmin',

    # ── Django core ──
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    # ── Third-party ──
    'rest_framework',     # Django REST Framework
    'corsheaders',        # Cross-Origin Resource Sharing

    # ── SHP Technology local apps ──
    'content',            # FAQs, Team, Services, Testimonials, EmailLog
]


# ══════════════════════════════════════════════════════════════════════════════
#  §4  MIDDLEWARE
# ══════════════════════════════════════════════════════════════════════════════

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',    # Serve static files efficiently
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',         # Must be before CommonMiddleware
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'core.urls'


# ══════════════════════════════════════════════════════════════════════════════
#  §5  TEMPLATES
# ══════════════════════════════════════════════════════════════════════════════

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            BASE_DIR / 'templates',   # backend/templates/
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'core.wsgi.application'


# ══════════════════════════════════════════════════════════════════════════════
#  §6  DATABASE
#      SQLite for development / Render ephemeral disk.
#      Swap for PostgreSQL in production by setting DATABASE_URL in env.
# ══════════════════════════════════════════════════════════════════════════════

_database_url = os.environ.get('DATABASE_URL', '')

if _database_url.startswith('postgres'):
    # PostgreSQL (production — set DATABASE_URL on Render)
    import urllib.parse as _up
    _r = _up.urlparse(_database_url)
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql',
            'NAME': _r.path.lstrip('/'),
            'USER': _r.username,
            'PASSWORD': _r.password,
            'HOST': _r.hostname,
            'PORT': _r.port or 5432,
            'CONN_MAX_AGE': 60,
        }
    }
else:
    # SQLite (local dev)
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


# ══════════════════════════════════════════════════════════════════════════════
#  §7  PASSWORD VALIDATION
# ══════════════════════════════════════════════════════════════════════════════

AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]


# ══════════════════════════════════════════════════════════════════════════════
#  §8  LOCALISATION
#      Company is based in Jabalpur, Madhya Pradesh, India → IST (UTC+5:30)
# ══════════════════════════════════════════════════════════════════════════════

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'Asia/Kolkata'    # IST — UTC+5:30
USE_I18N = True
USE_TZ = True


# ══════════════════════════════════════════════════════════════════════════════
#  §9  STATIC FILES
#      WhiteNoise serves compressed static files in production.
# ══════════════════════════════════════════════════════════════════════════════

STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'
STATICFILES_DIRS = []          # Add extra dirs here if needed
STATICFILES_STORAGE = 'whitenoise.storage.CompressedStaticFilesStorage'

MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'


# ══════════════════════════════════════════════════════════════════════════════
#  §10  CACHING
#       LocMemCache for single-process dev/staging.
#       Swap to Redis on Render for production multi-worker setups.
# ══════════════════════════════════════════════════════════════════════════════

_redis_url = os.environ.get('REDIS_URL', '')

if _redis_url:
    CACHES = {
        'default': {
            'BACKEND': 'django.core.cache.backends.redis.RedisCache',
            'LOCATION': _redis_url,
            'OPTIONS': {'db': '1'},
            'KEY_PREFIX': 'shptech',
            'TIMEOUT': 300,
        }
    }
else:
    CACHES = {
        'default': {
            'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
            'LOCATION': 'shptech-locmem',
        }
    }

SESSION_ENGINE = 'django.contrib.sessions.backends.cache'
SESSION_CACHE_ALIAS = 'default'
SESSION_COOKIE_AGE = 86_400          # 24 hours
SESSION_COOKIE_HTTPONLY = True
SESSION_SAVE_EVERY_REQUEST = False


# ══════════════════════════════════════════════════════════════════════════════
#  §11  LOGGING
#       Console + rotating file logs. Errors → shp_errors.log
# ══════════════════════════════════════════════════════════════════════════════

LOGS_DIR = BASE_DIR / 'logs'
LOGS_DIR.mkdir(exist_ok=True)

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'verbose': {
            'format': '[{asctime}] {levelname} {name} {process:d} {thread:d}  {message}',
            'style': '{',
            'datefmt': '%Y-%m-%d %H:%M:%S',
        },
        'simple': {
            'format': '[{asctime}] {levelname}  {message}',
            'style': '{',
            'datefmt': '%H:%M:%S',
        },
    },
    'filters': {
        'require_debug_false': {
            '()': 'django.utils.log.RequireDebugFalse',
        },
        'require_debug_true': {
            '()': 'django.utils.log.RequireDebugTrue',
        },
    },
    'handlers': {
        'console': {
            'level': 'DEBUG',
            'filters': ['require_debug_true'],
            'class': 'logging.StreamHandler',
            'formatter': 'simple',
        },
        'console_prod': {
            'level': 'WARNING',
            'filters': ['require_debug_false'],
            'class': 'logging.StreamHandler',
            'formatter': 'verbose',
        },
        'file_general': {
            'level': 'INFO',
            'class': 'logging.handlers.RotatingFileHandler',
            'filename': LOGS_DIR / 'shp_general.log',
            'maxBytes': 10 * 1024 * 1024,   # 10 MB
            'backupCount': 5,
            'formatter': 'verbose',
        },
        'file_errors': {
            'level': 'ERROR',
            'class': 'logging.handlers.RotatingFileHandler',
            'filename': LOGS_DIR / 'shp_errors.log',
            'maxBytes': 10 * 1024 * 1024,   # 10 MB
            'backupCount': 10,
            'formatter': 'verbose',
        },
        'file_email': {
            'level': 'DEBUG',
            'class': 'logging.handlers.RotatingFileHandler',
            'filename': LOGS_DIR / 'shp_email.log',
            'maxBytes': 5 * 1024 * 1024,    # 5 MB
            'backupCount': 5,
            'formatter': 'verbose',
        },
    },
    'loggers': {
        # Root Django logger
        'django': {
            'handlers': ['console', 'console_prod', 'file_general'],
            'level': 'INFO',
            'propagate': False,
        },
        # Catch all unhandled 500 errors
        'django.request': {
            'handlers': ['file_errors', 'console_prod'],
            'level': 'ERROR',
            'propagate': False,
        },
        # SHP email service logger (used in core/email.py)
        'shp.email': {
            'handlers': ['console', 'file_email', 'file_errors'],
            'level': 'DEBUG',
            'propagate': False,
        },
        # SHP general app logger
        'shp': {
            'handlers': ['console', 'file_general'],
            'level': 'DEBUG',
            'propagate': False,
        },
    },
}


# ══════════════════════════════════════════════════════════════════════════════
#  §12  CORS — Cross-Origin Resource Sharing
#       Frontend (Next.js on Vercel/Cloudflare) needs cross-origin API access.
# ══════════════════════════════════════════════════════════════════════════════

_cors_allowed_raw = os.environ.get('CORS_ALLOWED_ORIGINS', '')
if _cors_allowed_raw:
    CORS_ALLOWED_ORIGINS = [o.strip() for o in _cors_allowed_raw.split(',') if o.strip()]
    CORS_ALLOW_ALL_ORIGINS = False
else:
    # Dev fallback — allow all (never ship this to prod without CORS_ALLOWED_ORIGINS set)
    CORS_ALLOW_ALL_ORIGINS = True

CORS_ALLOW_CREDENTIALS = True

CORS_ALLOW_HEADERS = [
    'accept',
    'accept-encoding',
    'authorization',
    'content-type',
    'dnt',
    'origin',
    'user-agent',
    'x-csrftoken',
    'x-requested-with',
]

CORS_ALLOW_METHODS = [
    'DELETE', 'GET', 'OPTIONS', 'PATCH', 'POST', 'PUT',
]


# ══════════════════════════════════════════════════════════════════════════════
#  §13  CSRF — Trusted Origins
#       Required for POST requests from the Next.js frontend + Email Studio.
# ══════════════════════════════════════════════════════════════════════════════

_csrf_trusted_raw = os.environ.get('CSRF_TRUSTED_ORIGINS', '')
if _csrf_trusted_raw:
    CSRF_TRUSTED_ORIGINS = [o.strip() for o in _csrf_trusted_raw.split(',') if o.strip()]
else:
    CSRF_TRUSTED_ORIGINS = [
        'http://localhost:3000',
        'http://127.0.0.1:3000',
        'http://localhost:8000',
        'http://127.0.0.1:8000',
        'http://localhost:5173',
        'http://127.0.0.1:5173',
        'https://shptechnology.online',
        'https://www.shptechnology.online',
        'https://shptech.onrender.com',
        'https://*.onrender.com',
    ]

CSRF_COOKIE_HTTPONLY = False        # Must be False for JS-based `getCookie('csrftoken')`
CSRF_COOKIE_SAMESITE = 'Lax'


# ══════════════════════════════════════════════════════════════════════════════
#  §14  DJANGO REST FRAMEWORK
# ══════════════════════════════════════════════════════════════════════════════

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',
    ],
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.SessionAuthentication',
    ],
    # Pagination — set page size globally (None = no pagination by default)
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 50,

    # Renderer
    'DEFAULT_RENDERER_CLASSES': [
        'rest_framework.renderers.JSONRenderer',
    ],

    # Parser
    'DEFAULT_PARSER_CLASSES': [
        'rest_framework.parsers.JSONParser',
        'rest_framework.parsers.FormParser',
        'rest_framework.parsers.MultiPartParser',
    ],

    # Throttling — basic rate limiting to protect public APIs
    'DEFAULT_THROTTLE_CLASSES': [
        'rest_framework.throttling.AnonRateThrottle',
        'rest_framework.throttling.UserRateThrottle',
    ],
    'DEFAULT_THROTTLE_RATES': {
        'anon': '60/min',   # 60 req/min for anonymous users
        'user': '300/min',  # 300 req/min for authenticated users
    },
}


# ══════════════════════════════════════════════════════════════════════════════
#  §15  JAZZMIN — Admin UI Customisation (Darkly theme)
#       Docs: https://django-jazzmin.readthedocs.io/
# ══════════════════════════════════════════════════════════════════════════════

JAZZMIN_SETTINGS = {
    # ── Branding ─────────────────────────────────────────────────────────────
    "site_title": "SHP Technology Admin",
    "site_header": "SHP Technology",
    "site_brand": "SHP Tech",
    "site_logo": None,                           # Add logo path relative to STATIC_ROOT
    "site_logo_classes": "img-circle",
    "site_icon": None,
    "welcome_sign": "Welcome to SHP Technology Admin Portal — Build • Automate • Grow",
    "copyright": "© SHP Technology Inc. — Jabalpur, India",

    # ── Search ───────────────────────────────────────────────────────────────
    "search_model": [
        "auth.User",
        "content.FAQ",
        "content.TeamMember",
        "content.Testimonial",
        "content.Service",
        "content.EmailLog",
    ],

    # ── Top Navigation Links ─────────────────────────────────────────────────
    "topmenu_links": [
        {"name": "Home", "url": "admin:index", "permissions": ["auth.view_user"]},
        {
            "name": "📧 Email Studio",
            "url": "/dashboard/emails/",
            "icon": "fas fa-paper-plane",
            "new_window": False,
        },
        {
            "name": "🌐 Live Site",
            "url": "https://shptechnology.online",
            "new_window": True,
        },
        {
            "name": "📋 GitHub",
            "url": "https://github.com/SHP-technology/website",
            "new_window": True,
        },
    ],

    # ── User Menu Links ──────────────────────────────────────────────────────
    "usermenu_links": [
        {
            "name": "Support",
            "url": "mailto:support@shptechnology.online",
            "icon": "fas fa-life-ring",
            "new_window": True,
        },
        {"model": "auth.user"},
    ],

    # ── Sidebar ───────────────────────────────────────────────────────────────
    "show_sidebar": True,
    "navigation_expanded": True,
    "hide_apps": [],
    "hide_models": [],

    # ── Order sidebar models ─────────────────────────────────────────────────
    "order_with_respect_to": [
        "auth",
        "content",
        "content.EmailLog",
        "content.Service",
        "content.FAQ",
        "content.TeamMember",
        "content.Testimonial",
    ],

    # ── Custom sidebar links ─────────────────────────────────────────────────
    "custom_links": {
        "content": [
            {
                "name": "Send Email",
                "url": "/dashboard/emails/",
                "icon": "fas fa-envelope-open",
                "permissions": ["content.view_emaillog"],
            },
        ],
    },

    # ── Icons (FontAwesome 5 Free) ────────────────────────────────────────────
    "icons": {
        "auth":                    "fas fa-users-cog",
        "auth.user":               "fas fa-user",
        "auth.Group":              "fas fa-users",
        "content":                 "fas fa-database",
        "content.FAQ":             "fas fa-question-circle",
        "content.TeamMember":      "fas fa-user-tie",
        "content.Testimonial":     "fas fa-comment-dots",
        "content.Service":         "fas fa-cogs",
        "content.EmailLog":        "fas fa-envelope-open-text",
    },

    "default_icon_parents": "fas fa-chevron-circle-right",
    "default_icon_children": "fas fa-circle",

    # ── Misc UI ───────────────────────────────────────────────────────────────
    "related_modal_active": True,
    "custom_css": None,
    "custom_js": None,
    "use_google_fonts_cdn": True,
    "show_ui_builder": False,            # Disable UI builder in production
    "changeform_format": "horizontal_tabs",
    "changeform_format_overrides": {
        "auth.user": "collapsible",
        "auth.group": "vertical_tabs",
    },

    # ── Language/localisation ─────────────────────────────────────────────────
    "language_chooser": False,

    # ── Theme ─────────────────────────────────────────────────────────────────
    "theme": "darkly",                   # Jazzmin built-in Darkly (Bootstrap 4 dark)
}

JAZZMIN_UI_TWEAKS = {
    "navbar_small_text": False,
    "footer_small_text": False,
    "body_small_text": False,
    "brand_small_text": False,
    "brand_colour": "navbar-primary",
    "accent": "accent-primary",
    "navbar": "navbar-dark",
    "no_navbar_border": False,
    "navbar_fixed": True,
    "layout_boxed": False,
    "footer_fixed": False,
    "sidebar_fixed": True,
    "sidebar": "sidebar-dark-primary",
    "sidebar_nav_small_text": False,
    "sidebar_disable_expand": False,
    "sidebar_nav_child_indent": True,
    "sidebar_nav_compact_style": False,
    "sidebar_nav_legacy_style": False,
    "sidebar_nav_flat_style": False,
    "theme": "darkly",
    "dark_mode_theme": "darkly",
    "button_classes": {
        "primary": "btn-primary",
        "secondary": "btn-secondary",
        "info": "btn-info",
        "warning": "btn-warning",
        "danger": "btn-danger",
        "success": "btn-success",
    },
}


# ══════════════════════════════════════════════════════════════════════════════
#  §16  RESEND EMAIL SERVICE — SHP Technology Email Infrastructure
#       Domain: shptechnology.online
#       Verify at: https://resend.com/domains to unlock company sender addresses.
#       Until verified → sandbox only (onboarding@resend.dev → founder.shp@gmail.com)
# ══════════════════════════════════════════════════════════════════════════════

RESEND_API_KEY = os.environ.get('RESEND_API_KEY', '')
RESEND_FROM_EMAIL = os.environ.get(
    'RESEND_FROM_EMAIL',
    'SHP Technology <onboarding@resend.dev>'   # Replace after domain verification
)

# ── Company email identities (configurable sender dropdown in Email Studio) ──
COMPANY_EMAIL = os.environ.get('COMPANY_EMAIL', 'hello@shptechnology.online')

COMPANY_SENDER_IDENTITIES = [
    ('hello',   'SHP Technology',          'hello@shptechnology.online'),
    ('support', 'SHP Technology Support',  'support@shptechnology.online'),
    ('sales',   'SHP Technology Sales',    'sales@shptechnology.online'),
    ('careers', 'SHP Technology Careers',  'careers@shptechnology.online'),
    ('hr',      'SHP Technology HR',       'hr@shptechnology.online'),
    ('info',    'SHP Technology Info',     'info@shptechnology.online'),
    ('admin',   'SHP Technology Admin',    'admin@shptechnology.online'),
    ('billing', 'SHP Technology Billing',  'billing@shptechnology.online'),
]

# Admin email — receives contact form leads and internal alerts
ADMIN_EMAIL = os.environ.get('ADMIN_EMAIL', 'founder.shp@gmail.com')


# ══════════════════════════════════════════════════════════════════════════════
#  §17  COMPANY PROFILE CONSTANTS
#       Used in email templates, API responses, and admin context.
# ══════════════════════════════════════════════════════════════════════════════

COMPANY_NAME         = 'SHP Technology'
COMPANY_LEGAL_NAME   = 'SHP Technology Inc.'
COMPANY_TAGLINE      = 'Build • Automate • Grow'
COMPANY_DESCRIPTION  = (
    'SHP Technology is a premier software development company. '
    'We build high-performance custom enterprise web applications, '
    'cloud architecture, microservices, and AI automation solutions '
    'for businesses globally.'
)
COMPANY_PHONE        = '+91 9301885654'
COMPANY_WHATSAPP     = '+919301885654'
COMPANY_FOUNDED      = '2019'
COMPANY_WEBSITE      = 'https://www.shptechnology.online'
COMPANY_API_URL      = 'https://api.shptechnology.online'
COMPANY_ANALYTICS_ID = 'G-NGNQ155J9K'

COMPANY_ADDRESS = {
    'line1':   '1st floor, SHP Technology, Near Underground Bridge, Madan Mahal Station',
    'city':    'Jabalpur',
    'state':   'Madhya Pradesh',
    'zip':     '482001',
    'country': 'India',
}

COMPANY_SOCIALS = {
    'linkedin':  'https://www.linkedin.com/in/shp-technology-5b8ba1430/',
    'instagram': 'https://www.instagram.com/founder.shp/',
    'facebook':  'https://www.facebook.com/profile.php?id=61593774120280',
    'twitter':   'https://twitter.com/shptech',
    'whatsapp':  'https://api.whatsapp.com/send?phone=919301885654',
    'indeed':    'https://in.indeed.com/job/senior-sales-executive-a12c481dc18fc1c2',
}

# SLA for customer support responses
COMPANY_RESPONSE_SLA = '4 business hours'
