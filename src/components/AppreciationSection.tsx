import { motion } from 'framer-motion';
import { APPRECIATION_CARDS } from '../data/teachers';

export const AppreciationSection = () => {
  return (
    <section 
      id="intro" 
      className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto relative"
    >
      {/* Decorative subtle backdrop ornament */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/60 border border-amber-200 text-xs font-semibold text-amber-900 uppercase tracking-widest mb-4"
        >
          <span>Quiet Dedication</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#0F172A] tracking-tight"
        >
          More Than a Teacher
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto"
        >
          Behind every lesson, every achievement, and every confident step forward, there is often a teacher who cared enough to guide us.
        </motion.p>
      </div>

      {/* Four Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {APPRECIATION_CARDS.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group relative bg-white/85 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-[#EBE3D5] hover:border-amber-300 shadow-sm hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top decorative accent */}
            <div className="flex items-start justify-between">
              <div className="w-14 h-14 rounded-2xl bg-[#FAF7F2] border border-[#EAE4D8] flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <span className="text-xs font-mono font-medium text-slate-400 group-hover:text-amber-700 transition-colors">
                0{index + 1}
              </span>
            </div>

            <div className="mt-6">
              <h3 className="text-xl sm:text-2xl font-display font-semibold text-slate-900 group-hover:text-amber-950 transition-colors">
                {card.title}
              </h3>
              
              <p className="mt-3 text-base sm:text-lg font-medium text-slate-800 leading-snug">
                "{card.text}"
              </p>

              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                {card.detail}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-amber-800/80">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>With sincere gratitude</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
