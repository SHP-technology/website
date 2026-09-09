import React from 'react';
import Link from 'next/link';

interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'amber';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const BaseButton: React.FC<BaseButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus:outline-none active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5 shadow-sm',
    md: 'px-5 py-2.5 text-sm gap-2 shadow-md',
    lg: 'px-7 py-3.5 text-base gap-2.5 shadow-lg',
  };

  const variantStyles = {
    primary: 'bg-brand-primary hover:bg-brand-accent text-brand-buttonText font-extrabold shadow-yellow-glow',
    amber: 'bg-brand-primary hover:bg-brand-accent text-brand-buttonText font-extrabold shadow-yellow-glow',
    secondary: 'bg-brand-accent hover:bg-brand-primary text-brand-buttonText font-extrabold shadow-sky-glow',
    outline: 'border-2 border-surface-border text-primaryText hover:border-brand-primary hover:text-brand-primary bg-transparent',
    ghost: 'text-secondaryText hover:bg-surface-subtle hover:text-primaryText',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
