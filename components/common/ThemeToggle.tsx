'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', showLabel = false }) => {
  const { isDark, toggleTheme, mounted } = useTheme();

  const activeIsDark = mounted ? isDark : true;

  if (showLabel) {
    return (
      <button
        onClick={toggleTheme}
        type="button"
        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border border-surface-border bg-surface-card text-primaryText font-semibold text-sm transition-all duration-200 cursor-pointer active:scale-[0.98] touch-manipulation select-none ${className}`}
      >
        <span className="flex items-center gap-2">
          <span>Theme:</span>
          <span className="font-bold text-brand-primary">{activeIsDark ? 'Dark Mode' : 'Light Mode'}</span>
        </span>
        <div className="p-1.5 rounded-lg bg-surface-subtle border border-surface-border">
          {activeIsDark ? <Sun className="w-4 h-4 text-brand-primary" /> : <Moon className="w-4 h-4 text-brand-primary" />}
        </div>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`w-10 h-10 flex items-center justify-center rounded-xl border border-surface-border bg-surface-card text-primaryText hover:text-brand-primary hover:border-brand-primary/50 transition-all duration-200 shadow-sm cursor-pointer shrink-0 touch-manipulation select-none active:scale-90 ${className}`}
      aria-label="Toggle Theme"
      title="Toggle Light / Dark Mode"
    >
      {activeIsDark ? <Sun className="w-5 h-5 text-brand-primary" /> : <Moon className="w-5 h-5 text-brand-primary" />}
    </button>
  );
};
