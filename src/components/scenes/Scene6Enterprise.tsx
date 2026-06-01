'use client';
import { motion } from 'framer-motion';
import { FloatingPanel, SceneLabel, RevealText } from '@/components/ui/FloatingPanel';
import { GUIDE } from '@/lib/content';

export default function Scene6Enterprise() {
  const { enterprise } = GUIDE;
  return (
    <section id="scene-5" className="relative py-32 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #03030A 0%, #07090F 50%, #03030A 100%)' }}
    >
      {/* Network graph lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-5" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 10 }, (_, i) => (
          <motion.line key={i}
            x1={`${Math.random() * 100}%`} y1={`${Math.random() * 100}%`}
            x2={`${Math.random() * 100}%`} y2={`${Math.random() * 100}%`}
            stroke="#00D4FF" strokeWidth="0.5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 3, delay: i * 0.3, repeat: Infinity }}
          />
        ))}
      </svg>

      <div className="max-w-6xl mx-auto">
        <SceneLabel number="06" label="Enterprise" />

        <RevealText className="mb-12">
          <h2 style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.03em', color: '#F0F4FF' }}>
            {enterprise.heading}
          </h2>
          <p style={{ fontFamily: 'Inter', fontSize: 17, lineHeight: 1.7, color: '#8B9CB6', marginTop: 16, maxWidth: '56ch' }}>
            {enterprise.intro}
          </p>
        </RevealText>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Feature list */}
          <div className="flex flex-col gap-3">
            {enterprise.features.map((f, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass rounded-xl p-4 flex items-start gap-4"
              >
                <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: '#00D4FF' }} />
                <div>
                  <span style={{ fontFamily: 'Outfit', fontSize: 15, fontWeight: 600, color: '#F0F4FF' }}>{f.name}</span>
                  <span style={{ fontFamily: 'Inter', fontSize: 14, color: '#8B9CB6' }}> — {f.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Connector advantage */}
          <div>
            <FloatingPanel glow delay={0.2}>
              <h3 style={{ fontFamily: 'Outfit', fontSize: 22, fontWeight: 700, color: '#F0F4FF', marginBottom: 8 }}>
                {enterprise.connectors.heading}
              </h3>
              <p style={{ fontFamily: 'Inter', fontSize: 15, lineHeight: 1.7, color: '#8B9CB6', marginBottom: 20 }}>
                {enterprise.connectors.body}
              </p>

              {/* Tool grid */}
              <div className="grid grid-cols-5 gap-2">
                {enterprise.connectors.tools.map((tool, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    whileHover={{ y: -2 }}
                    className="glass rounded-xl p-2 text-center cursor-default"
                    style={{ transition: 'all 0.2s ease' }}
                  >
                    <div className="w-5 h-5 mx-auto mb-1 rounded"
                      style={{ background: `hsl(${200 + i * 15}, 70%, 50%)`, opacity: 0.7 }}
                    />
                    <p style={{ fontFamily: 'Inter', fontSize: 9, color: '#8B9CB6', lineHeight: 1.2 }}>{tool}</p>
                  </motion.div>
                ))}
              </div>

              {/* Connection animation */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <motion.div className="w-2 h-2 rounded-full"
                    style={{ background: '#00D4FF' }}
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span style={{ fontFamily: 'Inter', fontSize: 13, color: '#8B9CB6' }}>400+ MCP connectors available</span>
                </div>
              </div>
            </FloatingPanel>
          </div>
        </div>
      </div>
    </section>
  );
}
