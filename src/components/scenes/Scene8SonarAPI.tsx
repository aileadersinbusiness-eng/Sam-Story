'use client';
import { motion } from 'framer-motion';
import { FloatingPanel, SceneLabel, RevealText } from '@/components/ui/FloatingPanel';
import { GUIDE } from '@/lib/content';

export default function Scene8SonarAPI() {
  const { api } = GUIDE;
  const codeLines = api.sample.split('\n');

  return (
    <section id="scene-7" className="relative py-32 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #03030A, #050512 60%, #03030A)' }}
    >
      {/* Circuit lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <motion.path d="M100,450 L400,450 L400,200 L700,200 L700,450 L1100,450 L1100,700 L1400,700"
          fill="none" stroke="#00D4FF" strokeWidth="0.5"
          strokeDasharray="8 4" opacity="0.08"
          animate={{ strokeDashoffset: [0, -48] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
        <motion.path d="M200,700 L500,700 L500,300 L800,300 L800,600 L1200,600"
          fill="none" stroke="#1B6CF2" strokeWidth="0.5"
          strokeDasharray="6 6" opacity="0.06"
          animate={{ strokeDashoffset: [0, -48] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear', delay: 1 }}
        />
      </svg>

      <div className="max-w-5xl mx-auto">
        <SceneLabel number="08" label="The Sonar API" />

        <RevealText className="mb-4">
          <h2 style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.03em', color: '#F0F4FF' }}>
            {api.heading}
          </h2>
        </RevealText>

        <RevealText delay={0.1} className="mb-10 max-w-2xl">
          <p style={{ fontFamily: 'Inter', fontSize: 17, lineHeight: 1.75, color: '#8B9CB6' }}>{api.intro}</p>
        </RevealText>

        {/* Animated API call visual */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <FloatingPanel delay={0.2}>
            <div className="flex items-center justify-between mb-4">
              <p style={{ fontFamily: 'Outfit', fontSize: 13, fontWeight: 600, color: '#00D4FF', letterSpacing: '0.15em' }}>
                SAMPLE API CALL
              </p>
              <div className="flex gap-1.5">
                {['#FF5F57', '#FFBD2E', '#28CA41'].map((c, i) => (
                  <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
                ))}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden" style={{ background: '#020208', border: '1px solid rgba(0,212,255,0.1)' }}>
              {codeLines.map((line, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.04, duration: 0.4 }}
                  className="px-4 py-0.5 flex"
                >
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: '#4A5568', minWidth: 24, userSelect: 'none' }}>{i + 1}</span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: colorCode(line), lineHeight: 1.8, whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>{line}</span>
                </motion.div>
              ))}
            </div>
          </FloatingPanel>

          {/* API response visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="glass rounded-2xl p-6"
          >
            <p style={{ fontFamily: 'Outfit', fontSize: 13, fontWeight: 600, color: '#1B6CF2', letterSpacing: '0.15em', marginBottom: 16 }}>
              LIVE RESPONSE WITH CITATIONS
            </p>

            {/* Citation response mockup */}
            <div className="space-y-3">
              <div className="rounded-lg p-3" style={{ background: 'rgba(0,212,255,0.05)', border: '1px solid rgba(0,212,255,0.1)' }}>
                <p style={{ fontFamily: 'Inter', fontSize: 14, color: '#D0D8F0', lineHeight: 1.6 }}>
                  "The Bank of England announced a 0.25% base rate cut today, citing…
                  <span style={{ color: '#00D4FF', fontWeight: 600 }}>[1]</span>
                  reducing inflation pressure.
                  <span style={{ color: '#00D4FF', fontWeight: 600 }}>[2]</span>"
                </p>
              </div>
              {['bbc.co.uk/news', 'ft.com', 'bankofengland.co.uk'].map((src, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#00D4FF', minWidth: 20 }}>
                    [{i + 1}]
                  </span>
                  <div className="w-4 h-4 rounded" style={{ background: `hsl(${200 + i * 15}, 60%, 40%)`, flexShrink: 0 }} />
                  <span style={{ fontFamily: 'Inter', fontSize: 13, color: '#8B9CB6' }}>{src}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-white/5">
              <p style={{ fontFamily: 'Inter', fontSize: 14, lineHeight: 1.7, color: '#8B9CB6' }}>{api.models}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function colorCode(line: string): string {
  if (line.startsWith('curl') || line.startsWith('-')) return '#00D4FF';
  if (line.includes('"model"')) return '#F0F4FF';
  if (line.includes('Bearer') || line.includes('PPLX_API_KEY')) return '#00B4AA';
  if (line.includes('"') && line.includes(':')) return '#8B9CB6';
  if (line === '{' || line === '}' || line === ']' || line === '[') return '#4A5568';
  return '#D0D8F0';
}
