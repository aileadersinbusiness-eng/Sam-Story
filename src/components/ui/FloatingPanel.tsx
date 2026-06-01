'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingPanelProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  glow?: boolean;
}

export function FloatingPanel({ children, delay = 0, className = '', glow = false }: FloatingPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`glass rounded-2xl p-6 ${glow ? 'border-cyan-500/20' : ''} ${className}`}
      style={glow ? { boxShadow: '0 0 40px rgba(0,212,255,0.08)' } : {}}
    >
      {children}
    </motion.div>
  );
}

export function RevealText({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SceneLabel({ number, label }: { number: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3 mb-4"
    >
      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#00D4FF', letterSpacing: '0.15em' }}>
        {number.padStart(2, '0')}
      </span>
      <div className="section-line" />
      <span style={{ fontFamily: 'Inter', fontSize: 11, color: '#8B9CB6', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
        {label}
      </span>
    </motion.div>
  );
}
