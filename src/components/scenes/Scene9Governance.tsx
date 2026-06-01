'use client';
import { motion } from 'framer-motion';
import { FloatingPanel, SceneLabel, RevealText } from '@/components/ui/FloatingPanel';
import { GUIDE } from '@/lib/content';

const SHIELD_LAYERS = ['GDPR DPA', 'SOC 2 Type II', 'HIPAA BAA', 'No Training on Data', 'SSO + SCIM'];

export default function Scene9Governance() {
  const { governance } = GUIDE;
  return (
    <section id="scene-8" className="relative py-32 px-6 overflow-hidden"
      style={{ background: 'radial-gradient(ellipse 50% 60% at 50% 30%, rgba(27,108,242,0.06) 0%, transparent 70%), #07070F' }}
    >
      <div className="max-w-6xl mx-auto">
        <SceneLabel number="09" label="Governance and risk" />

        <RevealText className="mb-12">
          <h2 style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.03em', color: '#F0F4FF' }}>
            {governance.heading}
          </h2>
        </RevealText>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Shield visual */}
          <div className="flex flex-col items-center justify-center py-8">
            <div className="relative w-48 h-48">
              {SHIELD_LAYERS.map((layer, i) => (
                <motion.div key={i}
                  className="absolute rounded-full border flex items-center justify-center"
                  style={{
                    inset: i * 16,
                    borderColor: `rgba(0,212,255,${0.15 + i * 0.05})`,
                    background: `rgba(0,212,255,${0.01 + i * 0.01})`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                />
              ))}
              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
            </div>
            {/* Layer labels */}
            <div className="mt-6 flex flex-col gap-1 w-full">
              {SHIELD_LAYERS.map((l, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: `rgba(0,212,255,${0.4 + i * 0.1})` }} />
                  <span style={{ fontFamily: 'Inter', fontSize: 12, color: '#8B9CB6' }}>{l}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Data + Compliance */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <FloatingPanel delay={0.1}>
              <h3 style={{ fontFamily: 'Outfit', fontSize: 20, fontWeight: 700, color: '#F0F4FF', marginBottom: 10 }}>
                {governance.data.heading}
              </h3>
              <p style={{ fontFamily: 'Inter', fontSize: 15, lineHeight: 1.75, color: '#8B9CB6' }}>
                {governance.data.body}
              </p>
            </FloatingPanel>

            <FloatingPanel delay={0.2}>
              <h3 style={{ fontFamily: 'Outfit', fontSize: 20, fontWeight: 700, color: '#F0F4FF', marginBottom: 10 }}>
                {governance.compliance.heading}
              </h3>
              {governance.compliance.items.map((item, i) => (
                <div key={i} className={`flex items-start gap-3 ${i > 0 ? 'mt-3' : ''}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D4FF" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <p style={{ fontFamily: 'Inter', fontSize: 15, color: '#D0D8F0' }}>{item}</p>
                </div>
              ))}
            </FloatingPanel>

            <FloatingPanel delay={0.3}>
              <h3 style={{ fontFamily: 'Outfit', fontSize: 20, fontWeight: 700, color: '#F0F4FF', marginBottom: 10 }}>
                {governance.quirks.heading}
              </h3>
              {governance.quirks.items.map((item, i) => (
                <div key={i} className={`flex items-start gap-3 ${i > 0 ? 'mt-3' : ''}`}>
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: '#8B9CB6' }} />
                  <p style={{ fontFamily: 'Inter', fontSize: 15, color: '#8B9CB6' }}>{item}</p>
                </div>
              ))}
            </FloatingPanel>
          </div>
        </div>
      </div>
    </section>
  );
}
