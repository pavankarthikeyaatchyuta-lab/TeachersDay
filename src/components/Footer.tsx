import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 bg-[#FAF7F2] border-t border-[#EADBCA] text-center text-slate-600">
      <div className="max-w-xl mx-auto space-y-3">
        <p className="flex items-center justify-center gap-1.5 text-sm sm:text-base font-medium text-slate-800">
          <span>Made with gratitude</span>
          <Heart className="w-4 h-4 fill-rose-500 text-rose-500 inline" />
        </p>
        
        <p className="text-xs sm:text-sm text-slate-500 font-light">
          For the teachers who make a difference every day.
        </p>

        <div className="pt-2">
          <span className="inline-block text-xs uppercase tracking-widest font-semibold text-rose-700 bg-rose-50 border border-rose-200/80 rounded-full px-4 py-1">
            Happy Teachers' Day 🌷
          </span>
        </div>
      </div>
    </footer>
  );
};
