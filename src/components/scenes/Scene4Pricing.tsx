'use client';
import { motion } from 'framer-motion';
import { FloatingPanel, SceneLabel, RevealText } from '@/components/ui/FloatingPanel';
import { GUIDE } from '@/lib/content';

const PLAN_ACCENTS = ['#4A5568', '#00D4FF', '#1B6CF2', '#2D6FF5', '#0F3A8A'];

export default function Scene4Pricing() {
  const { pricing } = GUIDE;

  return (
    <section id="scene-3" className="relative py-32 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #03030A, #0A0A1A 50%, #03030A)' }}
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-5"
        style={{ background: 'radial-gradient(circle, #1B6CF2, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto">
        <SceneLabel number="04" label="Plans and pricing" />

        <RevealText className="mb-4">
          <h2 style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.03em', color: '#F0F4FF' }}>
            {pricing.heading}
          </h2>
        </RevealText>

        <RevealText delay={0.1} className="mb-12">
          <p style={{ fontFamily: 'Inter', fontSize: 16, lineHeight: 1.7, color: '#8B9CB6', maxWidth: '60ch' }}>{pricing.intro}</p>
        </RevealText>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {pricing.plans.map((plan, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-5 flex flex-col cursor-default"
              style={{
                borderColor: i === 1 ? 'rgba(0,212,255,0.3)' : 'rgba(255,255,255,0.06)',
                boxShadow: i === 1 ? '0 0 30px rgba(0,212,255,0.08)' : 'none',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Top accent bar */}
              <div className="w-full h-0.5 rounded-full mb-5" style={{ background: PLAN_ACCENTS[i] }} />

              <h3 style={{ fontFamily: 'Outfit', fontSize: 18, fontWeight: 700, color: '#F0F4FF', marginBottom: 6 }}>{plan.name}</h3>

              <p style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, color: PLAN_ACCENTS[i] === '#4A5568' ? '#8B9CB6' : PLAN_ACCENTS[i], marginBottom: 12, lineHeight: 1.4 }}>
                {plan.price}
              </p>

              <p style={{ fontFamily: 'Inter', fontSize: 12, color: '#4A5568', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {plan.bestFor}
              </p>

              <div className="mt-auto pt-4 border-t border-white/5">
                <p style={{ fontFamily: 'Inter', fontSize: 13, lineHeight: 1.6, color: '#8B9CB6' }}>{plan.highlights}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recommendation and Computer note */}
        <div className="grid lg:grid-cols-2 gap-6">
          <FloatingPanel delay={0.2}>
            <p style={{ fontFamily: 'Outfit', fontSize: 13, fontWeight: 600, color: '#00D4FF', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>
              Which plan for a typical SME?
            </p>
            {pricing.recommendation.split('\n\n').map((p, i) => (
              <p key={i} className={i > 0 ? 'mt-3' : ''}
                style={{ fontFamily: 'Inter', fontSize: 15, lineHeight: 1.75, color: '#8B9CB6' }}>
                {p}
              </p>
            ))}
          </FloatingPanel>

          <FloatingPanel delay={0.3} glow>
            <div className="flex items-start gap-3 mb-3">
              <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
              </div>
              <h3 style={{ fontFamily: 'Outfit', fontSize: 18, fontWeight: 600, color: '#F0F4FF' }}>The Computer question</h3>
            </div>
            <p style={{ fontFamily: 'Inter', fontSize: 15, lineHeight: 1.75, color: '#8B9CB6' }}>{pricing.computerNote}</p>
          </FloatingPanel>
        </div>
      </div>
    </section>
  );
}
