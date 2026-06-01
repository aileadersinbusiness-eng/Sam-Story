'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedLogo from '@/components/ui/AnimatedLogo';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed top-4 left-4 right-4 z-50 rounded-2xl"
      style={{
        background: scrolled ? 'rgba(7,7,15,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        border: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        transition: 'all 0.4s ease',
        padding: '12px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <AnimatedLogo size={36} />

      <div className="flex items-center gap-2">
        <a
          href="https://businesswithaistrategist.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-1 px-4 py-2 rounded-full cursor-pointer"
          style={{
            background: 'rgba(0,212,255,0.1)',
            border: '1px solid rgba(0,212,255,0.2)',
            fontFamily: 'Outfit',
            fontSize: 13,
            fontWeight: 600,
            color: '#00D4FF',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0,212,255,0.2)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0,212,255,0.1)'; }}
        >
          businesswithaistrategist.com
        </a>
      </div>
    </motion.nav>
  );
}
