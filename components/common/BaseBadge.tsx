import React from 'react';

interface BaseBadgeProps {
  variant?: 'amber' | 'blue' | 'emerald' | 'slate';
  children: React.ReactNode;
  className?: string;
}

export const BaseBadge: React.FC<BaseBadgeProps> = ({
  variant = 'amber',
  children,
  className = ''
}) => {
  const variantStyles = {
    amber: 'bg-amber-500/10 dark:bg-amber-500/15 border-amber-500/30 text-amber-600 dark:text-amber-400',
    blue: 'bg-blue-500/10 dark:bg-blue-500/15 border-blue-500/30 text-blue-600 dark:text-blue-400',
    emerald: 'bg-emerald-500/10 dark:bg-emerald-500/15 border-emerald-500/30 text-emerald-600 dark:text-emerald-400',
    slate: 'bg-slate-500/10 dark:bg-slate-500/15 border-slate-500/30 text-slate-700 dark:text-slate-300',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
