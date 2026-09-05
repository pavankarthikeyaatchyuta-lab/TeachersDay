import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, RefreshCw } from 'lucide-react';
import { triggerElegantCelebration } from './Celebration';
import { useCursor } from '../context/CursorContext';
import { MagneticButton } from './MagneticButton';

export const FinalSection = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const { setCursorType, setIsCelebrationActive } = useCursor();

  const handleReveal = () => {
    setIsRevealed(true);
    triggerElegantCelebration();
    setIsCelebrationActive(true);

    // Return to normal cursor after celebration
    setTimeout(() => {
      setIsCelebrationActive(false);
    }, 6000);
  };

  const handleCelebrateAgain = () => {
    triggerElegantCelebration();
    setIsCelebrationActive(true);
    setTimeout(() => {
      setIsCelebrationActive(false);
    }, 5000);
  };

  return (
    <section 
      id="final-tribute" 
      className="py-24 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-[#FAF7F2] via-[#FFFDF9] to-[#F5EFEB] relative overflow-hidden"
    >
      {/* Soft Ambient Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-radial from-rose-100/40 via-amber-100/30 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <AnimatePresence mode="wait">
          {!isRevealed ? (
            <motion.div
              key="teaser"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#EADBCA] shadow-xs text-xs font-semibold text-slate-500 uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Before You Go</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-display font-medium text-slate-900 tracking-tight">
                One Last Thing...
              </h2>

              <p className="text-base sm:text-lg text-slate-600 font-light max-w-md mx-auto">
                We have one final message we wanted to share together.
              </p>

              <div className="pt-4">
                <MagneticButton
                  onClick={handleReveal}
                  onMouseEnter={() => setCursorType('heart')}
                  onMouseLeave={() => setCursorType('default')}
                  className="px-8 py-4 rounded-2xl bg-gradient-to-r from-rose-600 via-rose-700 to-amber-700 hover:from-rose-700 hover:to-amber-800 text-white font-medium text-base shadow-xl shadow-rose-900/15 hover:shadow-2xl hover:shadow-rose-900/25 transition-all flex items-center justify-center gap-2.5 mx-auto group cursor-pointer active:scale-95"
                >
                  <Heart className="w-5 h-5 fill-white text-white group-hover:scale-125 transition-transform" />
                  <span>Reveal Our Tribute ❤️</span>
                </MagneticButton>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', damping: 24, stiffness: 280 }}
              className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border-2 border-[#EEDBCA] shadow-2xl space-y-8 relative overflow-hidden"
            >
              {/* Subtle top rainbow/gold highlight */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-rose-500 to-amber-500" />

              {/* Heart icon badge */}
              <div className="w-16 h-16 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 mx-auto shadow-inner">
                <Heart className="w-8 h-8 fill-rose-500 text-rose-500 animate-pulse" />
              </div>

              {/* Thank You Title */}
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-slate-900 tracking-tight"
                >
                  Thank You, Teachers. <span className="text-rose-600">❤️</span>
                </motion.h2>
              </div>

              {/* Gratitude Lines */}
              <div className="space-y-3 max-w-lg mx-auto text-base sm:text-xl font-medium text-slate-700 leading-relaxed font-serif italic">
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  "Thank you for your patience."
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  "Thank you for your guidance."
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  "Thank you for believing in us."
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  "Thank you for being part of our journey."
                </motion.p>
              </div>

              {/* Final Climax Line */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 }}
                className="pt-6 border-t border-slate-100"
              >
                <div className="inline-block px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-50 via-rose-50 to-amber-50 border border-amber-200">
                  <p className="text-lg sm:text-2xl font-display font-semibold text-rose-800">
                    Happy Teachers' Day, Sarada Madam &amp; Kranti Madam! 🌷
                  </p>
                </div>
              </motion.div>

              {/* Celebration Replay Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="flex items-center justify-center pt-2"
              >
                <button
                  onClick={handleCelebrateAgain}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-amber-800 font-medium px-4 py-2 rounded-full hover:bg-slate-100 transition-all cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Celebrate Again ✨</span>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
