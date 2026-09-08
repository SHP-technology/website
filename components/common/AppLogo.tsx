import React from 'react';
import Link from 'next/link';

interface AppLogoProps {
  className?: string;
  showText?: boolean;
  height?: string;
}

export const AppLogo: React.FC<AppLogoProps> = ({ className = '', showText = true, height = 'h-10' }) => {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 group select-none ${className}`} aria-label="SHP Technology Home">
      <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <img
          src="/assets/image.png"
          alt="SHP Technology — Software Development Company"
          className={`${height} w-auto object-contain rounded-xl shadow-sm`}
        />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors">
            SHP<span className="text-amber-500 dark:text-amber-400">.</span>
          </span>
          <span className="text-[10px] font-semibold tracking-widest text-slate-500 dark:text-slate-400 uppercase -mt-1">
            Technology
          </span>
        </div>
      )}
    </Link>
  );
};

