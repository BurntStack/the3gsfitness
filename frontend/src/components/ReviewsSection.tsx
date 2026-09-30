import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  avatar: string;
  quote: string;
  rating: number;
}

export const ReviewsSection: React.FC<{ isDark?: boolean }> = ({ isDark = true }) => {
  const reviews: Review[] = [
    {
      id: 1,
      name: 'Emily H.',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80',
      quote: "I've been a member of the3gsfitness for over a year, and I can't imagine my fitness routine without it. The group classes are my favorite — they're challenging, fun, and led by enthusiastic instructors.",
      rating: 5,
    },
    {
      id: 2,
      name: 'Alexandra T.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
      quote: "Joining the3gsfitness was the best decision I made for my fitness journey. The trainers are so supportive and knowledgeable. The community here is incredible, making every workout enjoyable.",
      rating: 5,
    },
    {
      id: 3,
      name: 'Marcus K.',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80',
      quote: "The personalized hypertrophy programming took my deadlift and functional strength to heights I never reached on my own. Facilities are immaculately clean.",
      rating: 5,
    },
    {
      id: 4,
      name: 'David L.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
      quote: "Top-tier coaching and genuine accountability. Even on days when motivation is low, the energy here pushes you forward. Best gym investment ever.",
      rating: 5,
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [selectedAvatarId, setSelectedAvatarId] = useState(1);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Get current pair of reviews for 2-card desktop view
  const currentReview1 = reviews[startIndex];
  const currentReview2 = reviews[(startIndex + 1) % reviews.length];

  return (
    <section
      id="reviews"
      className="w-full py-16 md:py-24 transition-colors duration-500 border-t"
      style={{
        backgroundColor: isDark ? '#08090d' : '#f8f6f2',
        borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <p
            className="text-xs md:text-sm font-bold tracking-wider uppercase mb-1"
            style={{ color: isDark ? '#ff5520' : '#4b5563' }}
          >
            REVIEWS
          </p>
          <h2
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight"
            style={{ color: isDark ? '#ffffff' : '#111827' }}
          >
            FROM YOU
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: 4 Clustered Avatars */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72">
              
              {/* Avatar 1: Top-Left (Bearded man) */}
              <button
                type="button"
                onClick={() => {
                  setSelectedAvatarId(3);
                  setStartIndex(2);
                }}
                className={`absolute top-0 left-4 w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden transition-all duration-300 ${
                  selectedAvatarId === 3
                    ? 'ring-4 ring-[#ff5520] scale-105 shadow-xl'
                    : 'ring-2 ring-neutral-200 hover:ring-[#ff5520] opacity-90'
                }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80"
                  alt="Member Marcus"
                  className="w-full h-full object-cover"
                />
              </button>

              {/* Avatar 2: Top-Right (Blond athletic man) */}
              <button
                type="button"
                onClick={() => {
                  setSelectedAvatarId(4);
                  setStartIndex(3);
                }}
                className={`absolute top-4 right-2 w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden transition-all duration-300 ${
                  selectedAvatarId === 4
                    ? 'ring-4 ring-[#ff5520] scale-105 shadow-xl'
                    : 'ring-2 ring-neutral-200 hover:ring-[#ff5520] opacity-90'
                }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80"
                  alt="Member David"
                  className="w-full h-full object-cover"
                />
              </button>

              {/* Avatar 3: Bottom-Left (Brunette woman) */}
              <button
                type="button"
                onClick={() => {
                  setSelectedAvatarId(1);
                  setStartIndex(0);
                }}
                className={`absolute bottom-2 left-10 w-26 h-26 sm:w-28 sm:h-28 rounded-full overflow-hidden transition-all duration-300 ${
                  selectedAvatarId === 1
                    ? 'ring-4 ring-[#ff5520] scale-105 shadow-xl'
                    : 'ring-2 ring-neutral-200 hover:ring-[#ff5520] opacity-90'
                }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80"
                  alt="Member Emily"
                  className="w-full h-full object-cover"
                />
              </button>

              {/* Avatar 4: Bottom-Right (Dark-haired man) */}
              <button
                type="button"
                onClick={() => {
                  setSelectedAvatarId(2);
                  setStartIndex(1);
                }}
                className={`absolute bottom-0 right-6 w-20 h-20 sm:w-22 sm:h-22 rounded-full overflow-hidden transition-all duration-300 ${
                  selectedAvatarId === 2
                    ? 'ring-4 ring-[#ff5520] scale-105 shadow-xl'
                    : 'ring-2 ring-neutral-200 hover:ring-[#ff5520] opacity-90'
                }`}
              >
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80"
                  alt="Member Alexandra"
                  className="w-full h-full object-cover"
                />
              </button>

            </div>
          </div>

          {/* Right Column: Testimonial Cards & Carousel Controls */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* 2 Testimonial Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              
              {/* Card 1 */}
              <div
                className={`rounded-[24px] p-6 sm:p-7 border transition-all flex flex-col justify-between ${
                  isDark
                    ? 'bg-neutral-900/80 border-white/10 shadow-lg text-white'
                    : 'bg-white border-neutral-200 shadow-sm hover:shadow-md text-neutral-900'
                }`}
              >
                <div>
                  {/* Card Header: Name Pill + Double Quote */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-4 py-1.5 rounded-full border text-xs sm:text-sm font-bold ${
                        isDark
                          ? 'border-white/10 text-white bg-white/5'
                          : 'border-neutral-300 text-neutral-800 bg-neutral-50/50'
                      }`}
                    >
                      {currentReview1.name}
                    </span>
                    {/* Orange Double Quote Icon */}
                    <div className="text-[#ff5520] font-serif font-black text-3xl leading-none select-none tracking-tight">
                      //
                    </div>
                  </div>

                  <p
                    className="text-xs sm:text-sm leading-relaxed font-normal"
                    style={{ color: isDark ? '#e5e7eb' : '#4b5563' }}
                  >
                    "{currentReview1.quote}"
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div
                className={`rounded-[24px] p-6 sm:p-7 border transition-all flex flex-col justify-between ${
                  isDark
                    ? 'bg-neutral-900/80 border-white/10 shadow-lg text-white'
                    : 'bg-white border-neutral-200 shadow-sm hover:shadow-md text-neutral-900'
                }`}
              >
                <div>
                  {/* Card Header: Name Pill + Subtle Quote */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-4 py-1.5 rounded-full border text-xs sm:text-sm font-bold ${
                        isDark
                          ? 'border-white/10 text-white bg-white/5'
                          : 'border-neutral-300 text-neutral-800 bg-neutral-50/50'
                      }`}
                    >
                      {currentReview2.name}
                    </span>
                    {/* Light Quote Icon */}
                    <div
                      className="font-serif font-black text-3xl leading-none select-none tracking-tight"
                      style={{ color: isDark ? 'rgba(255,255,255,0.2)' : '#d1d5db' }}
                    >
                      //
                    </div>
                  </div>

                  <p
                    className="text-xs sm:text-sm leading-relaxed font-normal"
                    style={{ color: isDark ? '#e5e7eb' : '#4b5563' }}
                  >
                    "{currentReview2.quote}"
                  </p>
                </div>
              </div>

            </div>

            {/* Pagination Controls */}
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous review"
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors cursor-pointer ${
                  isDark
                    ? 'border-white/20 text-white hover:border-[#ff5520] hover:text-[#ff5520]'
                    : 'border-neutral-300 text-neutral-700 hover:border-neutral-900 hover:text-neutral-950'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next review"
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors cursor-pointer ${
                  isDark
                    ? 'border-white/20 text-white hover:border-[#ff5520] hover:text-[#ff5520]'
                    : 'border-neutral-300 text-neutral-700 hover:border-neutral-900 hover:text-neutral-950'
                }`}
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
