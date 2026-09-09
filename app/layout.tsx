import type { Metadata } from 'next';
import './globals.css';
import { AppHeader } from '@/components/layout/AppHeader';
import { AppFooter } from '@/components/layout/AppFooter';
import { ScrollProgress } from '@/components/common/ScrollProgress';
import { BackToTop } from '@/components/common/BackToTop';
import { FloatingContactWidget } from '@/components/common/FloatingContactWidget';
import { siteConfig } from '@/src/config/site.config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.site.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    'software development company',
    'custom web application development',
    'cloud architecture devops',
    'AI machine learning integration',
    'Next.js SSR',
    'SHP Technology'
  ],
  authors: [{ name: 'SHP Technology', url: siteConfig.site.url }],
  creator: 'SHP Technology',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.site.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.site.url}assets/logo.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.name
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: '@shptech'
  },
  robots: {
    index: true,
    follow: true
  }
};

import { ThemeProvider } from '@/hooks/useTheme';
import { AppBackground } from '@/components/common/AppBackground';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className="bg-surface-main text-primaryText transition-colors duration-300 min-h-screen flex flex-col relative" suppressHydrationWarning>
        <ThemeProvider>
          <AppBackground />
          <ScrollProgress />
          <AppHeader />
          <main className="flex-1 relative z-10">{children}</main>
          <AppFooter />
          <FloatingContactWidget />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
