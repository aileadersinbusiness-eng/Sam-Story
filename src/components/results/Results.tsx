'use client';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface ResultsProps {
  score: number;
  onRestart: () => void;
}

const classifications = [
  { min: 0, max: 1, title: 'AI Curious 🌱', message: "You're just starting your AI journey. That's exactly where Sam began." },
  { min: 2, max: 3, title: 'AI Explorer 🚀', message: "You're building intuition. You can spot some patterns — now it's time to go deeper." },
  { min: 4, max: 4, title: 'AI Operator ⚡', message: "Strong instincts. You understand how agents differ from tools in practice." },
  { min: 5, max: 5, title: 'AI Strategist ✨', message: "You think like an AI strategist. You see agents where others see tools." },
];

const journeyStages = [
  { label: 'Manual Processes', color: '#4a5568', highlight: false },
  { label: 'AI Tools', color: '#00a8cc', highlight: false },
  { label: 'AI Agents', color: '#00d4ff', highlight: false },
  { label: 'AI Operational', color: '#7b2fff', highlight: false },
];

function getClassification(score: number) {
  return classifications.find(c => score >= c.min && score <= c.max) || classifications[0];
}

function getHighlightedStage(score: number): number {
  if (score <= 1) return 0;
  if (score <= 2) return 1;
  if (score <= 4) return 2;
  return 3;
}

export default function Results({ score, onRestart }: ResultsProps) {
  const [displayScore, setDisplayScore] = useState(0);
  const animRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const classification = getClassification(score);
  const highlightedStage = getHighlightedStage(score);

  useEffect(() => {
    let current = 0;
    animRef.current = setInterval(() => {
      current++;
      setDisplayScore(current);
      if (current >= score) {
        clearInterval(animRef.current!);
      }
    }, 250);
    return () => {
      if (animRef.current) clearInterval(animRef.current);
    };
  }, [score]);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 2rem',
        maxWidth: '900px',
        margin: '0 auto',
        width: '100%',
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
      }}
    >
      {/* Chapter label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          fontFamily: "'Courier New', monospace",
          fontSize: '0.7rem',
          letterSpacing: '0.3em',
          color: 'rgba(0, 212, 255, 0.5)',
          marginBottom: '2.5rem',
        }}
      >
        FIELD TEST COMPLETE · RESULTS
      </motion.div>

      {/* Score counter */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: 'spring' }}
        style={{ marginBottom: '1.5rem' }}
      >
        <div
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: '0.7rem',
            letterSpacing: '0.3em',
            color: 'rgba(0, 212, 255, 0.5)',
            marginBottom: '0.5rem',
          }}
        >
          SCORE
        </div>
        <div
          className="neon-text"
          style={{
            fontSize: 'clamp(4rem, 12vw, 8rem)',
            fontWeight: 900,
            lineHeight: 1,
            fontFamily: "'Courier New', monospace",
          }}
        >
          {displayScore}<span style={{ fontSize: '0.4em', opacity: 0.5 }}>/5</span>
        </div>
      </motion.div>

      {/* Classification badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="glass-panel hud-border"
        style={{
          padding: '1.5rem 3rem',
          marginBottom: '1.5rem',
          borderColor: 'rgba(0, 212, 255, 0.3)',
        }}
      >
        <div
          style={{
            fontSize: 'clamp(1.2rem, 3vw, 2rem)',
            fontWeight: 700,
            color: '#00d4ff',
            textShadow: '0 0 20px rgba(0,212,255,0.5)',
            marginBottom: '0.5rem',
          }}
        >
          {classification.title}
        </div>
        <p
          style={{
            fontSize: '0.95rem',
            color: 'rgba(232, 244, 255, 0.75)',
            lineHeight: 1.6,
            maxWidth: '400px',
          }}
        >
          {classification.message}
        </p>
      </motion.div>

      {/* Business evolution journey */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        style={{ width: '100%', marginBottom: '3rem' }}
      >
        <div
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: '0.65rem',
            letterSpacing: '0.3em',
            color: 'rgba(0, 212, 255, 0.5)',
            marginBottom: '1.5rem',
          }}
        >
          BUSINESS EVOLUTION
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0',
          }}
        >
          {journeyStages.map((stage, i) => {
            const isHighlighted = i === highlightedStage;
            const isPast = i < highlightedStage;

            return (
              <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: isHighlighted ? 1.05 : 1 }}
                  transition={{ delay: 1.2 + i * 0.15 }}
                  style={{
                    padding: '0.75rem 1.25rem',
                    borderRadius: '8px',
                    border: `1px solid ${isHighlighted ? stage.color : 'rgba(232, 244, 255, 0.1)'}`,
                    background: isHighlighted
                      ? `rgba(${i === 3 ? '123,47,255' : '0,212,255'}, 0.12)`
                      : 'rgba(0, 20, 40, 0.4)',
                    backdropFilter: 'blur(10px)',
                    textAlign: 'center',
                    minWidth: '110px',
                    boxShadow: isHighlighted
                      ? `0 0 20px ${stage.color}40`
                      : 'none',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.7rem',
                      fontFamily: "'Courier New', monospace",
                      color: isHighlighted ? stage.color : isPast ? 'rgba(232,244,255,0.4)' : 'rgba(232,244,255,0.2)',
                      letterSpacing: '0.05em',
                      lineHeight: 1.4,
                    }}
                  >
                    {stage.label}
                  </div>
                  {isHighlighted && (
                    <div style={{ fontSize: '0.6rem', color: stage.color, marginTop: '0.25rem', opacity: 0.8 }}>
                      ◈ YOU ARE HERE
                    </div>
                  )}
                </motion.div>

                {i < journeyStages.length - 1 && (
                  <div
                    style={{
                      width: '2rem',
                      height: '1px',
                      background: i < highlightedStage
                        ? 'rgba(0, 212, 255, 0.4)'
                        : 'rgba(232, 244, 255, 0.1)',
                      flexShrink: 0,
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
      >
        <motion.a
          href="https://businesswithaistrategist.com/services"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="cta-btn"
          style={{ fontSize: '1rem', padding: '1.1rem 2.5rem' }}
        >
          Explore the AI Accelerator →
        </motion.a>
        <motion.button
          onClick={onRestart}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="cta-btn-secondary"
        >
          Take the quiz again
        </motion.button>
      </motion.div>
    </div>
  );
}
