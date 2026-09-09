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
    amber: 'bg-brand-primary/10 border-brand-primary/30 text-brand-primary',
    blue: 'bg-brand-accent/10 border-brand-accent/30 text-brand-accent',
    emerald: 'bg-brand-primary/10 border-brand-primary/30 text-brand-primary',
    slate: 'bg-surface-subtle border-surface-border text-secondaryText',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
