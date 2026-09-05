import { motion } from 'framer-motion';
import { Sparkles, Award, Compass, BookOpen, Lightbulb, Shield } from 'lucide-react';
import { TEACHERS_DATA } from '../data/teachers';
import type { TeacherId, TeacherInfo } from '../types';
import { useCursor } from '../context/CursorContext';
import { MagneticButton } from './MagneticButton';

interface FacultySectionProps {
  onSelectTeacher: (id: TeacherId) => void;
}

export const FacultySection = ({ onSelectTeacher }: FacultySectionProps) => {
  const { setCursorType, setCursorText } = useCursor();

  const sarada = TEACHERS_DATA.sarada;
  const bhagawan = TEACHERS_DATA.bhagawan;
  const kranti = TEACHERS_DATA.kranti;
  const kishore = TEACHERS_DATA.kishore;
  const radhakrishna = TEACHERS_DATA.radhakrishna;

  const renderMentorCard = (
    teacher: TeacherInfo, 
    badgeIcon: React.ReactNode, 
    emblemIcon: React.ReactNode, 
    accentBorder: string,
    accentBg: string,
    isWide: boolean = false
  ) => {
    return (
      <motion.div
        key={teacher.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        whileHover={{ y: -8 }}
        className={`group relative rounded-3xl p-6 sm:p-8 md:p-9 ${accentBg} border-2 ${accentBorder} shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden ${
          isWide ? 'md:col-span-2 lg:col-span-2' : ''
        }`}
      >
        {/* Subtle decorative background gradient glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-white/60 to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

        <div>
          {/* Top Badge & Role */}
          <div className="flex items-center justify-between gap-4">
            <span className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${teacher.cardTheme.badgeBg}`}>
              {badgeIcon}
              <span>{teacher.roleBadge}</span>
            </span>
            <span className="text-xs text-slate-400 font-medium">AIML Department</span>
          </div>

          {/* Emblem Icon / Motif */}
          <div className="my-6 flex items-center justify-center">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white/90 border border-[#EADBCA] flex items-center justify-center shadow-inner group-hover:rotate-2 transition-transform duration-500">
              <div className="absolute inset-1.5 border border-dashed border-[#EADBCA]/80 rounded-2xl" />
              {emblemIcon}
            </div>
          </div>

          {/* Name, Headline & Description */}
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-display font-semibold text-slate-900 tracking-tight">
              {teacher.name}
            </h3>
            <p className="mt-1 text-xs sm:text-sm font-semibold text-slate-600">
              {teacher.headline}
            </p>
            <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed italic max-w-md mx-auto">
              "{teacher.quoteSnippet}"
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8 pt-6 border-t border-[#EADBCA]/70 flex flex-col items-center">
          <MagneticButton
            onClick={() => onSelectTeacher(teacher.id)}
            onMouseEnter={() => {
              setCursorType(teacher.id);
              setCursorText(`Open ${teacher.name}'s story`);
            }}
            onMouseLeave={() => {
              setCursorType('default');
              setCursorText(null);
            }}
            className={`w-full py-3.5 px-6 rounded-2xl font-medium text-sm sm:text-base shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer ${teacher.cardTheme.buttonBg}`}
          >
            <span>Open Their Story →</span>
          </MagneticButton>
          <span className="text-[11px] text-slate-400 mt-2 font-light">
            Click to unfold a personalized tribute
          </span>
        </div>
      </motion.div>
    );
  };

  return (
    <section 
      id="faculty" 
      className="py-20 sm:py-28 px-4 sm:px-6 max-w-6xl mx-auto relative"
    >
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-100/70 border border-rose-200 text-xs font-semibold text-rose-900 uppercase tracking-widest mb-3"
        >
          <Sparkles className="w-3.5 h-3.5 text-rose-600" />
          <span>Our Mentors &amp; Faculty</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#0F172A] tracking-tight"
        >
          The People Behind Our Journey
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-slate-600 font-light max-w-xl mx-auto"
        >
          Five mentors. Five different roles. One common goal — helping us become better.
        </motion.p>
      </div>

      {/* Asymmetric 5-Mentor Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {/* 1. SARADA MADAM - Prominent Full Width HoD Card */}
        {renderMentorCard(
          sarada,
          <Award className="w-3.5 h-3.5 text-amber-700" />,
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl">🌷</span>
            <span className="text-[10px] uppercase font-bold tracking-widest mt-1 text-amber-900/80">
              Department Vision
            </span>
          </div>,
          'border-amber-300 hover:border-amber-500',
          'bg-gradient-to-b from-[#FFFFFF] via-[#FFFDF9] to-[#FAF4E8]',
          true
        )}

        {/* 2. BHAGAWAN SIR - Training & Career */}
        {renderMentorCard(
          bhagawan,
          <Compass className="w-3.5 h-3.5 text-sky-700" />,
          <div className="flex flex-col items-center">
            <Compass className="w-10 h-10 text-sky-600 stroke-[1.5]" />
            <span className="text-[10px] uppercase font-bold tracking-widest mt-1 text-sky-900/80">
              Career &amp; Growth
            </span>
          </div>,
          'border-sky-300 hover:border-sky-500',
          'bg-gradient-to-b from-[#FFFFFF] via-[#F8FBFE] to-[#EFF6FC]'
        )}

        {/* 3. KRANTI MADAM - Teaching & Mentorship */}
        {renderMentorCard(
          kranti,
          <span className="text-xs">🌻</span>,
          <div className="flex flex-col items-center">
            <BookOpen className="w-10 h-10 text-amber-600 stroke-[1.5]" />
            <span className="text-[10px] uppercase font-bold tracking-widest mt-1 text-amber-900/80">
              Meaningful Care
            </span>
          </div>,
          'border-yellow-300 hover:border-yellow-500',
          'bg-gradient-to-b from-[#FFFFFF] via-[#FFFDF8] to-[#FFF8EA]'
        )}

        {/* 4. KISHORE SIR - Innovation & Hackathons */}
        {renderMentorCard(
          kishore,
          <Lightbulb className="w-3.5 h-3.5 text-orange-600" />,
          <div className="flex flex-col items-center">
            <Lightbulb className="w-10 h-10 text-orange-600 stroke-[1.5]" />
            <span className="text-[10px] uppercase font-bold tracking-widest mt-1 text-orange-900/80">
              Build &amp; Code
            </span>
          </div>,
          'border-orange-300 hover:border-orange-500',
          'bg-gradient-to-b from-[#FFFFFF] via-[#FFFDF9] to-[#FFF5EC]'
        )}

        {/* 5. RADHA KRISHNA SIR - Discipline & Values */}
        {renderMentorCard(
          radhakrishna,
          <Shield className="w-3.5 h-3.5 text-indigo-700" />,
          <div className="flex flex-col items-center">
            <Shield className="w-10 h-10 text-indigo-700 stroke-[1.5]" />
            <span className="text-[10px] uppercase font-bold tracking-widest mt-1 text-indigo-900/80">
              Conduct &amp; Values
            </span>
          </div>,
          'border-indigo-300 hover:border-indigo-500',
          'bg-gradient-to-b from-[#FFFFFF] via-[#F8F9FD] to-[#EDEFF8]'
        )}
      </div>
    </section>
  );
};
