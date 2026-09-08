'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppLogo } from '@/components/common/AppLogo';
import { siteConfig } from '@/src/config/site.config';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const AppFooter: React.FC = () => {
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscriberEmail) return;

    setIsSubmitting(true);
    try {
      const webhookUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL;
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: subscriberEmail,
            source: 'Footer Newsletter Box',
            timestamp: new Date().toISOString()
          })
        });
      }
      setSubscribed(true);
      setSubscriberEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    } catch (err) {
      console.error('Subscription error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 pt-16 pb-12 overflow-hidden border-t border-slate-200 dark:border-slate-800">
      {/* Top Gradient Brand Accent Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-sky-400 to-amber-400" />

      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12 relative z-10">
        {/* Company Info Column */}
        <div className="lg:col-span-2 flex flex-col items-start gap-4">
          <AppLogo />
          <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm leading-relaxed">
            {siteConfig.description}
          </p>

          {/* SRE Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 mt-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
            <span>25+ Active Tech Solutions • Enterprise Open Source Builders</span>
          </div>

          {/* Quick Newsletter Box */}
          <div className="w-full max-w-sm mt-4">
            <label htmlFor="newsletter-email" className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-2 uppercase tracking-wider">
              Subscribe to Our Tech Newsletter
            </label>
            <form className="flex gap-2" onSubmit={handleSubscribe}>
              <input
                type="email"
                id="newsletter-email"
                value={subscriberEmail}
                onChange={(e) => setSubscriberEmail(e.target.value)}
                placeholder="Enter your work email"
                required
                disabled={isSubmitting}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs transition-colors shrink-0 disabled:opacity-50 flex items-center gap-1.5 cursor-pointer"
              >
                <span>{isSubmitting ? '...' : 'Subscribe'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
            {subscribed && (
              <span className="text-[11px] text-emerald-500 font-semibold block mt-1.5 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Saved to subscribers list! Thank you.
              </span>
            )}
          </div>
        </div>

        {/* Services Links */}
        <div className="flex flex-col gap-3">
          <h4 className="text-slate-900 dark:text-white text-sm font-extrabold uppercase tracking-wider mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Services
          </h4>
          <Link href="/services/enterprise-software-development" className="text-slate-600 dark:text-slate-400 hover:text-amber-500 text-sm transition-all hover:translate-x-1">Custom Enterprise Apps</Link>
          <Link href="/services/cloud-architecture-devops" className="text-slate-600 dark:text-slate-400 hover:text-amber-500 text-sm transition-all hover:translate-x-1">Cloud & Kubernetes DevOps</Link>
          <Link href="/services/ai-machine-learning-integration" className="text-slate-600 dark:text-slate-400 hover:text-amber-500 text-sm transition-all hover:translate-x-1">AI RAG & Vector Engines</Link>
          <Link href="/services/distributed-systems-modernization" className="text-slate-600 dark:text-slate-400 hover:text-amber-500 text-sm transition-all hover:translate-x-1">Microservices Architecture</Link>
          <Link href="/services/cybersecurity-compliance-audit" className="text-slate-600 dark:text-slate-400 hover:text-amber-500 text-sm transition-all hover:translate-x-1">Security & Code Compliance</Link>
        </div>

        {/* Company Links */}
        <div className="flex flex-col gap-3">
          <h4 className="text-slate-900 dark:text-white text-sm font-extrabold uppercase tracking-wider mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Company
          </h4>
          <Link href="/about" className="text-slate-600 dark:text-slate-400 hover:text-amber-500 text-sm transition-all hover:translate-x-1">About Us</Link>
          <Link href="/portfolio" className="text-slate-600 dark:text-slate-400 hover:text-amber-500 text-sm transition-all hover:translate-x-1">Case Studies</Link>
          <Link href="/demo" className="text-slate-600 dark:text-slate-400 hover:text-amber-500 text-sm transition-all hover:translate-x-1">Product Demos</Link>
          <Link href="/careers" className="text-slate-600 dark:text-slate-400 hover:text-amber-500 text-sm transition-all hover:translate-x-1">Careers & Roles</Link>
          <Link href="/contact" className="text-slate-600 dark:text-slate-400 hover:text-amber-500 text-sm transition-all hover:translate-x-1">Contact Engineering</Link>
        </div>

        {/* Social Channels */}
        <div className="flex flex-col gap-3">
          <h4 className="text-slate-900 dark:text-white text-sm font-extrabold uppercase tracking-wider mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            Social Channels
          </h4>
          <a href={siteConfig.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-emerald-500 text-sm transition-all hover:translate-x-1 flex items-center gap-2">
            <span>💬</span>
            <span>WhatsApp Chat</span>
          </a>
          <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-amber-500 text-sm transition-all hover:translate-x-1 flex items-center gap-2">
            <span>🔗</span>
            <span>LinkedIn</span>
          </a>
          <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-amber-500 text-sm transition-all hover:translate-x-1 flex items-center gap-2">
            <span>📸</span>
            <span>Instagram</span>
          </a>
          <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-amber-500 text-sm transition-all hover:translate-x-1 flex items-center gap-2">
            <span>📘</span>
            <span>Facebook</span>
          </a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="container pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href={`mailto:${siteConfig.contact.email}?subject=Privacy%20Policy%20Inquiry`} className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</a>
          <a href={`mailto:${siteConfig.contact.email}?subject=Terms%20of%20Service%20Inquiry`} className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</a>
          <a href={siteConfig.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">💬 WhatsApp</a>
        </div>
      </div>
    </footer>
  );
};
