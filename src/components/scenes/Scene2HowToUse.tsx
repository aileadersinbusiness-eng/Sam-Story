'use client';
import { motion } from 'framer-motion';
import { FloatingPanel, RevealText, SceneLabel } from '@/components/ui/FloatingPanel';
import { GUIDE } from '@/lib/content';

export default function Scene2HowToUse() {
  const { howToUse } = GUIDE;
  return (
    <section id="scene-1" className="relative py-32 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #03030A, #07070F 50%, #03030A)' }}
    >
      {/* Data stream lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" preserveAspectRatio="none">
        {[20, 40, 60, 80].map((x, i) => (
          <motion.line key={i} x1={`${x}%`} y1="0" x2={`${x}%`} y2="100%"
            stroke="#00D4FF" strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.4 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: i * 0.2 }}
          />
        ))}
      </svg>

      <div className="max-w-5xl mx-auto">
        <SceneLabel number="02" label="How to use this guide" />

        <RevealText className="mb-12">
          <h2 style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: 'clamp(36px, 6vw, 72px)', lineHeight: 1.05, letterSpacing: '-0.03em', color: '#F0F4FF' }}>
            {howToUse.heading}
          </h2>
        </RevealText>

        <div className="grid lg:grid-cols-2 gap-8">
          <FloatingPanel delay={0.1} glow>
            {howToUse.body.split('\n\n').map((para, i) => (
              <p key={i} className={i > 0 ? 'mt-4' : ''}
                style={{ fontFamily: 'Inter', fontSize: 16, lineHeight: 1.75, color: i === 0 ? '#F0F4FF' : '#8B9CB6' }}>
                {para}
              </p>
            ))}
          </FloatingPanel>

          <FloatingPanel delay={0.2}>
            <div className="flex items-start gap-3 mb-4">
              <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" stroke="#00D4FF" strokeWidth="1.5" />
                  <path d="M8 5v3.5M8 10.5v.5" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3 style={{ fontFamily: 'Outfit', fontSize: 18, fontWeight: 600, color: '#F0F4FF' }}>
                {howToUse.note.heading}
              </h3>
            </div>
            <p style={{ fontFamily: 'Inter', fontSize: 15, lineHeight: 1.7, color: '#8B9CB6' }}>
              {howToUse.note.body}
            </p>

            {/* Timeline decorative */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full" style={{ background: '#00D4FF' }} />
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: '#00D4FF' }}>May 2026</span>
              </div>
              <div style={{ fontFamily: 'Outfit', fontSize: 22, fontWeight: 700, color: '#F0F4FF' }}>Current Edition</div>
              <p style={{ fontFamily: 'Inter', fontSize: 13, color: '#4A5568', marginTop: 4 }}>
                Reflects all Perplexity features as of this date
              </p>
            </div>
          </FloatingPanel>
        </div>

        {/* Three-part intro visual */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          {['Answer Engine', 'Agentic Browser', 'Developer API'].map((label, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
              className="glass rounded-xl p-4 text-center"
            >
              <div className="w-1 h-6 mx-auto mb-3 rounded" style={{ background: `hsl(${200 + i * 20}, 100%, 60%)` }} />
              <p style={{ fontFamily: 'Outfit', fontSize: 14, fontWeight: 600, color: '#F0F4FF' }}>{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
