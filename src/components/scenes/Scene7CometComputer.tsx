'use client';
import { motion } from 'framer-motion';
import { FloatingPanel, SceneLabel, RevealText } from '@/components/ui/FloatingPanel';
import { GUIDE } from '@/lib/content';

export default function Scene7CometComputer() {
  const { cometComputer } = GUIDE;
  return (
    <section id="scene-6" className="relative py-32 px-6 overflow-hidden"
      style={{ background: '#07070F' }}
    >
      {/* Split environment line */}
      <div className="absolute top-0 bottom-0 left-1/2 w-px opacity-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #00D4FF 30%, #00D4FF 70%, transparent)' }}
      />

      <div className="max-w-6xl mx-auto">
        <SceneLabel number="07" label="Comet and Computer in more depth" />

        <RevealText className="mb-12">
          <h2 style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.05, letterSpacing: '-0.03em', color: '#F0F4FF' }}>
            {cometComputer.heading}
          </h2>
        </RevealText>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Comet */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Comet visual */}
            <div className="mb-6 relative h-32 rounded-2xl overflow-hidden"
              style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(0,212,255,0.15), transparent 60%), rgba(19,19,37,0.6)', border: '1px solid rgba(0,212,255,0.15)' }}
            >
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 128" preserveAspectRatio="xMidYMid slice">
                {/* Comet trail */}
                <motion.ellipse cx="200" cy="64" rx="80" ry="20" fill="none" stroke="#00D4FF" strokeWidth="1" opacity="0.3"
                  animate={{ cx: [100, 320, 100] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.circle r="6" fill="#00D4FF" opacity="0.8"
                  animate={{ cx: [100, 320, 100], cy: [64, 64, 64] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.path stroke="#00D4FF" strokeWidth="1" fill="none" opacity="0.3"
                  animate={{ d: ['M100 64 Q80 54 60 64', 'M320 64 Q340 54 360 64', 'M100 64 Q80 54 60 64'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
              </svg>
              <div className="absolute bottom-3 left-4">
                <p style={{ fontFamily: 'Outfit', fontSize: 13, fontWeight: 600, color: '#00D4FF', letterSpacing: '0.15em' }}>COMET BROWSER</p>
              </div>
            </div>

            <h3 style={{ fontFamily: 'Outfit', fontSize: 24, fontWeight: 700, color: '#F0F4FF', marginBottom: 16 }}>
              {cometComputer.comet.heading}
            </h3>
            <p style={{ fontFamily: 'Inter', fontSize: 15, lineHeight: 1.8, color: '#8B9CB6', marginBottom: 20 }}>
              {cometComputer.comet.body}
            </p>

            {/* Warning card */}
            <div className="glass rounded-xl p-4"
              style={{ borderColor: 'rgba(255,170,0,0.2)', background: 'rgba(255,170,0,0.03)' }}>
              <div className="flex items-start gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFAA00" strokeWidth="2" className="flex-shrink-0 mt-0.5">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <p style={{ fontFamily: 'Inter', fontSize: 14, lineHeight: 1.7, color: '#8B9CB6' }}>
                  {cometComputer.comet.warning}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Computer */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {/* Computer visual */}
            <div className="mb-6 relative h-32 rounded-2xl overflow-hidden"
              style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(27,108,242,0.15), transparent 60%), rgba(19,19,37,0.6)', border: '1px solid rgba(27,108,242,0.2)' }}
            >
              {/* Workflow steps */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 128" preserveAspectRatio="xMidYMid slice">
                {[1,2,3,4].map((s, i) => (
                  <g key={i}>
                    <motion.rect x={40 + i * 90} y={44} width={70} height={40} rx={6} fill="none" stroke="#1B6CF2" strokeWidth="1" opacity="0.4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.4, 0.4] }}
                      transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }}
                    />
                    {i < 3 && (
                      <motion.line x1={110 + i * 90} y1={64} x2={130 + i * 90} y2={64}
                        stroke="#1B6CF2" strokeWidth="1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.6, 0.6] }}
                        transition={{ duration: 2, delay: i * 0.4 + 0.2, repeat: Infinity }}
                      />
                    )}
                  </g>
                ))}
              </svg>
              <div className="absolute bottom-3 left-4">
                <p style={{ fontFamily: 'Outfit', fontSize: 13, fontWeight: 600, color: '#1B6CF2', letterSpacing: '0.15em' }}>COMPUTER AGENT</p>
              </div>
            </div>

            <h3 style={{ fontFamily: 'Outfit', fontSize: 24, fontWeight: 700, color: '#F0F4FF', marginBottom: 16 }}>
              {cometComputer.computer.heading}
            </h3>
            <p style={{ fontFamily: 'Inter', fontSize: 15, lineHeight: 1.8, color: '#8B9CB6', marginBottom: 20 }}>
              {cometComputer.computer.body}
            </p>

            <div className="glass rounded-xl p-4" style={{ borderColor: 'rgba(0,212,255,0.15)' }}>
              <p style={{ fontFamily: 'Outfit', fontSize: 14, fontWeight: 600, color: '#00D4FF', marginBottom: 6 }}>Credits, not magic</p>
              <p style={{ fontFamily: 'Inter', fontSize: 14, lineHeight: 1.7, color: '#8B9CB6' }}>
                {cometComputer.computer.credits.replace('Credits, not magic\n', '')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
