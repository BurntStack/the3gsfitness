import React from 'react';
import { The3gsLogo } from './The3gsLogo';
import { ArrowUp, Instagram, ExternalLink } from 'lucide-react';
import { SpotifyIcon, ApplePodcastsIcon, YouTubeIcon } from './BrandIcons';

interface FooterProps {
  onNavigate?: (page: 'home' | 'episodes' | 'coaches' | 'work-with-us') => void;
  isDark?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, isDark = true }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: 'home' | 'episodes' | 'coaches' | 'work-with-us') => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <footer
      className={`w-full pt-16 pb-10 border-t transition-colors ${
        isDark
          ? 'bg-[#0c0d12] text-neutral-400 border-neutral-800'
          : 'bg-[#f7f5f0] text-neutral-600 border-neutral-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main 4-Column Grid: 5 + 2 + 3 + 2 = 12 columns */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-14 border-b ${
            isDark ? 'border-neutral-800/80' : 'border-neutral-200'
          }`}
        >
          {/* Column 1: Brand Info (Span 5 - spacious so it never overlaps with Navigation) */}
          <div className="lg:col-span-5 space-y-4 pr-0 lg:pr-6">
            <div className="flex items-center">
              <button
                onClick={() => handleNav('home')}
                className="cursor-pointer bg-transparent border-0 p-0 text-left"
              >
                <The3gsLogo isDark={isDark} />
              </button>
            </div>

            <p className="text-xs sm:text-[13px] leading-relaxed max-w-sm">
              The only fitness podcast spanning 3 generations. 3 Coaches • 3 Perspectives • 3 Generations.
              Real talk, real training, and weekly unfiltered fitness debates.
            </p>

            <div className="pt-1">
              <span className="text-[11px] font-mono text-[#ff5520] block">
                United States · Weekly Releases Since 2021
              </span>
            </div>
          </div>

          {/* Column 2: Navigation (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4
              className={`text-xs font-black uppercase tracking-wider ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}
            >
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#ff5520] transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('episodes')}
                  className="hover:text-[#ff5520] transition-colors cursor-pointer text-left"
                >
                  Episode Library (120+)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('coaches')}
                  className="hover:text-[#ff5520] transition-colors cursor-pointer text-left"
                >
                  The Coaches (Michael, Cisco, Kael)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('work-with-us')}
                  className="hover:text-[#ff5520] transition-colors cursor-pointer text-left"
                >
                  Work With Us (Guest / Sponsor / Train)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Where to Listen (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4
              className={`text-xs font-black uppercase tracking-wider ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}
            >
              Where to Listen
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              <li>
                <a
                  href="https://podcasts.apple.com/au/podcast/the-3gs-fitness-podcast/id1745821922"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:text-[#872ec4] transition-colors flex items-center gap-2 ${
                    isDark ? 'text-neutral-300' : 'text-neutral-700'
                  }`}
                >
                  <ApplePodcastsIcon className="w-4 h-4 flex-shrink-0 drop-shadow-sm" />
                  <span>Apple Podcasts</span>
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/show/74QOLPHydOpE0cOMvwtrna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:text-[#1DB954] transition-colors flex items-center gap-2 ${
                    isDark ? 'text-neutral-300' : 'text-neutral-700'
                  }`}
                >
                  <SpotifyIcon variant="color" className="w-4 h-4 flex-shrink-0" />
                  <span>Spotify</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@The3GsFitness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:text-[#FF0000] transition-colors flex items-center gap-2 ${
                    isDark ? 'text-neutral-300' : 'text-neutral-700'
                  }`}
                >
                  <YouTubeIcon variant="color" className="w-4 h-4 flex-shrink-0" />
                  <span>YouTube Channel</span>
                </a>
              </li>
              <li>
                <a
                  href="https://sites.libsyn.com/503628/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:text-[#ff5520] transition-colors flex items-center gap-2 ${
                    isDark ? 'text-neutral-300' : 'text-neutral-700'
                  }`}
                >
                  <ExternalLink className="w-4 h-4 flex-shrink-0" />
                  <span>Libsyn Blog & Archive</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow The Show (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4
              className={`text-xs font-black uppercase tracking-wider ${
                isDark ? 'text-white' : 'text-neutral-900'
              }`}
            >
              Follow Us
            </h4>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/the3gsfitness/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 border ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-[#ff5520] hover:text-[#ff5520]'
                    : 'bg-black/5 border-black/10 hover:border-[#ff5520] hover:text-[#ff5520] text-neutral-700'
                }`}
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@The3GsFitness"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 border ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-[#FF0000] hover:text-[#FF0000]'
                    : 'bg-black/5 border-black/10 hover:border-[#FF0000] hover:text-[#FF0000] text-neutral-700'
                }`}
                title="YouTube"
              >
                <YouTubeIcon variant="color" className="w-4 h-4 flex-shrink-0" />
              </a>
              <a
                href="https://open.spotify.com/show/74QOLPHydOpE0cOMvwtrna"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 border ${
                  isDark
                    ? 'bg-white/5 border-white/10 hover:border-[#1DB954] hover:text-[#1DB954]'
                    : 'bg-black/5 border-black/10 hover:border-[#1DB954] hover:text-[#1DB954] text-neutral-700'
                }`}
                title="Spotify"
              >
                <SpotifyIcon variant="color" className="w-4 h-4 flex-shrink-0" />
              </a>
            </div>
            <p className="text-[11px] text-neutral-500 font-mono">
              @the3gsfitness
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} The 3Gs Fitness Podcast. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 hover:text-[#ff5520] transition-colors cursor-pointer group"
          >
            <span className="uppercase tracking-wider font-bold text-[11px]">Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
