import React from 'react';

interface BaseTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const BaseTextarea = React.forwardRef<HTMLTextAreaElement, BaseTextareaProps>(
  ({ label, error, helperText, className = '', id, rows = 4, ...props }, ref) => {
    const textareaId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label htmlFor={textareaId} className="text-xs font-semibold text-primaryText tracking-wide">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          className={`w-full px-4 py-2.5 rounded-xl bg-surface-card border border-surface-border text-primaryText placeholder-mutedText focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-200 text-sm ${
            error ? 'border-rose-500 focus:ring-rose-500' : ''
          } ${className}`}
          {...props}
        />
        {error && <p className="text-xs text-rose-500 font-medium">{error}</p>}
        {!error && helperText && <p className="text-xs text-mutedText">{helperText}</p>}
      </div>
    );
  }
);

BaseTextarea.displayName = 'BaseTextarea';
