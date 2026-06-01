'use client';
import { motion } from 'framer-motion';
import { FloatingPanel, SceneLabel, RevealText } from '@/components/ui/FloatingPanel';
import { GUIDE } from '@/lib/content';

const SURFACE_ICONS: Record<string, string> = {
  'Search / Pro Search': 'M10 10L14 14M6 10a4 4 0 100-8 4 4 0 000 8z',
  'Spaces': 'M3 4h18M3 8h18M3 12h12',
  'Labs': 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v10M3 9h18',
  'Comet': 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z',
  'Computer': 'M4 6h16v10H4V6zm4 14h8m-4-4v4',
  'Finance': 'M3 17l4-8 4 4 4-6 4 10',
  'Shopping': 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
  'API': 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
};

export default function Scene3WhatIs() {
  const { whatIs } = GUIDE;

  return (
    <section id="scene-2" className="relative py-32 px-6 overflow-hidden"
      style={{ background: 'radial-gradient(ellipse 60% 40% at 30% 50%, rgba(27,108,242,0.08) 0%, transparent 70%), #07070F' }}
    >
      <div className="max-w-6xl mx-auto">
        <SceneLabel number="03" label="What Perplexity is in May 2026" />

        <RevealText className="mb-4">
          <h2 style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.03em', color: '#F0F4FF', maxWidth: '16ch' }}>
            {whatIs.heading}
          </h2>
        </RevealText>

        <RevealText delay={0.1} className="mb-12 max-w-2xl">
          <p style={{ fontFamily: 'Inter', fontSize: 17, lineHeight: 1.75, color: '#8B9CB6' }}>{whatIs.intro}</p>
        </RevealText>

        {/* Surfaces grid — the reactor subsystems */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {whatIs.surfaces.map((s, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              whileHover={{ y: -4, borderColor: 'rgba(0,212,255,0.3)' }}
              className="glass rounded-2xl p-5 cursor-default"
              style={{ transition: 'all 0.3s ease' }}
            >
              <div className="mb-3 flex items-center justify-between">
                <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={SURFACE_ICONS[s.name] || 'M12 2l10 18H2z'} />
                  </svg>
                </div>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#4A5568' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 style={{ fontFamily: 'Outfit', fontSize: 15, fontWeight: 600, color: '#F0F4FF', marginBottom: 6 }}>{s.name}</h3>
              <p style={{ fontFamily: 'Inter', fontSize: 13, lineHeight: 1.6, color: '#8B9CB6' }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Model lineup */}
        <FloatingPanel delay={0.2} glow>
          <h3 style={{ fontFamily: 'Outfit', fontSize: 22, fontWeight: 700, color: '#F0F4FF', marginBottom: 8 }}>
            {whatIs.models.heading}
          </h3>
          <p style={{ fontFamily: 'Inter', fontSize: 15, color: '#8B9CB6', marginBottom: 20 }}>{whatIs.models.intro}</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p style={{ fontFamily: 'Outfit', fontSize: 13, fontWeight: 600, color: '#00D4FF', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 10 }}>
                Sonar Models (Native)
              </p>
              <div className="flex flex-col gap-2">
                {whatIs.models.sonar.map((m, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#00D4FF', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: '#F0F4FF' }}>{m}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontFamily: 'Outfit', fontSize: 13, fontWeight: 600, color: '#1B6CF2', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 10 }}>
                External Models (Frontier)
              </p>
              <div>
                <p style={{ fontFamily: 'Inter', fontSize: 12, color: '#4A5568', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Pro plan</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {whatIs.models.external.pro.map((m, i) => (
                    <span key={i} className="glass rounded-lg px-3 py-1" style={{ fontFamily: 'Inter', fontSize: 13, color: '#8B9CB6' }}>{m}</span>
                  ))}
                </div>
                <p style={{ fontFamily: 'Inter', fontSize: 12, color: '#4A5568', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Max plan (additional)</p>
                <div className="flex flex-wrap gap-2">
                  {whatIs.models.external.max.map((m, i) => (
                    <span key={i} className="glass rounded-lg px-3 py-1" style={{ fontFamily: 'Inter', fontSize: 13, color: '#8B9CB6' }}>{m}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FloatingPanel>
      </div>
    </section>
  );
}
