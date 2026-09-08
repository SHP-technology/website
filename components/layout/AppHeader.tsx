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
    <header className={`glass-nav sticky top-0 left-0 w-full h-[80px] z-[900] transition-all duration-300 border-b border-slate-200/80 dark:border-white/10 ${isScrolled ? 'shadow-md' : ''}`}>
      {/* Top Brand Gradient Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-amber-500 via-sky-400 to-amber-400" />

      <div className="container h-full flex items-center justify-between">
        {/* Logo Component */}
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
                    ? 'text-slate-900 dark:text-white font-bold'
                    : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-gradient-to-r from-amber-500 to-blue-600 rounded-full shadow-[0_0_8px_rgba(234,179,8,0.4)]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Controls */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <BaseButton href="/contact" variant="primary" size="sm">
            Let's Talk
            <ArrowRight className="w-4 h-4" />
          </BaseButton>
        </div>

        {/* Mobile Right Controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white bg-slate-100/80 dark:bg-slate-800/80 flex items-center justify-center cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-x-0 top-[80px] h-[calc(100vh-80px)] bg-slate-950/60 backdrop-blur-md z-[899] lg:hidden animate-fade-in-up"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-white/95 dark:bg-slate-900/95 p-6 border-b border-slate-200 dark:border-white/10 flex flex-col gap-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-bold text-slate-900 dark:text-white py-2.5 border-b border-slate-100 dark:border-slate-800/80"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3 pt-2">
              <BaseButton href="/contact" variant="primary" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                Let's Talk
              </BaseButton>
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl backdrop-blur-md bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/40 text-emerald-700 dark:text-emerald-300 font-bold text-sm transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                WhatsApp — Instant Chat
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
