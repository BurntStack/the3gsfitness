import React, { useState, useRef } from 'react';
import {
  BookOpen,
  Headphones,
  ExternalLink,
  Play,
  Pause,
  Calendar,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Share2,
  Check
} from 'lucide-react';
import { SpotifyIcon } from './BrandIcons';

interface BlogSectionProps {
  isDark?: boolean;
  onBackToHome?: () => void;
}

interface BlogPost {
  id: string;
  title: string;
  episode?: string;
  date: string;
  category: string;
  summary: string;
  author: string;
  readTime: string;
  libsynUrl: string;
  audioUrl?: string;
  featured?: boolean;
  image?: string;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ isDark = true, onBackToHome }) => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // The official featured blog post directly from https://sites.libsyn.com/503628/blog
  const featuredBlog: BlogPost = {
    id: 'libsyn-primary-blog',
    title: "The 3 G's Fitness Podcast",
    episode: 'Foundational Series',
    date: 'May 3, 2024',
    category: 'Evolution of Fitness',
    summary:
      'The 3 Generations of Fitness offers a unique perspective by bringing together personal trainers from three different generations: baby boomer, millennial, and Generation Z. Each episode delves into various fitness topics, providing insights, experiences, and techniques tailored to different age groups and lifestyles. Join us as we explore the evolution of fitness through three distinct generational lenses.',
    author: 'Coach Michael · Coach Cisco · Coach Kael',
    readTime: '4 min read',
    libsynUrl: 'https://sites.libsyn.com/503628/the-3-gs-fitness-podcast',
    image: '/blog/3gs-blog-cover.jpg',
    featured: true,
  };

  // Curated articles & podcast episodes from the Libsyn archive
  const blogList: BlogPost[] = [
    {
      id: 'ep-120',
      title: 'Body Positivity: Self-Love or Ignoring Your Health?',
      episode: 'Episode 120',
      date: 'Sept 27, 2026',
      category: 'Health & Mindset',
      summary:
        'The 3Gs dive into the nuanced balance between self-acceptance, physical longevity, and medical realities across three generational viewpoints.',
      author: 'Michael, Cisco & Kael',
      readTime: '38 min episode',
      libsynUrl:
        'https://5fe3e3ec-7084-49b4-9da2-0fd5cb24195f.libsyn.com/body-positivity-self-love-or-ignoring-your-health-the-3gs-fitness-podcast-ep-120',
      audioUrl:
        'https://dts.podtrac.com/redirect.mp3/traffic.libsyn.com/secure/5fe3e3ec-7084-49b4-9da2-0fd5cb24195f/Ep._120_BodyPositivity.mp3?dest-id=4313883',
    },
    {
      id: 'ep-119',
      title: "Sports Massage, Injuries & Recovery: Why Harder Isn't Always Better",
      episode: 'Episode 119 · ft. Robert Torres',
      date: 'Sept 20, 2026',
      category: 'Therapy & Recovery',
      summary:
        'Soft tissue therapist Robert Torres joins the 3Gs with nearly 20 years of sports therapy experience to explain why strategic recovery beats aggressive overworking.',
      author: 'Guest ft. Robert Torres',
      readTime: '45 min episode',
      libsynUrl:
        'https://5fe3e3ec-7084-49b4-9da2-0fd5cb24195f.libsyn.com/sports-massage-injuries-recovery-why-harder-isnt-always-better-ft-robert-torres-ep-119',
      audioUrl:
        'https://dts.podtrac.com/redirect.mp3/traffic.libsyn.com/secure/5fe3e3ec-7084-49b4-9da2-0fd5cb24195f/Ep._119_Robert_Torres_Audio_Final.mp3?dest-id=4313883',
    },
    {
      id: 'ep-118',
      title: 'Does Weed Help or Hurt Your Fitness?',
      episode: 'Episode 118',
      date: 'Sept 13, 2026',
      category: 'Lifestyle & Recovery',
      summary:
        'Can cannabis fit into a high-performance training lifestyle? Kael, Cisco, and Mike debate marijuana impact on appetite, sleep cycles, and muscular hypertrophy.',
      author: 'Michael, Cisco & Kael',
      readTime: '41 min episode',
      libsynUrl:
        'https://5fe3e3ec-7084-49b4-9da2-0fd5cb24195f.libsyn.com/does-weed-help-or-hurt-your-fitness-the-3gs-fitness-podcast-ep-118',
      audioUrl:
        'https://dts.podtrac.com/redirect.mp3/traffic.libsyn.com/secure/5fe3e3ec-7084-49b4-9da2-0fd5cb24195f/Ep._118_Weed_Audio.mp3?dest-id=4313883',
    },
    {
      id: 'ep-117',
      title: 'What Great Coaches Do Differently',
      episode: 'Episode 117 · ft. Coach Jack Noel',
      date: 'Sept 06, 2026',
      category: 'Strength & Conditioning',
      summary:
        'Long Beach State S&C Coach Jack Noel returns to discuss the specific coaching habits, cueing precision, and empathy that separate good trainers from legends.',
      author: 'Guest ft. Jack Noel',
      readTime: '52 min episode',
      libsynUrl:
        'https://5fe3e3ec-7084-49b4-9da2-0fd5cb24195f.libsyn.com/what-great-coaches-do-differently-ft-coach-jack-noel-the-3gs-fitness-podcast-ep-117',
      audioUrl:
        'https://dts.podtrac.com/redirect.mp3/traffic.libsyn.com/secure/5fe3e3ec-7084-49b4-9da2-0fd5cb24195f/Ep._117_JackNoelGreatCoach.mp3?dest-id=4313883',
    },
    {
      id: 'ep-114',
      title: "Want a Celebrity Physique? Here's What It Really Takes",
      episode: 'Episode 114',
      date: 'Aug 16, 2026',
      category: 'Physique & Nutrition',
      summary:
        'Thor, Creed, Wonder Woman: the look is iconic, but the strict water cuts, grueling caloric manipulation, and behind-the-scenes realities are rarely discussed.',
      author: 'Michael, Cisco & Kael',
      readTime: '36 min episode',
      libsynUrl:
        'https://5fe3e3ec-7084-49b4-9da2-0fd5cb24195f.libsyn.com/want-a-celebrity-physique-heres-what-it-really-takes-the-3gs-fitness-podcast-ep-114',
      audioUrl:
        'https://dts.podtrac.com/redirect.mp3/traffic.libsyn.com/secure/5fe3e3ec-7084-49b4-9da2-0fd5cb24195f/Ep._114_GuessTheActorCelebPhysique_2026.08.16.mp3?dest-id=4313883',
    },
    {
      id: 'ep-113',
      title: 'Why Are We Still Obese With More Fitness Advice Than Ever?',
      episode: 'Episode 113',
      date: 'Aug 09, 2026',
      category: 'Public Health & Habits',
      summary:
        'Coach Michael brings an eye-opening statistic that sparks an intense, candid roundtable on why endless digital fitness content often produces paralysis by analysis.',
      author: 'Michael, Cisco & Kael',
      readTime: '44 min episode',
      libsynUrl:
        'https://5fe3e3ec-7084-49b4-9da2-0fd5cb24195f.libsyn.com/why-are-we-still-obese-with-more-fitness-advice-than-ever-the-3gs-fitness-podcast-ep-113',
      audioUrl:
        'https://dts.podtrac.com/redirect.mp3/traffic.libsyn.com/secure/5fe3e3ec-7084-49b4-9da2-0fd5cb24195f/Ep._113_ObeseWithInfo_2026.08.09.mp3?dest-id=4313883',
    },
  ];

  const handleToggleAudio = (post: BlogPost) => {
    if (!post.audioUrl) return;

    if (playingId === post.id) {
      audioRef.current?.pause();
      setPlayingId(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      const audio = new Audio(post.audioUrl);
      audioRef.current = audio;
      setPlayingId(post.id);
      audio.play().catch((err) => {
        console.warn('Audio playback error:', err);
        setPlayingId(null);
      });
      audio.onended = () => setPlayingId(null);
    }
  };

  const handleCopyLink = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section
      id="blog"
      className={`relative overflow-hidden transition-colors duration-500 border-t ${
        onBackToHome ? 'pt-32 sm:pt-40 pb-24 sm:pb-32 min-h-screen' : 'py-24 sm:py-32'
      }`}
      style={{
        backgroundColor: isDark ? '#08090d' : '#f4f3f0',
        borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
      }}
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-[140px] opacity-20"
          style={{ backgroundColor: '#ff5520' }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[160px] opacity-10"
          style={{ backgroundColor: isDark ? '#ff7a45' : '#e06020' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Home Button when on dedicated Blog Page */}
        {onBackToHome && (
          <div className="mb-8">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-[#ff5520] hover:text-white bg-[#ff5520]/10 hover:bg-[#ff5520] border border-[#ff5520]/20 transition-all cursor-pointer shadow-sm group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </button>
          </div>
        )}

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-20">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#ff5520]/10 text-[#ff5520] border border-[#ff5520]/20">
              <BookOpen className="w-3.5 h-3.5" />
              Official 3Gs Blog & Podcast
            </div>
            <h2
              className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight"
              style={{ color: isDark ? '#ffffff' : '#0f172a' }}
            >
              Three Generations. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5520] via-orange-400 to-[#ff7a45]">
                One Unfiltered Voice.
              </span>
            </h2>
            <p
              className="text-sm sm:text-base leading-relaxed font-normal"
              style={{ color: isDark ? '#9ca3af' : '#4b5563' }}
            >
              Direct insights, training debates, and intergenerational wisdom from our official Libsyn
              blog & podcast archive.
            </p>
          </div>

          {/* External Platform Links */}
          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href="https://sites.libsyn.com/503628/blog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#ff5520] hover:bg-[#e04412] shadow-lg shadow-orange-500/20 transition-all hover:scale-105"
            >
              <span>Visit Libsyn Blog</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://open.spotify.com/show/74QOLPHydOpE0cOMvwtrna"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 border ${
                isDark
                  ? 'bg-neutral-900/80 hover:bg-neutral-800 text-white border-white/10'
                  : 'bg-white hover:bg-neutral-100 text-neutral-800 border-neutral-200 shadow-sm'
              }`}
            >
              <SpotifyIcon className="w-3.5 h-3.5 flex-shrink-0 text-[#1DB954]" />
              <span>Spotify</span>
            </a>

            <a
              href="http://feeds.libsyn.com/503628/rss"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all hover:scale-105 border ${
                isDark
                  ? 'bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 border-white/10'
                  : 'bg-white hover:bg-neutral-100 text-neutral-600 border-neutral-200 shadow-sm'
              }`}
            >
              <span>RSS Feed</span>
            </a>
          </div>
        </div>

        {/* Featured Blog Highlight Card (Direct from https://sites.libsyn.com/503628/blog) */}
        <div
          className={`relative rounded-[32px] overflow-hidden border p-6 sm:p-8 lg:p-12 mb-16 shadow-2xl transition-all ${
            isDark
              ? 'bg-gradient-to-br from-neutral-900/90 via-neutral-900/50 to-neutral-950 border-white/10'
              : 'bg-white border-neutral-200/80 shadow-orange-500/5'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Artwork / Media Image */}
            <div className="lg:col-span-5 relative group">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-950 border border-white/10 shadow-xl">
                <img
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 font-bold uppercase text-[11px] text-orange-400">
                    <Sparkles className="w-3 h-3 text-[#ff5520]" />
                    Featured Blog Post
                  </span>
                  <span className="font-mono text-neutral-300 text-[11px]">Libsyn Archive</span>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#ff5520]/15 text-[#ff5520] border border-[#ff5520]/30">
                  {featuredBlog.category}
                </span>
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-medium"
                  style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
                >
                  <Calendar className="w-3.5 h-3.5" />
                  {featuredBlog.date}
                </span>
                <span
                  className="text-xs font-semibold"
                  style={{ color: isDark ? '#a3a3a3' : '#737373' }}
                >
                  · {featuredBlog.readTime}
                </span>
              </div>

              <div>
                <h3
                  className="font-display font-black text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight mb-2 leading-tight"
                  style={{ color: isDark ? '#ffffff' : '#0f172a' }}
                >
                  {featuredBlog.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#ff5520] uppercase tracking-wider">
                  Hosted by {featuredBlog.author}
                </p>
              </div>

              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: isDark ? '#d1d5db' : '#374151' }}
              >
                {featuredBlog.summary}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={featuredBlog.libsynUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider text-white bg-[#ff5520] hover:bg-[#e04412] shadow-lg shadow-orange-500/25 transition-all hover:scale-105"
                >
                  <span>Read Article on Libsyn</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href="https://sites.libsyn.com/503628/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${
                    isDark
                      ? 'border-white/15 text-neutral-200 hover:bg-white/5 hover:text-white'
                      : 'border-neutral-300 text-neutral-800 hover:bg-neutral-100 shadow-sm'
                  }`}
                >
                  <BookOpen className="w-4 h-4 text-[#ff5520]" />
                  <span>Browse Libsyn Blog Portal</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Blog & Episode Archive Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3
              className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight"
              style={{ color: isDark ? '#ffffff' : '#0f172a' }}
            >
              Latest Articles & Episodes
            </h3>
            <span
              className="text-xs uppercase tracking-wider font-semibold"
              style={{ color: isDark ? '#9ca3af' : '#6b7280' }}
            >
              Showing 6 of 120+ episodes
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogList.map((post) => {
              const isPlaying = playingId === post.id;
              const isCopied = copiedId === post.id;

              return (
                <div
                  key={post.id}
                  className={`group relative rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                    isDark
                      ? 'bg-neutral-900/60 hover:bg-neutral-900 border-white/10 hover:border-orange-500/40'
                      : 'bg-white hover:bg-white border-neutral-200/90 hover:border-[#ff5520]/50 shadow-sm hover:shadow-xl'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Top Meta Header */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#ff5520]/10 text-[#ff5520] border border-[#ff5520]/20">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                        <Calendar className="w-3 h-3" />
                        <span className="text-[11px] font-mono">{post.date}</span>
                      </div>
                    </div>

                    {/* Post Title */}
                    <div>
                      <span className="block text-[11px] font-bold text-orange-400 uppercase tracking-wider mb-1">
                        {post.episode}
                      </span>
                      <h4
                        className="font-display font-black text-lg sm:text-xl uppercase tracking-tight group-hover:text-[#ff5520] transition-colors leading-snug"
                        style={{ color: isDark ? '#ffffff' : '#111827' }}
                      >
                        {post.title}
                      </h4>
                    </div>

                    {/* Summary */}
                    <p
                      className="text-xs sm:text-[13px] leading-relaxed line-clamp-3"
                      style={{ color: isDark ? '#9ca3af' : '#4b5563' }}
                    >
                      {post.summary}
                    </p>
                  </div>

                  {/* Card Bottom Controls */}
                  <div className="pt-5 mt-5 border-t border-neutral-500/10 space-y-3">
                    {/* Audio Player Action if audio exists */}
                    {post.audioUrl && (
                      <button
                        onClick={() => handleToggleAudio(post)}
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
                              <span>Listen to Audio Snippet</span>
                            </>
                          )}
                        </span>
                        {isPlaying && (
                          <div className="flex items-center gap-0.5">
                            <span className="w-1 h-3 bg-white rounded-full animate-pulse" />
                            <span className="w-1 h-4 bg-white rounded-full animate-pulse delay-75" />
                            <span className="w-1 h-2 bg-white rounded-full animate-pulse delay-150" />
                          </div>
                        )}
                        {!isPlaying && <Headphones className="w-3.5 h-3.5 text-neutral-400" />}
                      </button>
                    )}

                    {/* Read & Share Links */}
                    <div className="flex items-center justify-between gap-2 pt-1">
                      <a
                        href={post.libsynUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ff5520] hover:underline"
                      >
                        <span>Read on Libsyn</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </a>

                      <button
                        onClick={() => handleCopyLink(post.libsynUrl, post.id)}
                        title="Copy article link"
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

        {/* Bottom Banner to Libsyn Host */}
        <div
          className={`mt-14 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border ${
            isDark
              ? 'bg-neutral-950 border-white/10 text-white'
              : 'bg-neutral-900 border-neutral-800 text-white shadow-xl'
          }`}
        >
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[11px] font-bold text-[#ff5520] uppercase tracking-wider">
              Explore the Full Libsyn Catalog
            </span>
            <h4 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight">
              120+ Episodes & Articles Across 3 Generations
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-xl">
              From powerlifting and hypertrophy to rehabilitation and nutrition science, dive deeper into
              our library.
            </p>
          </div>

          <a
            href="https://sites.libsyn.com/503628/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-black uppercase tracking-wider text-black bg-white hover:bg-neutral-200 transition-all hover:scale-105"
          >
            <span>Visit Libsyn Blog Archive</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
