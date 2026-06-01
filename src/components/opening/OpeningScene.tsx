'use client';
import { motion } from 'framer-motion';

interface OpeningSceneProps {
  onStart: () => void;
}

const titleChars = 'TOOL OR AGENT?'.split('');

export default function OpeningScene({ onStart }: OpeningSceneProps) {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
      }}
    >
      {/* Top badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          fontFamily: "'Courier New', monospace",
          fontSize: '0.7rem',
          letterSpacing: '0.3em',
          color: 'rgba(0, 212, 255, 0.7)',
          textTransform: 'uppercase',
          marginBottom: '2rem',
          padding: '0.5rem 1.5rem',
          border: '1px solid rgba(0, 212, 255, 0.2)',
          borderRadius: '4px',
          background: 'rgba(0, 212, 255, 0.05)',
          position: 'relative',
          overflow: 'hidden',
        }}
        className="animate-hologram"
      >
        <span style={{ position: 'relative', zIndex: 1 }}>
          ◈ BUSINESS WITH AI STRATEGIST ◈
        </span>
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '200%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.1), transparent)',
          }}
          animate={{ left: ['−100%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      {/* Main title — character-by-character reveal */}
      <div
        style={{
          fontSize: 'clamp(3rem, 8vw, 7rem)',
          fontWeight: 900,
          letterSpacing: '0.05em',
          lineHeight: 1,
          marginBottom: '1rem',
          fontFamily: 'system-ui, sans-serif',
        }}
        className="animate-float"
      >
        {titleChars.map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 30, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5 + i * 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              display: 'inline-block',
              color: char === ' ' ? 'transparent' : '#00d4ff',
              textShadow: char !== ' '
                ? '0 0 20px rgba(0,212,255,0.8), 0 0 40px rgba(0,212,255,0.4), 0 0 80px rgba(0,212,255,0.2)'
                : 'none',
              minWidth: char === ' ' ? '0.3em' : undefined,
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>

      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        style={{
          fontSize: 'clamp(1rem, 3vw, 1.8rem)',
          fontWeight: 600,
          letterSpacing: '0.2em',
          color: '#7b2fff',
          textShadow: '0 0 20px rgba(123,47,255,0.6), 0 0 40px rgba(123,47,255,0.3)',
          marginBottom: '2rem',
          fontFamily: "'Courier New', monospace",
        }}
      >
        CAN YOU TELL THE DIFFERENCE?
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        style={{
          maxWidth: '600px',
          fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
          lineHeight: 1.7,
          color: 'rgba(232, 244, 255, 0.75)',
          marginBottom: '2.5rem',
        }}
      >
        Follow Sam — a busy business owner — through three eras of AI.
        Then test your knowledge with five real-world scenarios.
      </motion.p>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        style={{
          display: 'flex',
          gap: '2rem',
          marginBottom: '3rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {['5 MINUTES', '5 QUESTIONS', 'INSTANT FEEDBACK'].map((stat, i) => (
          <div
            key={i}
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              color: 'rgba(0, 212, 255, 0.6)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span style={{ color: '#00d4ff', opacity: 0.4 }}>▸</span>
            {stat}
          </div>
        ))}
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 2.1 }}
        className="hud-border"
        style={{ display: 'inline-block' }}
      >
        <motion.button
          onClick={onStart}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="cta-btn"
          style={{
            fontSize: '1rem',
            padding: '1.1rem 2.5rem',
          }}
        >
          Start Sam&apos;s Story →
        </motion.button>
      </motion.div>

      {/* Decorative bottom line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 2.5, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '200px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)',
        }}
      />
    </div>
  );
}
