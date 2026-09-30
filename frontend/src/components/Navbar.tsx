import React, { useState } from 'react';
import { The3gsLogo } from './The3gsLogo';
import { User, Menu, X, Sun, Moon, Home, Headphones, Users, Sparkles } from 'lucide-react';

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

  const navLinks = [
    { label: 'Home', page: 'home' as const, icon: Home },
    { label: 'Episodes', page: 'episodes' as const, icon: Headphones },
    { label: 'The Coaches', page: 'coaches' as const, icon: Users },
    { label: 'Work With Us', page: 'work-with-us' as const, icon: Sparkles },
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
      id={mobile ? 'theme-toggle-btn-mobile' : 'theme-toggle-btn'}
      onClick={onToggleTheme}
      title={isDark ? 'Switch to Lite Mode' : 'Switch to Dark Mode'}
      className={`relative flex items-center gap-1 rounded-full border transition-all duration-300 cursor-pointer select-none ${
        mobile ? 'px-2 py-1 text-xs' : 'px-3 py-1.5'
      } ${
        isDark
          ? 'bg-white/5 border-white/15 hover:bg-white/10 text-white'
          : 'bg-neutral-900/8 border-neutral-300 hover:bg-neutral-100 text-neutral-800'
      }`}
    >
      {/* Track */}
      <span
        className={`relative inline-flex items-center w-8 h-4 sm:w-9 sm:h-5 rounded-full transition-colors duration-300 ${
          isDark ? 'bg-neutral-700' : 'bg-[#ff5520]'
        }`}
      >
        {/* Knob */}
        <span
          className={`absolute w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-white shadow-sm transition-all duration-300 ${
            isDark ? 'left-0.5' : 'left-[calc(100%-0.75rem-2px)] sm:left-[calc(100%-1rem-2px)]'
          }`}
        />
      </span>
      {/* Label */}
      <span className={`text-[10px] sm:text-[11px] font-bold tracking-wider uppercase leading-none whitespace-nowrap ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
        {isDark ? (
          <span className="flex items-center gap-1"><Moon className="w-3 h-3" /> Dark</span>
        ) : (
          <span className="flex items-center gap-1"><Sun className="w-3 h-3 text-[#ff5520]" /> Lite</span>
        )}
      </span>
    </button>
  );

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full backdrop-blur-md border-b transition-all duration-300 ${
          isDark
            ? 'bg-[#0c0d12]/95 border-white/10 text-white'
            : 'bg-white/95 border-neutral-200 text-neutral-900'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 py-3 flex items-center justify-between gap-2">
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
          <div className="flex items-center min-w-0">
            <button
              onClick={() => handleNavClick('home')}
              className="focus:outline-hidden cursor-pointer bg-transparent border-0 p-0 flex items-center"
            >
              <The3gsLogo isDark={isDark} />
            </button>
          </div>

          {/* Right: Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
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

          {/* Mobile: right side compact actions */}
          <div className="flex items-center gap-1.5 md:hidden flex-shrink-0">
            <ThemeToggle mobile />
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl border flex items-center justify-center transition-all cursor-pointer ${
                isDark
                  ? 'bg-white/10 hover:bg-white/15 border-white/15 text-white'
                  : 'bg-neutral-100 hover:bg-neutral-200 border-neutral-300 text-neutral-800'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#ff5520]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden border-b px-5 py-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200 ${
              isDark
                ? 'bg-[#0c0d12]/98 border-white/10 text-white'
                : 'bg-white/98 border-neutral-200 text-neutral-900 shadow-xl'
            }`}
          >
            <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 px-3 pt-1 pb-1">
              Navigation
            </div>
            {navLinks.map((item) => {
              const Icon = item.icon;
              const active = currentPage === item.page;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.page)}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-base font-semibold transition-all cursor-pointer ${
                    active
                      ? 'bg-[#ff5520] text-white shadow-md shadow-orange-500/30'
                      : isDark
                      ? 'text-neutral-200 hover:bg-white/10'
                      : 'text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${active ? 'text-white' : 'text-[#ff5520]'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}

            <div className="pt-3 border-t border-neutral-500/20 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-xl bg-[#ff5520] hover:bg-[#e04414] text-white text-sm font-black uppercase tracking-wider shadow-md shadow-orange-500/20 cursor-pointer"
              >
                Contact Us
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProfile();
                }}
                className={`w-full py-2.5 rounded-xl border flex items-center justify-center gap-2 text-sm font-semibold transition-colors cursor-pointer ${
                  isDark
                    ? 'border-white/15 bg-white/5 text-neutral-200 hover:bg-white/10'
                    : 'border-neutral-300 bg-neutral-100 text-neutral-800 hover:bg-neutral-200'
                }`}
              >
                <User className="w-4 h-4 text-[#ff5520]" />
                <span>My Account</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ── Fixed Mobile Bottom Navigation Bar ───────────────────────────────── */}
      <nav
        aria-label="Mobile Navigation"
        className={`md:hidden fixed bottom-0 left-0 right-0 z-50 px-2 py-1.5 border-t backdrop-blur-xl transition-all duration-300 ${
          isDark
            ? 'bg-[#080808]/95 border-white/10'
            : 'bg-white/95 border-neutral-200 shadow-2xl'
        }`}
        style={{ paddingBottom: 'max(0.375rem, env(safe-area-inset-bottom))' }}
      >
        <div className="flex items-center justify-around">
          {navLinks.map((item) => {
            const Icon = item.icon;
            const active = currentPage === item.page;
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.page)}
                className={`flex flex-col items-center justify-center py-1 px-3 rounded-xl transition-all cursor-pointer relative ${
                  active
                    ? 'text-[#ff5520] font-bold'
                    : isDark
                    ? 'text-neutral-400 hover:text-neutral-200'
                    : 'text-neutral-500 hover:text-neutral-800'
                }`}
              >
                <Icon className={`w-5 h-5 transition-transform ${active ? 'scale-110 stroke-[2.5]' : 'stroke-[1.8]'}`} />
                <span className="text-[10px] tracking-tight mt-1 whitespace-nowrap font-medium">
                  {item.label}
                </span>
                {active && (
                  <span className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-[#ff5520]" />
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
