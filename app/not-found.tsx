import Link from 'next/link';
import { BaseButton } from '@/components/common/BaseButton';

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-surface-subtle border border-surface-border mb-6">
          <span className="text-3xl font-extrabold text-brand-primary">404</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-primaryText mb-3">
          Page Not Found
        </h1>
        <p className="text-sm text-secondaryText mb-8 leading-relaxed">
          The page you are looking for doesn&apos;t exist, has been moved, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <BaseButton href="/" variant="primary" size="md">
            Back to Homepage
          </BaseButton>
          <BaseButton href="/services" variant="outline" size="md">
            Explore Services
          </BaseButton>
        </div>
      </div>
    </main>
  );
}
