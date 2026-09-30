import React, { useState, useRef } from 'react';
import {
  Search,
  Filter,
  Headphones,
  Play,
  Pause,
  ExternalLink,
  Calendar,
  Share2,
  Check,
  Youtube,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import { SpotifyIcon, ApplePodcastsIcon, YouTubeIcon } from './BrandIcons';

interface EpisodesPageProps {
  isDark?: boolean;
  onBackToHome?: () => void;
  initialGeneration?: 'all' | 'boomer' | 'millennial' | 'genz';
}

export interface EpisodeItem {
  id: string;
  episodeNumber: number;
  title: string;
  date: string;
  format: 'Debate' | 'Guest' | 'Whiteboard Q&A';
  generationLens: 'boomer' | 'millennial' | 'genz' | 'all';
  guest?: string;
  summary: string;
  duration: string;
  spotifyUrl: string;
  appleUrl: string;
  youtubeUrl?: string;
  audioUrl?: string;
}

export const REAL_EPISODES: EpisodeItem[] = [
  {
    id: 'ep-120',
    episodeNumber: 120,
    title: 'Body Positivity: Self-Love or Ignoring Your Health?',
    date: 'Sep 27, 2026',
    format: 'Debate',
    generationLens: 'all',
    summary:
      'The 3Gs dive into the nuanced balance between self-acceptance, physical longevity, and medical realities across three generational viewpoints.',
    duration: '38 min',
    spotifyUrl: 'https://open.spotify.com/show/74QOLPHydOpE0cOMvwtrna',
    appleUrl: 'https://podcasts.apple.com/au/podcast/the-3gs-fitness-podcast/id1745821922',
    audioUrl:
      'https://dts.podtrac.com/redirect.mp3/traffic.libsyn.com/secure/5fe3e3ec-7084-49b4-9da2-0fd5cb24195f/Ep._120_BodyPositivity.mp3?dest-id=4313883',
  },
  {
    id: 'ep-119',
    episodeNumber: 119,
    title: "Sports Massage, Injuries & Recovery: Why Harder Isn't Always Better",
    date: 'Sep 20, 2026',
    format: 'Guest',
    generationLens: 'millennial',
    guest: 'Robert Torres',
    summary:
      'Soft tissue therapist Robert Torres joins the 3Gs with nearly 20 years of sports therapy experience to explain why strategic recovery beats aggressive overworking.',
    duration: '45 min',
    spotifyUrl: 'https://open.spotify.com/show/74QOLPHydOpE0cOMvwtrna',
    appleUrl: 'https://podcasts.apple.com/au/podcast/the-3gs-fitness-podcast/id1745821922',
    audioUrl:
      'https://dts.podtrac.com/redirect.mp3/traffic.libsyn.com/secure/5fe3e3ec-7084-49b4-9da2-0fd5cb24195f/Ep._119_Robert_Torres_Audio_Final.mp3?dest-id=4313883',
  },
  {
    id: 'ep-118',
    episodeNumber: 118,
    title: 'Does Weed Help or Hurt Your Fitness?',
    date: 'Sep 13, 2026',
    format: 'Debate',
    generationLens: 'genz',
    summary:
      'Can cannabis fit into a high-performance training lifestyle? Kael, Cisco, and Mike debate marijuana impact on appetite, sleep cycles, and muscular hypertrophy.',
    duration: '41 min',
    spotifyUrl: 'https://open.spotify.com/show/74QOLPHydOpE0cOMvwtrna',
    appleUrl: 'https://podcasts.apple.com/au/podcast/the-3gs-fitness-podcast/id1745821922',
    audioUrl:
      'https://dts.podtrac.com/redirect.mp3/traffic.libsyn.com/secure/5fe3e3ec-7084-49b4-9da2-0fd5cb24195f/Ep._118_Weed_Audio.mp3?dest-id=4313883',
  },
  {
    id: 'ep-117',
    episodeNumber: 117,
    title: 'What Great Coaches Do Differently',
    date: 'Sep 06, 2026',
    format: 'Guest',
    generationLens: 'boomer',
    guest: 'Coach Jack Noel',
    summary:
      'Long Beach State S&C Coach Jack Noel returns to discuss the specific coaching habits, cueing precision, and empathy that separate good trainers from legends.',
    duration: '52 min',
    spotifyUrl: 'https://open.spotify.com/show/74QOLPHydOpE0cOMvwtrna',
    appleUrl: 'https://podcasts.apple.com/au/podcast/the-3gs-fitness-podcast/id1745821922',
    audioUrl:
      'https://dts.podtrac.com/redirect.mp3/traffic.libsyn.com/secure/5fe3e3ec-7084-49b4-9da2-0fd5cb24195f/Ep._117_JackNoelGreatCoach.mp3?dest-id=4313883',
  },
  {
    id: 'ep-116',
    episodeNumber: 116,
    title: 'WNBA Transgender Athlete Debate: Where Should the Line Be?',
    date: 'Aug 30, 2026',
    format: 'Debate',
    generationLens: 'all',
    summary:
      'The 3Gs discuss the debate surrounding transgender athletes, competitive biological fairness, and how sports governing bodies navigate this intersection.',
    duration: '48 min',
    spotifyUrl: 'https://open.spotify.com/show/74QOLPHydOpE0cOMvwtrna',
    appleUrl: 'https://podcasts.apple.com/au/podcast/the-3gs-fitness-podcast/id1745821922',
    audioUrl:
      'https://dts.podtrac.com/redirect.mp3/traffic.libsyn.com/secure/5fe3e3ec-7084-49b4-9da2-0fd5cb24195f/Ep_116_Audio_Final.mp3?dest-id=4313883',
  },
  {
    id: 'ep-115',
    episodeNumber: 115,
    title: 'We Put the Coaches on the Spot With a Whiteboard Q&A',
    date: 'Aug 23, 2026',
    format: 'Whiteboard Q&A',
    generationLens: 'all',
    summary:
      'The whiteboards are out! Coach Cisco, Coach Michael, and Coach Kael write down their unfiltered answers before revealing them simultaneously on camera.',
    duration: '39 min',
    spotifyUrl: 'https://open.spotify.com/show/74QOLPHydOpE0cOMvwtrna',
    appleUrl: 'https://podcasts.apple.com/au/podcast/the-3gs-fitness-podcast/id1745821922',
    audioUrl:
      'https://dts.podtrac.com/redirect.mp3/traffic.libsyn.com/secure/5fe3e3ec-7084-49b4-9da2-0fd5cb24195f/EP._115_AUDIO_FINAL.mp3?dest-id=4313883',
  },
  {
    id: 'ep-114',
    episodeNumber: 114,
    title: "Want a Celebrity Physique? Here's What It Really Takes",
    date: 'Aug 16, 2026',
    format: 'Debate',
    generationLens: 'millennial',
    summary:
      'Thor, Creed, Wonder Woman: the aesthetic is famous, but the dehydration, extreme caloric cycling, and brutal training splits are rarely disclosed.',
    duration: '36 min',
    spotifyUrl: 'https://open.spotify.com/show/74QOLPHydOpE0cOMvwtrna',
    appleUrl: 'https://podcasts.apple.com/au/podcast/the-3gs-fitness-podcast/id1745821922',
    audioUrl:
      'https://dts.podtrac.com/redirect.mp3/traffic.libsyn.com/secure/5fe3e3ec-7084-49b4-9da2-0fd5cb24195f/Ep._114_GuessTheActorCelebPhysique_2026.08.16.mp3?dest-id=4313883',
  },
  {
    id: 'ep-113',
    episodeNumber: 113,
    title: 'Why Are We Still Obese With More Fitness Advice Than Ever?',
    date: 'Aug 09, 2026',
    format: 'Debate',
    generationLens: 'boomer',
    summary:
      'Coach Michael starts with a statistic that sends the room into a deep discussion on information overload vs. sustainable daily lifestyle discipline.',
    duration: '44 min',
    spotifyUrl: 'https://open.spotify.com/show/74QOLPHydOpE0cOMvwtrna',
    appleUrl: 'https://podcasts.apple.com/au/podcast/the-3gs-fitness-podcast/id1745821922',
    audioUrl:
      'https://dts.podtrac.com/redirect.mp3/traffic.libsyn.com/secure/5fe3e3ec-7084-49b4-9da2-0fd5cb24195f/Ep._113_ObeseWithInfo_2026.08.09.mp3?dest-id=4313883',
  },
  {
    id: 'ep-111',
    episodeNumber: 111,
    title: 'How to Get Jacked Like a Prisoner Without Going to Prison',
    date: 'Jul 26, 2026',
    format: 'Debate',
    generationLens: 'boomer',
    summary:
      'High-volume calisthenics, progressive overload with minimal tools, and brutal consistency: breaking down why simple prison fitness principles build real muscle.',
    duration: '42 min',
    spotifyUrl: 'https://open.spotify.com/show/74QOLPHydOpE0cOMvwtrna',
    appleUrl: 'https://podcasts.apple.com/au/podcast/the-3gs-fitness-podcast/id1745821922',
    audioUrl:
      'https://dts.podtrac.com/redirect.mp3/traffic.libsyn.com/secure/5fe3e3ec-7084-49b4-9da2-0fd5cb24195f/Ep._111_PrisonMike_2026.07.26.mp3?dest-id=4313883',
  },
  {
    id: 'ep-109',
    episodeNumber: 109,
    title: 'Carleen Dinh Explains Why Gym Rats Struggle With Pilates',
    date: 'Jul 12, 2026',
    format: 'Guest',
    generationLens: 'genz',
    guest: 'Carleen Dinh',
    summary:
      'Reformer Pilates instructor Carleen Dinh explains deep stabilizer activation, isometric control, and why heavy lifters get humbled on the reformer carriage.',
    duration: '47 min',
    spotifyUrl: 'https://open.spotify.com/show/74QOLPHydOpE0cOMvwtrna',
    appleUrl: 'https://podcasts.apple.com/au/podcast/the-3gs-fitness-podcast/id1745821922',
    audioUrl:
      'https://dts.podtrac.com/redirect.mp3/traffic.libsyn.com/secure/5fe3e3ec-7084-49b4-9da2-0fd5cb24195f/Ep._109_CarleenDinh_2026.07.12.mp3?dest-id=4313883',
  },
  {
    id: 'ep-22',
    episodeNumber: 22,
    title: 'Free Weights vs Machines: What Is Best!?',
    date: 'Sep 12, 2024',
    format: 'Debate',
    generationLens: 'all',
    summary:
      'Machines teach movement planes and isolate targets for novices, while barbells and free weights build stabilizing power. The coaches debate how to combine both.',
    duration: '35 min',
    spotifyUrl: 'https://open.spotify.com/show/74QOLPHydOpE0cOMvwtrna',
    appleUrl: 'https://podcasts.apple.com/au/podcast/the-3gs-fitness-podcast/id1745821922',
    youtubeUrl: 'https://www.youtube.com/watch?v=Z3A9qj3vook',
  },
  {
    id: 'ep-19',
    episodeNumber: 19,
    title: 'Old School Lifters vs New School Gym Rats: Who Is Stronger!?',
    date: 'Aug 05, 2024',
    format: 'Debate',
    generationLens: 'millennial',
    summary:
      'Comparing training volume, biomechanics science, modern nutrition versus 1970s heavy iron intensity and mental fortitude across three generations.',
    duration: '40 min',
    spotifyUrl: 'https://open.spotify.com/show/74QOLPHydOpE0cOMvwtrna',
    appleUrl: 'https://podcasts.apple.com/au/podcast/the-3gs-fitness-podcast/id1745821922',
    youtubeUrl: 'https://www.youtube.com/watch?v=aiYOgN-nsNU',
  },
];

export const EpisodesPage: React.FC<EpisodesPageProps> = ({
  isDark = true,
  onBackToHome,
  initialGeneration = 'all',
}) => {
  const [selectedFormat, setSelectedFormat] = useState<string>('All');
  const [selectedGen, setSelectedGen] = useState<string>(initialGeneration);
  const [searchQuery, setSearchQuery] = useState('');
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const formatFilters = ['All', 'Debate', 'Guest', 'Whiteboard Q&A'];

  const filteredEpisodes = REAL_EPISODES.filter((ep) => {
    // Format filter
    if (selectedFormat !== 'All' && ep.format !== selectedFormat) return false;
    // Generation filter
    if (selectedGen !== 'all' && ep.generationLens !== 'all' && ep.generationLens !== selectedGen) {
      return false;
    }
    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = ep.title.toLowerCase().includes(q);
      const matchSummary = ep.summary.toLowerCase().includes(q);
      const matchGuest = ep.guest?.toLowerCase().includes(q);
      const matchNum = ep.episodeNumber.toString().includes(q);
      if (!matchTitle && !matchSummary && !matchGuest && !matchNum) return false;
    }
    return true;
  });

  const handleToggleAudio = (ep: EpisodeItem) => {
    if (!ep.audioUrl) return;

    if (playingId === ep.id) {
      audioRef.current?.pause();
      setPlayingId(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const audio = new Audio(ep.audioUrl);
      audioRef.current = audio;
      setPlayingId(ep.id);
      audio.play().catch(() => setPlayingId(null));
      audio.onended = () => setPlayingId(null);
    }
  };

  const handleCopyLink = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div
      className="min-h-screen pt-28 sm:pt-36 pb-24 transition-colors duration-500"
      style={{
        backgroundColor: isDark ? '#08090d' : '#f8f6f2',
        color: isDark ? '#ffffff' : '#111827',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Back & Header */}
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

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#ff5520]/10 text-[#ff5520] border border-[#ff5520]/20 mb-3">
                <Headphones className="w-3.5 h-3.5" />
                The 3Gs Episode Catalog
              </div>
              <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight">
                Episode Library
              </h1>
              <p
                className="text-sm sm:text-base mt-2 max-w-2xl font-normal"
                style={{ color: isDark ? '#9ca3af' : '#4b5563' }}
              >
                120+ weekly releases spanning raw debates, guest deep-dives, and whiteboard sessions across three generations.
              </p>
            </div>

            {/* Platform Badges */}
            <div className="flex items-center gap-2.5 flex-wrap">
              <a
                href="https://podcasts.apple.com/au/podcast/the-3gs-fitness-podcast/id1745821922"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#872ec4] hover:opacity-90 transition-opacity shadow-sm flex items-center gap-1.5"
              >
                <ApplePodcastsIcon variant="white-badge" className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Apple Podcasts</span>
              </a>
              <a
                href="https://open.spotify.com/show/74QOLPHydOpE0cOMvwtrna"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-black bg-[#1DB954] hover:opacity-90 transition-opacity shadow-sm flex items-center gap-1.5"
              >
                <SpotifyIcon className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Spotify</span>
              </a>
              <a
                href="https://www.youtube.com/@The3GsFitness"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#FF0000] hover:opacity-90 transition-opacity shadow-sm flex items-center gap-1.5"
              >
                <YouTubeIcon variant="white-badge" className="w-3.5 h-3.5 flex-shrink-0" />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Filter Bar with Signature Generation Filter */}
        <div
          className={`p-6 rounded-3xl border space-y-6 ${
            isDark ? 'bg-neutral-900/60 border-white/10' : 'bg-white border-neutral-200 shadow-md'
          }`}
        >
          {/* Signature Generation Filter */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff5520] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Signature Generation Lens
              </span>
              <span className="text-[11px] text-neutral-400 font-mono">Filter by host perspective</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: 'all', label: 'All Generations', sub: 'The Full Roundtable' },
                { id: 'boomer', label: 'Boomer Lens', sub: 'Coach Michael (Old School)' },
                { id: 'millennial', label: 'Millennial Lens', sub: 'Coach Cisco (The Bridge)' },
                { id: 'genz', label: 'Gen-Z Lens', sub: 'Coach Kael (Zillennial)' },
              ].map((g) => {
                const active = selectedGen === g.id;
                return (
                  <button
                    key={g.id}
                    onClick={() => setSelectedGen(g.id)}
                    className={`p-3 rounded-2xl text-left border transition-all cursor-pointer ${
                      active
                        ? 'bg-[#ff5520] text-white border-[#ff5520] shadow-md shadow-orange-500/25 scale-[1.02]'
                        : isDark
                        ? 'bg-neutral-800/80 hover:bg-neutral-800 text-neutral-300 border-white/5'
                        : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-700 border-neutral-200'
                    }`}
                  >
                    <span className="block font-black text-xs uppercase tracking-wide">{g.label}</span>
                    <span className={`block text-[10px] mt-0.5 ${active ? 'text-white/80' : 'text-neutral-400'}`}>
                      {g.sub}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Format Tabs & Search Box */}
          <div className="pt-4 border-t border-neutral-500/10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Format Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
              <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mr-1 hidden sm:inline">
                Format:
              </span>
              {formatFilters.map((fmt) => {
                const active = selectedFormat === fmt;
                return (
                  <button
                    key={fmt}
                    onClick={() => setSelectedFormat(fmt)}
                    className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                      active
                        ? isDark
                          ? 'bg-white text-neutral-900 shadow-sm'
                          : 'bg-neutral-900 text-white shadow-sm'
                        : isDark
                        ? 'text-neutral-400 hover:text-white bg-white/5'
                        : 'text-neutral-600 hover:text-neutral-900 bg-neutral-100'
                    }`}
                  >
                    {fmt}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative md:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search topics, guests, ep #..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-9 pr-4 py-2 rounded-full text-xs border transition-colors outline-hidden ${
                  isDark
                    ? 'bg-neutral-950 border-white/10 text-white placeholder-neutral-500 focus:border-[#ff5520]'
                    : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-[#ff5520]'
                }`}
              />
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs font-mono text-neutral-400 px-1">
          <span>
            Showing <strong className="text-[#ff5520]">{filteredEpisodes.length}</strong> real episodes
          </span>
          {(selectedFormat !== 'All' || selectedGen !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedFormat('All');
                setSelectedGen('all');
                setSearchQuery('');
              }}
              className="text-[#ff5520] hover:underline cursor-pointer font-sans text-xs uppercase font-bold tracking-wider"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Episode Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEpisodes.map((ep) => {
            const isPlaying = playingId === ep.id;
            const isCopied = copiedId === ep.id;

            return (
              <div
                key={ep.id}
                className={`group relative rounded-3xl border p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                  isDark
                    ? 'bg-neutral-900/60 hover:bg-neutral-900 border-white/10 hover:border-orange-500/40 shadow-lg'
                    : 'bg-white border-neutral-200/90 hover:border-[#ff5520]/50 shadow-md hover:shadow-2xl'
                }`}
              >
                <div className="space-y-4">
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#ff5520]/15 text-[#ff5520] border border-[#ff5520]/25">
                      {ep.format}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
                      <Calendar className="w-3 h-3" />
                      <span>{ep.date}</span>
                    </div>
                  </div>

                  {/* Title & Episode Number */}
                  <div>
                    <span className="block text-xs font-black text-orange-400 uppercase tracking-widest mb-1">
                      Episode {ep.episodeNumber} {ep.guest && `· ft. ${ep.guest}`}
                    </span>
                    <h3
                      className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight group-hover:text-[#ff5520] transition-colors leading-snug"
                      style={{ color: isDark ? '#ffffff' : '#0f172a' }}
                    >
                      {ep.title}
                    </h3>
                  </div>

                  {/* Summary */}
                  <p
                    className="text-xs sm:text-[13px] leading-relaxed line-clamp-3"
                    style={{ color: isDark ? '#9ca3af' : '#4b5563' }}
                  >
                    {ep.summary}
                  </p>
                </div>

                {/* Card Controls & Platform Links */}
                <div className="pt-5 mt-5 border-t border-neutral-500/10 space-y-3">
                  {/* Audio preview button if audio stream exists */}
                  {ep.audioUrl && (
                    <button
                      onClick={() => handleToggleAudio(ep)}
                      className={`w-full py-2.5 px-4 rounded-xl flex items-center justify-between text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        isPlaying
                          ? 'bg-[#ff5520] text-white shadow-md shadow-orange-500/30'
                          : isDark
                          ? 'bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-white/10'
                          : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {isPlaying ? (
                          <>
                            <Pause className="w-3.5 h-3.5" />
                            <span>Listening Now</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>Preview Episode ({ep.duration})</span>
                          </>
                        )}
                      </span>
                      {isPlaying ? (
                        <div className="flex items-center gap-0.5">
                          <span className="w-1 h-3 bg-white rounded-full animate-pulse" />
                          <span className="w-1 h-4 bg-white rounded-full animate-pulse delay-75" />
                          <span className="w-1 h-2 bg-white rounded-full animate-pulse delay-150" />
                        </div>
                      ) : (
                        <Headphones className="w-3.5 h-3.5 text-neutral-400" />
                      )}
                    </button>
                  )}

                  {/* External Platform Links */}
                  <div className="flex items-center justify-between gap-2 pt-1 text-xs">
                    <div className="flex items-center gap-3">
                      <a
                        href={ep.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-[#1DB954] transition-colors flex items-center gap-1 font-semibold"
                        title="Listen on Spotify"
                      >
                        <SpotifyIcon className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>Spotify</span>
                      </a>
                      <a
                        href={ep.appleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-[#872ec4] transition-colors flex items-center gap-1 font-semibold"
                        title="Listen on Apple Podcasts"
                      >
                        <ApplePodcastsIcon className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>Apple</span>
                      </a>
                      {ep.youtubeUrl && (
                        <a
                          href={ep.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-400 hover:text-[#FF0000] transition-colors flex items-center gap-1 font-semibold"
                          title="Watch on YouTube"
                        >
                          <YouTubeIcon variant="color" className="w-3.5 h-3.5 flex-shrink-0" />
                          <span>YouTube</span>
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => handleCopyLink(ep.spotifyUrl, ep.id)}
                      title="Copy link"
                      className="p-1.5 rounded-lg text-neutral-400 hover:text-white transition-colors cursor-pointer hover:bg-white/5"
                    >
                      {isCopied ? (
                        <Check className="w-3.5 h-3.5 text-green-400" />
                      ) : (
                        <Share2 className="w-3.5 h-3.5" />
                      )}
                    </button>
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
