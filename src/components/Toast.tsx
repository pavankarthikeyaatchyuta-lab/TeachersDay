import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';

export interface ToastData {
  id: string;
  icon: string;
  label: string;
  message: string;
  subtext?: string;
}

interface ToastProps {
  toast: ToastData | null;
  onClose: () => void;
}

export const Toast = ({ toast, onClose }: ToastProps) => {
  return (
    <div 
      aria-live="polite" 
      aria-atomic="true"
      className="fixed bottom-6 right-6 z-50 pointer-events-none flex flex-col items-end max-w-sm w-[90vw]"
    >
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="pointer-events-auto w-full bg-[#FFFFFF]/95 backdrop-blur-md border border-[#F1E5D1] shadow-2xl rounded-2xl p-4 text-[#1E293B] relative overflow-hidden"
          >
            {/* Top decorative amber line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-rose-400 to-amber-500" />

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF0E6] flex items-center justify-center text-xl shrink-0 shadow-inner">
                {toast.icon}
              </div>

              <div className="flex-1 pr-4">
                <div className="flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#B45309]">
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  <span>{toast.label}</span>
                </div>
                <p className="text-sm font-medium text-[#1E293B] mt-0.5 leading-snug">
                  "{toast.message}"
                </p>
                {toast.subtext && (
                  <p className="text-xs text-slate-500 mt-1 italic">
                    {toast.subtext}
                  </p>
                )}
              </div>

              <button
                onClick={onClose}
                aria-label="Close notification"
                className="text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 transition-colors shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
