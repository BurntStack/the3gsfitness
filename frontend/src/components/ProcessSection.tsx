import React, { useState } from 'react';

interface StepItem {
  id: number;
  title: string;
  subtitle: string;
  isDark?: boolean;
  icon: React.ReactNode;
  details: string;
}

export const ProcessSection: React.FC<{ isDark?: boolean }> = () => {
  const [activeStep, setActiveStep] = useState<number>(2);

  const steps: StepItem[] = [
    {
      id: 1,
      title: 'Assessment & Nutrition',
      subtitle: 'Biometric Analysis',
      isDark: false,
      details: 'Comprehensive body composition scan, metabolic baseline evaluation, and custom macro nutrition blueprint designed for your lifestyle.',
      icon: (
        // Clipboard with Apple Icon
        <svg viewBox="0 0 48 48" className="w-9 h-9 stroke-neutral-800 fill-none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Clipboard body */}
          <rect x="10" y="8" width="28" height="34" rx="4" />
          {/* Top clip */}
          <path d="M18 8V6C18 4.9 18.9 4 20 4H28C29.1 4 30 4.9 30 6V8" />
          <circle cx="24" cy="6" r="1.5" fill="currentColor" />
          {/* Checklist lines */}
          <line x1="16" y1="16" x2="32" y2="16" />
          <line x1="16" y1="22" x2="24" y2="22" />
          {/* Apple emblem */}
          <path d="M26 31C24.5 31 23 29.5 24.5 28C25.5 27 27 27 28 28C29.5 29.5 28 31 26 31Z" fill="#FF5520" stroke="#FF5520" />
          <path d="M26 27C26 25 28 24 28 24" stroke="#FF5520" />
          <circle cx="31" cy="33" r="5" stroke="#FF5520" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Hypertrophy & Training',
      subtitle: 'Dynamic Performance',
      isDark: true, // Black highlighted circle in screenshot
      details: 'Progressive overload protocols, functional athletic training, compound barbell lifts, and high-energy conditioning with your dedicated trainer.',
      icon: (
        // Dumbbell lifted by athletic hands
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-white fill-none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Barbell angled */}
          <line x1="10" y1="24" x2="38" y2="24" />
          {/* Left Weight Plates */}
          <rect x="10" y="16" width="4" height="16" rx="2" fill="white" />
          <rect x="6" y="19" width="3" height="10" rx="1" fill="white" />
          {/* Right Weight Plates */}
          <rect x="34" y="16" width="4" height="16" rx="2" fill="white" />
          <rect x="39" y="19" width="3" height="10" rx="1" fill="white" />
          {/* Hands holding bar */}
          <path d="M20 28C20 24 21 21 24 21C27 21 28 24 28 28" fill="rgba(255,255,255,0.2)" />
          <line x1="22" y1="29" x2="26" y2="29" />
          <line x1="21" y1="32" x2="27" y2="32" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Rest & Recovery',
      subtitle: 'Deep Regeneration',
      isDark: false,
      details: 'Infrared sauna recovery, sleep quality optimization, mobility decompression, and nervous system recalibration to prevent burnout.',
      icon: (
        // Crescent Moon with ZZZ
        <svg viewBox="0 0 48 48" className="w-9 h-9 stroke-neutral-800 fill-none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Crescent Moon */}
          <path d="M28 14C21.4 14 16 19.4 16 26C16 32.6 21.4 38 28 38C31.5 38 34.6 36.5 36.8 34.1C29.8 33.7 24.5 27.6 25.1 20.6C25.4 17.5 26.8 14.8 28 14Z" />
          {/* Z Z Z */}
          <path d="M30 14H36L30 20H36" stroke="#FF5520" strokeWidth="2.4" />
          <path d="M35 8H39L35 12H39" stroke="#FF5520" strokeWidth="2" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Continuous Results',
      subtitle: 'Goal Mastery',
      isDark: false,
      details: 'Periodic re-testing, strength milestone certificates, celebratory check-ins, and progressive goal scaling to unlock lifelong vitality.',
      icon: (
        // Concentric target / fitness progress labyrinth
        <svg viewBox="0 0 48 48" className="w-10 h-10 stroke-neutral-800 fill-none" strokeWidth="2" strokeLinecap="round">
          {/* Multiple concentric target circles with gaps */}
          <circle cx="24" cy="24" r="18" strokeDasharray="6 4" />
          <circle cx="24" cy="24" r="12" stroke="#FF5520" />
          <circle cx="24" cy="24" r="6" />
          <circle cx="24" cy="24" r="2" fill="#FF5520" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white border-t border-neutral-100">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div>
            <p className="text-xs md:text-sm font-semibold tracking-wider text-neutral-800 uppercase mb-1">
              COME TO A RESULT
            </p>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-neutral-900 uppercase tracking-tight">
              WITH US
            </h2>
          </div>
          <p className="text-sm md:text-base text-neutral-600 max-w-sm font-normal">
            Ready to take the first step towards a healthier, stronger you?
          </p>
        </div>

        {/* Interactive 4-Step Process with Connecting Dashed Lines */}
        <div className="relative w-full max-w-5xl mx-auto px-2">
          
          {/* Dashed connector line */}
          <div className="hidden sm:block absolute top-1/2 left-12 right-12 -translate-y-1/2 border-t-2 border-dashed border-neutral-300 z-0 pointer-events-none"></div>

          {/* Stepper Nodes */}
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-4 items-center justify-items-center">
            {steps.map((step) => {
              const isSelected = activeStep === step.id;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className="flex flex-col items-center cursor-pointer group"
                >
                  {/* Circle Node */}
                  <div
                    className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
                      step.isDark
                        ? 'bg-neutral-900 text-white shadow-xl scale-105 ring-4 ring-neutral-900/10'
                        : 'bg-white text-neutral-800 border-2 border-neutral-200 group-hover:border-[#ff5520] group-hover:shadow-md'
                    } ${isSelected && !step.isDark ? 'ring-4 ring-orange-500/20 border-[#ff5520]' : ''}`}
                  >
                    {step.icon}
                  </div>

                  {/* Step Title Label */}
                  <div className="text-center mt-4">
                    <span className="text-xs font-bold text-neutral-900 block group-hover:text-[#ff5520] transition-colors">
                      {step.title}
                    </span>
                    <span className="text-[11px] text-neutral-500">
                      {step.subtitle}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Step Detail Card */}
          {activeStep && (
            <div className="mt-12 max-w-xl mx-auto bg-neutral-50 rounded-2xl p-5 border border-neutral-200 text-center animate-in fade-in duration-200">
              <span className="inline-block text-[11px] font-bold text-[#ff5520] uppercase tracking-wider mb-1">
                Step 0{activeStep} Details
              </span>
              <p className="text-sm text-neutral-700 leading-relaxed font-normal">
                {steps.find((s) => s.id === activeStep)?.details}
              </p>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
