'use client';

import React from 'react';

export const AppBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none opacity-40 dark:opacity-20"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface-subtle/30 to-transparent" />
    </div>
  );
};
