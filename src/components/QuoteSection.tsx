import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export const QuoteSection = () => {
  return (
    <section 
      id="quote" 
      className="relative py-28 sm:py-36 px-4 sm:px-6 bg-[#0F172A] text-white overflow-hidden"
    >
      {/* Slow-moving particles/stars background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Subtle radial ambient glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />

        {/* Slow moving starlight particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, (i % 2 === 0 ? -25 : 25), 0],
              opacity: [0.2, 0.7, 0.2],
              scale: [0.9, 1.3, 0.9],
            }}
            transition={{
              duration: 6 + (i % 5) * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i * 0.3),
            }}
            className="absolute rounded-full bg-amber-200"
            style={{
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              top: `${10 + (i * 4.2)}%`,
              left: `${5 + (i * 4.6)}%`,
              boxShadow: '0 0 8px rgba(251, 191, 36, 0.6)',
            }}
          />
        ))}
      </div>

      {/* Quote Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 rounded-full bg-white/10 border border-white/20 mx-auto flex items-center justify-center text-amber-300 mb-8 shadow-inner"
        >
          <Quote className="w-8 h-8 opacity-80" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-6"
        >
          <blockquote className="text-2xl sm:text-4xl md:text-5xl font-display font-light leading-relaxed sm:leading-snug text-slate-100 max-w-3xl mx-auto">
            <span className="block">
              "Years from now, we may forget what was written on the board...
            </span>
            <span className="block mt-4 text-amber-200 font-medium italic">
              but we'll remember who stood in front of it and taught us."
            </span>
          </blockquote>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-8 flex flex-col items-center gap-2"
          >
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <p className="text-sm sm:text-base tracking-widest uppercase font-medium text-slate-300">
              — With gratitude to our teachers
            </p>
            <span className="text-xs text-amber-400/80 font-normal">
              Sarada Madam &amp; Kranti Madam
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
