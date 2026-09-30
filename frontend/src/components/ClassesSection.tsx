import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface ClassItem {
  id: string;
  title: string;
  image: string;
  tag: string;
  stagger?: boolean;
  intensity: string;
  duration: string;
  description: string;
}

interface ClassesSectionProps {
  onSelectClass: (item: ClassItem) => void;
  isDark?: boolean;
}

export const classesData: ClassItem[] = [
  {
    id: 'personal-training',
    title: 'Personal Training',
    image: '/classes/card_1.jpg',
    tag: '1-on-1 Mentorship',
    intensity: 'Customized',
    duration: '60 min',
    description: 'Work directly with an elite certified master trainer. Every movement is tailored to your biomechanics, power output, and physical objectives.',
  },
  {
    id: 'outdoor-classes',
    title: 'Outdoor Classes',
    image: '/classes/card_2.jpg',
    tag: 'Functional Track & Turf',
    intensity: 'High Energy',
    duration: '45 min',
    stagger: true,
    description: 'Breathe open air and push functional conditioning. Sprint drills, kettlebell complexes, agility ladders, and camaraderie under the sun.',
  },
  {
    id: 'digital-coaching',
    title: 'Digital Coaching',
    image: '/classes/card_3.jpg',
    tag: 'Anytime & Anywhere',
    intensity: 'Self-Paced',
    duration: '24/7 Access',
    description: 'Live interactive telemetry tracking, habit milestones, nutrition guidance, and weekly check-ins right on your smartphone or tablet.',
  },
  {
    id: 'group-training',
    title: 'Group Training',
    image: '/classes/card_4.jpg',
    tag: 'High-Tempo Synergy',
    intensity: 'High Intensity',
    duration: '50 min',
    description: 'Immersive group HIIT, metabolic surges, and strength circuits designed with contagious rhythm, heart-pumping playlists, and community grit.',
  },
];

export const ClassesSection: React.FC<ClassesSectionProps> = ({ onSelectClass, isDark = true }) => {
  return (
    <section
      id="classes"
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
            className="text-xs md:text-sm font-bold tracking-widest uppercase mb-1"
            style={{ color: isDark ? '#ff5520' : '#4b5563' }}
          >
            CLASSES DESIGNED
          </p>
          <h2
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight"
            style={{ color: isDark ? '#ffffff' : '#111827' }}
          >
            FOR YOU
          </h2>
        </div>

        {/* 4 Staggered Class Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
          {classesData.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectClass(item)}
              className={`group flex flex-col cursor-pointer transition-all duration-300 ${
                item.stagger ? 'lg:translate-y-8' : ''
              }`}
            >
              {/* Image Container with generous rounded corners */}
              <div
                className={`relative aspect-[3/4] w-full rounded-[28px] overflow-hidden shadow-md group-hover:shadow-2xl transition-all duration-300 border ${
                  isDark
                    ? 'bg-neutral-900 border-white/10 group-hover:border-[#ff5520]/50'
                    : 'bg-neutral-200 border-neutral-200 group-hover:border-[#ff5520]/50'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    // Safe fallback
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=80';
                  }}
                />
                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              </div>

              {/* Card Label & Action Button Row */}
              <div className="flex items-center justify-between pt-4 px-1">
                <h3
                  className="font-display font-bold text-lg md:text-xl tracking-tight group-hover:text-[#ff5520] transition-colors"
                  style={{ color: isDark ? '#ffffff' : '#111827' }}
                >
                  {item.title}
                </h3>
                
                {/* Orange Circular Arrow Button */}
                <button
                  type="button"
                  aria-label={`View ${item.title}`}
                  className="w-9 h-9 rounded-full bg-[#ff5520] text-white flex items-center justify-center shadow-md shadow-orange-500/20 group-hover:bg-[#e64614] group-hover:scale-110 active:scale-95 transition-all cursor-pointer"
                >
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
