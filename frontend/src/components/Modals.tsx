import React, { useState } from 'react';
import { X, Check, Volume2, VolumeX, Dumbbell, Calendar, Clock, Sparkles } from 'lucide-react';
import { ClassItem } from './ClassesSection';

// --- Video Modal ---
interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, title = 'the3gsfitness Performance Session' }) => {
  const [isMuted, setIsMuted] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-neutral-950 rounded-3xl overflow-hidden shadow-2xl border border-neutral-800">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800/80 bg-neutral-900/60">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5520] animate-pulse"></span>
            <h3 className="font-display font-bold text-white text-base sm:text-lg tracking-wide uppercase">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-800 text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Player Frame */}
        <div className="relative aspect-video bg-neutral-900 flex items-center justify-center overflow-hidden">
          <video
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
            src="https://assets.mixkit.co/videos/preview/mixkit-man-training-with-dumbbells-in-a-gym-42654-large.mp4"
            poster="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1200&auto=format&fit=crop&q=80"
          />

          {/* Sound Control overlay */}
          <div className="absolute bottom-4 right-4 z-20">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="px-3.5 py-2 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-2 hover:bg-black/90 transition-all border border-white/20"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#ff5520]" />}
              <span>{isMuted ? 'Unmute' : 'Muted'}</span>
            </button>
          </div>

          <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-xs px-3 py-1 rounded-full text-[11px] font-semibold text-white/90 border border-white/10">
            4K Ultra-Gym Cam · Bergamo Facility
          </div>
        </div>

        {/* Footer info */}
        <div className="p-6 bg-neutral-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-white text-sm font-semibold">Ready to feel the energy in person?</p>
            <p className="text-neutral-400 text-xs">Book a complimentary trial workout with one of our master coaches.</p>
          </div>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#ff5520] hover:bg-[#e64614] text-white text-xs font-bold uppercase tracking-wider transition-all"
          >
            Claim Free Day Pass
          </button>
        </div>

      </div>
    </div>
  );
};

// --- Order / Checkout Modal ---
interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: { name: string; price: string; billing: string } | null;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, selectedPlan }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    startDate: new Date().toISOString().split('T')[0],
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-neutral-100 p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-bold text-[#ff5520] uppercase tracking-wider">
                the3gsfitness Membership Application
              </span>
              <h3 className="font-display font-black text-2xl text-neutral-900 mt-1 uppercase tracking-tight">
                {selectedPlan?.name || 'Monthly Pass'}
              </h3>
              <p className="text-sm font-semibold text-neutral-600 mt-0.5">
                {selectedPlan?.price} <span className="font-normal text-xs text-neutral-500">/{selectedPlan?.billing}</span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Henderson"
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm text-neutral-900 focus:outline-hidden focus:border-[#ff5520] focus:ring-1 focus:ring-[#ff5520] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm text-neutral-900 focus:outline-hidden focus:border-[#ff5520] focus:ring-1 focus:ring-[#ff5520] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Phone Number
                </label>
                <input
                  required
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 019-2834"
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm text-neutral-900 focus:outline-hidden focus:border-[#ff5520] focus:ring-1 focus:ring-[#ff5520] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Preferred Activation Date
                </label>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm text-neutral-900 focus:outline-hidden focus:border-[#ff5520] focus:ring-1 focus:ring-[#ff5520] transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#ff5520] hover:bg-[#e64614] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-orange-500/25 active:scale-98 transition-all cursor-pointer"
                >
                  Complete Order & Reserve Pass
                </button>
              </div>

              <p className="text-[11px] text-center text-neutral-400">
                Cancel anytime. 100% money-back satisfaction guarantee within 14 days.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            <h3 className="font-display font-black text-2xl text-neutral-900 uppercase">
              Welcome to the3gsfitness!
            </h3>
            <p className="text-sm text-neutral-600 max-w-sm mx-auto">
              Thank you, <span className="font-semibold text-neutral-900">{formData.name}</span>. Your pass for <span className="font-semibold text-[#ff5520]">{selectedPlan?.name}</span> has been confirmed. Check your email for facility QR access pass.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Close & Return
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

// --- Contact Us Modal ---
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {!sent ? (
          <div>
            <span className="text-[11px] font-bold text-[#ff5520] uppercase tracking-wider">
              Get in Touch
            </span>
            <h3 className="font-display font-black text-2xl text-neutral-900 uppercase tracking-tight mt-1 mb-4">
              Contact the3gsfitness
            </h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">Your Name</label>
                <input required type="text" placeholder="John Doe" className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:border-[#ff5520] focus:outline-hidden" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">Email</label>
                <input required type="email" placeholder="john@example.com" className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:border-[#ff5520] focus:outline-hidden" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">Message / Inquiry</label>
                <textarea required rows={3} placeholder="I want to learn more about 1-on-1 personal training..." className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:border-[#ff5520] focus:outline-hidden resize-none"></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-3">
            <div className="w-14 h-14 rounded-full bg-[#ff5520]/15 text-[#ff5520] flex items-center justify-center mx-auto">
              <Check className="w-7 h-7 stroke-[3]" />
            </div>
            <h3 className="font-display font-bold text-xl text-neutral-900">Message Received</h3>
            <p className="text-xs text-neutral-600">Our front desk team will contact you within 2 hours.</p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setSent(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-full bg-neutral-900 text-white text-xs font-semibold"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Class Detail Modal ---
interface ClassDetailModalProps {
  selectedClass: ClassItem | null;
  onClose: () => void;
  onBook: (classItem: ClassItem) => void;
}

export const ClassDetailModal: React.FC<ClassDetailModalProps> = ({ selectedClass, onClose, onBook }) => {
  if (!selectedClass) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-neutral-900">
          <img src={selectedClass.image} alt={selectedClass.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-3 left-4 text-white">
            <span className="text-[11px] font-bold text-[#ff5520] uppercase tracking-wider bg-white/90 px-2.5 py-0.5 rounded-full">
              {selectedClass.tag}
            </span>
            <h3 className="font-display font-black text-2xl text-white mt-1 uppercase">
              {selectedClass.title}
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center gap-3">
            <Clock className="w-5 h-5 text-[#ff5520]" />
            <div>
              <p className="text-[11px] text-neutral-400 font-medium uppercase">Duration</p>
              <p className="text-xs font-bold text-neutral-800">{selectedClass.duration}</p>
            </div>
          </div>
          <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center gap-3">
            <Dumbbell className="w-5 h-5 text-[#ff5520]" />
            <div>
              <p className="text-[11px] text-neutral-400 font-medium uppercase">Intensity</p>
              <p className="text-xs font-bold text-neutral-800">{selectedClass.intensity}</p>
            </div>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6 font-normal">
          {selectedClass.description}
        </p>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onBook(selectedClass)}
            className="flex-1 py-3.5 rounded-full bg-[#ff5520] hover:bg-[#e64614] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-orange-500/25 transition-all cursor-pointer text-center"
          >
            Book Free Trial Session
          </button>
          <button
            onClick={onClose}
            className="px-5 py-3.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
