'use client';
import { motion } from 'framer-motion';

interface AnimatedLogoProps {
  size?: number;
  className?: string;
}

export default function AnimatedLogo({ size = 56, className = '' }: AnimatedLogoProps) {
  return (
    <div className={`relative inline-flex items-center gap-3 ${className}`} style={{ cursor: 'default' }}>
      {/* Reactor icon */}
      <div className="relative" style={{ width: size, height: size }}>
        {/* Outer pulse rings */}
        {[1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border border-cyan-400/20"
            initial={{ scale: 0.8, opacity: 0.6 }}
            animate={{ scale: [0.8, 1.8, 1.8], opacity: [0.6, 0, 0] }}
            transition={{ duration: 2.4, delay: i * 1.2, repeat: Infinity, ease: 'easeOut' }}
          />
        ))}
        {/* Rotating rings */}
        <motion.svg
          width={size} height={size} viewBox="0 0 56 56"
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        >
          <ellipse cx="28" cy="28" rx="22" ry="8" fill="none" stroke="url(#g1)" strokeWidth="1.5" opacity="0.7" />
        </motion.svg>
        <motion.svg
          width={size} height={size} viewBox="0 0 56 56"
          className="absolute inset-0"
          animate={{ rotate: -360 }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        >
          <ellipse cx="28" cy="28" rx="22" ry="8" fill="none" stroke="url(#g2)" strokeWidth="1.5" opacity="0.7"
            transform="rotate(60 28 28)" />
        </motion.svg>
        <motion.svg
          width={size} height={size} viewBox="0 0 56 56"
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 19, repeat: Infinity, ease: 'linear' }}
        >
          <ellipse cx="28" cy="28" rx="22" ry="8" fill="none" stroke="url(#g3)" strokeWidth="1.5" opacity="0.7"
            transform="rotate(120 28 28)" />
        </motion.svg>
        {/* Core */}
        <svg width={size} height={size} viewBox="0 0 56 56" className="absolute inset-0">
          <defs>
            <radialGradient id="core-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#1B6CF2" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0a0a1a" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00D4FF" />
              <stop offset="100%" stopColor="#1B6CF2" />
            </linearGradient>
            <linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1B6CF2" />
              <stop offset="100%" stopColor="#00D4FF" />
            </linearGradient>
            <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#1B6CF2" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <circle cx="28" cy="28" r="12" fill="url(#core-grad)" />
          <motion.circle
            cx="28" cy="28" r="6"
            fill="none" stroke="#00D4FF" strokeWidth="1"
            animate={{ r: [5, 7, 5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <circle cx="28" cy="28" r="3" fill="#00D4FF" opacity="0.9" />
        </svg>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className="font-display font-700 text-white tracking-tight" style={{ fontSize: size * 0.28 }}>
          BUSINESS
        </span>
        <span className="font-display font-700 text-white tracking-tight" style={{ fontSize: size * 0.28 }}>
          WITH AI
        </span>
        <span className="font-display font-400 tracking-widest uppercase" style={{ fontSize: size * 0.14, color: '#8B9CB6', letterSpacing: '0.22em' }}>
          STRATEGIST
        </span>
      </div>
    </div>
  );
}
