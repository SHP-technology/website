'use client';

import React from 'react';

export const AppBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      <div className="absolute -top-[15%] -left-[10%] w-[700px] sm:w-[900px] h-[700px] sm:h-[900px] rounded-full bg-gradient-to-br from-amber-500/30 via-yellow-400/20 to-transparent blur-[100px] animate-pulse-slow" />
      <div className="absolute top-[5%] -right-[15%] w-[650px] sm:w-[850px] h-[650px] sm:h-[850px] rounded-full bg-gradient-to-bl from-emerald-500/30 via-teal-400/20 to-transparent blur-[110px] animate-float-slow" />
      <div className="absolute top-[45%] -left-[15%] w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full bg-gradient-to-r from-cyan-500/20 via-sky-400/15 to-transparent blur-[120px] animate-pulse-slow" />
      <div className="absolute -bottom-[15%] -right-[10%] w-[700px] sm:w-[900px] h-[700px] sm:h-[900px] rounded-full bg-gradient-to-tl from-amber-500/25 via-emerald-400/20 to-transparent blur-[100px] animate-float-slow" />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-60 animate-laser-sweep" />
      <div className="absolute inset-0 bg-tech-grid opacity-100 dark:opacity-85 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_95%)]" />
      <div className="absolute inset-0 bg-dot-grid opacity-90 dark:opacity-75 [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_95%)]" />
    </div>
  );
};
