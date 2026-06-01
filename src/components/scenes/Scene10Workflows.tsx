'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SceneLabel, RevealText } from '@/components/ui/FloatingPanel';
import { GUIDE } from '@/lib/content';

const WORKFLOW_COLORS = ['#00D4FF', '#1B6CF2', '#00B4CC', '#2D6FF5', '#0099AA', '#3080FF', '#00C4F0'];

export default function Scene10Workflows() {
  const { workflows } = GUIDE;
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="scene-9" className="relative py-32 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #03030A, #070710 50%, #03030A)' }}
    >
      <div className="max-w-6xl mx-auto">
        <SceneLabel number="10" label="Seven SME workflows" />

        <RevealText className="mb-4">
          <h2 style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.03em', color: '#F0F4FF' }}>
            {workflows.heading}
          </h2>
        </RevealText>

        <RevealText delay={0.1} className="mb-12">
          <p style={{ fontFamily: 'Inter', fontSize: 17, color: '#8B9CB6' }}>{workflows.intro}</p>
        </RevealText>

        {/* Seven pathways */}
        <div className="flex flex-col gap-4">
          {workflows.items.map((w, i) => {
            const isOpen = active === i;
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  background: isOpen ? 'rgba(19,19,37,0.9)' : 'rgba(19,19,37,0.4)',
                  border: `1px solid ${isOpen ? WORKFLOW_COLORS[i] + '40' : 'rgba(255,255,255,0.06)'}`,
                  transition: 'all 0.3s ease',
                  boxShadow: isOpen ? `0 0 30px ${WORKFLOW_COLORS[i]}10` : 'none',
                }}
                onClick={() => setActive(isOpen ? null : i)}
              >
                <div className="p-5 flex items-center gap-4">
                  {/* Number + pathway line */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: `${WORKFLOW_COLORS[i]}15`, border: `1px solid ${WORKFLOW_COLORS[i]}30` }}>
                      <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, color: WORKFLOW_COLORS[i], fontWeight: 600 }}>
                        {w.num}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 style={{ fontFamily: 'Outfit', fontSize: 18, fontWeight: 600, color: '#F0F4FF' }}>{w.name}</h3>
                    <p style={{ fontFamily: 'Inter', fontSize: 14, color: '#4A5568', marginTop: 2 }}>{w.purpose}</p>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={isOpen ? WORKFLOW_COLORS[i] : '#4A5568'} strokeWidth="2">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </motion.div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="px-5 pb-6 pt-1 border-t border-white/5">
                        <div className="flex flex-col gap-3 mt-3 ml-11">
                          {w.steps.map((step, si) => (
                            <motion.div key={si}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: si * 0.07 }}
                              className="flex items-start gap-3"
                            >
                              <div className="flex flex-col items-center flex-shrink-0 mt-1">
                                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                                  style={{ background: `${WORKFLOW_COLORS[i]}20`, border: `1px solid ${WORKFLOW_COLORS[i]}40` }}>
                                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 9, color: WORKFLOW_COLORS[i] }}>{si + 1}</span>
                                </div>
                                {si < w.steps.length - 1 && (
                                  <div className="w-px h-4 mt-1" style={{ background: `${WORKFLOW_COLORS[i]}20` }} />
                                )}
                              </div>
                              <p style={{ fontFamily: 'Inter', fontSize: 15, lineHeight: 1.7, color: '#D0D8F0', paddingBottom: si < w.steps.length - 1 ? 0 : 0 }}>
                                {step}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
