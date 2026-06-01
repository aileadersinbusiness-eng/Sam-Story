'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import AnimatedLogo from '@/components/ui/AnimatedLogo';
import { GUIDE } from '@/lib/content';

const ReactorCanvas = dynamic(() => import('@/components/reactor/ReactorCanvas'), { ssr: false });

export default function Scene1Hero() {
  return (
    <section id="scene-0" className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(27,108,242,0.12) 0%, transparent 70%), #03030A' }}
    >
      {/* Reactor background */}
      <div className="absolute inset-0 pointer-events-none">
        <ReactorCanvas phase={0.3} className="w-full h-full opacity-60" />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)', backgroundSize: '80px 80px' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="mb-8 flex justify-center"
        >
          <AnimatedLogo size={52} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-3"
        >
          <span style={{ fontFamily: 'Inter', fontSize: 13, color: '#8B9CB6', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
            {GUIDE.title}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: 'Outfit', fontWeight: 900, fontSize: 'clamp(64px, 12vw, 140px)', lineHeight: 0.92, letterSpacing: '-0.04em' }}
        >
          <span className="cyan-glow">{GUIDE.titleAccent}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{ fontFamily: 'Inter', fontSize: 'clamp(15px, 2.5vw, 20px)', color: '#8B9CB6', marginTop: 20, letterSpacing: '0.02em' }}
        >
          {GUIDE.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-4"
        >
          <span style={{ fontFamily: 'Outfit', fontSize: 'clamp(16px, 2vw, 22px)', color: '#F0F4FF', fontWeight: 500 }}>
            {GUIDE.for}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="mt-3"
          style={{ fontFamily: 'Inter', fontSize: 15, color: '#4A5568' }}
        >
          {GUIDE.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, transparent, #00D4FF, transparent)' }} />
          <div>
            <p style={{ fontFamily: 'Outfit', fontSize: 14, color: '#F0F4FF', fontWeight: 500 }}>{GUIDE.authorSub}</p>
            <p style={{ fontFamily: 'Inter', fontSize: 12, color: '#4A5568', marginTop: 2 }}>{GUIDE.edition}</p>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 2 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span style={{ fontFamily: 'Inter', fontSize: 11, color: '#4A5568', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            Scroll to explore
          </span>
          <motion.div
            className="w-[1px] h-10"
            style={{ background: 'linear-gradient(to bottom, #00D4FF, transparent)' }}
            animate={{ scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #03030A)' }}
      />
    </section>
  );
}
