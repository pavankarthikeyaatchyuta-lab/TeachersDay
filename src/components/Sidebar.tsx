import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Sparkles, 
  GraduationCap, 
  Mail, 
  Heart, 
  Menu, 
  X
} from 'lucide-react';

interface SidebarProps {
  onSelectTeacher: (id: 'sarada' | 'kranti') => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: typeof Home;
  emoji?: string;
  isSection: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Home', icon: Home, emoji: '⌂', isSection: true },
  { id: 'intro', label: 'Appreciation', icon: Sparkles, emoji: '✦', isSection: true },
  { id: 'teachers', label: 'Our Teachers', icon: GraduationCap, emoji: '👩‍🏫', isSection: true },
  { id: 'quote', label: 'Message', icon: Mail, emoji: '💌', isSection: true },
  { id: 'final-tribute', label: 'Thank You', icon: Heart, emoji: '♥', isSection: true },
];

export const Sidebar = ({ onSelectTeacher }: SidebarProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Scroll spy to update active section
  useEffect(() => {
    const sectionIds = ['hero', 'intro', 'teachers', 'quote', 'final-tribute'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      const docHeight = document.documentElement.scrollHeight;
      const windowBottom = window.scrollY + window.innerHeight;

      // If scrolled close to the bottom of the page, activate 'final-tribute'
      if (windowBottom >= docHeight - 80) {
        setActiveSection('final-tribute');
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileDrawerOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileDrawerOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTeacherClick = (id: 'sarada' | 'kranti') => {
    setMobileDrawerOpen(false);
    onSelectTeacher(id);
  };

  return (
    <>
      {/* ============================================================ */}
      {/* 1. DESKTOP VERTICAL FLOATING SIDEBAR (Fixed Left, Centered) */}
      {/* ============================================================ */}
      <aside
        aria-label="Sidebar Navigation"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => {
          setIsExpanded(false);
          setHoveredItem(null);
        }}
        className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 pointer-events-auto"
      >
        <motion.div
          animate={{ width: isExpanded ? 240 : 66 }}
          transition={{ type: 'spring', damping: 25, stiffness: 280 }}
          className="relative bg-[#FAF7F2]/90 backdrop-blur-2xl border border-[#EADBCA]/95 shadow-2xl shadow-amber-950/10 rounded-[32px] p-2.5 flex flex-col items-stretch overflow-visible transition-shadow hover:shadow-amber-900/15"
        >
          {/* Top Brand / Teachers' Day Header */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 p-1.5 rounded-2xl hover:bg-amber-50/80 transition-colors text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 overflow-hidden"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-200 via-rose-100 to-rose-200 flex items-center justify-center text-rose-600 shrink-0 shadow-xs group-hover:scale-105 transition-transform">
              <Heart className="w-5 h-5 fill-rose-500 text-rose-500 animate-pulse" />
            </div>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="whitespace-nowrap overflow-hidden pr-2"
                >
                  <span className="font-serif font-bold text-sm text-slate-800 block tracking-tight">
                    Teachers' Day
                  </span>
                  <span className="text-[11px] text-amber-900/70 font-medium block">
                    Sarada &amp; Kranti
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Section Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent my-2 mx-2" />

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1.5" aria-label="Page Sections">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              const Icon = item.icon;

              return (
                <div 
                  key={item.id} 
                  className="relative flex items-center"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`w-full flex items-center gap-3 p-2 rounded-2xl transition-all duration-200 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 overflow-hidden group ${
                      isActive
                        ? 'bg-gradient-to-r from-amber-100/90 to-rose-100/70 text-amber-950 font-semibold shadow-xs border border-amber-200/60'
                        : 'text-slate-600 hover:text-amber-950 hover:bg-amber-50/70'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-amber-800 scale-110' : 'text-slate-500'}`} />
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.span
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -8 }}
                          transition={{ duration: 0.2 }}
                          className="text-xs font-medium whitespace-nowrap overflow-hidden"
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>

                  {/* Collapsed Hover Tooltip */}
                  {!isExpanded && hoveredItem === item.id && (
                    <motion.div
                      initial={{ opacity: 0, x: -4, scale: 0.95 }}
                      animate={{ opacity: 1, x: 8, scale: 1 }}
                      exit={{ opacity: 0, x: -4, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-full ml-2 px-3 py-1.5 rounded-xl bg-slate-900/95 backdrop-blur-md text-white text-xs font-medium whitespace-nowrap shadow-xl border border-white/10 pointer-events-none z-50 flex items-center gap-1.5"
                    >
                      <span className="text-amber-300">{item.emoji}</span>
                      <span>{item.label}</span>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Teacher Surprises Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent my-2 mx-2" />

          {/* Teacher Direct Surprise Triggers */}
          <div className="flex flex-col gap-1.5" aria-label="Teacher Surprises">
            {/* Sarada Madam Button */}
            <div 
              className="relative flex items-center"
              onMouseEnter={() => setHoveredItem('sarada')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <button
                onClick={() => handleTeacherClick('sarada')}
                className="w-full flex items-center gap-3 p-2 rounded-2xl text-amber-900 hover:bg-amber-100/70 border border-transparent hover:border-amber-200/80 transition-all text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 overflow-hidden group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-xl bg-amber-100/90 border border-amber-200 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-transform">
                  <span className="text-sm">🌷</span>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.2 }}
                      className="whitespace-nowrap overflow-hidden flex flex-col pr-1"
                    >
                      <span className="text-xs font-semibold text-amber-950 flex items-center gap-1">
                        Sarada Madam
                        <Sparkles className="w-3 h-3 text-amber-600" />
                      </span>
                      <span className="text-[10px] text-amber-800/70 font-medium">
                        Our HoD • Surprise
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              {!isExpanded && hoveredItem === 'sarada' && (
                <motion.div
                  initial={{ opacity: 0, x: -4, scale: 0.95 }}
                  animate={{ opacity: 1, x: 8, scale: 1 }}
                  exit={{ opacity: 0, x: -4, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-full ml-2 px-3 py-1.5 rounded-xl bg-slate-900/95 backdrop-blur-md text-white text-xs font-medium whitespace-nowrap shadow-xl border border-white/10 pointer-events-none z-50 flex items-center gap-1.5"
                >
                  <span>🌷</span>
                  <span>Sarada Madam (HoD)</span>
                </motion.div>
              )}
            </div>

            {/* Kranti Madam Button */}
            <div 
              className="relative flex items-center"
              onMouseEnter={() => setHoveredItem('kranti')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <button
                onClick={() => handleTeacherClick('kranti')}
                className="w-full flex items-center gap-3 p-2 rounded-2xl text-orange-900 hover:bg-orange-100/70 border border-transparent hover:border-orange-200/80 transition-all text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 overflow-hidden group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-xl bg-orange-100/90 border border-orange-200 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-transform">
                  <span className="text-sm">🌻</span>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.2 }}
                      className="whitespace-nowrap overflow-hidden flex flex-col pr-1"
                    >
                      <span className="text-xs font-semibold text-orange-950 flex items-center gap-1">
                        Kranti Madam
                        <span className="text-xs">✨</span>
                      </span>
                      <span className="text-[10px] text-orange-800/70 font-medium">
                        Respected Teacher
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              {!isExpanded && hoveredItem === 'kranti' && (
                <motion.div
                  initial={{ opacity: 0, x: -4, scale: 0.95 }}
                  animate={{ opacity: 1, x: 8, scale: 1 }}
                  exit={{ opacity: 0, x: -4, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-full ml-2 px-3 py-1.5 rounded-xl bg-slate-900/95 backdrop-blur-md text-white text-xs font-medium whitespace-nowrap shadow-xl border border-white/10 pointer-events-none z-50 flex items-center gap-1.5"
                >
                  <span>🌻</span>
                  <span>Kranti Madam</span>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </aside>

      {/* ============================================================ */}
      {/* 2. MOBILE FLOATING MENU BUTTON & SLIDING DRAWER */}
      {/* ============================================================ */}
      <div className="md:hidden">
        {/* Floating Toggle Button (Top-Left) */}
        <button
          onClick={() => setMobileDrawerOpen(true)}
          aria-label="Open Navigation Menu"
          className="fixed top-5 left-5 z-40 w-11 h-11 rounded-full bg-[#FAF7F2]/90 backdrop-blur-xl border border-[#EADBCA] shadow-lg shadow-amber-950/10 flex items-center justify-center text-slate-700 hover:text-amber-900 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Mobile Slide-In Drawer */}
        <AnimatePresence>
          {mobileDrawerOpen && (
            <div className="fixed inset-0 z-50 flex">
              {/* Dimmed Blurred Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setMobileDrawerOpen(false)}
                className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs"
              />

              {/* Drawer Panel */}
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 26, stiffness: 280 }}
                className="relative w-72 max-w-[85vw] h-full bg-[#FAF7F2] border-r border-[#EADBCA] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
              >
                <div>
                  {/* Top Bar with Brand & Close Button */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#EADBCA]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-200 to-rose-200 flex items-center justify-center text-rose-600 shadow-xs">
                        <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                      </div>
                      <div>
                        <span className="font-serif font-bold text-sm text-slate-800 block">
                          Teachers' Day
                        </span>
                        <span className="text-[11px] text-amber-900/70 font-medium">
                          Sarada &amp; Kranti
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => setMobileDrawerOpen(false)}
                      aria-label="Close Navigation Menu"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-amber-100/60 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Navigation Links */}
                  <nav className="mt-6 flex flex-col gap-1.5">
                    {NAV_ITEMS.map((item) => {
                      const isActive = activeSection === item.id;
                      const Icon = item.icon;

                      return (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-2xl text-left text-sm font-medium transition-colors ${
                            isActive
                              ? 'bg-amber-100/90 text-amber-950 font-semibold border border-amber-200/80 shadow-xs'
                              : 'text-slate-600 hover:bg-amber-50/70 hover:text-slate-900'
                          }`}
                        >
                          <Icon className={`w-4 h-4 ${isActive ? 'text-amber-800' : 'text-slate-500'}`} />
                          <span>{item.label}</span>
                        </button>
                      );
                    })}
                  </nav>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent my-6" />

                  {/* Teacher Surprise Buttons */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 px-3">
                      Special Surprises
                    </span>

                    <button
                      onClick={() => handleTeacherClick('sarada')}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-2xl bg-amber-50/90 border border-amber-200/80 text-left hover:bg-amber-100 transition-colors cursor-pointer"
                    >
                      <span className="text-base">🌷</span>
                      <div>
                        <span className="text-xs font-semibold text-amber-950 block">
                          Sarada Madam (HoD)
                        </span>
                        <span className="text-[10px] text-amber-800/70">
                          Open your surprise ✨
                        </span>
                      </div>
                    </button>

                    <button
                      onClick={() => handleTeacherClick('kranti')}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-2xl bg-orange-50/90 border border-orange-200/80 text-left hover:bg-orange-100 transition-colors cursor-pointer"
                    >
                      <span className="text-base">🌻</span>
                      <div>
                        <span className="text-xs font-semibold text-orange-950 block">
                          Kranti Madam
                        </span>
                        <span className="text-[10px] text-orange-800/70">
                          Open your surprise 💫
                        </span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Footer in Drawer */}
                <div className="pt-4 border-t border-[#EADBCA] text-center">
                  <p className="text-[11px] text-slate-500">
                    With love &amp; gratitude ❤️
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
