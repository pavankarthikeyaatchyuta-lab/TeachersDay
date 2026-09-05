import confetti from 'canvas-confetti';

export const triggerElegantCelebration = () => {
  // Center fireworks burst
  confetti({
    particleCount: 60,
    spread: 100,
    origin: { y: 0.65 },
    colors: ['#D4AF37', '#F59E0B', '#E11D48', '#FB7185', '#FDFBF7', '#60A5FA'],
    disableForReducedMotion: true,
  });

  // Left & Right celebratory streams
  setTimeout(() => {
    confetti({
      particleCount: 40,
      angle: 60,
      spread: 70,
      origin: { x: 0.1, y: 0.7 },
      colors: ['#D4AF37', '#F43F5E', '#F59E0B', '#FDFBF7'],
      disableForReducedMotion: true,
    });
    confetti({
      particleCount: 40,
      angle: 120,
      spread: 70,
      origin: { x: 0.9, y: 0.7 },
      colors: ['#D4AF37', '#F43F5E', '#F59E0B', '#FDFBF7'],
      disableForReducedMotion: true,
    });
  }, 250);

  // Soft falling petals / stars delayed shower
  setTimeout(() => {
    confetti({
      particleCount: 35,
      spread: 120,
      origin: { y: 0.4 },
      gravity: 0.7,
      ticks: 300,
      colors: ['#FDA4AF', '#FCD34D', '#F472B6'],
      disableForReducedMotion: true,
    });
  }, 600);
};
