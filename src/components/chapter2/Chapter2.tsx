'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Chapter2Props {
  onNext: () => void;
}

type Tab = 'PAST' | 'PRESENT' | 'FUTURE';

const pastCards = [
  { icon: '📊', text: '47 unread spreadsheet updates' },
  { icon: '📧', text: 'Invoice #2847 — still unpaid (Day 34)' },
  { icon: '⚠️', text: 'Manual data entry: 3 hours today' },
  { icon: '📋', text: 'Chasing 6 clients manually this week' },
];

const presentCards = [
  { icon: '🤖', text: 'AI Draft: Invoice #2848 ready to review' },
  { icon: '✍️', text: "Suggested email: 'Hi [Name], just a reminder...'" },
  { icon: '📝', text: 'Template library: 12 invoice formats' },
];

const futureCards = [
  { icon: '⚡', text: 'Agent: Invoice generated → sent → logged (0 input)' },
  { icon: '🔄', text: 'Agent: Overdue detected → chase email sent automatically' },
  { icon: '🧠', text: 'Agent: CRM updated → client record flagged → notification sent' },
  { icon: '✅', text: 'Agent: Payment received → receipt sent → books updated' },
];

const tabContent = {
  PAST: {
    label: 'PAST',
    env: "Sam's world before AI",
    cards: pastCards,
    body: "Every invoice has to be created manually. Sam copies data between spreadsheets, chases payments by hand, and spends hours each week on admin that adds no value to the business.",
    cardStyle: { border: '1px solid rgba(255, 107, 53, 0.3)', background: 'rgba(255, 107, 53, 0.05)' },
    cardAnim: 'shake',
    activeColor: '#ff6b35',
  },
  PRESENT: {
    label: 'PRESENT',
    env: 'AI Tools assist Sam',
    cards: presentCards,
    body: "Sam now uses AI tools to speed things up. A tool drafts invoices. Another suggests email copy. Each tool does one job well — but Sam still has to review, approve, and send everything manually.",
    cardStyle: { border: '1px solid rgba(0, 212, 255, 0.2)', background: 'rgba(0, 212, 255, 0.04)' },
    cardAnim: 'idle',
    activeColor: '#00d4ff',
  },
  FUTURE: {
    label: 'FUTURE',
    env: 'AI Agents run autonomously',
    cards: futureCards,
    body: "Sam's AI agent monitors the entire invoice workflow autonomously. It generates, sends, tracks, chases, and reconciles — without Sam touching a single button. This is what an agent does: it acts.",
    cardStyle: { border: '1px solid rgba(123, 47, 255, 0.35)', background: 'rgba(123, 47, 255, 0.06)' },
    cardAnim: 'pulse',
    activeColor: '#7b2fff',
  },
};

export default function Chapter2({ onNext }: Chapter2Props) {
  const [activeTab, setActiveTab] = useState<Tab>('PAST');
  const content = tabContent[activeTab];

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Chapter indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          alignSelf: 'flex-start',
          fontFamily: "'Courier New', monospace",
          fontSize: '0.7rem',
          letterSpacing: '0.3em',
          color: 'rgba(0, 212, 255, 0.5)',
          marginBottom: '1.5rem',
        }}
      >
        CHAPTER 02 · SAM&apos;S INVOICE PROBLEM
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        style={{
          fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)',
          fontWeight: 800,
          letterSpacing: '0.08em',
          color: '#e8f4ff',
          marginBottom: '2.5rem',
          textAlign: 'center',
        }}
      >
        THE COMMAND CENTER
      </motion.h2>

      {/* Tab bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          display: 'flex',
          gap: '0',
          marginBottom: '2.5rem',
          background: 'rgba(0, 20, 40, 0.6)',
          border: '1px solid rgba(0, 212, 255, 0.15)',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        {(['PAST', 'PRESENT', 'FUTURE'] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              padding: '0.75rem 1.5rem',
              cursor: 'pointer',
              border: 'none',
              borderBottom: activeTab === tab
                ? `2px solid ${tabContent[tab].activeColor}`
                : '2px solid transparent',
              background: activeTab === tab
                ? `rgba(${tab === 'PAST' ? '255,107,53' : tab === 'PRESENT' ? '0,212,255' : '123,47,255'}, 0.1)`
                : 'transparent',
              color: activeTab === tab ? tabContent[tab].activeColor : 'rgba(232, 244, 255, 0.4)',
              transition: 'all 0.3s ease',
            }}
          >
            {tab}
          </button>
        ))}
      </motion.div>

      {/* Environment label */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab + '-env'}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.4 }}
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            color: content.activeColor,
            marginBottom: '1.5rem',
            opacity: 0.8,
          }}
        >
          ◈ {content.env}
        </motion.div>
      </AnimatePresence>

      {/* Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab + '-cards'}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1rem',
            width: '100%',
            marginBottom: '2rem',
          }}
        >
          {content.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              style={{
                ...content.cardStyle,
                borderRadius: '10px',
                padding: '1.2rem',
                backdropFilter: 'blur(10px)',
                animation: content.cardAnim === 'shake'
                  ? `shake-float ${2.5 + i * 0.3}s ease-in-out infinite`
                  : content.cardAnim === 'pulse'
                  ? `pulse-glow ${2 + i * 0.2}s ease-in-out infinite`
                  : undefined,
              }}
            >
              <div style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{card.icon}</div>
              <div
                style={{
                  fontSize: '0.85rem',
                  color: 'rgba(232, 244, 255, 0.85)',
                  lineHeight: 1.5,
                }}
              >
                {card.text}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Body copy */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab + '-body'}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="glass-panel"
          style={{
            padding: '1.5rem 2rem',
            maxWidth: '760px',
            width: '100%',
            marginBottom: '2.5rem',
            borderColor: `rgba(${activeTab === 'PAST' ? '255,107,53' : activeTab === 'PRESENT' ? '0,212,255' : '123,47,255'}, 0.2)`,
          }}
        >
          <p
            style={{
              fontSize: '0.95rem',
              lineHeight: 1.75,
              color: 'rgba(232, 244, 255, 0.8)',
              textAlign: 'center',
            }}
          >
            {content.body}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Next button */}
      <motion.button
        onClick={onNext}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="cta-btn"
      >
        Next: Test Your Knowledge →
      </motion.button>
    </div>
  );
}
