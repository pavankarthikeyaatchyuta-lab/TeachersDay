import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Compass, Rocket, TrendingUp } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TEACHERS_DATA } from '../data/teachers';

interface BhagawanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CAREER_PATH_STEPS = [
  { icon: '🎓', label: 'Foundation', desc: 'Academics' },
  { icon: '🧠', label: 'Skills', desc: 'AI Thinking' },
  { icon: '💻', label: 'Projects', desc: 'Hands-on Code' },
  { icon: '📈', label: 'Growth', desc: 'Mock Interviews' },
  { icon: '💼', label: 'Industry', desc: 'Placement Ready' },
  { icon: '🚀', label: 'Success', desc: 'Dream Career' },
];

export const BhagawanModal = ({ isOpen, onClose }: BhagawanModalProps) => {
  const [showCareerPath, setShowCareerPath] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const data = TEACHERS_DATA.bhagawan.modalContent;

  useEffect(() => {
    if (isOpen) {
      setShowCareerPath(false);
      setActiveStepIndex(0);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'auto';
      };
    }
  }, [isOpen, onClose]);

  const handleTriggerPath = () => {
    setShowCareerPath(true);
    setActiveStepIndex(0);

    // Sequentially activate the career path steps
    CAREER_PATH_STEPS.forEach((_, idx) => {
      setTimeout(() => {
        setActiveStepIndex(idx + 1);
      }, (idx + 1) * 350);
    });

    setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#0284C7', '#38BDF8', '#60A5FA', '#D4AF37', '#FAF7F2'],
      });
    }, CAREER_PATH_STEPS.length * 350 + 200);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="bhagawan-modal-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      >
        {/* Dimmed Blurred Backdrop with Sky/Navy Ambience */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0B1528]/75 backdrop-blur-md"
        />

        {/* Floating Compass & Rocket Starlight Particles */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-10" aria-hidden="true">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                opacity: 0, 
                y: '100vh', 
                x: `${8 + i * 9}vw`,
                rotate: 0,
                scale: 0.8
              }}
              animate={{ 
                opacity: [0, 0.7, 0], 
                y: '-20vh',
                rotate: 360 * (i % 2 === 0 ? 1 : -1),
                x: `${10 + i * 8.5}vw`
              }}
              transition={{ 
                duration: 10 + (i % 3) * 2, 
                repeat: Infinity, 
                delay: i * 0.7,
                ease: 'linear'
              }}
              className="absolute text-sky-300 select-none text-xl sm:text-2xl"
            >
              {i % 3 === 0 ? '🧭' : i % 3 === 1 ? '✨' : '💼'}
            </motion.div>
          ))}
        </div>

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-20 w-full max-w-2xl bg-gradient-to-b from-[#FAF7F2] via-[#F4F9FD] to-[#EDF5FB] border-2 border-[#D3E5F4] shadow-2xl rounded-3xl p-6 sm:p-10 my-auto text-[#1E293B]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-[#D3E5F4]">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-sky-100 border border-sky-300 flex items-center justify-center text-sky-800 shadow-xs">
                <Compass className="w-4 h-4 text-sky-700 animate-spin" style={{ animationDuration: '18s' }} />
              </span>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-sky-950 block">
                  Training &amp; Career Guidance
                </span>
                <span className="text-[11px] text-slate-500">
                  Bhagawan Sir
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close Surprise"
              className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-sky-100/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="mt-6">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-900 text-xs font-semibold mb-2">
                <Rocket className="w-3.5 h-3.5 text-sky-600" />
                <span>The One Who Helps Us Find Our Direction</span>
              </div>
              <h3 
                id="bhagawan-modal-title"
                className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900"
              >
                {data.title}
              </h3>
            </div>

            {/* Letter Body Card */}
            <div className="bg-white/95 rounded-2xl p-6 sm:p-8 border border-[#D5E6F5] shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-sky-100/60 to-transparent rounded-bl-full pointer-events-none" />

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                {data.paragraphs.map((paragraph, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.25 + idx * 0.16,
                      ease: "easeOut" 
                    }}
                    className={idx === 0 ? "font-semibold text-slate-800 text-base sm:text-lg" : ""}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              {/* Closing Wish */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left"
              >
                <p className="font-display font-semibold text-lg sm:text-xl text-sky-800">
                  {data.closing}
                </p>
                <span className="text-xs text-slate-400 font-medium">
                  With gratitude for our careers &amp; futures
                </span>
              </motion.div>
            </div>

            {/* SPECIAL INTERACTION: Career Path Animation */}
            <div className="mt-6">
              {!showCareerPath ? (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleTriggerPath}
                  className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-sky-600 via-blue-700 to-indigo-800 hover:from-sky-700 hover:to-blue-800 text-white font-medium text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <TrendingUp className="w-4 h-4 text-sky-200 group-hover:translate-x-1 transition-transform" />
                  <span>Show Our Path 🚀</span>
                </motion.button>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: 'spring', damping: 20 }}
                  className="bg-gradient-to-r from-sky-50 via-blue-50 to-indigo-50 border border-sky-200 rounded-2xl p-6 text-center shadow-inner relative overflow-hidden"
                >
                  <div className="flex items-center justify-center gap-1.5 sm:gap-3 flex-wrap py-2 mb-4">
                    {CAREER_PATH_STEPS.map((step, idx) => {
                      const isReached = activeStepIndex > idx;
                      return (
                        <div key={step.label} className="flex items-center gap-1.5 sm:gap-2">
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0.4 }}
                            animate={{ 
                              scale: isReached ? 1.08 : 0.9, 
                              opacity: isReached ? 1 : 0.4,
                            }}
                            className={`flex flex-col items-center px-2.5 py-1.5 rounded-xl border transition-all ${
                              isReached 
                                ? 'bg-white text-sky-950 border-sky-300 shadow-sm' 
                                : 'bg-slate-100 text-slate-400 border-slate-200'
                            }`}
                          >
                            <span className="text-xl sm:text-2xl">{step.icon}</span>
                            <span className="text-[10px] font-bold tracking-tight uppercase mt-0.5">
                              {step.label}
                            </span>
                          </motion.div>
                          {idx < CAREER_PATH_STEPS.length - 1 && (
                            <span className={`text-xs font-bold ${activeStepIndex > idx + 1 ? 'text-sky-600' : 'text-slate-300'}`}>
                              →
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <p className="text-base sm:text-lg font-display font-medium text-slate-900 leading-snug max-w-lg mx-auto pt-2">
                    "{data.secondarySurpriseQuote}"
                  </p>
                  <p className="text-sm font-semibold text-sky-800 mt-2">
                    {data.secondarySurpriseGratitude}
                  </p>
                </motion.div>
              )}
            </div>
          </div>

          {/* Footer Controls */}
          <div className="mt-8 pt-4 border-t border-[#D3E5F4] flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-slate-200/80 hover:bg-slate-300 text-slate-700 font-medium text-sm transition-colors cursor-pointer"
            >
              Close Story
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
