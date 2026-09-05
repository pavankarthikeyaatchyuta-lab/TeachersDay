import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, BookOpen, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TEACHERS_DATA } from '../data/teachers';

interface KrantiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const KrantiModal = ({ isOpen, onClose }: KrantiModalProps) => {
  const [showSecondarySurprise, setShowSecondarySurprise] = useState(false);
  const [step, setStep] = useState(1);
  const data = TEACHERS_DATA.kranti.modalContent;

  useEffect(() => {
    if (isOpen) {
      setShowSecondarySurprise(false);
      setStep(1);

      // Step progression for custom experience:
      // 1: dim screen & books appear (immediate)
      // 2: pencil draws heart (at 500ms)
      // 3: stars/sparkles appear (at 1100ms)
      // 4: message card unfolds (at 1600ms)
      const t1 = setTimeout(() => setStep(2), 400);
      const t2 = setTimeout(() => setStep(3), 1100);
      const t3 = setTimeout(() => setStep(4), 1600);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'auto';
      };
    }
  }, [isOpen, onClose]);

  const handleTriggerThought = () => {
    setShowSecondarySurprise(true);

    // Warm sunflower yellow & gold celebratory burst
    confetti({
      particleCount: 50,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#F59E0B', '#EAB308', '#F97316', '#FEF08A', '#FFFFFF'],
    });

    setTimeout(() => {
      confetti({
        particleCount: 30,
        angle: 60,
        spread: 60,
        origin: { x: 0 },
        colors: ['#F59E0B', '#F97316', '#EAB308'],
      });
      confetti({
        particleCount: 30,
        angle: 120,
        spread: 60,
        origin: { x: 1 },
        colors: ['#F59E0B', '#F97316', '#EAB308'],
      });
    }, 200);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        role="dialog" 
        aria-modal="true" 
        aria-labelledby="kranti-modal-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      >
        {/* Warm Dimmed Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1A1208]/75 backdrop-blur-md"
        />

        {/* Ambient Floating Shimmering Stars (Step 3+) */}
        {step >= 3 && (
          <div className="fixed inset-0 pointer-events-none overflow-hidden z-10" aria-hidden="true">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 0.8, 0.2, 0.7], 
                  scale: [0.8, 1.2, 0.9, 1.1],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 3 + (i % 3), 
                  repeat: Infinity, 
                  delay: (i * 0.15),
                  ease: "easeInOut" 
                }}
                className="absolute text-amber-300"
                style={{
                  top: `${15 + (i * 7)}%`,
                  left: `${8 + (i * 7.5)}%`,
                  fontSize: `${14 + (i % 3) * 6}px`
                }}
              >
                {i % 2 === 0 ? '✨' : '⭐'}
              </motion.div>
            ))}
          </div>
        )}

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-20 w-full max-w-2xl bg-gradient-to-b from-[#FFFDF8] via-[#FFFBF2] to-[#FFF5E6] border-2 border-[#F3E5CB] shadow-2xl rounded-3xl p-6 sm:p-10 my-auto text-[#1E293B]"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#F3E5CB]">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-orange-100 border border-orange-300 flex items-center justify-center text-orange-800 shadow-xs text-sm">
                🌻
              </span>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-orange-900 block">
                  Dedicated Tribute
                </span>
                <span className="text-[11px] text-slate-500">
                  Kranti Madam
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

          {/* Dedicated Visual Progression for Kranti Madam */}
          {/* Step 2: Animated Books & Pencil Drawing Heart */}
          <div className="mt-4 mb-2 flex items-center justify-center gap-4 py-2">
            {/* Animated Books settling */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-1 text-orange-700 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-200"
            >
              <BookOpen className="w-4 h-4 text-orange-600" />
              <span className="text-xs font-semibold">Lessons &amp; Guidance</span>
            </motion.div>

            {/* Pencil drawing heart animation */}
            <div className="flex items-center gap-1.5 text-rose-700 bg-rose-50 px-3 py-1.5 rounded-full border border-rose-200">
              {/* Pencil SVG icon */}
              <motion.svg
                animate={{ rotate: [0, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-4 h-4 text-amber-700" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
              </motion.svg>

              {/* Animated Drawing Heart */}
              <svg className="w-4 h-4 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
              <span className="text-xs font-semibold">With Heart</span>
            </div>
          </div>

          {/* Unfolding Message Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4"
          >
            {/* Title */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-800 text-xs font-semibold mb-2">
                <span className="text-xs">🌻</span>
                <span>Warm Wishes</span>
              </div>
              <h3 
                id="kranti-modal-title"
                className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900"
              >
                {data.title}
              </h3>
            </div>

            {/* Unfolding Note Body */}
            <div className="bg-white/95 rounded-2xl p-6 sm:p-8 border border-[#F1E4CE] shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-orange-100/50 to-transparent rounded-bl-full pointer-events-none" />

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                {data.paragraphs.map((paragraph, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.3 + idx * 0.16,
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
                <p className="font-display font-semibold text-lg sm:text-xl text-amber-700">
                  {data.closing}
                </p>
                <span className="text-xs text-slate-400 font-medium">
                  With warm affection &amp; respect
                </span>
              </motion.div>
            </div>

            {/* Secondary Surprise: "A Little Thought For You 💫" */}
            <div className="mt-6">
              {!showSecondarySurprise ? (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleTriggerThought}
                  className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 hover:from-orange-700 hover:to-amber-700 text-white font-medium text-sm sm:text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-yellow-200 group-hover:rotate-12 transition-transform" />
                  <span>{data.secondarySurpriseBtn}</span>
                </motion.button>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: 'spring', damping: 20 }}
                  className="bg-gradient-to-r from-orange-50 via-amber-50 to-yellow-50 border border-orange-200 rounded-2xl p-6 text-center shadow-inner relative overflow-hidden"
                >
                  <div className="absolute top-2 right-3 text-amber-400 opacity-20">
                    <Heart className="w-12 h-12 fill-amber-300" />
                  </div>
                  <span className="text-2xl block mb-2">🌻</span>
                  <p className="text-base sm:text-lg font-display font-medium text-slate-900 leading-snug max-w-lg mx-auto">
                    "{data.secondarySurpriseQuote}"
                  </p>
                  <p className="text-sm font-semibold text-orange-800 mt-3">
                    {data.secondarySurpriseGratitude}
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Footer Controls */}
          <div className="mt-8 pt-4 border-t border-[#F3E5CB] flex justify-end">
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
