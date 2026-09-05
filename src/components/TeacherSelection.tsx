import { motion } from 'framer-motion';
import { Sparkles, Award, BookOpen, Compass, Heart } from 'lucide-react';
import { TEACHERS_DATA } from '../data/teachers';

interface TeacherSelectionProps {
  onSelectTeacher: (id: 'sarada' | 'kranti') => void;
}

export const TeacherSelection = ({ onSelectTeacher }: TeacherSelectionProps) => {
  const sarada = TEACHERS_DATA.sarada;
  const kranti = TEACHERS_DATA.kranti;

  return (
    <section 
      id="teachers" 
      className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto relative"
    >
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100/70 border border-rose-200 text-xs font-semibold text-rose-900 uppercase tracking-widest mb-3"
        >
          <Sparkles className="w-3.5 h-3.5 text-rose-600" />
          <span>Personal Tributes</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#0F172A] tracking-tight"
        >
          Two Special Surprises
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-slate-600 font-light"
        >
          Choose a teacher and open their little surprise.
        </motion.p>
      </div>

      {/* Two Large Interactive Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
        
        {/* CARD 1: Sarada Madam */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          whileHover={{ y: -8 }}
          className="group relative rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-[#FFFFFF] via-[#FFFDF9] to-[#FAF5EC] border-2 border-[#F0E6D2] hover:border-amber-400 shadow-md hover:shadow-2xl hover:shadow-amber-900/10 transition-all duration-300 flex flex-col justify-between overflow-hidden"
        >
          {/* Subtle decorative background gradient glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-amber-200/30 to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

          <div>
            {/* Badge & Top Meta */}
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
                <Award className="w-3.5 h-3.5 text-amber-700" />
                {sarada.roleBadge}
              </span>
              <span className="text-xs text-slate-400 font-medium">Head of Department</span>
            </div>

            {/* Leadership & Guidance Visual Motif */}
            <div className="my-8 flex items-center justify-center">
              <div className="relative w-32 h-32 rounded-3xl bg-radial from-amber-100 to-amber-50 border border-amber-200/80 flex items-center justify-center shadow-inner group-hover:rotate-3 transition-transform duration-500">
                <div className="absolute inset-2 border border-dashed border-amber-300/80 rounded-2xl" />
                <div className="text-amber-800 flex flex-col items-center">
                  <Compass className="w-12 h-12 text-amber-700 stroke-[1.5] group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-[10px] uppercase font-bold tracking-widest mt-1 text-amber-800/80">
                    Direction
                  </span>
                </div>
                {/* Micro badge icon */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center shadow-sm">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Name & Content */}
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-display font-semibold text-slate-900 tracking-tight">
                {sarada.name}
              </h3>
              <p className="mt-1 text-sm text-amber-900 font-medium">
                {sarada.honorificTitle}
              </p>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed italic max-w-sm mx-auto">
                "{sarada.quoteSnippet}"
              </p>
            </div>
          </div>

          {/* Button CTA */}
          <div className="mt-8 pt-6 border-t border-[#F0E6D2] flex flex-col items-center">
            <button
              onClick={() => onSelectTeacher('sarada')}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-700 via-amber-800 to-amber-900 hover:from-amber-800 hover:to-amber-950 text-white font-medium text-base shadow-lg shadow-amber-900/15 hover:shadow-xl hover:shadow-amber-900/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Open Your Surprise ✨</span>
            </button>
            <span className="text-xs text-slate-400 mt-2 font-light">
              Click to unfold a personalized tribute
            </span>
          </div>
        </motion.div>

        {/* CARD 2: Kranti Madam */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          whileHover={{ y: -8 }}
          className="group relative rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-[#FFFFFF] via-[#FFFDF9] to-[#FFF7ED] border-2 border-[#F0E6D2] hover:border-orange-400 shadow-md hover:shadow-2xl hover:shadow-orange-900/10 transition-all duration-300 flex flex-col justify-between overflow-hidden"
        >
          {/* Subtle decorative background gradient glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-200/30 to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

          <div>
            {/* Badge & Top Meta */}
            <div className="flex items-center justify-between gap-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-100 text-orange-900 border border-orange-300">
                <Heart className="w-3.5 h-3.5 fill-orange-600 text-orange-600" />
                {kranti.roleBadge}
              </span>
              <span className="text-xs text-slate-400 font-medium">Inspiration &amp; Support</span>
            </div>

            {/* Warm Teaching & Caring Visual Motif */}
            <div className="my-8 flex items-center justify-center">
              <div className="relative w-32 h-32 rounded-3xl bg-radial from-orange-100 to-amber-50 border border-orange-200/80 flex items-center justify-center shadow-inner group-hover:-rotate-3 transition-transform duration-500">
                <div className="absolute inset-2 border border-dashed border-orange-300/80 rounded-2xl" />
                <div className="text-orange-800 flex flex-col items-center">
                  <BookOpen className="w-12 h-12 text-orange-600 stroke-[1.5] group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-[10px] uppercase font-bold tracking-widest mt-1 text-orange-800/80">
                    Inspiration
                  </span>
                </div>
                {/* Micro badge icon */}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-sm text-sm">
                  🌻
                </div>
              </div>
            </div>

            {/* Name & Content */}
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-display font-semibold text-slate-900 tracking-tight">
                {kranti.name}
              </h3>
              <p className="mt-1 text-sm text-orange-900 font-medium">
                {kranti.honorificTitle}
              </p>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed italic max-w-sm mx-auto">
                "{kranti.quoteSnippet}"
              </p>
            </div>
          </div>

          {/* Button CTA */}
          <div className="mt-8 pt-6 border-t border-[#F0E6D2] flex flex-col items-center">
            <button
              onClick={() => onSelectTeacher('kranti')}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-orange-600 via-amber-600 to-amber-700 hover:from-orange-700 hover:to-amber-800 text-white font-medium text-base shadow-lg shadow-orange-900/15 hover:shadow-xl hover:shadow-orange-900/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Open Your Surprise 🌻</span>
            </button>
            <span className="text-xs text-slate-400 mt-2 font-light">
              Click to unfold a personalized tribute
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
