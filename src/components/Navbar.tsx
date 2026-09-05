import { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Heart } from 'lucide-react';

interface NavbarProps {
  onSelectTeacher: (id: 'sarada' | 'kranti') => void;
}

export const Navbar = ({ onSelectTeacher }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-40 px-4 sm:px-6 pointer-events-none transition-all duration-300">
      <nav 
        aria-label="Main Navigation"
        className={`max-w-4xl mx-auto rounded-full transition-all duration-300 pointer-events-auto px-4 sm:px-6 py-2.5 flex items-center justify-between ${
          scrolled 
            ? 'glass-nav shadow-lg shadow-amber-950/5 border border-[#E2E8F0]/80' 
            : 'bg-white/70 backdrop-blur-md border border-white/60 shadow-sm'
        }`}
      >
        {/* Brand / Title */}
        <button 
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg py-1"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-200 to-rose-200 flex items-center justify-center text-rose-600 shadow-sm group-hover:scale-105 transition-transform">
            <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
          </div>
          <div>
            <span className="font-semibold text-sm tracking-tight text-slate-800 group-hover:text-amber-900 transition-colors block">
              Teachers' Day
            </span>
            <span className="text-[11px] text-slate-500 font-normal hidden sm:block">
              Sarada Madam &amp; Kranti Madam
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600">
          <button
            onClick={() => scrollTo('hero')}
            className="px-3 py-1.5 rounded-full hover:text-amber-900 hover:bg-amber-50/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo('intro')}
            className="px-3 py-1.5 rounded-full hover:text-amber-900 hover:bg-amber-50/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            Appreciation
          </button>
          <button
            onClick={() => scrollTo('teachers')}
            className="px-3 py-1.5 rounded-full hover:text-amber-900 hover:bg-amber-50/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            Our Teachers
          </button>
          <button
            onClick={() => scrollTo('quote')}
            className="px-3 py-1.5 rounded-full hover:text-amber-900 hover:bg-amber-50/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            Message
          </button>
          <button
            onClick={() => scrollTo('final-tribute')}
            className="px-3 py-1.5 rounded-full hover:text-amber-900 hover:bg-amber-50/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            Thank You
          </button>
        </div>

        {/* Quick Teacher Surprise Buttons */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={() => onSelectTeacher('sarada')}
            className="text-xs px-3 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200/80 hover:bg-amber-100 hover:border-amber-300 transition-all font-medium flex items-center gap-1 shadow-xs"
          >
            <span>Sarada Madam</span>
            <Sparkles className="w-3 h-3 text-amber-600" />
          </button>
          <button
            onClick={() => onSelectTeacher('kranti')}
            className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-900 border border-orange-200/80 hover:bg-orange-100 hover:border-orange-300 transition-all font-medium flex items-center gap-1 shadow-xs"
          >
            <span>Kranti Madam</span>
            <span className="text-xs">🌻</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            className="p-1.5 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden mt-2 pointer-events-auto max-w-sm mx-auto bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-2xl shadow-xl p-4 flex flex-col gap-2 text-slate-700 text-sm">
          <button
            onClick={() => scrollTo('hero')}
            className="text-left px-3 py-2 rounded-xl hover:bg-amber-50 text-slate-800 font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo('intro')}
            className="text-left px-3 py-2 rounded-xl hover:bg-amber-50 text-slate-800 font-medium"
          >
            Appreciation
          </button>
          <button
            onClick={() => scrollTo('teachers')}
            className="text-left px-3 py-2 rounded-xl hover:bg-amber-50 text-slate-800 font-medium"
          >
            Our Teachers
          </button>
          <button
            onClick={() => scrollTo('quote')}
            className="text-left px-3 py-2 rounded-xl hover:bg-amber-50 text-slate-800 font-medium"
          >
            Message
          </button>
          <button
            onClick={() => scrollTo('final-tribute')}
            className="text-left px-3 py-2 rounded-xl hover:bg-amber-50 text-slate-800 font-medium"
          >
            Thank You
          </button>

          <div className="pt-2 mt-1 border-t border-slate-100 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onSelectTeacher('sarada');
              }}
              className="px-3 py-2 text-xs rounded-xl bg-amber-50 text-amber-900 border border-amber-200 font-medium text-center"
            >
              Surprise: Sarada Ma'am ✨
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onSelectTeacher('kranti');
              }}
              className="px-3 py-2 text-xs rounded-xl bg-orange-50 text-orange-900 border border-orange-200 font-medium text-center"
            >
              Surprise: Kranti Ma'am 🌻
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
