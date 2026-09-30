import React, { useState } from 'react';
import { The3gsLogo } from './The3gsLogo';
import { User, Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  onOpenProfile: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
  currentPage?: 'home' | 'episodes' | 'coaches' | 'work-with-us';
  onNavigate?: (page: 'home' | 'episodes' | 'coaches' | 'work-with-us') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  onOpenProfile,
  isDark,
  onToggleTheme,
  currentPage = 'home',
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: 'home' | 'episodes' | 'coaches' | 'work-with-us' }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Episodes', page: 'episodes' },
    { label: 'The Coaches', page: 'coaches' },
    { label: 'Work With Us', page: 'work-with-us' },
  ];

  const handleNavClick = (page: 'home' | 'episodes' | 'coaches' | 'work-with-us') => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(page);
    }
  };

  /* ── Theme toggle pill ── */
  const ThemeToggle = ({ mobile = false }: { mobile?: boolean }) => (
    <button
      id="theme-toggle-btn"
      onClick={onToggleTheme}
      title={isDark ? 'Switch to Lite Mode' : 'Switch to Dark Mode'}
      className={`relative flex items-center gap-1 rounded-full border transition-all duration-300 cursor-pointer select-none ${
        mobile ? 'px-3 py-1.5 text-xs' : 'px-3 py-1.5'
      } ${
        isDark
          ? 'bg-white/5 border-white/15 hover:bg-white/10 text-white'
          : 'bg-neutral-900/8 border-neutral-300 hover:bg-neutral-100 text-neutral-800'
      }`}
    >
      {/* Track */}
      <span
        className={`relative inline-flex items-center w-9 h-5 rounded-full transition-colors duration-300 ${
          isDark ? 'bg-neutral-700' : 'bg-[#ff5520]'
        }`}
      >
        {/* Knob */}
        <span
          className={`absolute w-3.5 h-3.5 rounded-full bg-white shadow-sm transition-all duration-300 ${
            isDark ? 'left-0.5' : 'left-[calc(100%-1rem-2px)]'
          }`}
        />
      </span>
      {/* Label */}
      <span className={`text-[11px] font-bold tracking-wider uppercase leading-none whitespace-nowrap ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
        {isDark ? (
          <span className="flex items-center gap-1"><Moon className="w-3 h-3" /> Dark</span>
        ) : (
          <span className="flex items-center gap-1"><Sun className="w-3 h-3 text-[#ff5520]" /> Lite</span>
        )}
      </span>
    </button>
  );

  return (
    <header
      className={`sticky top-0 z-40 w-full backdrop-blur-md border-b transition-all duration-300 ${
        isDark
          ? 'bg-[#0c0d12]/95 border-white/10 text-white'
          : 'bg-white/95 border-neutral-200 text-neutral-900'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-3.5 flex items-center justify-between">
        {/* Left Nav items (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.page)}
              className={`text-sm font-medium transition-colors hover:text-[#ff5520] cursor-pointer ${
                currentPage === item.page
                  ? isDark ? 'text-white font-bold' : 'text-neutral-900 font-bold'
                  : isDark ? 'text-neutral-400' : 'text-neutral-500'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Center: Brand Logo */}
        <div className="flex items-center justify-center">
          <button
            onClick={() => handleNavClick('home')}
            className="focus:outline-hidden cursor-pointer bg-transparent border-0 p-0"
          >
            <The3gsLogo isDark={isDark} />
          </button>
        </div>

        {/* Right: Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Dark / Lite Mode Toggle */}
          <ThemeToggle />

          <button
            onClick={onOpenContact}
            className="px-6 py-2.5 rounded-full bg-[#ff5520] hover:bg-[#e04414] text-white text-xs font-semibold tracking-wide transition-all shadow-md shadow-orange-500/20 active:scale-98 cursor-pointer"
          >
            Contact Us
          </button>

          <button
            onClick={onOpenProfile}
            aria-label="User Account"
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors cursor-pointer hover:text-white hover:border-[#ff5520] hover:bg-[#ff5520]/10 ${
              isDark ? 'border-white/20 text-neutral-300' : 'border-neutral-300 text-neutral-600'
            }`}
          >
            <User className="w-4 h-4 stroke-[2.2]" />
          </button>
        </div>

        {/* Mobile: right side buttons */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle mobile />
          <button
            onClick={onOpenProfile}
            aria-label="User Account"
            className={`w-8 h-8 rounded-full border flex items-center justify-center ${
              isDark ? 'border-white/20 text-white' : 'border-neutral-300 text-neutral-700'
            }`}
          >
            <User className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-1.5 rounded-lg transition-colors ${
              isDark ? 'text-white hover:bg-white/10' : 'text-neutral-800 hover:bg-neutral-100'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b px-6 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200 ${
            isDark
              ? 'bg-[#0c0d12] border-white/10'
              : 'bg-white border-neutral-200'
          }`}
        >
          {navLinks.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.page)}
              className={`block w-full text-left py-2 text-base font-medium cursor-pointer ${
                currentPage === item.page
                  ? 'text-[#ff5520] font-semibold'
                  : isDark ? 'text-neutral-300' : 'text-neutral-600'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-neutral-200/30">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 rounded-full bg-[#ff5520] text-white text-sm font-semibold tracking-wide cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
