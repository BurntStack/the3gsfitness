import React from 'react';

interface LogoProps {
  className?: string;
  textClassName?: string;
  isDark?: boolean;
}

export const The3gsLogo: React.FC<LogoProps> = ({
  className = 'h-8 sm:h-9',
  textClassName,
  isDark = false,
}) => {
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none group max-w-full ${className}`}>
      {/* The 3GS Metallic Logo Image */}
      <img
        src="/logo.png"
        alt="the3gsfitness logo"
        className="h-7 sm:h-8 md:h-9 w-auto object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
      />
      {/* Brand Name Typography */}
      <span
        className={`font-display text-lg sm:text-xl md:text-2xl font-black tracking-tight uppercase transition-colors whitespace-nowrap overflow-hidden text-ellipsis ${
          isDark ? 'text-white' : 'text-neutral-900'
        } ${textClassName || ''}`}
      >
        the<span className="text-[#ff5520]">3</span>gsfitness
      </span>
    </div>
  );
};

export const MuraLogo = The3gsLogo;
