import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  Headphones,
  ExternalLink,
  Youtube,
  Sparkles,
  ArrowRight,
  Flame,
  Instagram,
  Mic2,
  Handshake,
  Dumbbell,
  Volume2,
  VolumeX,
  Clock,
  Calendar,
  Share2
} from 'lucide-react';
import { REAL_EPISODES } from './EpisodesPage';
import { COACHES_DATA } from './CoachesPage';
import { SpotifyIcon, ApplePodcastsIcon, YouTubeIcon } from './BrandIcons';

interface PodcastSectionsProps {
  isDark?: boolean;
  onNavigate: (page: 'home' | 'episodes' | 'coaches' | 'work-with-us', filter?: string) => void;
}

// ── 1. Three Generations, One Conversation ───────────────────────
export const ThreeGenerationsSection: React.FC<{
  isDark?: boolean;
  onNavigate: (page: 'home' | 'episodes' | 'coaches' | 'work-with-us', filter?: string) => void;
}> = ({ isDark = true, onNavigate }) => {
  const [activeGenLens, setActiveGenLens] = useState<'all' | 'boomer' | 'millennial' | 'genz'>('all');

  const generationCards = [
    {
      id: 'boomer' as const,
      coach: COACHES_DATA[0],
      lensName: 'The Boomer Lens',
      tagline: 'Old School Grit',
      subheading: 'Decades of Iron Discipline',
      verbatimHook:
        "Old school grit with timeless wisdom. Mike brings decades of training experience and real life perspective to every episode. The guy who's done it all and still outlifts half the gym.",
      coreQuote: 'Compound discipline triumph over every passing fad. Master the basics.',
      accentColor: '#f97316',
    },
    {
      id: 'millennial' as const,
      coach: COACHES_DATA[1],
      lensName: 'The Millennial Lens',
      tagline: 'The Bridge Between Eras',
      subheading: 'High Energy & Movement Science',
      verbatimHook:
        'Known for his energy and quick wit. Cisco brings real world insight to every episode, bridging the gap between old school and new school.',
      coreQuote: 'Melding old-school grind with modern biomechanics and athletic agility.',
      accentColor: '#ff5520',
    },
    {
      id: 'genz' as const,
      coach: COACHES_DATA[2],
      lensName: 'The Gen Z Lens',
      tagline: 'Innovation & Mindset',
      subheading: 'Zillennial Drive & Mental Stamina',
      verbatimHook:
        'Born between two generations, Kael embodies the balance of innovation and discipline — Gen Z energy with Millennial mindset. He brings passion, purpose, and perspective to every conversation.',
      coreQuote: 'Challenging others to grow beyond limits — mentally, physically, and spiritually.',
      accentColor: '#fb923c',
    },
  ];

  return (
    <section className="py-12 sm:py-14 border-t border-neutral-500/10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div className="max-w-2xl space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-[#ff5520]/15 text-[#ff5520] border border-[#ff5520]/30 shadow-sm">
              <Sparkles className="w-3 h-3" />
              <span>The Core Differentiator</span>
            </div>
            <h2
              className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight leading-[1.05]"
              style={{ color: isDark ? '#ffffff' : '#111827' }}
            >
              Three Generations, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5520] via-orange-400 to-[#ff7a45]">
                One Conversation.
              </span>
            </h2>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: isDark ? '#9ca3af' : '#4b5563' }}
            >
              This isn't three interchangeable hosts reading the same script. It's a Boomer, a Millennial,
              and a Gen-Z trainer genuinely disagreeing, testing myths, and comparing real coaching notes
              across 50+ combined years on the gym floor.
            </p>
          </div>

          {/* Signature Generation Filter Toggle Pills */}
          <div
            className={`flex items-center p-1.5 rounded-2xl border self-start md:self-end transition-colors ${
              isDark
                ? 'bg-black/50 border-white/10'
                : 'bg-neutral-200/90 border-neutral-300 shadow-inner'
            }`}
          >
            {[
              { id: 'all', label: 'All 3' },
              { id: 'boomer', label: 'Boomer' },
              { id: 'millennial', label: 'Millennial' },
              { id: 'genz', label: 'Gen-Z' },
            ].map(({ id, label }) => {
              const active = activeGenLens === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveGenLens(id as any)}
                  className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                    active
                      ? 'bg-[#ff5520] text-white shadow-md'
                      : isDark
                      ? 'text-neutral-400 hover:text-white'
                      : 'text-neutral-700 hover:text-neutral-950 font-bold'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3 Generation Cards with Verbatim Bio Hooks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {generationCards.map((card) => {
            const isSelected = activeGenLens === card.id || activeGenLens === 'all';
            return (
              <div
                key={card.id}
                onClick={() => setActiveGenLens(card.id)}
                className={`relative rounded-3xl p-7 border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? isDark
                      ? 'bg-gradient-to-b from-neutral-900 to-neutral-950 border-[#ff5520]/50 shadow-2xl shadow-orange-500/10 scale-[1.01]'
                      : 'bg-white border-[#ff5520]/60 shadow-xl shadow-orange-500/10 scale-[1.01]'
                    : isDark
                    ? 'bg-neutral-900/40 border-white/5 opacity-50 hover:opacity-90'
                    : 'bg-neutral-100 border-neutral-200 opacity-50 hover:opacity-90'
                }`}
              >
                <div>
                  {/* Top Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <img
                      src={card.coach.image}
                      alt={card.coach.name}
                      className="w-16 h-16 rounded-2xl object-cover object-top border-2 border-[#ff5520]/40 shadow-lg"
                    />
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#ff5520] block">
                        {card.tagline}
                      </span>
                      <h3
                        className="font-display font-black text-xl uppercase tracking-tight"
                        style={{ color: isDark ? '#ffffff' : '#111827' }}
                      >
                        {card.coach.name}
                      </h3>
                      <p
                        className="text-xs font-bold"
                        style={{ color: isDark ? '#9ca3af' : '#4b5563' }}
                      >
                        {card.lensName}
                      </p>
                    </div>
                  </div>

                  {/* Verbatim Bio Hook */}
                  <div
                    className="p-4 rounded-2xl mb-4 border"
                    style={{
                      backgroundColor: isDark ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.7)',
                      borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
                    }}
                  >
                    <p
                      className="text-xs sm:text-sm leading-relaxed italic"
                      style={{ color: isDark ? '#e5e7eb' : '#374151' }}
                    >
                      "{card.verbatimHook}"
                    </p>
                  </div>

                  {/* Core Mindset Quote */}
                  <p
                    className="text-xs font-medium leading-relaxed mb-4"
                    style={{ color: isDark ? '#9ca3af' : '#4b5563' }}
                  >
                    <strong className="text-[#ff5520] uppercase font-bold">Philosophy: </strong>
                    {card.coreQuote}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-neutral-500/10 flex items-center justify-between text-xs font-bold text-[#ff5520]">
                  <span className="flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 fill-current" />
                    <span>View {card.coach.name}'s Profile</span>
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('coaches');
                    }}
                    className="p-2 rounded-xl bg-[#ff5520]/15 hover:bg-[#ff5520] hover:text-white transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ── 2. Latest Episode Embed ──────────────────────────────────────
export const LatestEpisodeEmbed: React.FC<{ isDark?: boolean }> = ({ isDark = true }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(2280); // ~38 min default
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const latestEp = REAL_EPISODES[0]; // Ep. 120

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const target = Number(e.target.value);
    audio.currentTime = target;
    setCurrentTime(target);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <section className="py-10 sm:py-12 border-t border-neutral-500/10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hidden Audio Element pointing to real Libsyn audio stream */}
      <audio
        ref={audioRef}
        src={latestEp.audioUrl}
        preload="metadata"
        muted={isMuted}
      />

      <div
        className={`relative overflow-hidden rounded-3xl border p-5 sm:p-7 lg:p-8 shadow-xl transition-all ${
          isDark
            ? 'bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-neutral-950 border-white/10'
            : 'bg-white border-neutral-200 shadow-md'
        }`}
      >
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#ff5520]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
          {/* Episode Artwork with Interactive Audio Play Overlay */}
          <div className="md:col-span-4 max-w-[240px] md:max-w-none mx-auto w-full relative group">
            <div className="aspect-square rounded-2xl overflow-hidden bg-neutral-950 border border-white/10 shadow-lg relative">
              <img
                src="/blog/3gs-blog-cover.jpg"
                alt="Episode 120 - Body Positivity"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px] flex flex-col items-center justify-center p-4 text-center">
                <button
                  onClick={togglePlay}
                  className="w-14 h-14 rounded-full bg-[#ff5520] hover:bg-[#e04412] text-white flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer mb-2"
                  title={isPlaying ? 'Pause Episode' : 'Play Episode'}
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6 fill-current" />
                  ) : (
                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                  )}
                </button>
                <span className="text-[10px] font-black uppercase tracking-wider text-white drop-shadow">
                  {isPlaying ? 'Now Playing' : 'Listen In-Browser'}
                </span>
                <span className="text-[9px] text-neutral-300 font-mono mt-0.5">
                  38-Min Broadcast
                </span>
              </div>
            </div>
          </div>

          {/* Episode Narrative & Embedded Player Controls */}
          <div className="md:col-span-8 space-y-3.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#ff5520]/20 text-[#ff5520] border border-[#ff5520]/30 shadow-sm">
                Latest Episode Embed
              </span>
              <span
                className="text-[11px] font-mono font-bold"
                style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
              >
                Episode {latestEp.episodeNumber} · Released {latestEp.date}
              </span>
            </div>

            <h3
              className="font-display font-black text-xl sm:text-2xl lg:text-3xl uppercase tracking-tight leading-snug"
              style={{ color: isDark ? '#ffffff' : '#111827' }}
            >
              {latestEp.title}
            </h3>

            <p
              className="text-xs sm:text-sm leading-relaxed"
              style={{ color: isDark ? '#d1d5db' : '#4b5563' }}
            >
              {latestEp.summary}
            </p>

            {/* Embedded Audio Waveform / Scrubber Bar */}
            <div
              className="p-3.5 rounded-xl border space-y-2"
              style={{
                backgroundColor: isDark ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.04)',
                borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
              }}
            >
              <div
                className="flex items-center justify-between text-[11px] font-mono"
                style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
              >
                <span className="flex items-center gap-1.5 text-[#ff5520] font-bold">
                  <Clock className="w-3 h-3" />
                  {formatTime(currentTime)}
                </span>
                <span>Length: {formatTime(duration)}</span>
              </div>

              {/* Progress Slider */}
              <input
                type="range"
                min={0}
                max={duration || 100}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1.5 bg-neutral-700/60 rounded-lg appearance-none cursor-pointer accent-[#ff5520]"
              />

              <div className="flex items-center justify-between pt-0.5">
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={togglePlay}
                    className="p-1.5 rounded-lg bg-[#ff5520] text-white hover:bg-[#e04412] transition-colors cursor-pointer"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                  </button>
                  <span
                    className="text-[11px] font-bold"
                    style={{ color: isDark ? '#e5e7eb' : '#1f2937' }}
                  >
                    {isPlaying ? 'Streaming Episode 120' : 'Episode 120 Ready'}
                  </span>
                </div>

                <button
                  onClick={() => setIsMuted((m) => !m)}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    isDark
                      ? 'hover:bg-white/10 text-neutral-400 hover:text-white'
                      : 'hover:bg-neutral-200 text-neutral-600 hover:text-neutral-900'
                  }`}
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Direct Platform Links */}
            <div className="pt-1 flex flex-wrap items-center gap-2.5">
              <a
                href={latestEp.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-wider text-black bg-[#1DB954] hover:bg-[#19a54a] transition-all flex items-center gap-1.5 shadow-md hover:scale-105"
              >
                <SpotifyIcon className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Listen on Spotify</span>
              </a>
              <a
                href={latestEp.appleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-wider text-white bg-[#872ec4] hover:bg-[#7322aa] transition-all flex items-center gap-1.5 shadow-md hover:scale-105"
              >
                <ApplePodcastsIcon className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Apple Podcasts</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ── 3. Recent Topics ─────────────────────────────────────────────
export const RecentTopicsSection: React.FC<{
  isDark?: boolean;
  onNavigate: (page: 'home' | 'episodes' | 'coaches' | 'work-with-us') => void;
}> = ({ isDark = true, onNavigate }) => {
  // Real catalog highlights specifically matching the prompt
  const highlightEpisodes = [
    {
      id: 'ep-118',
      epNumber: 118,
      title: 'Does Weed Help or Hurt Your Fitness?',
      date: 'Sep 13, 2026',
      tag: 'Debate Highlight',
      lens: 'Gen-Z vs Boomer',
      summary:
        'Can cannabis fit into high-performance training? Kael, Cisco, and Mike debate effects on appetite, sleep cycles, and hypertrophy.',
    },
    {
      id: 'ep-119',
      epNumber: 119,
      title: 'Sports Massage, Injuries & Recovery ft. Robert Torres',
      date: 'Sep 20, 2026',
      tag: 'Expert Guest',
      lens: 'Therapy & Longevity',
      summary:
        'Soft tissue therapist Robert Torres joins the 3Gs to explain why strategic recovery beats aggressive overworking.',
    },
    {
      id: 'ep-117',
      epNumber: 117,
      title: 'What Great Coaches Do Differently ft. Jack Noel',
      date: 'Sep 06, 2026',
      tag: 'Masterclass',
      lens: 'Coaching Wisdom',
      summary:
        'Coach Jack Noel discusses the specific habits, cueing precision, and empathy that separate good trainers from legends.',
    },
    {
      id: 'ep-114',
      epNumber: 114,
      title: "Want a Celebrity Physique? What It Really Takes",
      date: 'Aug 16, 2026',
      tag: 'Reality Check',
      lens: 'Hollywood Myths',
      summary:
        'Thor, Creed, Wonder Woman: the aesthetic is famous, but dehydration, caloric swings, and extreme splits are rarely discussed.',
    },
  ];

  return (
    <section className="py-10 sm:py-12 border-t border-neutral-500/10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <span className="text-[11px] font-black uppercase tracking-widest text-[#ff5520] block">
              Real Catalog Highlights
            </span>
            <h2
              className="font-display font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight"
              style={{ color: isDark ? '#ffffff' : '#111827' }}
            >
              Recent Topics
            </h2>
            <p
              className="text-xs sm:text-sm max-w-lg"
              style={{ color: isDark ? '#9ca3af' : '#4b5563' }}
            >
              Unfiltered debates, master coaches, sports therapy experts, and myth busting straight
              from our 120+ episode archive.
            </p>
          </div>
          <button
            onClick={() => onNavigate('episodes')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-wider text-white bg-[#ff5520] hover:bg-[#e04412] shadow-md transition-all hover:scale-105 cursor-pointer self-start sm:self-auto"
          >
            <span>Explore All 120+ Episodes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlightEpisodes.map((ep) => (
            <div
              key={ep.id}
              onClick={() => onNavigate('episodes')}
              className={`p-4 sm:p-5 rounded-2xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 cursor-pointer ${
                isDark
                  ? 'bg-neutral-900/60 hover:bg-neutral-900 border-white/10 hover:border-[#ff5520]/50 shadow-md'
                  : 'bg-white hover:bg-neutral-50 border-neutral-200 hover:border-[#ff5520]/50 shadow-sm'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="px-2 py-0.5 rounded-full bg-[#ff5520]/15 text-[#ff5520] font-black uppercase">
                    EP. {ep.epNumber}
                  </span>
                  <span
                    className="font-bold"
                    style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                  >
                    {ep.date}
                  </span>
                </div>

                <div
                  className="text-[9px] uppercase font-black tracking-wider"
                  style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                >
                  {ep.tag} · {ep.lens}
                </div>

                <h4
                  className="font-display font-black text-sm sm:text-base uppercase tracking-tight line-clamp-2 leading-snug"
                  style={{ color: isDark ? '#ffffff' : '#111827' }}
                >
                  {ep.title}
                </h4>

                <p
                  className="text-[11px] sm:text-xs leading-relaxed line-clamp-3"
                  style={{ color: isDark ? '#9ca3af' : '#4b5563' }}
                >
                  {ep.summary}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-neutral-500/10 flex items-center justify-between text-[11px] font-bold text-[#ff5520]">
                <span>Listen In Library</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── 4. Where To Listen ───────────────────────────────────────────
export const WhereToListenSection: React.FC<{ isDark?: boolean }> = ({ isDark = true }) => {
  return (
    <section className="py-20 border-t border-neutral-500/10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className={`p-8 sm:p-14 rounded-[36px] border text-center space-y-10 ${
          isDark
            ? 'bg-neutral-950 border-white/10 text-white'
            : 'bg-neutral-900 border-neutral-800 text-white shadow-2xl'
        }`}
      >
        <div className="max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-[#ff5520] block">
            Honest Track Record
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Where To Listen
          </h2>
          <p className="text-sm text-neutral-400 font-normal leading-relaxed">
            Every Sunday without fail, the 3Gs drop a brand new deep dive. Catch audio on Spotify
            and Apple Podcasts, or stream full studio video on YouTube.
          </p>
        </div>

        {/* Honest Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { num: '2021', label: 'Channel Launch' },
            { num: 'Weekly', label: 'Sunday Releases' },
            { num: '120+', label: 'Episodes Indexed' },
            { num: '230+', label: 'Videos & Shorts' },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ff5520]/40 transition-colors"
            >
              <span className="font-display font-black text-3xl sm:text-4xl text-[#ff5520] block">
                {stat.num}
              </span>
              <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-bold block mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Platform Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="https://open.spotify.com/show/74QOLPHydOpE0cOMvwtrna"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full text-xs font-black uppercase tracking-wider text-black bg-[#1DB954] hover:bg-[#19a54a] shadow-lg transition-all hover:scale-105 flex items-center gap-2"
          >
            <SpotifyIcon className="w-4 h-4 flex-shrink-0" />
            <span>Spotify Podcast</span>
          </a>
          <a
            href="https://podcasts.apple.com/au/podcast/the-3gs-fitness-podcast/id1745821922"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full text-xs font-black uppercase tracking-wider text-white bg-[#872ec4] hover:bg-[#7322aa] shadow-lg transition-all hover:scale-105 flex items-center gap-2"
          >
            <ApplePodcastsIcon variant="white-badge" className="w-4 h-4 flex-shrink-0" />
            <span>Apple Podcasts</span>
          </a>
          <a
            href="https://www.youtube.com/@The3GsFitness"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full text-xs font-black uppercase tracking-wider text-white bg-[#FF0000] hover:bg-[#d60000] shadow-lg transition-all hover:scale-105 flex items-center gap-2"
          >
            <YouTubeIcon variant="white-badge" className="w-4 h-4 flex-shrink-0" />
            <span>YouTube Channel</span>
          </a>
        </div>
      </div>
    </section>
  );
};

// ── 5. Follow The Show ───────────────────────────────────────────
export const FollowTheShowSection: React.FC<{ isDark?: boolean }> = ({ isDark = true }) => {
  const reels = [
    {
      title: 'Coach Mike vs Weed Smokers',
      ep: 'EP. 118',
      tag: 'Viral Reel Highlight',
      views: '14.2K views',
      image: '/reels/reel-weed-mike.jpg',
      link: 'https://www.instagram.com/the3gsfitness/',
    },
    {
      title: 'Was Robert Torres Right?',
      ep: 'EP. 119',
      tag: 'Sports Massage Debate',
      views: '9.8K views',
      image: '/reels/reel-robert-torres.jpg',
      link: 'https://www.instagram.com/the3gsfitness/',
    },
    {
      title: 'Body Positivity or Ignoring Health?',
      ep: 'EP. 120',
      tag: 'Mindset Round-Table',
      views: '18.5K views',
      image: '/reels/reel-body-positivity.jpg',
      link: 'https://www.instagram.com/the3gsfitness/',
    },
    {
      title: 'Do They Really Believe That?!',
      ep: 'EP. 115',
      tag: 'Generational Clash',
      views: '11.3K views',
      image: '/reels/reel-generations.jpg',
      link: 'https://www.instagram.com/the3gsfitness/',
    },
  ];

  return (
    <section className="py-20 border-t border-neutral-500/10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-[#ff5520] block">
              Social Community
            </span>
            <h2
              className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight"
              style={{ color: isDark ? '#ffffff' : '#111827' }}
            >
              Follow The Show
            </h2>
            <p
              className="text-sm max-w-xl"
              style={{ color: isDark ? '#9ca3af' : '#4b5563' }}
            >
              Short-form clips, behind-the-scenes debates, workout demonstrations, and listener Q&As
              delivered daily on Instagram.
            </p>
          </div>
          <a
            href="https://www.instagram.com/the3gsfitness/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider text-white bg-[#ff5520] hover:bg-[#e04412] shadow-lg transition-all hover:scale-105 self-start sm:self-auto"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow @the3gsfitness</span>
          </a>
        </div>

        {/* Instagram Reel Graphics Grid with Real Thumbnails */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reels.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-3xl overflow-hidden border border-white/10 aspect-[9/14] bg-neutral-950 p-5 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#ff5520]"
            >
              {/* Actual Reel Thumbnail Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />

              {/* Dark Gradient Vignette Overlay for Crisp Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/30 group-hover:via-black/35 transition-colors" />

              {/* Center Play Button on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="w-14 h-14 rounded-full bg-[#ff5520] text-white flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Play className="w-6 h-6 fill-current translate-x-0.5" />
                </div>
              </div>

              {/* Top Header Bar */}
              <div className="relative z-10 flex items-center justify-between text-xs">
                <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[#ff5520] font-black uppercase text-[10px] border border-[#ff5520]/40">
                  {item.ep}
                </span>
                <span className="px-2 py-1 rounded-md bg-black/60 backdrop-blur-md text-white/90 flex items-center gap-1.5 text-[10px] font-bold border border-white/10">
                  <Instagram className="w-3.5 h-3.5 text-[#ff5520]" />
                  <span>Reel</span>
                </span>
              </div>

              {/* Bottom Content Area */}
              <div className="relative z-10 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-black text-orange-400 block tracking-wider drop-shadow">
                    {item.tag}
                  </span>
                  <span className="text-[10px] text-neutral-400 font-mono">
                    · {item.views}
                  </span>
                </div>
                <h4 className="font-display font-black text-base sm:text-lg uppercase text-white leading-tight drop-shadow-md">
                  {item.title}
                </h4>
                <div className="pt-2 flex items-center gap-1 text-[11px] font-bold text-neutral-300 group-hover:text-white transition-colors">
                  <span>Watch on Instagram</span>
                  <ExternalLink className="w-3 h-3 text-[#ff5520]" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── 6. Work With Us Strip ────────────────────────────────────────
export const WorkWithUsStrip: React.FC<{
  isDark?: boolean;
  onNavigate: (page: 'home' | 'episodes' | 'coaches' | 'work-with-us') => void;
}> = ({ isDark = true, onNavigate }) => {
  return (
    <section className="py-20 border-t border-neutral-500/10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className={`p-8 sm:p-12 lg:p-14 rounded-[36px] border ${
          isDark
            ? 'bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-neutral-950 border-white/10 shadow-2xl'
            : 'bg-white border-neutral-200 shadow-xl'
        }`}
      >
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#ff5520]/15 text-[#ff5520] border border-[#ff5520]/30">
            <span>Beyond Listening</span>
          </div>
          <h2
            className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight"
            style={{ color: isDark ? '#ffffff' : '#111827' }}
          >
            Work With The 3Gs
          </h2>
          <p
            className="text-sm font-normal leading-relaxed"
            style={{ color: isDark ? '#9ca3af' : '#4b5563' }}
          >
            Whether you want to appear as a guest expert, partner your fitness brand with our show,
            or get direct 1-on-1 coaching from Mike, Cisco, or Kael.
          </p>
        </div>

        {/* 3 Prompt Cards Routing Directly to Work With Us Paths */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Card 1: Be a Guest */}
          <div
            onClick={() => onNavigate('work-with-us')}
            className={`p-7 rounded-3xl border transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between ${
              isDark
                ? 'bg-neutral-900/60 hover:bg-neutral-900 border-white/10 hover:border-[#ff5520]'
                : 'bg-neutral-50 hover:bg-white border-neutral-200 hover:border-[#ff5520] shadow-md'
            }`}
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#ff5520]/15 border border-[#ff5520]/30 flex items-center justify-center text-[#ff5520]">
                <Mic2 className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#ff5520]">
                Path 01
              </span>
              <h4
                className="font-display font-black text-xl uppercase tracking-tight"
                style={{ color: isDark ? '#ffffff' : '#111827' }}
              >
                Pitch To Be A Guest
              </h4>
              <p
                className="text-xs leading-relaxed"
                style={{ color: isDark ? '#9ca3af' : '#4b5563' }}
              >
                Have a sports medicine background, athletic accolade, or controversial fitness angle?
                Pitch our producers to join the table.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-500/10 flex items-center justify-between text-xs font-bold text-[#ff5520]">
              <span>Submit Guest Pitch</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 2: Partner / Sponsor */}
          <div
            onClick={() => onNavigate('work-with-us')}
            className={`p-7 rounded-3xl border transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between ${
              isDark
                ? 'bg-neutral-900/60 hover:bg-neutral-900 border-white/10 hover:border-[#ff5520]'
                : 'bg-neutral-50 hover:bg-white border-neutral-200 hover:border-[#ff5520] shadow-md'
            }`}
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#ff5520]/15 border border-[#ff5520]/30 flex items-center justify-center text-[#ff5520]">
                <Handshake className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#ff5520]">
                Path 02
              </span>
              <h4
                className="font-display font-black text-xl uppercase tracking-tight"
                style={{ color: isDark ? '#ffffff' : '#111827' }}
              >
                Partner / Sponsor
              </h4>
              <p
                className="text-xs leading-relaxed"
                style={{ color: isDark ? '#9ca3af' : '#4b5563' }}
              >
                Connect your fitness brand, gym equipment, or recovery tool to an authentic,
                dedicated weekly listener base.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-500/10 flex items-center justify-between text-xs font-bold text-[#ff5520]">
              <span>Inquire Sponsorship</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 3: Train with a Coach */}
          <div
            onClick={() => onNavigate('work-with-us')}
            className={`p-7 rounded-3xl border transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col justify-between ${
              isDark
                ? 'bg-neutral-900/60 hover:bg-neutral-900 border-white/10 hover:border-[#ff5520]'
                : 'bg-neutral-50 hover:bg-white border-neutral-200 hover:border-[#ff5520] shadow-md'
            }`}
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#ff5520]/15 border border-[#ff5520]/30 flex items-center justify-center text-[#ff5520]">
                <Dumbbell className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#ff5520]">
                Path 03
              </span>
              <h4
                className="font-display font-black text-xl uppercase tracking-tight"
                style={{ color: isDark ? '#ffffff' : '#111827' }}
              >
                Train With A Coach
              </h4>
              <p
                className="text-xs leading-relaxed"
                style={{ color: isDark ? '#9ca3af' : '#4b5563' }}
              >
                Private 1-on-1 coaching inquiry with direct separate inboxes for Coach Mike, Coach
                Cisco, or Coach Kael.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-500/10 flex items-center justify-between text-xs font-bold text-[#ff5520]">
              <span>Choose Your Coach</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
