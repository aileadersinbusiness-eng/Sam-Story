'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import AnimatedLogo from '@/components/ui/AnimatedLogo';
import { SceneLabel, RevealText } from '@/components/ui/FloatingPanel';
import { GUIDE } from '@/lib/content';

const ReactorCanvas = dynamic(() => import('@/components/reactor/ReactorCanvas'), { ssr: false });

export default function Scene11WhatNext() {
  const { next } = GUIDE;
  return (
    <section id="scene-10" className="relative min-h-screen flex items-center justify-center py-32 px-6 overflow-hidden"
      style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,212,255,0.08) 0%, rgba(27,108,242,0.05) 40%, transparent 70%), #03030A' }}
    >
      {/* Reactor fully powered */}
      <div className="absolute inset-0 pointer-events-none">
        <ReactorCanvas phase={1} className="w-full h-full opacity-40" />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: 'linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <SceneLabel number="11" label="What to do next" />

        <RevealText className="mb-6">
          <h2 style={{ fontFamily: 'Outfit', fontWeight: 900, fontSize: 'clamp(40px, 7vw, 88px)', lineHeight: 1.0, letterSpacing: '-0.04em', color: '#F0F4FF' }}>
            {next.heading}
          </h2>
        </RevealText>

        <RevealText delay={0.15} className="mb-12">
          <p style={{ fontFamily: 'Inter', fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: 1.8, color: '#8B9CB6', maxWidth: '56ch', margin: '0 auto' }}>
            {next.body}
          </p>
        </RevealText>

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="glass rounded-3xl p-10 mx-auto max-w-2xl"
          style={{ border: '1px solid rgba(0,212,255,0.2)', boxShadow: '0 0 60px rgba(0,212,255,0.08), 0 0 120px rgba(27,108,242,0.05)' }}
        >
          <div className="flex justify-center mb-8">
            <AnimatedLogo size={64} />
          </div>

          <h3 style={{ fontFamily: 'Outfit', fontSize: 28, fontWeight: 700, color: '#F0F4FF', marginBottom: 12 }}>
            {next.cta.heading}
          </h3>
          <p style={{ fontFamily: 'Inter', fontSize: 17, lineHeight: 1.8, color: '#8B9CB6', marginBottom: 28 }}>
            {next.cta.body}
          </p>

          <a
            href="https://businesswithaistrategist.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-600 transition-all duration-300 cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #00D4FF, #1B6CF2)',
              color: '#000',
              fontFamily: 'Outfit',
              fontSize: 16,
              fontWeight: 600,
              textDecoration: 'none',
              boxShadow: '0 0 30px rgba(0,212,255,0.3)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 0 50px rgba(0,212,255,0.5)'; e.currentTarget.style.transform = 'scale(1.03)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 0 30px rgba(0,212,255,0.3)'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            Get in touch
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          <div className="mt-8 pt-6 border-t border-white/5">
            <p style={{ fontFamily: 'Inter', fontSize: 14, color: '#4A5568', lineHeight: 1.7, fontStyle: 'italic' }}>
              {next.cta.author}
            </p>
          </div>
        </motion.div>

        {/* Final reactor state label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex items-center justify-center gap-3"
        >
          <motion.div className="w-2 h-2 rounded-full"
            style={{ background: '#00D4FF' }}
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: '#4A5568', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Reactor fully activated
          </span>
          <motion.div className="w-2 h-2 rounded-full"
            style={{ background: '#00D4FF' }}
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
