import React from 'react';
import {
  ArrowLeft,
  Users,
  Instagram,
  Mail,
  MessageSquare,
  Sparkles,
  Play,
  ArrowRight,
  ShieldAlert,
  Flame
} from 'lucide-react';

interface CoachesPageProps {
  isDark?: boolean;
  onBackToHome?: () => void;
  onTrainWithCoach?: (coachId: 'mike' | 'cisco' | 'kael') => void;
  onSelectEpisode?: (epId: string) => void;
}

interface FullCoachProfile {
  id: 'mike' | 'cisco' | 'kael';
  name: string;
  generation: string;
  generationSub: string;
  role: string;
  image: string;
  bio: string;
  corePhilosophy: string;
  contactEmail: string;
  contactNote: string;
  instagram: string;
  instagramUrl: string;
  featuredEpisodes: {
    epNumber: number;
    title: string;
    hook: string;
    link: string;
  }[];
}

export const COACHES_DATA: FullCoachProfile[] = [
  {
    id: 'mike',
    name: 'Coach Michael',
    generation: 'The Boomer',
    generationSub: 'Old School Strength Wisdom',
    role: 'Co-Host · Master Strength Coach',
    image: '/coaches/michael-portrait-hd.jpg',
    bio: "Old school grit with timeless wisdom. Mike brings decades of training experience and real life perspective to every episode. The guy who's done it all and still outlifts half the gym.",
    corePhilosophy:
      'Consistency and heavy compound discipline triumph over every passing fad. Master the basics, respect recovery, and build strength that lasts into your sixties and seventies.',
    contactEmail: 'michael@michaelfulcherfitness.com',
    contactNote: 'Direct 1-on-1 coaching inquiry for Coach Mike',
    instagram: '@michaelfulcherfitness',
    instagramUrl: 'https://www.instagram.com/the3gsfitness/',
    featuredEpisodes: [
      {
        epNumber: 118,
        title: 'Coach Mike vs Weed Smokers',
        hook: 'Old school discipline vs modern cannabis habits in athletic training.',
        link: 'https://open.spotify.com/show/74QOLPHydOpE0cOMvwtrna',
      },
      {
        epNumber: 113,
        title: 'Why Are We Still Obese With More Info Than Ever?',
        hook: 'Mike challenges the digital fitness bubble with hard reality statistics.',
        link: 'https://open.spotify.com/show/74QOLPHydOpE0cOMvwtrna',
      },
      {
        epNumber: 111,
        title: 'How to Get Jacked Like a Prisoner',
        hook: 'High-volume calisthenics & progressive bodyweight grit without fancy gym gear.',
        link: 'https://open.spotify.com/show/74QOLPHydOpE0cOMvwtrna',
      },
    ],
  },
  {
    id: 'cisco',
    name: 'Coach Cisco',
    generation: 'The Millennial',
    generationSub: 'The Bridge Between Eras',
    role: 'Co-Host · High-Performance Coach',
    image: '/coaches/cisco-portrait-hd.jpg',
    bio: 'Known for his energy and quick wit. Cisco brings real world insight to every episode, bridging the gap between old school and new school.',
    corePhilosophy:
      'Melding old-school grind with modern biomechanics and movement science. Training should enhance your life, boost athletic agility, and prevent burnout.',
    contactEmail: 'cisco@the3gsfitness.com',
    contactNote: 'Direct 1-on-1 coaching inquiry for Coach Cisco (separate inbox)',
    instagram: '@the3gsfitness',
    instagramUrl: 'https://www.instagram.com/the3gsfitness/',
    featuredEpisodes: [
      {
        epNumber: 119,
        title: "Sports Massage & Recovery ft. Robert Torres",
        hook: 'Bridging high-intensity training with professional soft-tissue therapy.',
        link: 'https://open.spotify.com/show/74QOLPHydOpE0cOMvwtrna',
      },
      {
        epNumber: 19,
        title: 'Old School Lifters vs New School Gym Rats',
        hook: 'Cisco breaks down why modern gym culture lost the raw spirit of lifting.',
        link: 'https://open.spotify.com/show/74QOLPHydOpE0cOMvwtrna',
      },
      {
        epNumber: 114,
        title: 'Want a Celebrity Physique? What It Really Takes',
        hook: 'Deconstructing Hollywood workout splits and the truth about aesthetic transformations.',
        link: 'https://open.spotify.com/show/74QOLPHydOpE0cOMvwtrna',
      },
    ],
  },
  {
    id: 'kael',
    name: 'Coach Kael',
    generation: 'The Gen Z (Zillennial)',
    generationSub: 'Innovation & Modern Mindset',
    role: 'Co-Host · Performance & Conditioning',
    image: '/coaches/kael-portrait-hd.jpg',
    bio: 'Born between two generations, Kael embodies the balance of innovation and discipline — Gen Z energy with Millennial mindset. He brings passion, purpose, and perspective to every conversation, constantly challenging others to grow beyond limits — mentally, physically, and spiritually.',
    corePhilosophy:
      'Holistic modern athletic development: balancing physical output with mental resilience, nervous system recovery, and generational awareness.',
    contactEmail: 'kael@the3gsfitness.com',
    contactNote: 'Direct 1-on-1 coaching inquiry for Coach Kael (separate inbox)',
    instagram: '@the3gsfitness',
    instagramUrl: 'https://www.instagram.com/the3gsfitness/',
    featuredEpisodes: [
      {
        epNumber: 118,
        title: 'Does Weed Help or Hurt Your Fitness?',
        hook: 'Kael presents the Gen-Z research and lifestyle perspective on cannabis and athletics.',
        link: 'https://open.spotify.com/show/74QOLPHydOpE0cOMvwtrna',
      },
      {
        epNumber: 115,
        title: 'Whiteboard Q&A: Raw Uncut Answers',
        hook: 'Kael on the spot addressing youth training culture and mental stamina.',
        link: 'https://open.spotify.com/show/74QOLPHydOpE0cOMvwtrna',
      },
      {
        epNumber: 109,
        title: 'Why Gym Rats Struggle With Pilates ft. Carleen Dinh',
        hook: 'Exploring mobility, reformer core control, and movement versatility.',
        link: 'https://open.spotify.com/show/74QOLPHydOpE0cOMvwtrna',
      },
    ],
  },
];

export const CoachesPage: React.FC<CoachesPageProps> = ({
  isDark = true,
  onBackToHome,
  onTrainWithCoach,
  onSelectEpisode,
}) => {
  return (
    <div
      className="min-h-screen pt-28 sm:pt-36 pb-24 transition-colors duration-500"
      style={{
        backgroundColor: isDark ? '#08090d' : '#f8f6f2',
        color: isDark ? '#ffffff' : '#111827',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Header */}
        <div className="space-y-4">
          {onBackToHome && (
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-[#ff5520] hover:text-white bg-[#ff5520]/10 hover:bg-[#ff5520] border border-[#ff5520]/20 transition-all cursor-pointer shadow-sm group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </button>
          )}

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#ff5520]/10 text-[#ff5520] border border-[#ff5520]/20 mb-3">
              <Users className="w-3.5 h-3.5" />
              The Hosts Behind The Show
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight">
              Meet The 3 Coaches
            </h1>
            <p
              className="text-sm sm:text-base mt-2 font-normal leading-relaxed"
              style={{ color: isDark ? '#9ca3af' : '#4b5563' }}
            >
              Three real trainers, three distinct generations, arguing and comparing notes on the same iron questions.
              Not an agency creation—three working coaches with authentic lived perspectives.
            </p>
          </div>
        </div>

        {/* 3 Full Individual Profiles */}
        <div className="space-y-16">
          {COACHES_DATA.map((coach, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={coach.id}
                id={`coach-${coach.id}`}
                className={`rounded-[36px] border p-6 sm:p-10 lg:p-12 transition-all ${
                  isDark
                    ? 'bg-neutral-900/60 border-white/10 shadow-2xl'
                    : 'bg-white border-neutral-200/90 shadow-xl'
                }`}
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Portrait Column */}
                  <div
                    className={`lg:col-span-5 relative group ${
                      isReversed ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-neutral-950 border border-white/10 shadow-2xl">
                      <img
                        src={coach.image}
                        alt={`${coach.name} - ${coach.generation}`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                      {/* Pill Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-black/80 text-white border border-white/20 backdrop-blur-md shadow-lg">
                          <Flame className="w-3.5 h-3.5 text-[#ff5520]" />
                          {coach.generation}
                        </span>
                      </div>

                      {/* Social Link */}
                      <a
                        href={coach.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 hover:bg-[#ff5520] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-110 shadow-lg"
                        title="View Instagram"
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Bio & Details Column */}
                  <div
                    className={`lg:col-span-7 space-y-6 ${
                      isReversed ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    {/* Header */}
                    <div>
                      <span className="text-xs font-black uppercase tracking-widest text-[#ff5520] block mb-1">
                        {coach.generationSub}
                      </span>
                      <h2
                        className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight"
                        style={{ color: isDark ? '#ffffff' : '#0f172a' }}
                      >
                        {coach.name}
                      </h2>
                      <p className="text-xs font-semibold text-neutral-400 mt-1 uppercase tracking-wide">
                        {coach.role}
                      </p>
                    </div>

                    {/* Bio */}
                    <div
                      className="text-sm sm:text-base leading-relaxed space-y-3 font-normal"
                      style={{ color: isDark ? '#d1d5db' : '#374151' }}
                    >
                      <p className="italic font-medium">"{coach.bio}"</p>
                      <p className="text-xs sm:text-sm text-neutral-400">
                        <strong>Coaching Philosophy:</strong> {coach.corePhilosophy}
                      </p>
                    </div>

                    {/* Distinct Contact Path (Fixing the shared-email bug) */}
                    <div
                      className={`p-4 rounded-2xl border text-xs ${
                        isDark
                          ? 'bg-neutral-950/80 border-white/10 text-neutral-300'
                          : 'bg-neutral-50 border-neutral-200 text-neutral-700'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-1.5 font-bold text-[#ff5520] uppercase tracking-wider text-[11px]">
                        <Mail className="w-3.5 h-3.5" />
                        <span>Dedicated 1-on-1 Contact Channel</span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <span className="font-mono text-xs">{coach.contactEmail}</span>
                        <span className="text-[10px] text-neutral-400 uppercase tracking-wide">
                          {coach.contactNote}
                        </span>
                      </div>
                    </div>

                    {/* Featured in Episodes Strip */}
                    <div className="space-y-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">
                        Featured Episodes & Debates:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {coach.featuredEpisodes.map((feat) => (
                          <div
                            key={feat.epNumber}
                            className={`p-3 rounded-xl border text-left flex flex-col justify-between ${
                              isDark
                                ? 'bg-neutral-800/50 border-white/5'
                                : 'bg-neutral-50 border-neutral-200/80'
                            }`}
                          >
                            <div>
                              <span className="text-[10px] font-mono text-[#ff5520] font-black uppercase">
                                Ep. {feat.epNumber}
                              </span>
                              <p className="font-bold text-xs uppercase line-clamp-1 mt-0.5">
                                {feat.title}
                              </p>
                              <p className="text-[11px] text-neutral-400 line-clamp-2 mt-1 leading-snug">
                                {feat.hook}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => onTrainWithCoach && onTrainWithCoach(coach.id)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider text-white bg-[#ff5520] hover:bg-[#e04412] shadow-lg shadow-orange-500/25 transition-all hover:scale-105 cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Inquire To Train With {coach.name.replace('Coach ', '')}</span>
                      </button>

                      <a
                        href={coach.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${
                          isDark
                            ? 'border-white/15 text-neutral-300 hover:text-white hover:bg-white/5'
                            : 'border-neutral-300 text-neutral-700 hover:bg-neutral-100 shadow-sm'
                        }`}
                      >
                        <Instagram className="w-4 h-4 text-[#ff5520]" />
                        <span>Follow on Instagram</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
