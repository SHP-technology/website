import React from 'react';

interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(
  ({ label, error, helperText, className = '', id, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
    const errorId = inputId ? `${inputId}-error` : undefined;
    const helperId = inputId ? `${inputId}-helper` : undefined;
    const describedBy = error ? errorId : helperText ? helperId : undefined;

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-xs font-semibold text-primaryText tracking-wide">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={`w-full px-4 py-2.5 rounded-xl bg-surface-card border border-surface-border text-primaryText placeholder-mutedText focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 text-sm ${
            error ? 'border-rose-500 focus:ring-rose-500' : ''
          } ${className}`}
          {...props}
        />
        {error && <p id={errorId} role="alert" className="text-xs text-rose-500 font-medium">{error}</p>}
        {!error && helperText && <p id={helperId} className="text-xs text-mutedText">{helperText}</p>}
      </div>
    );
  }
);

BaseInput.displayName = 'BaseInput';
