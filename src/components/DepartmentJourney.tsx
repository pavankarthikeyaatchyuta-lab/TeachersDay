import { motion } from 'framer-motion';
import { AIML_JOURNEY_STAGES } from '../data/teachers';
import { Sparkles } from 'lucide-react';

export const DepartmentJourney = () => {
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
          <span>AIML Department Experience</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#0F172A] tracking-tight"
        >
          OUR AIML JOURNEY
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-3 text-base sm:text-lg font-medium text-amber-900/90 font-serif italic"
        >
          "Learning is a journey — and we are fortunate to have mentors who walk it with us."
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 font-light leading-relaxed max-w-2xl mx-auto"
        >
          They don't just teach us Artificial Intelligence and Machine Learning.
          They teach us how to learn, how to think, how to build, how to grow,
          and how to become ready for the world ahead.
        </motion.p>
      </div>

      {/* Horizontal Pipeline / 7 Collective Journey Cards */}
      <div className="relative">
        {/* Subtle connector line on desktop */}
        <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-amber-200 via-sky-300 to-indigo-300 -translate-y-8 z-0 pointer-events-none opacity-60" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 relative z-10">
          {AIML_JOURNEY_STAGES.map((stage, idx) => (
            <motion.div
              key={stage.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-[#EAE2D5] hover:border-amber-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-center relative overflow-hidden"
            >
              <div>
                {/* Step indicator */}
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                  <span className="font-semibold text-amber-900/60">{stage.step}</span>
                  <span className="text-[10px] text-amber-700/60 group-hover:scale-125 transition-transform">
                    ✦
                  </span>
                </div>

                {/* Stage Icon */}
                <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#EBE3D5] flex items-center justify-center text-2xl mx-auto shadow-inner group-hover:scale-110 transition-transform duration-300">
                  {stage.icon}
                </div>

                {/* Title */}
                <div className="mt-3">
                  <h4 className="text-sm font-bold tracking-wider uppercase text-slate-900 group-hover:text-amber-900 transition-colors">
                    {stage.title}
                  </h4>
                  {/* Headline Quote */}
                  <p className="text-xs font-serif italic text-slate-700 mt-2 leading-snug font-medium">
                    "{stage.headline}"
                  </p>
                </div>
              </div>

              {/* Small Supporting Text */}
              <div className="mt-4 pt-3 border-t border-slate-100">
                <p className="text-[11px] text-slate-500 leading-tight">
                  {stage.supportingText}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Message */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 text-center space-y-2.5"
      >
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-[#EADBCA] shadow-xs text-xs sm:text-sm font-medium text-slate-700">
          <span>And along the way, we are fortunate to have mentors who guide us in their own special way.</span>
          <span className="text-rose-600">❤️</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 font-medium italic">
          Different strengths. Different lessons. One journey.
        </p>
      </motion.div>
    </section>
  );
};
