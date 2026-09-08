import React from 'react';

interface SectionContainerProps {
  id?: string;
  className?: string;
  compact?: boolean;
  children: React.ReactNode;
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  className = '',
  compact = false,
  children
}) => {
  return (
    <section
      id={id}
      className={`relative z-10 ${compact ? 'py-12 md:py-16' : 'py-16 md:py-24'} ${className}`}
    >
      <div className="container">{children}</div>
    </section>
  );
};
