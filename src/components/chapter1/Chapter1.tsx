'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Chapter1Props {
  onNext: () => void;
}

function CruiseControlIcon() {
  return (
    <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Road with dotted fixed line */}
      <line x1="10" y1="45" x2="70" y2="45" stroke="rgba(0,212,255,0.3)" strokeWidth="1" />
      <line x1="10" y1="48" x2="70" y2="48" stroke="rgba(0,212,255,0.3)" strokeWidth="1" />
      {/* Fixed dotted route */}
      <line x1="40" y1="10" x2="40" y2="43" stroke="#00d4ff" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
      {/* Arrow at top of route */}
      <polygon points="40,6 36,14 44,14" fill="#00d4ff" opacity="0.6" />
      {/* Car body */}
      <rect x="28" y="34" width="24" height="10" rx="3" fill="rgba(0,212,255,0.2)" stroke="#00d4ff" strokeWidth="1" />
      <rect x="32" y="27" width="16" height="9" rx="2" fill="rgba(0,212,255,0.15)" stroke="#00d4ff" strokeWidth="1" />
      {/* Wheels */}
      <circle cx="33" cy="44" r="3" fill="rgba(0,20,40,0.8)" stroke="#00d4ff" strokeWidth="1" />
      <circle cx="47" cy="44" r="3" fill="rgba(0,20,40,0.8)" stroke="#00d4ff" strokeWidth="1" />
      {/* Cruise control indicator */}
      <text x="40" y="32" textAnchor="middle" fill="#00d4ff" fontSize="5" fontFamily="monospace">CC</text>
    </svg>
  );
}

function SelfDrivingIcon() {
  return (
    <svg width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Multiple branching paths */}
      <line x1="40" y1="45" x2="40" y2="20" stroke="rgba(123,47,255,0.4)" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="40" y1="30" x2="60" y2="15" stroke="rgba(123,47,255,0.4)" strokeWidth="1" strokeDasharray="2 2" />
      <line x1="40" y1="30" x2="20" y2="15" stroke="rgba(123,47,255,0.4)" strokeWidth="1" strokeDasharray="2 2" />
      {/* Decision nodes */}
      <circle cx="40" cy="20" r="3" fill="rgba(123,47,255,0.6)" stroke="#7b2fff" strokeWidth="1" />
      <circle cx="60" cy="15" r="3" fill="rgba(123,47,255,0.4)" stroke="#7b2fff" strokeWidth="1" />
      <circle cx="20" cy="15" r="3" fill="rgba(123,47,255,0.4)" stroke="#7b2fff" strokeWidth="1" />
      {/* Sensor arcs around car */}
      <path d="M 20 36 A 10 10 0 0 1 30 30" stroke="rgba(0,212,255,0.5)" strokeWidth="1" fill="none" />
      <path d="M 50 30 A 10 10 0 0 1 60 36" stroke="rgba(0,212,255,0.5)" strokeWidth="1" fill="none" />
      <path d="M 25 28 A 15 15 0 0 1 55 28" stroke="rgba(0,212,255,0.3)" strokeWidth="1" fill="none" />
      {/* Car body */}
      <rect x="28" y="34" width="24" height="10" rx="3" fill="rgba(123,47,255,0.2)" stroke="#7b2fff" strokeWidth="1" />
      <rect x="32" y="27" width="16" height="9" rx="2" fill="rgba(123,47,255,0.15)" stroke="#7b2fff" strokeWidth="1" />
      {/* Wheels */}
      <circle cx="33" cy="44" r="3" fill="rgba(0,20,40,0.8)" stroke="#7b2fff" strokeWidth="1" />
      <circle cx="47" cy="44" r="3" fill="rgba(0,20,40,0.8)" stroke="#7b2fff" strokeWidth="1" />
      {/* AI indicator */}
      <text x="40" y="32" textAnchor="middle" fill="#7b2fff" fontSize="5" fontFamily="monospace">AI</text>
    </svg>
  );
}

const toolBullets = ['Fixed route', 'Limited context', 'Human supervised', 'Single task'];
const agentBullets = ['Dynamic routing', 'Multi-context aware', 'Autonomous decisions', 'Multi-step execution'];

export default function Chapter1({ onNext }: Chapter1Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div
      ref={ref}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Chapter indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        style={{
          alignSelf: 'flex-start',
          fontFamily: "'Courier New', monospace",
          fontSize: '0.7rem',
          letterSpacing: '0.3em',
          color: 'rgba(0, 212, 255, 0.5)',
          marginBottom: '1.5rem',
        }}
      >
        CHAPTER 01 · THE CONCEPT
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
          fontWeight: 800,
          letterSpacing: '0.1em',
          color: '#e8f4ff',
          marginBottom: '0.5rem',
          textAlign: 'center',
        }}
      >
        TRANSPORTATION EVOLUTION
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
        style={{
          width: '100%',
          maxWidth: '400px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)',
          marginBottom: '3rem',
        }}
      />

      {/* Two panels */}
      <div
        style={{
          display: 'flex',
          gap: '2rem',
          width: '100%',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {/* LEFT: AI Tool */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass-panel hud-border"
          style={{
            flex: '1 1 300px',
            maxWidth: '520px',
            padding: '2rem',
            borderColor: 'rgba(0, 212, 255, 0.25)',
          }}
        >
          {/* Label */}
          <div
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: '0.65rem',
              letterSpacing: '0.3em',
              color: 'rgba(0, 212, 255, 0.6)',
              marginBottom: '0.5rem',
            }}
          >
            ◈ AI TOOL
          </div>

          {/* Metaphor */}
          <h3
            className="neon-text"
            style={{
              fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
              fontWeight: 700,
              letterSpacing: '0.05em',
              marginBottom: '1.5rem',
            }}
          >
            CRUISE CONTROL
          </h3>

          {/* Icon */}
          <div style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
            <CruiseControlIcon />
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: 'rgba(232, 244, 255, 0.75)',
              marginBottom: '1.5rem',
            }}
          >
            A set of defined rules. Follows a fixed path. Requires human input to change direction.
            Excellent at its one job — nothing more.
          </p>

          {/* Bullets */}
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {toolBullets.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 + i * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontFamily: "'Courier New', monospace",
                  fontSize: '0.8rem',
                  color: 'rgba(0, 212, 255, 0.8)',
                }}
              >
                <span style={{ color: '#00d4ff', flexShrink: 0 }}>▸</span>
                {b}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT: AI Agent */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="glass-panel hud-border"
          style={{
            flex: '1 1 300px',
            maxWidth: '520px',
            padding: '2rem',
            borderColor: 'rgba(123, 47, 255, 0.25)',
          }}
        >
          {/* Label */}
          <div
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: '0.65rem',
              letterSpacing: '0.3em',
              color: 'rgba(123, 47, 255, 0.6)',
              marginBottom: '0.5rem',
            }}
          >
            ◈ AI AGENT
          </div>

          {/* Metaphor */}
          <h3
            className="neon-text-purple"
            style={{
              fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
              fontWeight: 700,
              letterSpacing: '0.05em',
              marginBottom: '1.5rem',
            }}
          >
            SELF-DRIVING CAR
          </h3>

          {/* Icon */}
          <div style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
            <SelfDrivingIcon />
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: '0.95rem',
              lineHeight: 1.7,
              color: 'rgba(232, 244, 255, 0.75)',
              marginBottom: '1.5rem',
            }}
          >
            Perceives its environment. Makes decisions. Adapts in real time. Chooses the optimal
            route — even when conditions change.
          </p>

          {/* Bullets */}
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {agentBullets.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 + i * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontFamily: "'Courier New', monospace",
                  fontSize: '0.8rem',
                  color: 'rgba(123, 47, 255, 0.9)',
                }}
              >
                <span style={{ color: '#7b2fff', flexShrink: 0 }}>▸</span>
                {b}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Next button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 1.2 }}
        style={{ marginTop: '3rem' }}
      >
        <motion.button
          onClick={onNext}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="cta-btn"
        >
          Next: Sam&apos;s Story →
        </motion.button>
      </motion.div>
    </div>
  );
}
