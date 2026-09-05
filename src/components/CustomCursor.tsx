import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCursor } from '../context/CursorContext';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

interface TrailParticle {
  id: number;
  x: number;
  y: number;
  char: string;
  size: number;
  color: string;
  opacity: number;
}

export const CustomCursor = () => {
  const { cursorType, cursorText, isCelebrationActive } = useCursor();
  const prefersReducedMotion = usePrefersReducedMotion();

  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [lerpedPosition, setLerpedPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [particles, setParticles] = useState<TrailParticle[]>([]);

  const targetPosRef = useRef({ x: -100, y: -100 });
  const currentPosRef = useRef({ x: -100, y: -100 });
  const lastParticleTimeRef = useRef(0);
  const particleIdRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);

  // Check touch / coarse pointer
  useEffect(() => {
    const isTouch = 
      typeof window !== 'undefined' && 
      (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window);
    setIsTouchDevice(isTouch);

    if (!isTouch && !prefersReducedMotion) {
      document.documentElement.classList.add('custom-cursor-active');
    }

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, [prefersReducedMotion]);

  // Mouse move and visibility listeners
  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetPosRef.current = { x: e.clientX, y: e.clientY };
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Add subtle trailing particle if movement occurred and not reduced motion
      const now = performance.now();
      if (!prefersReducedMotion && now - lastParticleTimeRef.current > 65) {
        lastParticleTimeRef.current = now;

        // Choose trail symbol depending on context
        let char = '✦';
        let color = '#D4AF37'; // gold
        let size = 11;

        if (isCelebrationActive) {
          char = Math.random() > 0.5 ? '❤️' : '✨';
          size = 12;
        } else if (cursorType === 'sarada' || cursorType === 'sarada-modal') {
          char = Math.random() > 0.6 ? '🌸' : '✧';
          color = '#FB7185';
          size = 11;
        } else if (cursorType === 'kranti' || cursorType === 'kranti-modal') {
          char = Math.random() > 0.6 ? '🌻' : '·';
          color = '#F59E0B';
          size = 12;
        } else if (cursorType === 'heart') {
          char = '♥';
          color = '#E11D48';
          size = 10;
        } else {
          const trailPool = ['✦', '·', '✧', '•'];
          char = trailPool[Math.floor(Math.random() * trailPool.length)];
          color = Math.random() > 0.5 ? '#D4AF37' : '#E28743';
          size = char === '·' || char === '•' ? 8 : 11;
        }

        const newParticle: TrailParticle = {
          id: ++particleIdRef.current,
          x: e.clientX + (Math.random() * 8 - 4),
          y: e.clientY + (Math.random() * 8 - 4),
          char,
          size,
          color,
          opacity: 0.75,
        };

        setParticles((prev) => [...prev.slice(-7), newParticle]);
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isTouchDevice, isVisible, cursorType, isCelebrationActive, prefersReducedMotion]);

  // Clean up old particles
  useEffect(() => {
    if (particles.length === 0) return;

    const timer = setTimeout(() => {
      setParticles((prev) => prev.slice(1));
    }, 450);

    return () => clearTimeout(timer);
  }, [particles]);

  // Smooth lerping loop for the cursor outer follower
  useEffect(() => {
    if (isTouchDevice) return;

    const animate = () => {
      const target = targetPosRef.current;
      const current = currentPosRef.current;

      const lerp = 0.22;
      current.x += (target.x - current.x) * lerp;
      current.y += (target.y - current.y) * lerp;

      setLerpedPosition({ x: current.x, y: current.y });
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  // Determine effective cursor type based on celebration flag
  const effectiveType = isCelebrationActive ? 'celebration' : cursorType;

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Subtle Trail of Particles */}
      {!prefersReducedMotion && (
        <AnimatePresence>
          {particles.map((p) => (
            <motion.span
              key={p.id}
              initial={{ opacity: p.opacity, scale: 1, x: p.x, y: p.y }}
              animate={{ opacity: 0, scale: 0.35, y: p.y - 12 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              style={{
                position: 'fixed',
                left: 0,
                top: 0,
                fontSize: `${p.size}px`,
                color: p.color,
                transform: `translate3d(${p.x}px, ${p.y}px, 0)`,
                textShadow: '0 0 5px rgba(251, 191, 36, 0.4)',
              }}
              className="pointer-events-none select-none"
            >
              {p.char}
            </motion.span>
          ))}
        </AnimatePresence>
      )}

      {/* 2. Soft Trailing Ambient Glow Circle */}
      <div
        style={{
          transform: `translate3d(${lerpedPosition.x - 18}px, ${lerpedPosition.y - 18}px, 0)`,
          transition: 'width 0.2s, height 0.2s, opacity 0.2s',
        }}
        className={`fixed left-0 top-0 rounded-full pointer-events-none ${
          effectiveType === 'pointer'
            ? 'w-11 h-11 -ml-1 -mt-1 bg-amber-400/25 border border-amber-400/40 blur-[1px]'
            : effectiveType === 'sarada' || effectiveType === 'sarada-modal'
            ? 'w-9 h-9 bg-rose-400/20 border border-rose-300/30 blur-[2px]'
            : effectiveType === 'kranti' || effectiveType === 'kranti-modal'
            ? 'w-9 h-9 bg-amber-400/20 border border-amber-300/30 blur-[2px]'
            : 'w-9 h-9 bg-amber-300/20 border border-amber-200/30 blur-[2px]'
        }`}
      />

      {/* 3. Main Center Cursor Element (Directly Anchored to Mouse) */}
      <div
        style={{
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
        }}
        className="fixed left-0 top-0 pointer-events-none -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
      >
        {/* Render contextual cursor icon */}
        {effectiveType === 'default' && (
          <div className="relative flex items-center justify-center">
            <span className="text-amber-700 text-sm drop-shadow-xs font-serif select-none">
              ✦
            </span>
            <span className="absolute w-1.5 h-1.5 rounded-full bg-amber-400 blur-2xs" />
          </div>
        )}

        {effectiveType === 'pointer' && (
          <div className="relative flex items-center justify-center">
            <span className="text-amber-800 text-base scale-110 drop-shadow-xs font-serif select-none">
              ✦
            </span>
            {cursorText && (
              <span className="absolute left-4 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded-full bg-[#1E293B]/90 text-white text-[10px] font-semibold whitespace-nowrap shadow-md border border-white/20">
                {cursorText}
              </span>
            )}
          </div>
        )}

        {effectiveType === 'book' && (
          <div className="flex items-center gap-0.5 bg-white/90 backdrop-blur-xs px-2 py-1 rounded-full border border-amber-300 shadow-md">
            <span className="text-xs">📖</span>
            <span className="text-amber-600 text-[10px]">✦</span>
          </div>
        )}

        {effectiveType === 'apple' && (
          <div className="flex items-center gap-1 bg-white/90 backdrop-blur-xs px-2 py-1 rounded-full border border-rose-300 shadow-md animate-bounce">
            <span className="text-xs">🍎</span>
            <span className="text-[10px] font-semibold text-rose-800">Tap me</span>
          </div>
        )}

        {effectiveType === 'lightbulb' && (
          <div className="flex items-center gap-0.5 bg-white/90 backdrop-blur-xs px-2 py-1 rounded-full border border-yellow-300 shadow-md">
            <span className="text-xs">💡</span>
            <span className="text-yellow-600 text-[10px]">✨</span>
          </div>
        )}

        {effectiveType === 'heart' && (
          <div className="flex items-center gap-0.5 bg-white/90 backdrop-blur-xs px-2 py-1 rounded-full border border-rose-300 shadow-md">
            <span className="text-xs">❤️</span>
            <span className="text-rose-500 text-[10px]">✦</span>
          </div>
        )}

        {effectiveType === 'sarada' && (
          <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full border border-rose-300 shadow-lg">
            <span className="text-xs">🌷</span>
            <span className="text-[11px] font-semibold text-amber-950 whitespace-nowrap">
              {cursorText || "Open Sarada's surprise"}
            </span>
            <span className="text-rose-500 text-[10px]">✨</span>
          </div>
        )}

        {effectiveType === 'kranti' && (
          <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full border border-amber-300 shadow-lg">
            <span className="text-xs">🌻</span>
            <span className="text-[11px] font-semibold text-orange-950 whitespace-nowrap">
              {cursorText || "Open Kranti's surprise"}
            </span>
            <span className="text-amber-600 text-[10px]">✨</span>
          </div>
        )}

        {effectiveType === 'sarada-modal' && (
          <div className="flex items-center gap-1 bg-rose-50/90 backdrop-blur-xs px-2 py-1 rounded-full border border-rose-300 shadow-md">
            <span className="text-xs">🌷</span>
            <span className="text-rose-600 text-[10px]">🌸</span>
          </div>
        )}

        {effectiveType === 'kranti-modal' && (
          <div className="flex items-center gap-1 bg-orange-50/90 backdrop-blur-xs px-2 py-1 rounded-full border border-orange-300 shadow-md">
            <span className="text-xs">🌻</span>
            <span className="text-amber-600 text-[10px]">✨</span>
          </div>
        )}

        {effectiveType === 'celebration' && (
          <div className="flex items-center gap-1 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full border border-rose-300 shadow-xl">
            <span className="text-xs animate-pulse">❤️</span>
            <span className="text-amber-600 text-xs">✦</span>
          </div>
        )}

        {/* Sidebar specific cursor states */}
        {effectiveType === 'sidebar-home' && (
          <div className="flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full border border-amber-300 shadow-sm">
            <span className="text-xs text-amber-800">✦</span>
            <span className="text-[10px] font-medium text-slate-700">Home</span>
          </div>
        )}
        {effectiveType === 'sidebar-appreciation' && (
          <div className="flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full border border-amber-300 shadow-sm">
            <span className="text-xs">📖</span>
            <span className="text-[10px] font-medium text-slate-700">Appreciation</span>
          </div>
        )}
        {effectiveType === 'sidebar-teachers' && (
          <div className="flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full border border-amber-300 shadow-sm">
            <span className="text-xs">👩‍🏫</span>
            <span className="text-[10px] font-medium text-slate-700">Our Teachers</span>
          </div>
        )}
        {effectiveType === 'sidebar-message' && (
          <div className="flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full border border-amber-300 shadow-sm">
            <span className="text-xs">💌</span>
            <span className="text-[10px] font-medium text-slate-700">Message</span>
          </div>
        )}
        {effectiveType === 'sidebar-thanks' && (
          <div className="flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full border border-rose-300 shadow-sm">
            <span className="text-xs">❤️</span>
            <span className="text-[10px] font-medium text-slate-700">Thank You</span>
          </div>
        )}
      </div>
    </div>
  );
};
