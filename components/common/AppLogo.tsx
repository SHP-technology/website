import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface AppLogoProps {
  className?: string;
  showText?: boolean;
  height?: string;
}

export const AppLogo: React.FC<AppLogoProps> = ({ className = '', showText = true, height = 'h-10' }) => {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 group select-none ${className}`} aria-label="SHP Technology Home">
      <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/assets/image.webp"
          alt="SHP Technology — Software Development Company"
          width={150}
          height={60}
          priority
          className={`${height} w-auto object-contain rounded-xl shadow-sm`}
        />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className="font-extrabold text-xl tracking-tight text-primaryText group-hover:text-brand-primary transition-colors">
            SHP<span className="text-brand-primary">.</span>
          </span>
          <span className="text-[10px] font-semibold tracking-widest text-mutedText uppercase -mt-1">
            Technology
          </span>
        </div>
      )}
    </Link>
  );
};

