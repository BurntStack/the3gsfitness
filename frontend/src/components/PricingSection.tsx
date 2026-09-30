import React, { useState } from 'react';
import { ChevronDown, ArrowDown } from 'lucide-react';

interface PricingSectionProps {
  onSelectPlan: (plan: { name: string; price: string; billing: string }) => void;
  isDark?: boolean;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan, isDark = true }) => {
  const [selectedCategory, setSelectedCategory] = useState('Personal Training');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeCard, setActiveCard] = useState<'day' | 'monthly' | 'yearly'>('monthly');

  const categories = [
    'Personal Training',
    'Open Gym Access',
    'Group Classes',
    'All-Inclusive Elite',
  ];

  return (
    <section
      id="pricing"
      className="w-full py-16 md:py-24 transition-colors duration-500"
      style={{
        backgroundColor: isDark ? '#08090d' : '#f8f6f2',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Massive Vibrant Orange Banner Container */}
        <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden bg-gradient-to-br from-[#ff5e24] via-[#ff5018] to-[#ea3a04] px-6 sm:px-10 md:px-14 py-12 md:py-16 text-white shadow-2xl">
          
          {/* Subtle Geometric Angular Facet Overlays */}
          <div className="absolute inset-0 pointer-events-none opacity-20 select-none overflow-hidden">
            <svg viewBox="0 0 1200 800" className="w-full h-full object-cover" fill="none">
              <polygon points="200,0 800,0 1200,800 0,800" stroke="#FFF" strokeWidth="1.5" />
              <line x1="300" y1="0" x2="800" y2="800" stroke="#FFF" strokeWidth="1" />
              <line x1="900" y1="0" x2="100" y2="800" stroke="#FFF" strokeWidth="1" />
              <polygon points="500,200 900,400 600,700" fill="white" fillOpacity="0.04" />
            </svg>
          </div>

          <div className="relative z-10">
            {/* Top Bar: Dropdown Selector on Left + Header on Right */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 md:mb-16">
              
              {/* Category Dropdown Selector */}
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-3 bg-white text-neutral-900 px-5 py-3 rounded-full shadow-lg hover:bg-neutral-50 transition-all font-semibold text-xs sm:text-sm tracking-wide cursor-pointer"
                >
                  <span>{selectedCategory}</span>
                  <div className="w-6 h-6 rounded-full bg-neutral-900 text-white flex items-center justify-center">
                    <ArrowDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl py-2 z-30 text-neutral-800 border border-neutral-100 animate-in fade-in duration-150">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          setSelectedCategory(cat);
                          setDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-xs sm:text-sm font-medium transition-colors hover:bg-orange-50 hover:text-[#ff5520] ${
                          selectedCategory === cat ? 'text-[#ff5520] font-bold bg-orange-50/50' : 'text-neutral-700'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Title & Category on Right */}
              <div className="text-left md:text-right">
                <p className="text-xs sm:text-sm font-semibold tracking-widest text-white/90 uppercase mb-1">
                  PRICING PLAN
                </p>
                <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight">
                  JOIN TODAY
                </h2>
              </div>
            </div>

            {/* 3 Pricing Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-10">
              
              {/* Card 1: ONE DAY PASS */}
              <div
                onClick={() => {
                  setActiveCard('day');
                  onSelectPlan({ name: 'One Day Pass', price: '$15', billing: 'per day' });
                }}
                className={`relative rounded-[28px] p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                  activeCard === 'day'
                    ? 'border-2 border-white bg-white/20 shadow-xl scale-[1.02]'
                    : 'border border-white/40 bg-white/10 hover:bg-white/15'
                } backdrop-blur-xs`}
              >
                <div>
                  {/* Concentric Circle Icon */}
                  <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center mb-6">
                    <div className="w-4 h-4 rounded-full bg-white/90"></div>
                  </div>

                  <h3 className="font-display font-black text-xl text-white uppercase tracking-wide mb-3">
                    ONE DAY PASS
                  </h3>

                  <div className="font-display font-bold text-2xl text-white mb-4">
                    $15/Per Day
                  </div>

                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                    Whether you're visiting for business or are just taking your personal fitness one day at a time, we'd like to invite you to experience all that we have to offer. You are always welcome!
                  </p>
                </div>
              </div>

              {/* Card 2: MONTHLY PASS (Featured Solid White Card) */}
              <div
                onClick={() => {
                  setActiveCard('monthly');
                  onSelectPlan({ name: 'Monthly Pass', price: '$90', billing: 'per month' });
                }}
                className={`relative rounded-[28px] p-8 bg-white text-neutral-900 shadow-2xl flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                  activeCard === 'monthly' ? 'scale-[1.03] ring-4 ring-white/50' : 'hover:scale-[1.01]'
                }`}
              >
                <div>
                  {/* Solid Orange Concentric Target Icon */}
                  <div className="w-10 h-10 rounded-full border-2 border-[#ff5520] flex items-center justify-center mb-6">
                    <div className="w-4 h-4 rounded-full bg-[#ff5520]"></div>
                  </div>

                  <h3 className="font-display font-black text-xl text-neutral-900 uppercase tracking-wide mb-3">
                    MONTHLY PASS
                  </h3>

                  <div className="font-display font-black text-2xl text-neutral-900 mb-4">
                    $90/Per month
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                    Our monthly membership helps you to keep your fitness goals on track without a commitment of any kind, while still enjoying all of the amenities that the3gsfitness has to offer.
                  </p>
                </div>
              </div>

              {/* Card 3: YEARLY PASS */}
              <div
                onClick={() => {
                  setActiveCard('yearly');
                  onSelectPlan({ name: 'Yearly Pass', price: '$59', billing: 'per month (billed annually)' });
                }}
                className={`relative rounded-[28px] p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                  activeCard === 'yearly'
                    ? 'border-2 border-white bg-white/20 shadow-xl scale-[1.02]'
                    : 'border border-white/40 bg-white/10 hover:bg-white/15'
                } backdrop-blur-xs`}
              >
                <div>
                  {/* Concentric Circle Icon */}
                  <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center mb-6">
                    <div className="w-4 h-4 rounded-full bg-white/90"></div>
                  </div>

                  <h3 className="font-display font-black text-xl text-white uppercase tracking-wide mb-3">
                    YEARLY PASS
                  </h3>

                  <div className="font-display font-bold text-2xl text-white mb-4">
                    $59/Per month
                  </div>

                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                    With a 1-year commitment, we offer a monthly membership for only $59. When you pre-purchase a complete year individual membership you get 2/m Free Extension.
                  </p>
                </div>
              </div>

            </div>

            {/* Bottom Row with "Order Now" Button on Right */}
            <div className="flex justify-end pt-2">
              <button
                onClick={() => {
                  const planMap = {
                    day: { name: 'One Day Pass', price: '$15', billing: 'per day' },
                    monthly: { name: 'Monthly Pass', price: '$90', billing: 'per month' },
                    yearly: { name: 'Yearly Pass', price: '$59', billing: 'per month' },
                  };
                  onSelectPlan(planMap[activeCard]);
                }}
                className="px-8 py-3 rounded-full bg-white hover:bg-neutral-100 text-neutral-900 hover:text-[#ff5520] text-xs sm:text-sm font-bold tracking-wider transition-all shadow-xl active:scale-95 cursor-pointer"
              >
                Order Now
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
