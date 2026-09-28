import React from 'react';

interface BaseCheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Accessible label; may contain links (e.g. to the privacy policy). */
  label: React.ReactNode;
  error?: string;
  id: string;
}

/**
 * Accessible checkbox: real <input type="checkbox"> associated with its label,
 * visible focus ring, and error announced via role="alert" + aria-describedby.
 */
export const BaseCheckbox = React.forwardRef<HTMLInputElement, BaseCheckboxProps>(
  ({ label, error, id, className = '', ...props }, ref) => {
    const errorId = `${id}-error`;

    return (
      <div className="w-full flex flex-col gap-1.5">
        <div className="flex items-start gap-2.5">
          <input
            ref={ref}
            id={id}
            type="checkbox"
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? errorId : undefined}
            className={`mt-0.5 h-4 w-4 shrink-0 rounded border-surface-border text-brand-primary accent-brand-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface-main cursor-pointer ${className}`}
            {...props}
          />
          <label htmlFor={id} className="text-xs text-secondaryText leading-relaxed cursor-pointer select-none">
            {label}
          </label>
        </div>
        {error && <p id={errorId} role="alert" className="text-xs text-rose-500 font-medium">{error}</p>}
      </div>
    );
  }
);

BaseCheckbox.displayName = 'BaseCheckbox';
