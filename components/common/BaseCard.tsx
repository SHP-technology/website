import React from 'react';

interface BaseCardProps {
  className?: string;
  glass?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export const BaseCard: React.FC<BaseCardProps> = ({
  className = '',
  glass = true,
  children,
  onClick
}) => {
  const glassClasses = glass
    ? 'glass-card border border-surface-border shadow-lg hover:shadow-brand-primary/10'
    : 'bg-surface-card border border-surface-border rounded-2xl shadow-md';

  return (
    <div
      onClick={onClick}
      className={`p-6 transition-all duration-300 ${glassClasses} ${className}`}
    >
      {children}
    </div>
  );
};
