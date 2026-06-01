'use client';
import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const SCENES = [
  'Intro', 'Guide', 'Platform', 'Pricing',
  'Surfaces', 'Enterprise', 'Comet & Computer',
  'Sonar API', 'Governance', 'Workflows', 'Next Steps',
];

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    return scrollYProgress.on('change', (v) => {
      setCurrent(Math.min(SCENES.length - 1, Math.floor(v * SCENES.length)));
    });
  }, [scrollYProgress]);

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-50 origin-left"
        style={{ scaleX, background: 'linear-gradient(90deg, #00D4FF, #1B6CF2)' }}
      />
      {/* Scene indicator */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2">
        {SCENES.map((scene, i) => (
          <button
            key={i}
            onClick={() => {
              const el = document.getElementById(`scene-${i}`);
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group flex items-center gap-2 cursor-pointer"
            title={scene}
            aria-label={`Navigate to ${scene}`}
          >
            <span
              className="opacity-0 group-hover:opacity-100 text-xs text-right transition-opacity duration-200"
              style={{ color: '#8B9CB6', fontSize: '10px', fontFamily: 'Inter', whiteSpace: 'nowrap' }}
            >
              {scene}
            </span>
            <div
              className="rounded-full transition-all duration-300"
              style={{
                width: i === current ? 8 : 4,
                height: i === current ? 8 : 4,
                background: i === current ? '#00D4FF' : 'rgba(139,156,182,0.4)',
                boxShadow: i === current ? '0 0 8px #00D4FF' : 'none',
              }}
            />
          </button>
        ))}
      </div>
    </>
  );
}
