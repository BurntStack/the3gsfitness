import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ClassesSection, ClassItem } from './components/ClassesSection';
import { PricingSection } from './components/PricingSection';
import { ReviewsSection } from './components/ReviewsSection';
import { EpisodesPage } from './components/EpisodesPage';
import { CoachesPage } from './components/CoachesPage';
import { WorkWithUsPage } from './components/WorkWithUsPage';
import {
  ThreeGenerationsSection,
  LatestEpisodeEmbed,
  RecentTopicsSection,
  WhereToListenSection,
  FollowTheShowSection,
  WorkWithUsStrip,
} from './components/PodcastFeaturedSections';
import { Footer } from './components/Footer';
import {
  VideoModal,
  OrderModal,
  ContactModal,
  ClassDetailModal,
} from './components/Modals';
import { X } from 'lucide-react';
import { SpotifyIcon, ApplePodcastsIcon, YouTubeIcon } from './components/BrandIcons';

export type AppPage = 'home' | 'episodes' | 'coaches' | 'work-with-us';

export default function App() {
  // ── Page Routing State ('home' | 'episodes' | 'coaches' | 'work-with-us') ──
  const [currentPage, setCurrentPage] = useState<AppPage>('home');
  const [selectedCoachId, setSelectedCoachId] = useState<'mike' | 'cisco' | 'kael' | null>('mike');
  const [listenModalOpen, setListenModalOpen] = useState(false);

  // Sync with URL Hash for seamless back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as AppPage;
      if (['home', 'episodes', 'coaches', 'work-with-us'].includes(hash)) {
        setCurrentPage(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };

    const initialHash = window.location.hash.replace('#', '') as AppPage;
    if (['home', 'episodes', 'coaches', 'work-with-us'].includes(initialHash)) {
      setCurrentPage(initialHash);
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: AppPage) => {
    window.location.hash = `#${page}`;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ── Theme State ──────────────────────────────────────────
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = () => setIsDark((v) => !v);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', 'lite');
    }
  }, [isDark]);

  // ── Modal State ──────────────────────────────────────────
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoTitle, setVideoTitle] = useState('the3gsfitness Performance Session');

  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{
    name: string;
    price: string;
    billing: string;
  } | null>({
    name: 'Monthly Pass',
    price: '$90',
    billing: 'per month',
  });

  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<ClassItem | null>(null);

  const handleOpenHeroVideo = () => {
    setVideoTitle('the3gsfitness State-of-the-Art Training Facility');
    setVideoModalOpen(true);
  };


  const handlePlanSelect = (plan: { name: string; price: string; billing: string }) => {
    setSelectedPlan(plan);
    setOrderModalOpen(true);
  };

  const handleClassSelect = (item: ClassItem) => {
    setSelectedClass(item);
  };

  const handleBookFromClass = (item: ClassItem) => {
    setSelectedClass(null);
    setSelectedPlan({
      name: `${item.title} Trial`,
      price: '$0',
      billing: 'first session free',
    });
    setOrderModalOpen(true);
  };

  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      id="app-root"
      className="min-h-screen flex flex-col selection:bg-[#ff5520] selection:text-white font-sans antialiased transition-colors duration-500"
      style={{
        backgroundColor: isDark ? '#0c0d12' : '#f8f6f2',
        color: isDark ? '#f5f5f5' : '#141414',
      }}
    >
      {/* Sticky Top Navigation */}
      <Navbar
        onOpenContact={() => setContactModalOpen(true)}
        onOpenProfile={() => setListenModalOpen(true)}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Page Content */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <>
            {/* 1. Original Landing Page Hero with Athlete Cutout & 3GS Watermark */}
            <HeroSection
              onOpenVideo={handleOpenHeroVideo}
              onExploreMore={scrollToPricing}
              onOpenCoaches={() => handleNavigate('coaches')}
              isDark={isDark}
            />

            {/* 2. Three Generations, One Conversation (Filter Toggle & Verbatim Bio Hooks) */}
            <ThreeGenerationsSection
              isDark={isDark}
              onNavigate={handleNavigate}
            />

            {/* 3. Latest Episode Embed (Ep. 120 Interactive Player & Platform Links) */}
            <LatestEpisodeEmbed isDark={isDark} />

            {/* 4. Recent Topics (Catalog Highlights & Routing to Episodes) */}
            <RecentTopicsSection
              isDark={isDark}
              onNavigate={handleNavigate}
            />

            {/* 5. Training Classes & Programs Section */}
            <ClassesSection onSelectClass={handleClassSelect} isDark={isDark} />

            {/* Where To Listen (Honest stats & platform badges) */}
            <WhereToListenSection isDark={isDark} />

            {/* Follow The Show (Instagram Reel graphics grid) */}
            <FollowTheShowSection isDark={isDark} />

            {/* Work With Us Strip (3 prompt cards routing directly to Work With Us paths) */}
            <WorkWithUsStrip
              isDark={isDark}
              onNavigate={handleNavigate}
            />

            {/* Membership / Pricing Section */}
            <PricingSection onSelectPlan={handlePlanSelect} isDark={isDark} />

            {/* Reviews Section */}
            <ReviewsSection isDark={isDark} />
          </>
        )}

        {currentPage === 'episodes' && (
          <EpisodesPage
            isDark={isDark}
            onBackToHome={() => handleNavigate('home')}
          />
        )}

        {currentPage === 'coaches' && (
          <CoachesPage
            isDark={isDark}
            onBackToHome={() => handleNavigate('home')}
            onTrainWithCoach={(coachId) => {
              setSelectedCoachId(coachId);
              handleNavigate('work-with-us');
            }}
          />
        )}

        {currentPage === 'work-with-us' && (
          <WorkWithUsPage
            isDark={isDark}
            onBackToHome={() => handleNavigate('home')}
            selectedCoachId={selectedCoachId}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} isDark={isDark} />

      {/* Interactive Modals */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        title={videoTitle}
      />

      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        selectedPlan={selectedPlan}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      <ClassDetailModal
        selectedClass={selectedClass}
        onClose={() => setSelectedClass(null)}
        onBook={handleBookFromClass}
      />

      {/* Quick Listen Modal */}
      {listenModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className={`w-full max-w-md rounded-3xl p-6 sm:p-8 border shadow-2xl relative space-y-6 ${
              isDark ? 'bg-neutral-900 border-white/10 text-white' : 'bg-white border-neutral-200 text-neutral-900'
            }`}
          >
            <button
              onClick={() => setListenModalOpen(false)}
              className="absolute top-5 right-5 p-1.5 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#ff5520] block mb-1">
                The 3Gs Fitness Podcast
              </span>
              <h3 className="font-display font-black text-2xl uppercase tracking-tight">
                Where To Listen
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Stream full episodes on your preferred podcast platform or watch on YouTube.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href="https://open.spotify.com/show/74QOLPHydOpE0cOMvwtrna"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-4 rounded-2xl bg-[#1DB954] hover:bg-[#19a54a] text-black font-black uppercase text-xs tracking-wider flex items-center justify-between transition-all hover:scale-[1.02] shadow-md shadow-green-500/20"
              >
                <span className="flex items-center gap-2.5">
                  <SpotifyIcon className="w-5 h-5 flex-shrink-0" />
                  <span>Listen on Spotify</span>
                </span>
                <span className="text-[10px] font-mono">120+ Episodes</span>
              </a>

              <a
                href="https://podcasts.apple.com/au/podcast/the-3gs-fitness-podcast/id1745821922"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-4 rounded-2xl bg-[#872ec4] hover:bg-[#7322aa] text-white font-black uppercase text-xs tracking-wider flex items-center justify-between transition-all hover:scale-[1.02] shadow-md shadow-purple-500/20"
              >
                <span className="flex items-center gap-2.5">
                  <ApplePodcastsIcon variant="white-badge" className="w-5 h-5 flex-shrink-0" />
                  <span>Listen on Apple Podcasts</span>
                </span>
                <span className="text-[10px] font-mono">Top Rated</span>
              </a>

              <a
                href="https://www.youtube.com/@The3GsFitness"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-4 rounded-2xl bg-[#FF0000] hover:bg-[#d60000] text-white font-black uppercase text-xs tracking-wider flex items-center justify-between transition-all hover:scale-[1.02] shadow-md shadow-red-500/20"
              >
                <span className="flex items-center gap-2.5">
                  <YouTubeIcon variant="white-badge" className="w-5 h-5 flex-shrink-0" />
                  <span>Watch on YouTube</span>
                </span>
                <span className="text-[10px] font-mono">230+ Videos</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
