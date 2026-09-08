# Comprehensive Repository Scrutiny & Architectural Breakdown (`mind.md`)
**Repository:** `SHP Technology — Main Website` (`/home/reak/git/shp/main_website`)  
**Generated On:** 2026-09-08  
**Tech Stack:** Vue 3 (Composition API) + TypeScript + Vite + Tailwind CSS + Django REST Framework Backend

---

## 1. Executive Summary & Architecture Overview

The **SHP Technology Main Website** repository is structured as a decoupled full-stack web application designed for high performance, modern UI aesthetics, dynamic content delivery, and search engine optimization (SEO).

```
 ┌─────────────────────────────────────────────────────────┐
 │                   Frontend App (Vue 3)                  │
 │   Vite + TypeScript + Tailwind CSS + Vue Router 4       │
 └────────────────────────────┬────────────────────────────┘
                              │ API Calls (fetch with retries + fallbacks)
                              ▼
 ┌─────────────────────────────────────────────────────────┐
 │             Backend API (Django REST Framework)         │
 │     SQLite / PostgreSQL + Gunicorn + Render Hosting     │
 └─────────────────────────────────────────────────────────┘
```

### Key Architectural Characteristics
- **Hybrid Data Strategy:** High reliability fallback mechanism. If the Django REST API is unreachable, the frontend seamlessly falls back to static TypeScript data files without breaking the UX.
- **Dynamic SEO System:** Integrated via `useSeoMeta.ts` composable providing reactive Meta tags, OpenGraph properties, Twitter Cards, Canonical links, and JSON-LD Structured Data per route.
- **Design System:** Utility-first design using Tailwind CSS supplemented by tokenized CSS variables (`src/assets/styles/tokens.css`) supporting Dark/Light mode theme toggling.
- **Modular Component Hierarchy:** Decoupled into `layout/`, `sections/`, `forms/`, and `common/` design tokens.

---

## 2. Directory Structure Map

```
main_website/
├── backend/                    # Django REST Framework backend API
│   ├── content/                # Content app (FAQs, Team, Testimonials, Services models)
│   ├── core/                   # Django core settings, WSGI, main URL routing
│   ├── db.sqlite3              # Local SQLite database
│   ├── deploy.sh               # Backend deployment shell script
│   └── manage.py               # Django management script
├── public/                     # Static assets & SEO configuration
│   ├── _redirects              # SPA routing rules for static hosts
│   ├── sitemap.xml             # Search engine sitemap
│   ├── robots.txt              # Crawler directives
│   └── assets/                 # SVGs, images, logos
├── src/                        # Vue 3 Frontend source code
│   ├── App.vue                 # Root Application Component
│   ├── main.ts                 # Application entry point
│   ├── assets/                 # Global styles & CSS tokens
│   ├── components/             # Reusable UI component library
│   │   ├── common/             # Atomic design tokens (Buttons, Inputs, Modals)
│   │   ├── forms/              # Reactive input forms with validation
│   │   ├── layout/             # Header, Footer, Section containers
│   │   └── sections/           # Feature & Marketing page sections
│   ├── config/                 # Site configuration & business metadata
│   ├── composables/            # Reusable business logic (SEO, Theme, Analytics)
│   ├── data/                   # Static fallback typescript datasets
│   ├── router/                 # Vue Router configuration
│   ├── services/               # HTTP client & API integration
│   └── views/                  # Page views / Route components
├── vercel.json                 # Vercel deployment configuration
├── render.yaml                 # Render infrastructure deployment blueprint
├── wrangler.toml               # Cloudflare Pages / Workers config
├── vite.config.ts              # Vite bundle builder config
├── tailwind.config.js          # Tailwind CSS theme extension & plugins
├── tsconfig.json               # TypeScript compiler config
└── package.json                # Node dependencies & npm scripts
```

---

## 3. Frontend Routes & Views Breakdown (`src/views/`)

| Route Path | View Component (`src/views/`) | Description & Included Sections |
| :--- | :--- | :--- |
| `/` | `Home.vue` | Main landing page featuring `HeroSection`, `TrustSection`, `ServicesGrid`, `MethodologySection`, `TechStackSection`, `PortfolioSection`, `TestimonialsSection`, and `CtaBanner`. |
| `/about` | `About.vue` | Company story, mission, values, leadership team grid, and `CompanyTimeline`. |
| `/services` | `Services.vue` | Service overview, detailed offerings grid, value proposition, and `ServiceEstimator` interactive tool. |
| `/services/:slug` | `ServiceDetail.vue` | Dynamic service page based on URL parameter (`slug`), rendering features, tech stack, and inquiry modal. |
| `/portfolio` | `Portfolio.vue` | Project showcase filtered by industry/technology stack with case study preview cards. |
| `/portfolio/:slug` | `CaseStudy.vue` | Dynamic case study details including problem statement, architecture solution, key features, and results metrics. |
| `/careers` | `Careers.vue` | Culture overview, perks, open positions listing via `CareersOverview`, and company culture highlights. |
| `/careers/:slug` | `JobDetail.vue` | Detailed job description, requirements, responsibilities, and integrated `JobApplyForm`. |
| `/demo` | `Demo.vue` | Request product demo page with embedded interactive `DemoRequestForm`. |
| `/contact` | `Contact.vue` | Contact details, office locations, SLA response guarantees, direct email/phone contacts, and `ContactForm`. |
| `/*` | `Home.vue` (Redirect) | Catch-all wildcard redirecting any unknown route back to `/`. |

---

## 4. Component Architecture Scrutiny (`src/components/`)

### 4.1 Layout Components (`src/components/layout/`)
- **`AppHeader.vue`**: Responsive navigation header with active route highlighting, mobile drawer menu, logo, theme toggle button, and CTA links.
- **`AppFooter.vue`**: Universal footer featuring company branding, navigation sitemap links, social media channels, contact information, and copyright legal disclaimers.
- **`SectionContainer.vue`**: Layout wrapper ensuring standard max-widths (`max-w-7xl`), responsive padding, and structural section tags across pages.

### 4.2 Marketing & Page Sections (`src/components/sections/`)
- **`HeroSection.vue`**: Eye-catching animated headline, value sub-headline, primary/secondary action buttons, and background glow graphics.
- **`TrustSection.vue`**: Metrics highlights (150+ Clients, 80+ Projects, 50+ Automations) and trust proof elements.
- **`ServicesGrid.vue`**: Service cards displaying enterprise web development, cloud solutions, mobile app development, and AI automation.
- **`TechStackSection.vue`**: Interactive grid of technical capabilities categorizing Frontend, Backend, Cloud, Databases, and DevOps tooling.
- **`MethodologySection.vue`**: Step-by-step development process workflow (Discovery → Design → Development → QA → Deployment → Support).
- **`PortfolioSection.vue`**: Filterable portfolio showcase cards highlighting client success stories and project outcomes.
- **`TestimonialsSection.vue`**: Rating cards featuring client reviews, avatar images, roles, and testimonials with fallback data binding.
- **`CompanyTimeline.vue`**: Chronological milestone timeline detailing SHP Technology's growth trajectory since 2019.
- **`CareersOverview.vue`**: Listing of available career roles with quick-apply capabilities.
- **`ServiceEstimator.vue`**: Interactive calculator allowing potential clients to select project scope and receive instant estimated budgets.
- **`CtaBanner.vue`**: Reusable call-to-action banner promoting contact and consultation requests.

### 4.3 Forms & Inputs (`src/components/forms/`)
- **`ContactForm.vue`**: Form with fields for Name, Email, Phone, Project Budget, and Message, connected to `useFormValidation.ts`.
- **`DemoRequestForm.vue`**: Targeted booking form for scheduling technical demo sessions.
- **`JobApplyForm.vue`**: Recruitment application form supporting resume URL/details submission.

### 4.4 Common Atomic Design Elements (`src/components/common/`)
- **`BaseButton.vue`**: Standardized button component supporting variants (`primary`, `secondary`, `outline`, `ghost`) and sizes.
- **`BaseInput.vue`**: Reusable input text component with validation error messaging.
- **`BaseTextarea.vue`**: Multiline text input area component.
- **`BaseSelect.vue`**: Dropdown select component.
- **`BaseCard.vue`**: Card component with subtle glassmorphism borders and hover elevation effects.
- **`BaseModal.vue`**: Accessible overlay modal dialog with backdrop blur and escape key handlers.
- **`BaseBadge.vue`**: Status/category badge tags.
- **`BaseToast.vue`**: Notification alert system.
- **`FaqAccordion.vue`**: Collapsible FAQ accordion component supporting active index toggling.
- **`ScrollProgress.vue`**: Page scroll progress indicator bar fixed at the top of the viewport.
- **`ThemeToggle.vue`**: Sun/Moon theme switcher button.
- **`BackToTop.vue`**: Floating button allowing users to smoothly scroll back to top.
- **`AppLogo.vue`**: Brand SVG logo component.

---

## 5. Composables & State Management (`src/composables/`)

| Composable | Functionality | Key Exports / APIs |
| :--- | :--- | :--- |
| **`useTheme.ts`** | Manages light/dark mode preference in `localStorage` and toggles the `.dark` class on `document.documentElement`. | `theme`, `toggleTheme`, `isDark` |
| **`useSeoMeta.ts`** | Dynamically injects document title, meta descriptions, canonical URLs, OpenGraph tags, Twitter Card tags, and JSON-LD schema into `<head>`. | `updateSeoMeta(config)` |
| **`useAnalytics.ts`** | Integrates Google Analytics (GA4 ID: `G-NGNQ155J9K`) tracking event logs and page view navigation. | `trackEvent(category, action, label)` |
| **`useFormValidation.ts`** | Provides reactive validation logic for email formatting, required fields, minimum character lengths, and phone number formats. | `errors`, `validateField`, `validateForm` |

---

## 6. Business Data & Configuration Layer

### 6.1 Site Configuration (`src/config/site.config.ts`)
Houses central company metadata:
- **Legal Entity:** SHP Technology Inc.
- **Headquarters:** Madan Mahal Station, Jabalpur, MP & Remote Global.
- **Metrics:** 150+ Clients, 80+ Projects, 50+ Automations, 20+ Industries.
- **Core Leadership & Team:**
  - Harsh Patel (Founder)
  - Sandesh Patel (Co-Founder & Head of Full-Stack Development)
  - Prachi Dabar (Sales Manager)
  - Shivam Patel (Full-Stack Developer)
  - Mohit Verma (Sales Lead)
  - Aparna Verma (Operations Manager)
- **Contact Info & Socials:** Phone, Email, SLA (4 business hours), LinkedIn, Instagram, Facebook, Twitter, Indeed.

### 6.2 Data Models & TypeScript Fallbacks (`src/data/`)
- `company.ts`: Re-exports company configuration.
- `services.ts`: Catalog of software engineering services and technical specs.
- `portfolio.ts`: Case studies database with client details and project tech stacks.
- `jobs.ts`: Career openings dataset with job requirements and benefits.
- `testimonials.ts`: Client reviews and ratings.
- `techStack.ts`: Categorized list of technical frameworks and languages.

---

## 7. API Integration Layer (`src/services/api.ts`)

The frontend interacts with the API service via resilient wrapper functions:
- **Base URL:** `import.meta.env.VITE_API_BASE_URL` (Defaults to `https://shptech.onrender.com/api` in production or `http://127.0.0.1:8000/api` in local development).
- **Fetch With Retry Pattern:** `fetchWithRetry(url, retries=2, delayMs=1500)` ensures transient network glitches do not crash data fetching.
- **API Interfaces:**
  - `fetchFaqs(fallback)`: Calls `/api/faqs/`
  - `fetchTeamMembers(fallback)`: Calls `/api/team/`
  - `fetchTestimonials(fallback)`: Calls `/api/testimonials/`

---

## 8. Backend Architecture (Django REST Framework) (`backend/`)

The backend is built with Django & DRF to manage dynamic website content.

### 8.1 Django Content Models (`backend/content/models.py`)
- **`FAQ`**: `question`, `answer`, `category`, `order`, `is_active`
- **`TeamMember`**: `name`, `initials`, `role`, `bio`, `photo_url`, `linkedin_url`, `github_url`, `order`, `is_active`
- **`Testimonial`**: `name`, `role`, `company`, `quote`, `avatar`, `rating`, `order`, `is_active`
- **`Service`**: `title`, `slug`, `tagline`, `description`, `icon`, `price`, `order`, `is_active`

### 8.2 Endpoints Map (`backend/content/urls.py` & `backend/core/urls.py`)
- `GET /api/faqs/` — List active FAQs sorted by display order.
- `GET /api/team/` — List active team members.
- `GET /api/testimonials/` — List client testimonials.
- `GET /api/services/` — List services offerings.
- `/admin/` — Django Administration portal for content managers.

---

## 9. Infrastructure & Deployment Files

- **`vercel.json`**: Configures clean rewrite rules for Vue SPA history mode routing (`source: "/(.*)", destination: "/index.html"`).
- **`render.yaml`**: Infrastructure-as-code specification for hosting Django backend on Render cloud platform.
- **`wrangler.toml`**: Cloudflare integration setting up SPA fallback redirects.
- **`google-sheets-script.js`**: Serverless script for syncing website form submissions directly into Google Sheets.

---

## 10. Summary Table of Key Repository Files

| File Path | Primary Function |
| :--- | :--- |
| [`src/App.vue`](file:///home/reak/git/shp/main_website/src/App.vue) | Top-level Vue shell mounting Header, RouterView, ScrollProgress, BackToTop, and Footer. |
| [`src/router/index.ts`](file:///home/reak/git/shp/main_website/src/router/index.ts) | Defines client-side routes, lazy-loaded route views, and smooth scroll restoration. |
| [`src/config/site.config.ts`](file:///home/reak/git/shp/main_website/src/config/site.config.ts) | Central source of truth for business parameters, team info, contact details, and metadata. |
| [`src/services/api.ts`](file:///home/reak/git/shp/main_website/src/services/api.ts) | Resilient HTTP API layer connecting Vue frontend to Django backend. |
| [`backend/content/models.py`](file:///home/reak/git/shp/main_website/backend/content/models.py) | Django database schemas for FAQs, Team Members, Testimonials, and Services. |
| [`mind.md`](file:///home/reak/git/shp/main_website/mind.md) | **This Document:** Comprehensive architectural map and structural breakdown. |
