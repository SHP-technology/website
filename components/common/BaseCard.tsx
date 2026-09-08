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
    ? 'glass-card border border-slate-200/80 dark:border-slate-800/80 shadow-lg hover:shadow-amber-500/10'
    : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-md';

  return (
    <div
      onClick={onClick}
      className={`p-6 transition-all duration-300 ${glassClasses} ${className}`}
    >
      {children}
    </div>
  );
};
