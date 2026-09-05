import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TEACHERS_DATA } from '../data/teachers';

interface RadhaKrishnaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EQUATION_ITEMS = [
  { icon: '📚', label: 'Knowledge' },
  { icon: '🤝', label: 'Respect' },
  { icon: '⏰', label: 'Discipline' },
  { icon: '❤️', label: 'Responsibility' },
];

export const RadhaKrishnaModal = ({ isOpen, onClose }: RadhaKrishnaModalProps) => {
  const [showEquation, setShowEquation] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const data = TEACHERS_DATA.radhakrishna.modalContent;

  useEffect(() => {
    if (isOpen) {
      setShowEquation(false);
      setStepIndex(0);

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

  const handleTriggerEquation = () => {
    setShowEquation(true);
    setStepIndex(0);

    EQUATION_ITEMS.forEach((_, idx) => {
      setTimeout(() => {
        setStepIndex(idx + 1);
      }, (idx + 1) * 350);
    });

    // Finally show the result ⭐ Better Person
    setTimeout(() => {
      setStepIndex(EQUATION_ITEMS.length + 1);
      confetti({
        particleCount: 50,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#1E3A8A', '#3B82F6', '#D4AF37', '#FAF7F2', '#F59E0B'],
      });
    }, (EQUATION_ITEMS.length + 1) * 350 + 200);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="radhakrishna-modal-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      >
        {/* Dimmed Navy/Indigo Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0B132B]/75 backdrop-blur-md"
        />

        {/* Floating Shields & Star Particles */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-10" aria-hidden="true">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                opacity: 0, 
                y: '100vh', 
                x: `${8 + i * 9}vw`,
                rotate: 0,
                scale: 0.85
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
              className="absolute text-indigo-300 select-none text-xl sm:text-2xl"
            >
              {i % 3 === 0 ? '🛡️' : i % 3 === 1 ? '⭐' : '📜'}
            </motion.div>
          ))}
        </div>

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-20 w-full max-w-2xl bg-gradient-to-b from-[#FAF7F2] via-[#F3F5FA] to-[#EBEFF8] border-2 border-[#D2DAE8] shadow-2xl rounded-3xl p-6 sm:p-10 my-auto text-[#1E293B]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-[#D2DAE8]">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-indigo-100 border border-indigo-300 flex items-center justify-center text-indigo-800 shadow-xs">
                <Shield className="w-4 h-4 text-indigo-700" />
              </span>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-slate-900 block">
                  Discipline &amp; Values Mentor
                </span>
                <span className="text-[11px] text-slate-500">
                  Radha Krishna Sir
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close Surprise"
              className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-indigo-100/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="mt-6">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-950 text-xs font-semibold mb-2">
                <Shield className="w-3.5 h-3.5 text-indigo-600" />
                <span>The One Who Teaches Us to Become Better People</span>
              </div>
              <h3 
                id="radhakrishna-modal-title"
                className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900"
              >
                {data.title}
              </h3>
            </div>

            {/* Letter Body Card */}
            <div className="bg-white/95 rounded-2xl p-6 sm:p-8 border border-[#D5DDEB] shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-indigo-100/60 to-transparent rounded-bl-full pointer-events-none" />

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
                    className={idx === 0 || idx === 3 ? "font-semibold text-slate-800 text-base sm:text-lg" : ""}
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
                <p className="font-display font-semibold text-lg sm:text-xl text-indigo-900">
                  {data.closing}
                </p>
                <span className="text-xs text-slate-400 font-medium">
                  With gratitude for discipline, conduct &amp; character
                </span>
              </motion.div>
            </div>

            {/* SPECIAL INTERACTION: Lessons Beyond the Classroom Equation */}
            <div className="mt-6">
              {!showEquation ? (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleTriggerEquation}
                  className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-slate-700 via-indigo-900 to-slate-900 hover:from-slate-800 hover:to-black text-white font-medium text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <Shield className="w-4 h-4 text-indigo-300 group-hover:rotate-12 transition-transform" />
                  <span>Lessons Beyond the Classroom 📜</span>
                </motion.button>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: 'spring', damping: 20 }}
                  className="bg-gradient-to-r from-slate-50 via-indigo-50 to-slate-50 border border-indigo-200 rounded-2xl p-6 text-center shadow-inner relative overflow-hidden"
                >
                  {/* Equation Row */}
                  <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap py-2 mb-4">
                    {EQUATION_ITEMS.map((item, idx) => {
                      const isReached = stepIndex > idx;
                      return (
                        <div key={item.label} className="flex items-center gap-1.5 sm:gap-2">
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0.4 }}
                            animate={{ 
                              scale: isReached ? 1.06 : 0.9, 
                              opacity: isReached ? 1 : 0.4,
                            }}
                            className={`flex flex-col items-center px-2 sm:px-3 py-1.5 rounded-xl border transition-all ${
                              isReached 
                                ? 'bg-white text-slate-900 border-indigo-300 shadow-sm' 
                                : 'bg-slate-100 text-slate-400 border-slate-200'
                            }`}
                          >
                            <span className="text-lg sm:text-xl">{item.icon}</span>
                            <span className="text-[10px] font-bold tracking-tight uppercase mt-0.5">
                              {item.label}
                            </span>
                          </motion.div>
                          {idx < EQUATION_ITEMS.length - 1 && (
                            <span className="text-xs font-bold text-slate-400">+</span>
                          )}
                        </div>
                      );
                    })}

                    <span className="text-sm font-bold text-indigo-700 mx-1">=</span>

                    {/* Result */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0.4 }}
                      animate={{ 
                        scale: stepIndex > EQUATION_ITEMS.length ? 1.1 : 0.9, 
                        opacity: stepIndex > EQUATION_ITEMS.length ? 1 : 0.4,
                      }}
                      className={`flex flex-col items-center px-3 py-1.5 rounded-xl border transition-all ${
                        stepIndex > EQUATION_ITEMS.length
                          ? 'bg-gradient-to-r from-indigo-600 to-blue-700 text-white border-indigo-500 shadow-md'
                          : 'bg-slate-100 text-slate-400 border-slate-200'
                      }`}
                    >
                      <span className="text-xl">⭐</span>
                      <span className="text-[10px] font-bold tracking-tight uppercase mt-0.5">
                        Better Person
                      </span>
                    </motion.div>
                  </div>

                  <p className="text-base sm:text-lg font-display font-medium text-slate-900 leading-snug max-w-lg mx-auto pt-2">
                    "{data.secondarySurpriseQuote}"
                  </p>
                  <p className="text-sm font-semibold text-indigo-900 mt-2">
                    {data.secondarySurpriseGratitude}
                  </p>
                </motion.div>
              )}
            </div>
          </div>

          {/* Footer Controls */}
          <div className="mt-8 pt-4 border-t border-[#D2DAE8] flex justify-end">
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
