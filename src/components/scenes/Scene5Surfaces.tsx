'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SceneLabel, RevealText } from '@/components/ui/FloatingPanel';
import { GUIDE } from '@/lib/content';

const SURFACE_COLORS = ['#00D4FF', '#1B6CF2', '#00B4CC', '#2D6FF5', '#0099AA', '#3080FF', '#00C4F0'];

export default function Scene5Surfaces() {
  const { surfaces } = GUIDE;
  const [active, setActive] = useState(0);

  return (
    <section id="scene-4" className="relative py-32 px-6 overflow-hidden"
      style={{ background: 'radial-gradient(ellipse 80% 50% at 70% 50%, rgba(0,212,255,0.05) 0%, transparent 60%), #07070F' }}
    >
      <div className="max-w-6xl mx-auto">
        <SceneLabel number="05" label="The seven surfaces" />

        <RevealText className="mb-12">
          <h2 style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.03em', color: '#F0F4FF' }}>
            {surfaces.heading}
          </h2>
        </RevealText>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Navigation tabs */}
          <div className="lg:col-span-2 flex flex-col gap-2">
            {surfaces.items.map((s, i) => (
              <motion.button key={i}
                onClick={() => setActive(i)}
                className="text-left p-4 rounded-xl transition-all duration-300 cursor-pointer"
                style={{
                  background: active === i ? 'rgba(19,19,37,0.9)' : 'rgba(19,19,37,0.3)',
                  border: `1px solid ${active === i ? SURFACE_COLORS[i] + '50' : 'rgba(255,255,255,0.04)'}`,
                  boxShadow: active === i ? `0 0 20px ${SURFACE_COLORS[i]}20` : 'none',
                }}
                whileHover={{ x: 2 }}
              >
                <div className="flex items-center gap-3">
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: active === i ? SURFACE_COLORS[i] : '#4A5568' }}>
                    {s.num.padStart(2, '0')}
                  </span>
                  <span style={{ fontFamily: 'Outfit', fontSize: 15, fontWeight: 600, color: active === i ? '#F0F4FF' : '#8B9CB6' }}>
                    {s.name}
                  </span>
                </div>
                {active === i && (
                  <motion.div layoutId="surface-indicator"
                    className="w-full h-0.5 mt-2 rounded"
                    style={{ background: SURFACE_COLORS[i] }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Content panel */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="glass rounded-2xl p-8 h-full"
                style={{ borderColor: SURFACE_COLORS[active] + '30', boxShadow: `0 0 40px ${SURFACE_COLORS[active]}08` }}
              >
                {/* Reactor node visual */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ background: `${SURFACE_COLORS[active]}15`, border: `1px solid ${SURFACE_COLORS[active]}30` }}>
                      <motion.div className="w-3 h-3 rounded-full"
                        style={{ background: SURFACE_COLORS[active] }}
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                    {/* Orbit ring */}
                    <motion.div className="absolute inset-0 rounded-full"
                      style={{ border: `1px dashed ${SURFACE_COLORS[active]}30` }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    />
                  </div>
                  <div>
                    <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: SURFACE_COLORS[active], letterSpacing: '0.15em' }}>
                      SURFACE {surfaces.items[active].num.padStart(2, '0')}
                    </p>
                    <h3 style={{ fontFamily: 'Outfit', fontSize: 26, fontWeight: 700, color: '#F0F4FF', lineHeight: 1.1 }}>
                      {surfaces.items[active].name}
                    </h3>
                  </div>
                </div>

                {surfaces.items[active].body.split('\n\n').map((para, i) => (
                  <p key={i} className={i > 0 ? 'mt-4' : ''}
                    style={{ fontFamily: 'Inter', fontSize: 16, lineHeight: 1.8, color: i === 0 ? '#D0D8F0' : '#8B9CB6' }}>
                    {para}
                  </p>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
