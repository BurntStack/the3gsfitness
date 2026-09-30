import React, { useState, useEffect } from 'react';
import { Play, ArrowRight, Instagram, Sparkles, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenVideo: () => void;
  onExploreMore: () => void;
  isDark?: boolean;
}

interface HeroSlide {
  id: string;
  name: string;
  generation: string;
  exercise: string;
  image: string;
  postUrl: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 'mike',
    name: 'Coach Mike',
    generation: 'The Boomer',
    exercise: 'Preacher Barbell Curls',
    image: '/hero/hero_visual_1.jpg',
    postUrl: 'https://www.instagram.com/p/DMtLperhXtu/?img_index=3',
  },
  {
    id: 'cisco',
    name: 'Coach Cisco',
    generation: 'The Millennial',
    exercise: 'Heavy Iron Barbell Conditioning',
    image: '/hero/hero_visual_2.jpg',
    postUrl: 'https://www.instagram.com/p/DN9OFrCEmw_/?img_index=3',
  },
  {
    id: 'kael',
    name: 'Coach Kael',
    generation: 'Gen Z (Zillennial)',
    exercise: 'Lat Pulldown & Kinetic Power',
    image: '/hero/hero_visual_3.jpg',
    postUrl: 'https://www.instagram.com/p/C52IuMkvuqy/?img_index=2',
  },
];

// Rounded Hexagon SVG Component matching the exact reference geometry
const RoundedHexagon: React.FC<{
  className?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
}> = ({ className = '', fill = '#ff5520', stroke, strokeWidth }) => (
  <svg
    viewBox="0 0 400 480"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M175 35 Q200 20 225 35 L365 118 Q385 130 385 155 L385 325 Q385 350 365 362 L225 445 Q200 460 175 445 L35 362 Q15 350 15 325 L15 155 Q15 130 35 118 Z"
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  </svg>
);

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenVideo, onExploreMore, isDark = true }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Auto-cycle through the 3 real Instagram post photos every 5.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = heroSlides[activeSlideIndex];

  const scrollToCoaches = () => {
    const el = document.getElementById('coaches');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // ── Unified Hero layout dynamically adapting to isDark (Lite / Dark) ──
  return (
    <section
      id="home"
      className={`relative w-full min-h-screen overflow-hidden flex flex-col transition-colors duration-400 ${
        isDark ? 'bg-[#080808] text-white' : 'bg-[#faf8f5] text-neutral-900'
      }`}
    >
      {/* ── BACKGROUND TYPOGRAPHY: 3Gs in subtle tint behind athlete ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-[1] overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          <span
            className="bg-3g-text font-display font-black leading-none tracking-tighter absolute left-[-5%] whitespace-nowrap"
            style={{
              fontSize: 'clamp(120px, 35vw, 600px)',
              color: isDark ? 'rgba(255, 140, 55, 0.12)' : 'rgba(255, 85, 32, 0.06)',
            }}
          >
            3G
          </span>
          <span
            className="bg-3g-text font-display font-black leading-none tracking-tighter absolute right-[-5%] whitespace-nowrap"
            style={{
              fontSize: 'clamp(120px, 35vw, 600px)',
              color: isDark ? 'rgba(255, 140, 55, 0.12)' : 'rgba(255, 85, 32, 0.06)',
            }}
          >
            S
          </span>
          <div
            className={`absolute inset-0 bg-gradient-to-r ${
              isDark ? 'from-[#080808]/70' : 'from-[#faf8f5]/80'
            } via-transparent to-transparent`}
          />
        </div>
      </div>

      {/* ── BG: Deep radial vignette overlay ── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 80% 90% at 50% 60%, transparent 30%, #080808 85%)'
            : 'radial-gradient(ellipse 80% 90% at 50% 60%, transparent 40%, #faf8f5 85%)',
        }}
      />

      {/* ── ATHLETE IMAGE: Physically IN FRONT of 3Gs, behind content ── */}
      <div className="absolute inset-0 flex items-end justify-end z-[3] pointer-events-none overflow-hidden">
        {/* Soft ambient glow under athlete feet */}
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[300px] rounded-full blur-[100px]"
          style={{
            background: isDark
              ? 'radial-gradient(ellipse, rgba(255,85,32,0.15) 0%, transparent 70%)'
              : 'radial-gradient(ellipse, rgba(255,85,32,0.10) 0%, transparent 70%)',
          }}
        />
        <img
          src="/hero/new-dark-athlete.png"
          alt="Athlete — The 3Gs Fitness"
          className="relative h-[44vh] md:h-[80vh] max-h-[750px] w-auto object-contain object-bottom md:object-right-bottom select-none mb-0 md:mb-4 lg:mb-6 mr-0 md:mr-8 lg:mr-12 opacity-35 md:opacity-100 translate-x-0 md:-translate-x-[10%]"
          style={{
            filter: isDark
              ? 'drop-shadow(-20px 30px 45px rgba(0,0,0,0.85)) contrast(1.06) brightness(1.02)'
              : 'drop-shadow(0 20px 35px rgba(0,0,0,0.15)) contrast(1.04) brightness(1.02)',
            imageRendering: '-webkit-optimize-contrast',
          }}
        />
      </div>

      {/* ── CONTENT LAYER ── */}
      <div className="relative z-[10] flex flex-col md:justify-between flex-1 px-6 md:px-14 lg:px-20 pb-12 md:pb-24 pt-8 md:pt-12">
        {/* Top spacer */}
        <div className="hidden md:block" />

        {/* Bottom: two-column layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 md:mt-auto">
          {/* Bottom-Left: Headline + CTAs */}
          <div className="max-w-md space-y-5">
            <div className="space-y-0">
              <h1
                className={`font-display font-black uppercase leading-[0.95] ${
                  isDark ? 'text-white' : 'text-neutral-900'
                }`}
                style={{ fontSize: 'clamp(34px, 9vw, 80px)' }}
              >
                TRAIN INSANE
              </h1>
              <h1
                className="font-display font-black uppercase leading-[0.95] text-[#ff5520] drop-shadow-[0_4px_20px_rgba(255,85,32,0.4)]"
                style={{ fontSize: 'clamp(34px, 9vw, 80px)' }}
              >
                OR REMAIN
              </h1>
              <h1
                className={`font-display font-black uppercase leading-[0.95] ${
                  isDark ? 'text-white' : 'text-neutral-900'
                }`}
                style={{ fontSize: 'clamp(34px, 9vw, 80px)' }}
              >
                THE SAME!
              </h1>
            </div>

            <p
              className={`text-sm md:text-base leading-relaxed max-w-sm ${
                isDark ? 'text-neutral-400' : 'text-neutral-600'
              }`}
            >
              Join The 3Gs Fitness and experience world-class training with three generations of expert coaching. Unlock your potential, break your limits.
            </p>

            <div className="flex flex-row gap-3 pt-1 w-full max-w-[400px]">
              <button
                onClick={onExploreMore}
                className="flex-1 px-2 sm:px-7 py-3.5 rounded-none bg-[#ff5520] hover:bg-[#e04414] text-white text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 active:scale-98 transition-all cursor-pointer text-center"
              >
                SEE PLANS
              </button>
              <button
                onClick={scrollToCoaches}
                className={`flex-1 px-2 sm:px-7 py-3.5 rounded-none border text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] transition-all cursor-pointer text-center ${
                  isDark
                    ? 'border-white/25 hover:border-white/60 bg-white/5 hover:bg-white/10 text-white'
                    : 'border-neutral-300 hover:border-neutral-500 bg-neutral-900/5 hover:bg-neutral-900/10 text-neutral-800'
                }`}
              >
                OUR COACHES
              </button>
            </div>
          </div>

          {/* Bottom-Right: Stats + Reviews */}
          <div className="flex flex-col gap-6">
            {/* Stats row */}
            <div className="flex items-center gap-8 md:gap-10">
              {[
                { value: '3+', label: 'Coaches' },
                { value: '500+', label: 'Members' },
                { value: '5+', label: 'Years Active' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className={`animate-stat-glow font-display font-black text-3xl md:text-4xl leading-none ${
                      isDark ? 'text-white' : 'text-neutral-900'
                    }`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-neutral-500 uppercase tracking-widest font-semibold mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Founder avatars + rating */}
            <div
              onClick={scrollToCoaches}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 cursor-pointer transition-all hover:-translate-y-0.5 ${
                isDark
                  ? 'bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 text-white'
                  : 'bg-white/85 hover:bg-white border border-neutral-200/80 shadow-lg shadow-neutral-200/50 backdrop-blur-sm text-neutral-900'
              }`}
            >
              <div className="flex -space-x-2.5">
                {[
                  { src: '/coaches/coach-mike.jpg', alt: 'Coach Mike' },
                  { src: '/coaches/coach-cisco.jpg', alt: 'Coach Cisco' },
                  { src: '/coaches/coach-kael.jpg', alt: 'Coach Kael' },
                ].map((c) => (
                  <img
                    key={c.alt}
                    src={c.src}
                    alt={c.alt}
                    className={`w-9 h-9 rounded-full ring-2 object-cover ${
                      isDark ? 'ring-[#080808]' : 'ring-white'
                    }`}
                  />
                ))}
              </div>
              <div>
                {/* Stars */}
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg
                      key={s}
                      className="w-3 h-3 text-[#ff5520]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p
                  className={`text-[11px] font-medium mt-0.5 ${
                    isDark ? 'text-neutral-400' : 'text-neutral-600'
                  }`}
                >
                  500+ 5-Star Reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t ${
          isDark ? 'from-[#080808]' : 'from-[#faf8f5]'
        } to-transparent z-[5] pointer-events-none`}
      />
    </section>
  );
};
