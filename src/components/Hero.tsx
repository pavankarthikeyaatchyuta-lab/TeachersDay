import { motion } from 'framer-motion';
import { Sparkles, Heart, ChevronDown } from 'lucide-react';
import { MINI_SURPRISES } from '../data/teachers';
import type { MiniSurprise, TeacherId } from '../types';
import { useCursor } from '../context/CursorContext';

interface HeroProps {
  onTriggerSurprise: (surprise: MiniSurprise) => void;
  onSelectTeacher: (id: TeacherId) => void;
}

export const Hero = ({ onTriggerSurprise, onSelectTeacher }: HeroProps) => {
  const { setCursorType, setCursorText } = useCursor();

  const scrollToNext = () => {
    const el = document.getElementById('journey') || document.getElementById('intro');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-24 pb-16 overflow-hidden bg-radial from-[#FFFDF9] via-[#FAF7F2] to-[#F5EFEB]"
    >
      {/* Background Floating Classroom Elements (Clean Vector/SVG, non-distracting) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Floating Book 1 */}
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[18%] left-[8%] sm:left-[14%] opacity-25 text-amber-700 select-none"
        >
          <svg className="w-10 h-10 sm:w-14 sm:h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
        </motion.div>

        {/* Floating Pencil */}
        <motion.div
          animate={{ y: [0, 16, 0], rotate: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[28%] right-[8%] sm:right-[15%] opacity-20 text-rose-700 select-none"
        >
          <svg className="w-8 h-8 sm:w-12 sm:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
          </svg>
        </motion.div>

        {/* Floating Golden Star 1 */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[12%] right-[25%] text-amber-500 select-none"
        >
          <svg className="w-6 h-6 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </motion.div>

        {/* Floating Golden Star 2 */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-[22%] left-[10%] text-amber-500 select-none"
        >
          <svg className="w-5 h-5 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </motion.div>

        {/* Tiny Floating Heart */}
        <motion.div
          animate={{ y: [0, -14, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[28%] right-[12%] text-rose-400 select-none"
        >
          <Heart className="w-6 h-6 sm:w-8 sm:h-8 fill-rose-300" />
        </motion.div>

        {/* Floating Sparkles */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[48%] left-[6%] opacity-20 text-amber-600 select-none"
        >
          <Sparkles className="w-7 h-7 sm:w-10 sm:h-10" />
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[16%] right-[22%] opacity-15 text-rose-500 select-none"
        >
          <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />
        </motion.div>

        {/* Soft Ambient Radial Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-amber-100/40 via-rose-100/30 to-transparent blur-3xl -z-10" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Soft Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#F1E5D1] shadow-xs text-xs sm:text-sm font-medium text-amber-900 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          <span>A Heartfelt Tribute to Our Mentors</span>
          <span className="text-rose-500">✨</span>
        </motion.div>

        {/* Primary Opening Hero Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="space-y-3"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium tracking-tight text-[#0F172A] leading-[1.18] sm:leading-[1.15]">
            <span className="block">Some people teach lessons.</span>
            <span className="block italic text-amber-900/90 font-serif font-semibold mt-1">
              Some people shape lives.
            </span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-slate-600 font-light max-w-2xl mx-auto pt-3 leading-relaxed">
            This little surprise is for the teachers who do both.
          </p>
        </motion.div>

        {/* Happy Teachers' Day Accent Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-6 flex items-center justify-center gap-2"
        >
          <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent to-amber-300" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-semibold tracking-wide text-rose-700 flex items-center gap-2">
            Happy Teachers' Day <span className="inline-block animate-bounce">❤️</span>
          </h2>
          <div className="h-px w-8 sm:w-16 bg-gradient-to-l from-transparent to-amber-300" />
        </motion.div>

        {/* Dedicated to our 5 AIML Department Mentors */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto"
        >
          <span>Dedicated with love &amp; respect to our AIML Mentors:</span>
          <button 
            onClick={() => onSelectTeacher('sarada')}
            onMouseEnter={() => {
              setCursorType('sarada');
              setCursorText("Sarada Madam (HoD)");
            }}
            onMouseLeave={() => {
              setCursorType('default');
              setCursorText(null);
            }}
            className="inline-flex items-center gap-1 font-semibold text-amber-900 hover:text-amber-700 bg-amber-50/80 px-2.5 py-0.5 rounded-full border border-amber-200 transition-colors cursor-pointer"
          >
            <span>🌷</span>
            <span>Sarada Madam</span>
          </button>
          <button 
            onClick={() => onSelectTeacher('bhagawan')}
            onMouseEnter={() => {
              setCursorType('bhagawan');
              setCursorText("Bhagawan Sir (Training)");
            }}
            onMouseLeave={() => {
              setCursorType('default');
              setCursorText(null);
            }}
            className="inline-flex items-center gap-1 font-semibold text-sky-900 hover:text-sky-700 bg-sky-50/80 px-2.5 py-0.5 rounded-full border border-sky-200 transition-colors cursor-pointer"
          >
            <span>🧭</span>
            <span>Bhagawan Sir</span>
          </button>
          <button 
            onClick={() => onSelectTeacher('kranti')}
            onMouseEnter={() => {
              setCursorType('kranti');
              setCursorText("Kranti Madam (Mentor)");
            }}
            onMouseLeave={() => {
              setCursorType('default');
              setCursorText(null);
            }}
            className="inline-flex items-center gap-1 font-semibold text-orange-900 hover:text-orange-700 bg-orange-50/80 px-2.5 py-0.5 rounded-full border border-orange-200 transition-colors cursor-pointer"
          >
            <span>🌻</span>
            <span>Kranti Madam</span>
          </button>
          <button 
            onClick={() => onSelectTeacher('kishore')}
            onMouseEnter={() => {
              setCursorType('kishore');
              setCursorText("Kishore Sir (Innovation)");
            }}
            onMouseLeave={() => {
              setCursorType('default');
              setCursorText(null);
            }}
            className="inline-flex items-center gap-1 font-semibold text-rose-900 hover:text-rose-700 bg-rose-50/80 px-2.5 py-0.5 rounded-full border border-rose-200 transition-colors cursor-pointer"
          >
            <span>💡</span>
            <span>Kishore Sir</span>
          </button>
          <button 
            onClick={() => onSelectTeacher('radhakrishna')}
            onMouseEnter={() => {
              setCursorType('radhakrishna');
              setCursorText("Radha Krishna Sir (Discipline)");
            }}
            onMouseLeave={() => {
              setCursorType('default');
              setCursorText(null);
            }}
            className="inline-flex items-center gap-1 font-semibold text-indigo-900 hover:text-indigo-700 bg-indigo-50/80 px-2.5 py-0.5 rounded-full border border-indigo-200 transition-colors cursor-pointer"
          >
            <span>🛡️</span>
            <span>Radha Krishna Sir</span>
          </button>
        </motion.div>

        {/* Interactive Mini-Surprise Tokens Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-10 sm:mt-12 bg-white/70 backdrop-blur-md border border-[#F1E5D1] rounded-2xl sm:rounded-full p-2 sm:px-5 sm:py-2.5 shadow-sm max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-3 sm:gap-4"
        >
          <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 shrink-0">
            Tap a token:
          </span>
          <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            {MINI_SURPRISES.map((surprise) => (
              <button
                key={surprise.id}
                onClick={() => onTriggerSurprise(surprise)}
                onMouseEnter={() => {
                  if (surprise.id === 'apple') setCursorType('apple');
                  else if (surprise.id === 'book') setCursorType('book');
                  else if (surprise.id === 'lightbulb') setCursorType('lightbulb');
                  else if (surprise.id === 'heart') setCursorType('heart');
                  else setCursorType('pointer');
                }}
                onMouseLeave={() => setCursorType('default')}
                title={`Click to open ${surprise.label}`}
                className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50/60 hover:bg-amber-100/90 border border-amber-200/60 hover:border-amber-300 text-xs font-medium text-slate-700 transition-all hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 shadow-2xs cursor-pointer"
              >
                <span className="text-base group-hover:rotate-12 transition-transform">{surprise.icon}</span>
                <span className="text-slate-800">{surprise.id === 'apple' ? 'Award' : surprise.id === 'book' ? 'Wisdom' : surprise.id === 'lightbulb' ? 'Clarity' : 'Belief'}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Smooth Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.95 }}
        className="mt-12 sm:mt-14 flex flex-col items-center justify-center gap-2 text-slate-500 cursor-pointer group"
        onClick={scrollToNext}
      >
        <span className="text-xs uppercase tracking-widest font-semibold text-slate-400 group-hover:text-amber-800 transition-colors">
          Scroll to discover &rarr;
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-8 rounded-full border border-slate-300/80 group-hover:border-amber-400 flex items-center justify-center text-slate-400 group-hover:text-amber-800 transition-colors"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};
