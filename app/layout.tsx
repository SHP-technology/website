import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { AppHeader } from '@/components/layout/AppHeader';
import { AppFooter } from '@/components/layout/AppFooter';
import { ScrollProgress } from '@/components/common/ScrollProgress';
import { BackToTop } from '@/components/common/BackToTop';
import { FloatingContactWidget } from '@/components/common/FloatingContactWidget';
import { CookieConsent } from '@/components/common/CookieConsent';
import { siteConfig } from '@/src/config/site.config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.site.url),
  title: {
    default: `${siteConfig.name} - ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  alternates: {
    canonical: '/',
  },
  keywords: [
    'software development company',
    'custom web application development',
    'cloud architecture devops',
    'AI machine learning integration',
    'Next.js SSR',
    'SHP Technology',
    'software company in Jabalpur',
    'web development Jabalpur'
  ],
  authors: [{ name: 'SHP Technology', url: siteConfig.site.url }],
  creator: 'SHP Technology',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: '/favicon.svg'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.site.url,
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.site.url}assets/image.webp`,
        width: 1254,
        height: 1254,
        alt: siteConfig.name
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    creator: '@shptech',
    images: [`${siteConfig.site.url}assets/image.webp`]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || undefined,
  }
};

import { ThemeProvider } from '@/hooks/useTheme';
import { AppBackground } from '@/components/common/AppBackground';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": `${siteConfig.site.url}#organization`,
        "name": siteConfig.name,
        "legalName": siteConfig.legalName,
        "url": siteConfig.site.url,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteConfig.site.url}assets/logo.svg`,
        },
        "image": `${siteConfig.site.url}assets/image.webp`,
        "description": siteConfig.description,
        "email": siteConfig.contact.email,
        "telephone": siteConfig.contact.phone,
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": siteConfig.officeLocation.address,
          "addressLocality": siteConfig.officeLocation.city,
          "addressRegion": siteConfig.officeLocation.state,
          "postalCode": siteConfig.officeLocation.zip,
          "addressCountry": siteConfig.officeLocation.country,
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "23.1608",
          "longitude": "79.9184"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": siteConfig.contact.phone,
          "contactType": "customer service",
          "email": siteConfig.contact.email,
          "availableLanguage": ["English", "Hindi"],
        },
        "sameAs": [
          siteConfig.socials.linkedin,
          siteConfig.socials.instagram,
          siteConfig.socials.facebook,
          siteConfig.socials.twitter,
          siteConfig.socials.github,
          siteConfig.socials.indeed
        ].filter(Boolean)
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.site.url}#website`,
        "url": siteConfig.site.url,
        "name": siteConfig.name,
        "description": siteConfig.description,
        "publisher": {
          "@id": `${siteConfig.site.url}#organization`
        },
        "inLanguage": "en-US"
      }
    ]
  };

  return (
    <html lang="en" className={`dark scroll-smooth ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
      </head>
      <body className="bg-surface-main text-primaryText transition-colors duration-300 min-h-screen flex flex-col relative" suppressHydrationWarning>
        <ThemeProvider>
          <AppBackground />
          <ScrollProgress />
          <AppHeader />
          <main className="flex-1 relative z-10">{children}</main>
          <AppFooter />
          <FloatingContactWidget />
          <BackToTop />
          <CookieConsent />
        </ThemeProvider>
        {/* AI Chatbot Script */}
        <Script
          id="mbg-ai-chatbot"
          src="https://consolewebwhatsapp.digitalmbg.com/webchat/embed.js?channelKey=qbhnLWIkmOPHhNLOpVrWWNOjX23UbTRo"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
