'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';
import { AppLogo } from '@/components/common/AppLogo';
import { BaseButton } from '@/components/common/BaseButton';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { siteConfig } from '@/src/config/site.config';

export const AppHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/portfolio' },
    { label: 'Demo', href: '/demo' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className={`sticky top-0 left-0 w-full h-[80px] z-50 bg-surface-card/90 backdrop-blur-md transition-all duration-300 border-b border-surface-border ${isScrolled ? 'shadow-lg' : ''}`}>
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-brand-accent via-brand-primary to-brand-accent" />

        <div className="container h-full flex items-center justify-between">
          <AppLogo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-semibold transition-colors py-2 relative ${
                    isActive
                      ? 'text-primaryText font-bold'
                      : 'text-secondaryText hover:text-primaryText'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-gradient-to-r from-brand-accent to-brand-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <BaseButton href="/contact" variant="primary" size="sm">
              Let's Talk
              <ArrowRight className="w-4 h-4" />
            </BaseButton>
          </div>

          {/* Mobile Actions Header Bar */}
          <div className="flex items-center gap-2 lg:hidden">
            <BaseButton href="/contact" variant="primary" size="sm" className="hidden sm:inline-flex px-3 py-1.5 text-xs font-bold shrink-0">
              Let's Talk
            </BaseButton>
            <ThemeToggle />
            <button
              type="button"
              className="w-10 h-10 rounded-xl border border-surface-border text-primaryText bg-surface-card flex items-center justify-center cursor-pointer active:scale-95 transition-transform touch-manipulation select-none shrink-0"
              aria-expanded={mobileMenuOpen}
              aria-label="Open navigation menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Fullscreen Modal - z-[99999] */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[99999] bg-surface-main text-primaryText flex flex-col lg:hidden animate-fade-in-up">
          {/* Mobile Drawer Top Header Bar */}
          <div className="h-[80px] px-4 sm:px-8 border-b border-surface-border flex items-center justify-between bg-surface-card/90 backdrop-blur-md shrink-0">
            <AppLogo />
            <div className="flex items-center gap-2.5">
              <ThemeToggle />
              <button
                type="button"
                className="w-10 h-10 rounded-xl border border-surface-border text-primaryText bg-surface-subtle flex items-center justify-center cursor-pointer active:scale-95 transition-transform touch-manipulation select-none shrink-0"
                aria-label="Close navigation menu"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile Drawer Scrollable Content */}
          <div className="flex-1 p-6 overflow-y-auto flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-6">
              <span className="text-xs font-bold uppercase tracking-wider text-mutedText px-2">Navigation</span>
              <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-xl font-bold py-3.5 px-4 rounded-2xl transition-all border-b border-surface-border/40 flex items-center justify-between touch-manipulation ${
                        isActive
                          ? 'bg-brand-primary/10 text-brand-primary border-brand-primary/30'
                          : 'text-primaryText hover:bg-surface-subtle'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="w-5 h-5 text-mutedText" />
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-2">
                <ThemeToggle showLabel className="w-full" />
              </div>
            </div>

            {/* Mobile Bottom Call-To-Actions */}
            <div className="flex flex-col gap-3 pt-6 border-t border-surface-border mt-auto">
              <BaseButton href="/contact" variant="primary" className="w-full py-4 text-base font-extrabold touch-manipulation" onClick={() => setMobileMenuOpen(false)}>
                Start Your Project Today
                <ArrowRight className="w-5 h-5 ml-1" />
              </BaseButton>
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-2xl bg-brand-primary hover:bg-brand-accent text-brand-buttonText font-bold text-sm transition-colors shadow-md touch-manipulation active:scale-95"
              >
                💬 WhatsApp — Instant Chat
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
