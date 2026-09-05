import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lightbulb, Code2, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TEACHERS_DATA } from '../data/teachers';

interface KishoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HACKATHON_STAGES = [
  { icon: '💡', title: 'Idea', sub: 'The Spark' },
  { icon: '💻', title: 'Build', sub: 'Coding Sprints' },
  { icon: '🔥', title: 'Challenge', sub: 'Pushing Limits' },
  { icon: '🏆', title: 'Experience', sub: 'Presentation' },
  { icon: '🚀', title: 'Grow', sub: 'Confidence' },
];

export const KishoreModal = ({ isOpen, onClose }: KishoreModalProps) => {
  const [showHackathonJourney, setShowHackathonJourney] = useState(false);
  const [activeStage, setActiveStage] = useState(0);
  const data = TEACHERS_DATA.kishore.modalContent;

  useEffect(() => {
    if (isOpen) {
      setShowHackathonJourney(false);
      setActiveStage(0);

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

  const handleTriggerJourney = () => {
    setShowHackathonJourney(true);
    setActiveStage(0);

    HACKATHON_STAGES.forEach((_, idx) => {
      setTimeout(() => {
        setActiveStage(idx + 1);
      }, (idx + 1) * 380);
    });

    setTimeout(() => {
      confetti({
        particleCount: 55,
        spread: 85,
        origin: { y: 0.6 },
        colors: ['#EA580C', '#F59E0B', '#EF4444', '#FCD34D', '#FFFFFF'],
      });
    }, HACKATHON_STAGES.length * 380 + 200);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="kishore-modal-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      >
        {/* Dimmed Warm Orange / Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1D0E06]/75 backdrop-blur-md"
        />

        {/* Floating Code and Rocket Particles */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-10" aria-hidden="true">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                opacity: 0, 
                y: '100vh', 
                x: `${10 + i * 8.5}vw`,
                rotate: 0,
                scale: 0.85
              }}
              animate={{ 
                opacity: [0, 0.7, 0], 
                y: '-20vh',
                rotate: 360 * (i % 2 === 0 ? 1 : -1),
                x: `${12 + i * 8}vw`
              }}
              transition={{ 
                duration: 9 + (i % 3) * 2, 
                repeat: Infinity, 
                delay: i * 0.65,
                ease: 'linear'
              }}
              className="absolute text-orange-300 select-none text-xl sm:text-2xl"
            >
              {i % 4 === 0 ? '💡' : i % 4 === 1 ? '💻' : i % 4 === 2 ? '🔥' : '🏆'}
            </motion.div>
          ))}
        </div>

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-20 w-full max-w-2xl bg-gradient-to-b from-[#FFFDF9] via-[#FFF9F2] to-[#FFF3E8] border-2 border-[#FBDBC7] shadow-2xl rounded-3xl p-6 sm:p-10 my-auto text-[#1E293B]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-[#FBDBC7]">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-orange-100 border border-orange-300 flex items-center justify-center text-orange-800 shadow-xs">
                <Code2 className="w-4 h-4 text-orange-600" />
              </span>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-orange-950 block">
                  Innovation &amp; Hackathons
                </span>
                <span className="text-[11px] text-slate-500">
                  Kishore Sir
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close Surprise"
              className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-orange-100/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="mt-6">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-900 text-xs font-semibold mb-2">
                <Lightbulb className="w-3.5 h-3.5 text-orange-600" />
                <span>The One Who Encourages Us to Build</span>
              </div>
              <h3 
                id="kishore-modal-title"
                className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900"
              >
                {data.title}
              </h3>
            </div>

            {/* Letter Body Card */}
            <div className="bg-white/95 rounded-2xl p-6 sm:p-8 border border-[#FADECB] shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-orange-100/60 to-transparent rounded-bl-full pointer-events-none" />

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
                    className={idx === 3 ? "font-serif italic text-orange-900 font-semibold text-base sm:text-lg" : ""}
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
                <p className="font-display font-semibold text-lg sm:text-xl text-orange-800">
                  {data.closing}
                </p>
                <span className="text-xs text-slate-400 font-medium">
                  With excitement for every project we build
                </span>
              </motion.div>
            </div>

            {/* SPECIAL INTERACTION: Hackathon Journey Animation */}
            <div className="mt-6">
              {!showHackathonJourney ? (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleTriggerJourney}
                  className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-orange-600 via-amber-600 to-rose-700 hover:from-orange-700 hover:to-rose-800 text-white font-medium text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <Flame className="w-4 h-4 text-amber-200 group-hover:scale-110 transition-transform" />
                  <span>Hackathon Journey 🔥</span>
                </motion.button>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: 'spring', damping: 20 }}
                  className="bg-gradient-to-r from-orange-50 via-amber-50 to-rose-50 border border-orange-200 rounded-2xl p-6 text-center shadow-inner relative overflow-hidden"
                >
                  <div className="flex items-center justify-center gap-1.5 sm:gap-3 flex-wrap py-2 mb-4">
                    {HACKATHON_STAGES.map((stg, idx) => {
                      const isReached = activeStage > idx;
                      return (
                        <div key={stg.title} className="flex items-center gap-1.5 sm:gap-2">
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0.4 }}
                            animate={{ 
                              scale: isReached ? 1.08 : 0.9, 
                              opacity: isReached ? 1 : 0.4,
                            }}
                            className={`flex flex-col items-center px-2.5 py-1.5 rounded-xl border transition-all ${
                              isReached 
                                ? 'bg-white text-orange-950 border-orange-300 shadow-sm' 
                                : 'bg-slate-100 text-slate-400 border-slate-200'
                            }`}
                          >
                            <span className="text-xl sm:text-2xl">{stg.icon}</span>
                            <span className="text-[10px] font-bold tracking-tight uppercase mt-0.5">
                              {stg.title}
                            </span>
                          </motion.div>
                          {idx < HACKATHON_STAGES.length - 1 && (
                            <span className={`text-xs font-bold ${activeStage > idx + 1 ? 'text-orange-600' : 'text-slate-300'}`}>
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
                  <p className="text-sm font-semibold text-orange-800 mt-2">
                    {data.secondarySurpriseGratitude}
                  </p>
                </motion.div>
              )}
            </div>
          </div>

          {/* Footer Controls */}
          <div className="mt-8 pt-4 border-t border-[#FBDBC7] flex justify-end">
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
