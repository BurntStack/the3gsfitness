import React, { useState } from 'react';
import {
  Play,
  Pause,
  Headphones,
  ExternalLink,
  Youtube,
  Calendar,
  Sparkles,
  ArrowRight,
  Flame,
  Instagram,
  Mic2,
  Handshake,
  Dumbbell
} from 'lucide-react';
import { REAL_EPISODES } from './EpisodesPage';
import { COACHES_DATA } from './CoachesPage';
import { PricingSection } from './PricingSection';
import { ReviewsSection } from './ReviewsSection';
import { SpotifyIcon, ApplePodcastsIcon, YouTubeIcon } from './BrandIcons';

interface HomePageProps {
  isDark?: boolean;
  onNavigate: (page: 'home' | 'episodes' | 'coaches' | 'work-with-us', genFilter?: string) => void;
  onSelectPlan?: (plan: { name: string; price: string; billing: string }) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  isDark = true,
  onNavigate,
  onSelectPlan,
}) => {
  const [activeGenLens, setActiveGenLens] = useState<'all' | 'boomer' | 'millennial' | 'genz'>('all');
  const [isPlayingLatest, setIsPlayingLatest] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement | null>(null);

  const latestEp = REAL_EPISODES[0]; // Ep. 120

  const handleToggleLatestAudio = () => {
    if (!latestEp.audioUrl) return;
    if (isPlayingLatest) {
      audioRef.current?.pause();
      setIsPlayingLatest(false);
    } else {
      const audio = new Audio(latestEp.audioUrl);
      audioRef.current = audio;
      setIsPlayingLatest(true);
      audio.play().catch(() => setIsPlayingLatest(false));
      audio.onended = () => setIsPlayingLatest(false);
    }
  };

  // Recent topics filtered by active generation lens
  const recentTopics = REAL_EPISODES.slice(1, 5).filter((ep) => {
    if (activeGenLens === 'all') return true;
    return ep.generationLens === activeGenLens || ep.generationLens === 'all';
  });

  return (
    <div
      className="transition-colors duration-500 overflow-hidden"
      style={{
        backgroundColor: isDark ? '#08090d' : '#f8f6f2',
        color: isDark ? '#ffffff' : '#111827',
      }}
    >
      {/* ── 1. Hero Section ── */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[160px] opacity-20"
            style={{ backgroundColor: '#ff5520' }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Hero Left Column (Copy & Primary CTAs) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Generation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#ff5520]/15 text-[#ff5520] border border-[#ff5520]/30 shadow-sm">
              <Flame className="w-3.5 h-3.5" />
              <span>The Only Fitness Podcast Spanning 3 Generations</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight leading-[0.95]">
              The 3Gs Fitness <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5520] via-orange-400 to-[#ff7a45]">
                Podcast.
              </span>
            </h1>

            {/* Real Taglines */}
            <p
              className="text-base sm:text-lg font-bold uppercase tracking-wide leading-snug"
              style={{ color: isDark ? '#e5e7eb' : '#1f2937' }}
            >
              Where 3 Generations of Trainers Come Together to Discuss All Things Fitness Related.
            </p>
            <p
              className="text-xs sm:text-sm font-normal max-w-xl mx-auto lg:mx-0 leading-relaxed"
              style={{ color: isDark ? '#9ca3af' : '#4b5563' }}
            >
              3 Coaches • 3 Perspectives • 3 Generations — Real talk. Real training. Old-school grit
              meets modern athletic science.
            </p>

            {/* Primary Above-The-Fold Platform Badges (Desktop & Mobile) */}
            <div className="pt-2">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-3">
                Listen & Subscribe On Your Favorite Platform:
              </span>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                {/* Apple Podcasts */}
                <a
                  href="https://podcasts.apple.com/au/podcast/the-3gs-fitness-podcast/id1745821922"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full text-xs font-black uppercase tracking-wider text-white bg-[#872ec4] hover:bg-[#7322aa] shadow-lg shadow-purple-500/20 transition-all hover:scale-105 flex items-center gap-2"
                >
                  <Headphones className="w-4 h-4" />
                  <span>Apple Podcasts</span>
                </a>

                {/* Spotify */}
                <a
                  href="https://open.spotify.com/show/74QOLPHydOpE0cOMvwtrna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full text-xs font-black uppercase tracking-wider text-black bg-[#1DB954] hover:bg-[#19a54a] shadow-lg shadow-green-500/20 transition-all hover:scale-105 flex items-center gap-2"
                >
                  <SpotifyIcon className="w-4 h-4 flex-shrink-0" />
                  <span>Spotify</span>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@The3GsFitness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full text-xs font-black uppercase tracking-wider text-white bg-[#FF0000] hover:bg-[#d60000] shadow-lg shadow-red-500/20 transition-all hover:scale-105 flex items-center gap-2"
                >
                  <YouTubeIcon variant="white-badge" className="w-4 h-4 flex-shrink-0" />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Hero Right Column (Real Behind-the-Mic Studio Desk Photo) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl group bg-neutral-950 aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="/studio/hero-studio-desk.jpg"
                alt="The 3Gs Fitness Podcast Studio - Michael, Cisco, Kael"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80" />

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#ff5520] block mb-1">
                  Authentic Studio Setup
                </span>
                <p className="font-display font-black text-xl uppercase tracking-tight">
                  Coach Michael · Coach Cisco · Coach Kael
                </p>
                <p className="text-xs text-neutral-300 font-mono mt-0.5">
                  Live behind the mics weekly since 2021
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Three Generations, One Conversation (Signature Interaction) ── */}
      <section className="py-20 border-t border-neutral-500/10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#ff5520]/10 text-[#ff5520] border border-[#ff5520]/20 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              The Core Differentiator
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight">
              Three Generations, <br />
              One Conversation.
            </h2>
            <p
              className="text-xs sm:text-sm mt-2 font-normal"
              style={{ color: isDark ? '#9ca3af' : '#4b5563' }}
            >
              This isn't three interchangeable hosts. It's a Boomer, a Millennial, and a Gen-Z trainer
              genuinely disagreeing and comparing notes on the same iron questions.
            </p>
          </div>

          {/* Signature Generation Filter Toggle */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                id: 'boomer',
                coach: COACHES_DATA[0],
                label: 'The Boomer Lens',
                tag: 'Old School Grit',
              },
              {
                id: 'millennial',
                coach: COACHES_DATA[1],
                label: 'The Millennial Lens',
                tag: 'The Bridge Between Eras',
              },
              {
                id: 'genz',
                coach: COACHES_DATA[2],
                label: 'The Gen Z Lens',
                tag: 'Innovation & Mindset',
              },
            ].map(({ id, coach, label, tag }) => {
              const active = activeGenLens === id;
              return (
                <div
                  key={id}
                  onClick={() => setActiveGenLens(active ? 'all' : (id as any))}
                  className={`p-6 rounded-3xl border text-left transition-all cursor-pointer ${
                    active
                      ? 'bg-[#ff5520]/10 border-[#ff5520] shadow-lg shadow-orange-500/15 scale-[1.02]'
                      : isDark
                      ? 'bg-neutral-900/60 hover:bg-neutral-900 border-white/10'
                      : 'bg-white hover:bg-neutral-50 border-neutral-200 shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={coach.image}
                      alt={coach.name}
                      className="w-14 h-14 rounded-2xl object-cover object-top border border-[#ff5520]/30 shadow-md"
                    />
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#ff5520]">
                        {tag}
                      </span>
                      <h3 className="font-display font-black text-lg uppercase tracking-tight">
                        {coach.name}
                      </h3>
                      <p className="text-xs text-neutral-400">{label}</p>
                    </div>
                  </div>
                  <p
                    className="text-xs leading-relaxed italic line-clamp-3"
                    style={{ color: isDark ? '#d1d5db' : '#374151' }}
                  >
                    "{coach.bio}"
                  </p>
                  <div className="mt-4 pt-3 border-t border-neutral-500/10 flex items-center justify-between text-xs font-bold text-[#ff5520]">
                    <span>{active ? 'Lens Active · Click to Clear' : 'Explore Coach Angle'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. Latest Episode Embed Preview ── */}
      <section className="py-16 border-t border-neutral-500/10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`p-6 sm:p-10 lg:p-12 rounded-[36px] border ${
            isDark
              ? 'bg-gradient-to-br from-neutral-900 via-neutral-900/80 to-neutral-950 border-white/10 shadow-2xl'
              : 'bg-white border-neutral-200 shadow-xl'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Artwork / Icon */}
            <div className="lg:col-span-4 relative group">
              <div className="aspect-square rounded-3xl overflow-hidden bg-neutral-950 border border-white/10 shadow-xl relative">
                <img
                  src="/blog/3gs-blog-cover.jpg"
                  alt="The 3Gs Latest Episode"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button
                    onClick={handleToggleLatestAudio}
                    className="w-16 h-16 rounded-full bg-[#ff5520] hover:bg-[#e04412] text-white flex items-center justify-center shadow-xl transition-transform hover:scale-110 cursor-pointer"
                    title={isPlayingLatest ? 'Pause Episode' : 'Play Episode'}
                  >
                    {isPlayingLatest ? (
                      <Pause className="w-7 h-7" />
                    ) : (
                      <Play className="w-7 h-7 fill-current translate-x-0.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Episode Details */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#ff5520]/15 text-[#ff5520] border border-[#ff5520]/30">
                  Latest Weekly Release
                </span>
                <span className="text-xs text-neutral-400 font-mono">
                  Episode {latestEp.episodeNumber} · {latestEp.date}
                </span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight leading-tight">
                {latestEp.title}
              </h3>

              <p
                className="text-xs sm:text-sm leading-relaxed"
                style={{ color: isDark ? '#d1d5db' : '#374151' }}
              >
                {latestEp.summary}
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href={latestEp.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-[#1DB954] hover:bg-[#19a54a] transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <SpotifyIcon className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Full Episode on Spotify</span>
                </a>
                <a
                  href={latestEp.appleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#872ec4] hover:bg-[#7322aa] transition-all flex items-center gap-1.5 shadow-sm"
                >
                  <ApplePodcastsIcon className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Apple Podcasts</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Recent Topics Catalog ── */}
      <section className="py-20 border-t border-neutral-500/10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff5520] block mb-1">
                Raw Debates & Guest Deep-Dives
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight">
                Recent Show Topics
              </h2>
            </div>
            <button
              onClick={() => onNavigate('episodes')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ff5520] hover:underline cursor-pointer"
            >
              <span>See All 120+ Episodes</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentTopics.map((ep) => (
              <div
                key={ep.id}
                onClick={() => onNavigate('episodes')}
                className={`p-6 rounded-3xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 cursor-pointer ${
                  isDark
                    ? 'bg-neutral-900/60 hover:bg-neutral-900 border-white/10'
                    : 'bg-white hover:bg-neutral-50 border-neutral-200 shadow-md'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                    <span className="text-[#ff5520] font-black uppercase">Ep. {ep.episodeNumber}</span>
                    <span>{ep.date}</span>
                  </div>
                  <h4 className="font-display font-black text-lg uppercase tracking-tight line-clamp-2">
                    {ep.title}
                  </h4>
                  <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed">
                    {ep.summary}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-neutral-500/10 flex items-center justify-between text-xs font-bold text-[#ff5520]">
                  <span>Listen on Library</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Membership Plans & Passes ── */}
      <PricingSection onSelectPlan={onSelectPlan || (() => {})} isDark={isDark} />

      {/* ── 6. Client & Listener Reviews ── */}
      <ReviewsSection isDark={isDark} />

      {/* ── 7. Where To Listen & Honest Stats ── */}
      <section className="py-20 border-t border-neutral-500/10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`p-8 sm:p-12 rounded-[36px] border text-center space-y-8 ${
            isDark ? 'bg-neutral-950 border-white/10 text-white' : 'bg-neutral-900 border-neutral-800 text-white shadow-2xl'
          }`}
        >
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#ff5520]">
              Built On Real Consistency
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight">
              Where To Listen
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-normal">
              Weekly episodes drop every Sunday. Stream on your preferred platform or watch full episodes on YouTube.
            </p>
          </div>

          {/* Real Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-2">
            {[
              { num: '2021', label: 'Channel Launch' },
              { num: 'Weekly', label: 'Sunday Releases' },
              { num: '120+', label: 'Indexed Episodes' },
              { num: '230+', label: 'Videos & Shorts' },
            ].map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="font-display font-black text-2xl sm:text-3xl text-[#ff5520] block">
                  {stat.num}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-bold block mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Platform Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="https://podcasts.apple.com/au/podcast/the-3gs-fitness-podcast/id1745821922"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider text-white bg-[#872ec4] hover:bg-[#7322aa] shadow-md transition-all hover:scale-105"
            >
              Apple Podcasts
            </a>
            <a
              href="https://open.spotify.com/show/74QOLPHydOpE0cOMvwtrna"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider text-black bg-[#1DB954] hover:bg-[#19a54a] shadow-md transition-all hover:scale-105"
            >
              Spotify
            </a>
            <a
              href="https://www.youtube.com/@The3GsFitness"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider text-white bg-[#FF0000] hover:bg-[#d60000] shadow-md transition-all hover:scale-105"
            >
              YouTube Channel
            </a>
          </div>
        </div>
      </section>

      {/* ── 6. Follow The Show (Instagram Reel Thumbnails Grid) ── */}
      <section className="py-20 border-t border-neutral-500/10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff5520] block mb-1">
                Social Community
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight">
                Follow The Show
              </h2>
            </div>
            <a
              href="https://www.instagram.com/the3gsfitness/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider text-white bg-[#ff5520] hover:bg-[#e04412] shadow-sm transition-all hover:scale-105"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow @the3gsfitness</span>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              {
                title: 'Coach Mike vs Weed Smokers',
                ep: 'EP. 118',
                tag: 'Reel Highlight',
                link: 'https://www.instagram.com/the3gsfitness/',
              },
              {
                title: 'Was Robert Torres Right?',
                ep: 'EP. 119',
                tag: 'Sports Massage Debate',
                link: 'https://www.instagram.com/the3gsfitness/',
              },
              {
                title: 'Body Positivity or Ignoring Health?',
                ep: 'EP. 120',
                tag: 'Mindset Round-Table',
                link: 'https://www.instagram.com/the3gsfitness/',
              },
              {
                title: 'Whiteboard Q&A: Real Answers',
                ep: 'EP. 115',
                tag: 'Coaches On The Spot',
                link: 'https://www.instagram.com/the3gsfitness/',
              },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5] bg-neutral-900 p-5 flex flex-col justify-between shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-[#ff5520]/20 text-[#ff5520] font-black uppercase text-[10px]">
                    {item.ep}
                  </span>
                  <Instagram className="w-4 h-4 text-neutral-400 group-hover:text-[#ff5520] transition-colors" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block mb-1">
                    {item.tag}
                  </span>
                  <h4 className="font-display font-black text-base sm:text-lg uppercase text-white leading-tight">
                    {item.title}
                  </h4>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Work With Us Closing Section ── */}
      <section className="py-20 border-t border-neutral-500/10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`p-8 sm:p-12 rounded-[36px] border ${
            isDark ? 'bg-neutral-900/60 border-white/10' : 'bg-white border-neutral-200 shadow-xl'
          }`}
        >
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-[#ff5520]">
              Beyond Listening
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight">
              Work With The 3Gs
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-normal">
              Whether you want to appear as a guest, sponsor the broadcast, or get coached directly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div
              onClick={() => onNavigate('work-with-us')}
              className="p-6 rounded-3xl border border-neutral-500/15 hover:border-[#ff5520] transition-colors cursor-pointer space-y-3"
            >
              <Mic2 className="w-6 h-6 text-[#ff5520]" />
              <h4 className="font-display font-black text-lg uppercase tracking-tight">
                Pitch To Be A Guest
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Have a sports medicine background, athletic accolade, or controversial fitness angle?
              </p>
            </div>

            <div
              onClick={() => onNavigate('work-with-us')}
              className="p-6 rounded-3xl border border-neutral-500/15 hover:border-[#ff5520] transition-colors cursor-pointer space-y-3"
            >
              <Handshake className="w-6 h-6 text-[#ff5520]" />
              <h4 className="font-display font-black text-lg uppercase tracking-tight">
                Partner / Sponsor
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Connect your fitness brand or performance tool to our engaged weekly listeners.
              </p>
            </div>

            <div
              onClick={() => onNavigate('work-with-us')}
              className="p-6 rounded-3xl border border-neutral-500/15 hover:border-[#ff5520] transition-colors cursor-pointer space-y-3"
            >
              <Dumbbell className="w-6 h-6 text-[#ff5520]" />
              <h4 className="font-display font-black text-lg uppercase tracking-tight">
                Train With A Coach
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Inquire directly for 1-on-1 coaching with Coach Michael, Cisco, or Kael.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
