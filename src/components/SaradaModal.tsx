import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Heart, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TEACHERS_DATA } from '../data/teachers';

interface SaradaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SaradaModal = ({ isOpen, onClose }: SaradaModalProps) => {
  const [showSecondarySurprise, setShowSecondarySurprise] = useState(false);
  const data = TEACHERS_DATA.sarada.modalContent;

  useEffect(() => {
    if (isOpen) {
      setShowSecondarySurprise(false);

      // Handle Escape key
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);

      // Lock body scroll
      document.body.style.overflow = 'hidden';

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'auto';
      };
    }
  }, [isOpen, onClose]);

  const handleTriggerSecondarySurprise = () => {
    setShowSecondarySurprise(true);

    // Glowing festive particles & petal confetti
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#F59E0B', '#E11D48', '#FDA4AF', '#FDFBF7'],
    });

    setTimeout(() => {
      confetti({
        particleCount: 30,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#D4AF37', '#FB7185', '#F59E0B'],
      });
      confetti({
        particleCount: 30,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#D4AF37', '#FB7185', '#F59E0B'],
      });
    }, 250);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="sarada-modal-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      >
        {/* Blurred & Dimmed Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0F172A]/70 backdrop-blur-md"
        />

        {/* Floating Flowers / Petals Upward Animation */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-10" aria-hidden="true">
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                opacity: 0, 
                y: '100vh', 
                x: `${10 + i * 10}vw`,
                rotate: 0,
                scale: 0.7 + (i % 4) * 0.2
              }}
              animate={{ 
                opacity: [0, 0.75, 0], 
                y: '-20vh',
                rotate: 360 * (i % 2 === 0 ? 1 : -1),
                x: `${12 + i * 9 + Math.sin(i) * 5}vw`
              }}
              transition={{ 
                duration: 9 + (i % 4) * 2, 
                repeat: Infinity, 
                delay: i * 0.8,
                ease: 'linear'
              }}
              className="absolute text-rose-300 select-none text-xl sm:text-2xl"
            >
              {i % 3 === 0 ? '🌸' : i % 3 === 1 ? '🌷' : '✨'}
            </motion.div>
          ))}
        </div>

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          className="relative z-20 w-full max-w-2xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF7F2] to-[#F7F2E8] border-2 border-[#E9DFCE] shadow-2xl rounded-3xl p-6 sm:p-10 my-auto text-[#1E293B]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-[#E9DFCE]">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 shadow-xs">
                <Award className="w-4 h-4" />
              </span>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-amber-900 block">
                  HoD Tribute
                </span>
                <span className="text-[11px] text-slate-500">
                  Sarada Madam
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close Surprise"
              className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-amber-100/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Envelope & Card Reveal Animation Container */}
          <div className="mt-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Card Title */}
              <div className="text-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold mb-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-rose-500" />
                  <span>A Message from Our Hearts</span>
                </motion.div>
                <h3 
                  id="sarada-modal-title"
                  className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900"
                >
                  {data.title}
                </h3>
              </div>

              {/* Unfolding Letter Container */}
              <motion.div
                initial={{ scaleY: 0.9, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/95 rounded-2xl p-6 sm:p-8 border border-[#E8DDCB] shadow-sm relative overflow-hidden"
              >
                {/* Decorative watermarked corner */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-amber-100/50 to-transparent rounded-bl-full pointer-events-none" />

                {/* Staggered Line-by-Line Message */}
                <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                  {data.paragraphs.map((paragraph, idx) => (
                    <motion.p
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.5 + idx * 0.18,
                        ease: "easeOut" 
                      }}
                      className={idx === 0 ? "font-semibold text-slate-800 text-base sm:text-lg" : ""}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>

                {/* Closing Wish Banner */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="mt-6 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left"
                >
                  <p className="font-display font-semibold text-lg sm:text-xl text-rose-700">
                    {data.closing}
                  </p>
                  <span className="text-xs text-slate-400 font-medium">
                    With utmost respect &amp; gratitude
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Secondary Surprise Reveal Section */}
            <div className="mt-6">
              {!showSecondarySurprise ? (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleTriggerSecondarySurprise}
                  className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-amber-600 via-rose-600 to-amber-700 hover:from-amber-700 hover:to-rose-700 text-white font-medium text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-amber-200 group-hover:rotate-12 transition-transform" />
                  <span>{data.secondarySurpriseBtn}</span>
                </motion.button>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: 'spring', damping: 20 }}
                  className="bg-gradient-to-r from-amber-50 via-rose-50 to-amber-50 border border-amber-200/90 rounded-2xl p-6 text-center shadow-inner relative overflow-hidden"
                >
                  <div className="absolute top-2 right-3 text-rose-400 opacity-30">
                    <Heart className="w-12 h-12 fill-rose-300" />
                  </div>
                  <Sparkles className="w-6 h-6 text-amber-600 mx-auto mb-2 animate-spin" style={{ animationDuration: '6s' }} />
                  <p className="text-base sm:text-lg font-display font-medium text-slate-900 leading-snug max-w-lg mx-auto">
                    "{data.secondarySurpriseQuote}"
                  </p>
                  <p className="text-sm font-semibold text-rose-700 mt-3">
                    {data.secondarySurpriseGratitude}
                  </p>
                </motion.div>
              )}
            </div>
          </div>

          {/* Modal Footer Controls */}
          <div className="mt-8 pt-4 border-t border-[#E9DFCE] flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl bg-slate-200/80 hover:bg-slate-300 text-slate-700 font-medium text-sm transition-colors cursor-pointer"
            >
              Close Surprise
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
