import { motion } from 'framer-motion';
import { AIML_JOURNEY_STAGES } from '../data/teachers';
import type { TeacherId } from '../types';
import { useCursor } from '../context/CursorContext';
import { Sparkles } from 'lucide-react';

interface DepartmentJourneyProps {
  onSelectTeacher: (id: TeacherId) => void;
}

export const DepartmentJourney = ({ onSelectTeacher }: DepartmentJourneyProps) => {
  const { setCursorType, setCursorText } = useCursor();

  return (
    <section 
      id="journey" 
      className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto relative"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-xs font-semibold text-indigo-900 uppercase tracking-widest mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
          <span>AIML Department Tribute</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#0F172A] tracking-tight"
        >
          Our AIML Journey
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto"
        >
          "They don't just teach us Artificial Intelligence and Machine Learning. They teach us how to learn, how to grow, how to dream, how to behave, and how to build a future."
        </motion.p>
      </div>

      {/* Interactive Horizontal Pipeline / Journey Track */}
      <div className="relative">
        {/* Subtle connector line on desktop */}
        <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-amber-200 via-sky-300 to-indigo-300 -translate-y-8 z-0 pointer-events-none" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 relative z-10">
          {AIML_JOURNEY_STAGES.map((stage, idx) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              onClick={() => onSelectTeacher(stage.mentorId)}
              onMouseEnter={() => {
                setCursorType(stage.mentorId);
                setCursorText(`Meet ${stage.mentorName}`);
              }}
              onMouseLeave={() => {
                setCursorType('default');
                setCursorText(null);
              }}
              className="group bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-[#EAE2D5] hover:border-amber-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-center cursor-pointer relative overflow-hidden"
            >
              {/* Step indicator */}
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                <span>0{idx + 1}</span>
                <span className="text-[10px] text-amber-800 font-semibold group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </div>

              {/* Stage Icon */}
              <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#EBE3D5] flex items-center justify-center text-2xl mx-auto shadow-inner group-hover:scale-110 transition-transform">
                {stage.icon}
              </div>

              {/* Title & Tagline */}
              <div className="mt-3">
                <h4 className="text-sm font-bold tracking-wider uppercase text-slate-900 group-hover:text-amber-900 transition-colors">
                  {stage.title}
                </h4>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                  {stage.tagline}
                </p>
              </div>

              {/* Connected Mentor pill */}
              <div className="mt-4 pt-3 border-t border-slate-100">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-0.5">
                  Guided By
                </span>
                <span className="text-xs font-semibold text-amber-900 group-hover:text-rose-700 transition-colors block">
                  {stage.mentorName}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Connecting Subtext */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-[#EADBCA] shadow-xs text-xs sm:text-sm font-medium text-slate-700">
          <span>And along the way, we have mentors who guide every single step.</span>
          <span className="text-rose-600">❤️</span>
        </div>
      </motion.div>
    </section>
  );
};
