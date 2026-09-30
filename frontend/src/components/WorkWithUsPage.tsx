import React, { useState } from 'react';
import {
  ArrowLeft,
  Mic2,
  Handshake,
  Dumbbell,
  CheckCircle2,
  Send,
  Mail,
  Instagram,
  Sparkles
} from 'lucide-react';

interface WorkWithUsPageProps {
  isDark?: boolean;
  onBackToHome?: () => void;
  initialPath?: 'guest' | 'sponsor' | 'train';
  selectedCoachId?: 'mike' | 'cisco' | 'kael' | null;
}

export const WorkWithUsPage: React.FC<WorkWithUsPageProps> = ({
  isDark = true,
  onBackToHome,
  initialPath = 'guest',
  selectedCoachId = 'mike',
}) => {
  const [activeTab, setActiveTab] = useState<'guest' | 'sponsor' | 'train'>(initialPath);
  const [targetCoach, setTargetCoach] = useState<'mike' | 'cisco' | 'kael'>(
    selectedCoachId || 'mike'
  );
  const [submitted, setSubmitted] = useState(false);

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topicOrBrand, setTopicOrBrand] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setTopicOrBrand('');
    setMessage('');
    setSubmitted(false);
  };

  return (
    <div
      className="min-h-screen pt-28 sm:pt-36 pb-24 transition-colors duration-500"
      style={{
        backgroundColor: isDark ? '#08090d' : '#f8f6f2',
        color: isDark ? '#ffffff' : '#111827',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
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

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#ff5520]/10 text-[#ff5520] border border-[#ff5520]/20 mb-3">
              <Handshake className="w-3.5 h-3.5" />
              Collaborate & Connect
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight">
              Work With Us
            </h1>
            <p
              className="text-sm sm:text-base mt-2 font-normal leading-relaxed"
              style={{ color: isDark ? '#9ca3af' : '#4b5563' }}
            >
              Three clear paths to connect with The 3Gs Fitness Podcast: pitch to be a guest, partner as
              a brand sponsor, or inquire for 1-on-1 coaching with a specific coach.
            </p>
          </div>
        </div>

        {/* 3 Pathway Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button
            onClick={() => {
              setActiveTab('guest');
              setSubmitted(false);
            }}
            className={`p-6 rounded-3xl border text-left transition-all cursor-pointer ${
              activeTab === 'guest'
                ? 'bg-[#ff5520] text-white border-[#ff5520] shadow-xl shadow-orange-500/20 scale-[1.02]'
                : isDark
                ? 'bg-neutral-900/60 hover:bg-neutral-900 text-neutral-300 border-white/10'
                : 'bg-white hover:bg-neutral-50 text-neutral-800 border-neutral-200 shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <Mic2 className={`w-6 h-6 ${activeTab === 'guest' ? 'text-white' : 'text-[#ff5520]'}`} />
              <span className={`text-[10px] font-mono uppercase tracking-wider font-bold ${activeTab === 'guest' ? 'text-white/80' : 'text-neutral-400'}`}>
                Path 01
              </span>
            </div>
            <h3 className="font-display font-black text-lg sm:text-xl uppercase tracking-tight">
              Be a Guest
            </h3>
            <p className={`text-xs mt-1 leading-relaxed ${activeTab === 'guest' ? 'text-white/90' : 'text-neutral-400'}`}>
              Have a strong fitness opinion, unique sports background, or recovery expertise to share?
            </p>
          </button>

          <button
            onClick={() => {
              setActiveTab('sponsor');
              setSubmitted(false);
            }}
            className={`p-6 rounded-3xl border text-left transition-all cursor-pointer ${
              activeTab === 'sponsor'
                ? 'bg-[#ff5520] text-white border-[#ff5520] shadow-xl shadow-orange-500/20 scale-[1.02]'
                : isDark
                ? 'bg-neutral-900/60 hover:bg-neutral-900 text-neutral-300 border-white/10'
                : 'bg-white hover:bg-neutral-50 text-neutral-800 border-neutral-200 shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <Handshake className={`w-6 h-6 ${activeTab === 'sponsor' ? 'text-white' : 'text-[#ff5520]'}`} />
              <span className={`text-[10px] font-mono uppercase tracking-wider font-bold ${activeTab === 'sponsor' ? 'text-white/80' : 'text-neutral-400'}`}>
                Path 02
              </span>
            </div>
            <h3 className="font-display font-black text-lg sm:text-xl uppercase tracking-tight">
              Partner / Sponsor
            </h3>
            <p className={`text-xs mt-1 leading-relaxed ${activeTab === 'sponsor' ? 'text-white/90' : 'text-neutral-400'}`}>
              Show sponsorship, honest product/equipment reviews, and cross-promotional collaborations.
            </p>
          </button>

          <button
            onClick={() => {
              setActiveTab('train');
              setSubmitted(false);
            }}
            className={`p-6 rounded-3xl border text-left transition-all cursor-pointer ${
              activeTab === 'train'
                ? 'bg-[#ff5520] text-white border-[#ff5520] shadow-xl shadow-orange-500/20 scale-[1.02]'
                : isDark
                ? 'bg-neutral-900/60 hover:bg-neutral-900 text-neutral-300 border-white/10'
                : 'bg-white hover:bg-neutral-50 text-neutral-800 border-neutral-200 shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <Dumbbell className={`w-6 h-6 ${activeTab === 'train' ? 'text-white' : 'text-[#ff5520]'}`} />
              <span className={`text-[10px] font-mono uppercase tracking-wider font-bold ${activeTab === 'train' ? 'text-white/80' : 'text-neutral-400'}`}>
                Path 03
              </span>
            </div>
            <h3 className="font-display font-black text-lg sm:text-xl uppercase tracking-tight">
              Train With a Coach
            </h3>
            <p className={`text-xs mt-1 leading-relaxed ${activeTab === 'train' ? 'text-white/90' : 'text-neutral-400'}`}>
              Direct 1-on-1 personal training inquiries routed to the coach of your choice.
            </p>
          </button>
        </div>

        {/* Selected Form Container */}
        <div
          className={`p-6 sm:p-10 lg:p-12 rounded-[36px] border ${
            isDark ? 'bg-neutral-900/70 border-white/10 shadow-2xl' : 'bg-white border-neutral-200 shadow-xl'
          }`}
        >
          {submitted ? (
            <div className="text-center py-12 space-y-4 max-w-md mx-auto">
              <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display font-black text-2xl uppercase tracking-tight">
                Inquiry Received!
              </h3>
              <p
                className="text-xs sm:text-sm font-normal"
                style={{ color: isDark ? '#9ca3af' : '#4b5563' }}
              >
                Thank you for reaching out. We review all podcast guest pitches, sponsorship inquiries,
                and coaching requests every week.
              </p>
              <button
                onClick={resetForm}
                className="mt-4 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#ff5520] hover:bg-[#e04412] transition-colors"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
              {/* Conditional Subtitle & Explainer */}
              <div className="border-b border-neutral-500/15 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#ff5520] block mb-1">
                  {activeTab === 'guest'
                    ? 'Pitch to be a Podcast Guest'
                    : activeTab === 'sponsor'
                    ? 'Sponsorship & Brand Collaboration'
                    : '1-on-1 Personal Training Inquiry'}
                </span>
                <p className="text-xs text-neutral-400">
                  {activeTab === 'guest'
                    ? 'We love hosting sports medicine professionals, elite lifters, and trainers with distinct viewpoints.'
                    : activeTab === 'sponsor'
                    ? 'Align your brand with authentic fitness debates heard weekly across 120+ episodes.'
                    : 'Select which coach matches your training philosophy to route your inquiry directly to their inbox.'}
                </p>
              </div>

              {/* Coach Selector if Path is 'Train With a Coach' */}
              {activeTab === 'train' && (
                <div className="space-y-2">
                  <label className="block text-xs font-black uppercase tracking-wider text-neutral-400">
                    Select Your Coach:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      {
                        id: 'mike',
                        name: 'Coach Michael',
                        gen: 'The Boomer',
                        focus: 'Old School Grit & Heavy Basics',
                      },
                      {
                        id: 'cisco',
                        name: 'Coach Cisco',
                        gen: 'The Millennial',
                        focus: 'High Performance & Mobility',
                      },
                      {
                        id: 'kael',
                        name: 'Coach Kael',
                        gen: 'The Gen Z',
                        focus: 'Athletic Conditioning & Mindset',
                      },
                    ].map((c) => {
                      const selected = targetCoach === c.id;
                      return (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setTargetCoach(c.id as any)}
                          className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                            selected
                              ? 'bg-[#ff5520]/15 border-[#ff5520] text-[#ff5520]'
                              : isDark
                              ? 'bg-neutral-800/60 border-white/5 text-neutral-300'
                              : 'bg-neutral-50 border-neutral-200 text-neutral-700'
                          }`}
                        >
                          <span className="block font-black text-xs uppercase">{c.name}</span>
                          <span className="block text-[10px] text-neutral-400">{c.gen}</span>
                          <span className="block text-[10px] text-neutral-500 mt-1 line-clamp-1">
                            {c.focus}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Name & Email Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Robert Torres"
                    className={`w-full px-4 py-3 rounded-xl text-xs border transition-colors outline-hidden ${
                      isDark
                        ? 'bg-neutral-950 border-white/10 text-white placeholder-neutral-500 focus:border-[#ff5520]'
                        : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-[#ff5520]'
                    }`}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className={`w-full px-4 py-3 rounded-xl text-xs border transition-colors outline-hidden ${
                      isDark
                        ? 'bg-neutral-950 border-white/10 text-white placeholder-neutral-500 focus:border-[#ff5520]'
                        : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-[#ff5520]'
                    }`}
                  />
                </div>
              </div>

              {/* Context Specific Field */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400">
                  {activeTab === 'guest'
                    ? 'Proposed Topic or Perspective *'
                    : activeTab === 'sponsor'
                    ? 'Brand / Company Name & Products *'
                    : 'Your Current Fitness Level & Goals *'}
                </label>
                <input
                  type="text"
                  required
                  value={topicOrBrand}
                  onChange={(e) => setTopicOrBrand(e.target.value)}
                  placeholder={
                    activeTab === 'guest'
                      ? 'e.g. Sports massage, injury prevention, powerlifting longevity'
                      : activeTab === 'sponsor'
                      ? 'e.g. Performance Apparel / Recovery Tool / Supplement'
                      : 'e.g. Looking to increase deadlift & fix shoulder mobility'
                  }
                  className={`w-full px-4 py-3 rounded-xl text-xs border transition-colors outline-hidden ${
                    isDark
                      ? 'bg-neutral-950 border-white/10 text-white placeholder-neutral-500 focus:border-[#ff5520]'
                      : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-[#ff5520]'
                  }`}
                />
              </div>

              {/* Message Details */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Additional Details / Links
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about yourself, links to social/media appearances, or any questions..."
                  className={`w-full px-4 py-3 rounded-xl text-xs border transition-colors outline-hidden resize-none ${
                    isDark
                      ? 'bg-neutral-950 border-white/10 text-white placeholder-neutral-500 focus:border-[#ff5520]'
                      : 'bg-neutral-50 border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:border-[#ff5520]'
                  }`}
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-full text-xs font-black uppercase tracking-wider text-white bg-[#ff5520] hover:bg-[#e04412] shadow-lg shadow-orange-500/25 transition-all hover:scale-[1.01] cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
