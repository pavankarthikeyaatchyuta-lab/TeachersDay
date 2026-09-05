import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  maxMovement?: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const MagneticButton = ({
  children,
  className = '',
  maxMovement = 6,
  onMouseEnter,
  onMouseLeave,
  onClick,
  ...rest
}: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = (e.clientX - centerX) * 0.22;
    const deltaY = (e.clientY - centerY) * 0.22;

    const clampedX = Math.max(-maxMovement, Math.min(maxMovement, deltaX));
    const clampedY = Math.max(-maxMovement, Math.min(maxMovement, deltaY));

    setPosition({ x: clampedX, y: clampedY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    if (onMouseLeave) onMouseLeave();
  };

  const handleMouseEnter = () => {
    if (onMouseEnter) onMouseEnter();
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', damping: 20, stiffness: 260, mass: 0.2 }}
      className={className}
      {...(rest as any)}
    >
      {children}
    </motion.button>
  );
};
