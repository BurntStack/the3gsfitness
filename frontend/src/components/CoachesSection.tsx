import React from 'react';
import { Instagram, ExternalLink, Zap, Flame, Shield, ArrowUpRight } from 'lucide-react';

interface CoachesSectionProps {
  onOpenVideo?: () => void;
  onExploreCoaches?: () => void;
  onOpenContact?: () => void;
  isDark?: boolean;
}

interface Coach {
  id: string;
  name: string;
  generation: string;
  generationSub: string;
  role: string;
  image: string;
  bio: string;
  highlight: string;
  postUrl: string;
  icon: typeof Shield;
  colorScheme: {
    badgeBg: string;
    badgeText: string;
    borderHover: string;
    accent: string;
  };
}

const coaches: Coach[] = [
  {
    id: 'mike',
    name: 'Coach Mike',
    generation: 'The Boomer',
    generationSub: 'Decades of Iron & Grit',
    role: 'Co-Owner & Master Strength Coach',
    image: '/coaches/coach-mike.jpg',
    bio: 'Old school grit with timeless wisdom. Mike brings decades of training experience and real-life perspective to every session. The guy who’s done it all and still outlifts half the gym.',
    highlight: 'Classic Heavy Iron • Longevity • Foundational Strength',
    postUrl: 'https://www.instagram.com/p/DQDgleckXj_/',
    icon: Shield,
    colorScheme: {
      badgeBg: 'bg-amber-500/10 text-amber-600 border-amber-500/20',
      badgeText: 'text-amber-500',
      borderHover: 'hover:border-amber-500/40',
      accent: '#d97706',
    },
  },
  {
    id: 'cisco',
    name: 'Coach Cisco',
    generation: 'The Millennial',
    generationSub: 'Bridging Old & New School',
    role: 'Co-Owner & Athletic Performance Coach',
    image: '/coaches/coach-cisco.jpg',
    bio: 'Known for his infectious energy and quick wit. Cisco brings real-world insight to every session, seamlessly bridging the gap between old-school discipline and modern athletic science.',
    highlight: 'Functional Power • High-Energy Conditioning • Dynamic Agility',
    postUrl: 'https://www.instagram.com/p/DQDe9MvEaoU/',
    icon: Zap,
    colorScheme: {
      badgeBg: 'bg-[#ff5520]/10 text-[#ff5520] border-[#ff5520]/20',
      badgeText: 'text-[#ff5520]',
      borderHover: 'hover:border-[#ff5520]/40',
      accent: '#ff5520',
    },
  },
  {
    id: 'kael',
    name: 'Coach Kael',
    generation: 'Gen Z (Zillennial)',
    generationSub: 'Innovation & Limitless Mindset',
    role: 'Co-Owner & Athletic Development Coach',
    image: '/coaches/coach-kael.jpg',
    bio: 'Born between two generations, Kael embodies the balance of innovation and discipline — Gen Z energy with Millennial mindset. He brings passion, purpose, and perspective, constantly challenging athletes to grow beyond limits — mentally, physically, and spiritually.',
    highlight: 'Cutting-Edge Protocols • Mindset & Purpose • Kinetic Mobility',
    postUrl: 'https://www.instagram.com/p/DQDfEdRkeIX/',
    icon: Flame,
    colorScheme: {
      badgeBg: 'bg-rose-500/10 text-rose-600 border-rose-500/20',
      badgeText: 'text-rose-500',
      borderHover: 'hover:border-rose-500/40',
      accent: '#e11d48',
    },
  },
];

export const CoachesSection: React.FC<CoachesSectionProps> = ({
  onExploreCoaches,
  onOpenContact,
}) => {
  return (
    <section id="coaches" className="relative w-full py-20 md:py-28 bg-[#fafafa] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neutral-200/50 rounded-full blur-3xl pointer-events-none -z-0"></div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 text-white text-[11px] font-bold uppercase tracking-wider mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#ff5520] animate-pulse"></span>
              The 3 Generations of Fitness
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-neutral-900 uppercase tracking-tight leading-[1.05]">
              Meet The <span className="text-[#ff5520]">Owners & Coaches</span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-neutral-600 leading-relaxed font-normal">
              Three distinct generations united by one shared obsession: unlocking raw human potential. Experience decades of old-school grit combined with modern athletic science and unstoppable energy.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://www.instagram.com/the3gsfitness/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-800 text-xs font-bold tracking-wider uppercase transition-all shadow-xs hover:shadow cursor-pointer"
            >
              <Instagram className="w-4 h-4 text-[#ff5520]" />
              Follow on Instagram
            </a>
          </div>
        </div>

        {/* 3 Featured Coaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {coaches.map((coach) => {
            const IconComponent = coach.icon;
            return (
              <div
                key={coach.id}
                className="group relative bg-white rounded-[32px] overflow-hidden border border-neutral-200/80 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Top Coach Portrait Container */}
                  <div className="relative aspect-[4/4] sm:aspect-[4/4.2] overflow-hidden bg-neutral-900">
                    <img
                      src={coach.image}
                      alt={`${coach.name} - ${coach.generation}`}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Overlay for Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-85 group-hover:opacity-75 transition-opacity"></div>

                    {/* Top Generation Pill Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black tracking-wider uppercase border backdrop-blur-md bg-black/60 text-white border-white/20 shadow-lg">
                        <IconComponent className="w-3.5 h-3.5 text-[#ff5520]" />
                        {coach.generation}
                      </span>
                    </div>

                    {/* Instagram Post Link Button */}
                    <a
                      href={coach.postUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View on Instagram"
                      aria-label={`View ${coach.name} post on Instagram`}
                      className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-[#ff5520] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-110 shadow-lg"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>

                    {/* Bottom Info on Image */}
                    <div className="absolute bottom-4 left-5 right-5 z-10 text-white">
                      <p className="text-[11px] font-semibold text-orange-400 uppercase tracking-widest mb-0.5">
                        {coach.generationSub}
                      </p>
                      <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
                        {coach.name}
                      </h3>
                      <p className="text-xs text-neutral-300 font-medium">
                        {coach.role}
                      </p>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    {/* Bio Quote */}
                    <p className="text-xs sm:text-[13px] leading-relaxed text-neutral-600 font-normal">
                      "{coach.bio}"
                    </p>

                    {/* Specialization Pill */}
                    <div className="pt-2 border-t border-neutral-100">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400 mb-1">
                        Core Focus
                      </span>
                      <p className="text-xs font-semibold text-neutral-800">
                        {coach.highlight}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 sm:p-7 pt-0 flex items-center gap-3">
                  <button
                    onClick={onOpenContact}
                    className="flex-1 py-3 rounded-full bg-neutral-900 hover:bg-[#ff5520] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm hover:shadow-md cursor-pointer text-center"
                  >
                    Train With {coach.name.replace('Coach ', '')}
                  </button>
                  <a
                    href={coach.postUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-neutral-200 hover:border-[#ff5520] text-neutral-600 hover:text-[#ff5520] flex items-center justify-center transition-colors shrink-0"
                    title="View Instagram Feature"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Strip */}
        <div className="mt-14 sm:mt-16 rounded-[28px] bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 p-6 sm:p-8 md:p-10 border border-neutral-800 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-[11px] font-bold text-[#ff5520] uppercase tracking-wider">
              Ready to break barriers?
            </span>
            <h4 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight">
              Get coached directly by the 3Gs founders
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-xl">
              Whether you need old-school strength wisdom or modern high-performance coaching, our owners work with you 1-on-1.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenContact}
              className="px-8 py-3.5 rounded-full bg-[#ff5520] hover:bg-[#e64614] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-orange-500/25 transition-all cursor-pointer"
            >
              Book 1-on-1 Consultation
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
