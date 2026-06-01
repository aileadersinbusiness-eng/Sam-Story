'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import OpeningScene from '@/components/opening/OpeningScene';
import Chapter1 from '@/components/chapter1/Chapter1';
import Chapter2 from '@/components/chapter2/Chapter2';
import Chapter3Quiz from '@/components/chapter3/Chapter3Quiz';
import Results from '@/components/results/Results';

const BackgroundCanvas = dynamic(
  () => import('@/components/canvas/BackgroundCanvas'),
  { ssr: false }
);

type Phase = 'opening' | 'chapter1' | 'chapter2' | 'chapter3' | 'results';

const fadeVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0, transition: { duration: 0.4 } },
};

export default function Home() {
  const [phase, setPhase] = useState<Phase>('opening');
  const [score, setScore] = useState(0);

  return (
    <main
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#000308',
        color: '#e8f4ff',
        overflow: 'hidden',
      }}
    >
      <BackgroundCanvas />

      <div style={{ position: 'relative', zIndex: 10 }}>
        <AnimatePresence mode="wait">
          {phase === 'opening' && (
            <motion.div key="opening" variants={fadeVariants} initial="initial" animate="animate" exit="exit">
              <OpeningScene onStart={() => setPhase('chapter1')} />
            </motion.div>
          )}

          {phase === 'chapter1' && (
            <motion.div key="chapter1" variants={fadeVariants} initial="initial" animate="animate" exit="exit">
              <Chapter1 onNext={() => setPhase('chapter2')} />
            </motion.div>
          )}

          {phase === 'chapter2' && (
            <motion.div key="chapter2" variants={fadeVariants} initial="initial" animate="animate" exit="exit">
              <Chapter2 onNext={() => setPhase('chapter3')} />
            </motion.div>
          )}

          {phase === 'chapter3' && (
            <motion.div key="chapter3" variants={fadeVariants} initial="initial" animate="animate" exit="exit">
              <Chapter3Quiz
                onComplete={(s) => {
                  setScore(s);
                  setPhase('results');
                }}
              />
            </motion.div>
          )}

          {phase === 'results' && (
            <motion.div key="results" variants={fadeVariants} initial="initial" animate="animate" exit="exit">
              <Results
                score={score}
                onRestart={() => {
                  setScore(0);
                  setPhase('opening');
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
