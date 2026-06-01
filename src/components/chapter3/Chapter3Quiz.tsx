'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizQuestions } from './quizData';

interface Chapter3QuizProps {
  onComplete: (score: number) => void;
}

type Answer = 'A' | 'B' | null;

export default function Chapter3Quiz({ onComplete }: Chapter3QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>(Array(5).fill(null));
  const [selectedAnswer, setSelectedAnswer] = useState<Answer>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const question = quizQuestions[currentQuestion];
  const isCorrect = selectedAnswer === question.correct;

  const handleSelect = (answer: 'A' | 'B') => {
    if (showFeedback) return;
    setSelectedAnswer(answer);
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
    setShowFeedback(true);
  };

  const handleNext = () => {
    if (currentQuestion < 4) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      const score = answers.filter((a, i) => a === quizQuestions[i].correct).length;
      onComplete(score);
    }
  };

  const questionNum = String(currentQuestion + 1).padStart(2, '0');

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 2rem',
        maxWidth: '900px',
        margin: '0 auto',
        width: '100%',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Chapter label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          alignSelf: 'flex-start',
          fontFamily: "'Courier New', monospace",
          fontSize: '0.7rem',
          letterSpacing: '0.3em',
          color: 'rgba(0, 212, 255, 0.5)',
          marginBottom: '2rem',
        }}
      >
        CHAPTER 03 · FIELD TEST
      </motion.div>

      {/* Progress bar */}
      <div
        style={{
          width: '100%',
          height: '2px',
          background: 'rgba(0, 212, 255, 0.1)',
          borderRadius: '1px',
          marginBottom: '3rem',
          overflow: 'hidden',
        }}
      >
        <motion.div
          animate={{ width: `${((currentQuestion + (showFeedback ? 1 : 0)) / 5) * 100}%` }}
          transition={{ duration: 0.5 }}
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #00d4ff, #7b2fff)',
            borderRadius: '1px',
          }}
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: '100%' }}
        >
          {/* Question number */}
          <div
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: '0.75rem',
              letterSpacing: '0.3em',
              color: 'rgba(0, 212, 255, 0.5)',
              marginBottom: '1rem',
              textAlign: 'center',
            }}
          >
            SCENARIO {questionNum} / 05
          </div>

          {/* Scenario */}
          <div
            className="glass-panel hud-border"
            style={{
              padding: '2rem 2.5rem',
              marginBottom: '2.5rem',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
                lineHeight: 1.7,
                color: '#e8f4ff',
                fontWeight: 500,
              }}
            >
              {question.scenario}
            </p>
          </div>

          {/* Answer buttons */}
          <div
            style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '2rem',
            }}
          >
            {(['A', 'B'] as const).map((opt) => {
              const label = opt === 'A' ? question.optionA : question.optionB;
              const isSelected = selectedAnswer === opt;
              const isRight = opt === question.correct;

              let borderColor = 'rgba(0, 212, 255, 0.3)';
              let bgColor = 'rgba(0, 212, 255, 0.05)';
              let textColor = 'rgba(232, 244, 255, 0.7)';

              if (showFeedback && isSelected && isRight) {
                borderColor = '#00d4ff';
                bgColor = 'rgba(0, 212, 255, 0.15)';
                textColor = '#00d4ff';
              } else if (showFeedback && isSelected && !isRight) {
                borderColor = '#ff6b35';
                bgColor = 'rgba(255, 107, 53, 0.1)';
                textColor = '#ff6b35';
              } else if (showFeedback && isRight) {
                borderColor = 'rgba(0, 212, 255, 0.5)';
                bgColor = 'rgba(0, 212, 255, 0.08)';
                textColor = 'rgba(0, 212, 255, 0.7)';
              }

              return (
                <motion.button
                  key={opt}
                  onClick={() => handleSelect(opt)}
                  whileHover={!showFeedback ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!showFeedback ? { scale: 0.98 } : {}}
                  style={{
                    flex: '1 1 200px',
                    maxWidth: '300px',
                    padding: '1.5rem',
                    border: `1px solid ${borderColor}`,
                    borderRadius: '10px',
                    background: bgColor,
                    backdropFilter: 'blur(10px)',
                    cursor: showFeedback ? 'default' : 'pointer',
                    transition: 'all 0.3s ease',
                    color: textColor,
                    fontFamily: "'Courier New', monospace",
                  }}
                >
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', marginBottom: '0.5rem', opacity: 0.7 }}>
                    OPTION {opt}
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 600, letterSpacing: '0.05em' }}>
                    {label}
                  </div>
                  {showFeedback && isSelected && (
                    <div style={{ marginTop: '0.5rem', fontSize: '1.2rem' }}>
                      {isRight ? '✓' : '✗'}
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Feedback */}
          <AnimatePresence>
            {showFeedback && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="glass-panel"
                style={{
                  padding: '1.5rem 2rem',
                  marginBottom: '2rem',
                  borderColor: isCorrect ? 'rgba(0, 212, 255, 0.3)' : 'rgba(255, 107, 53, 0.3)',
                  borderRadius: '10px',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: '0.7rem',
                    letterSpacing: '0.2em',
                    marginBottom: '0.75rem',
                    color: isCorrect ? '#00d4ff' : '#ff6b35',
                  }}
                >
                  {isCorrect ? '◈ CORRECT' : '◈ NOT QUITE'}
                </div>
                <p
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.7,
                    color: 'rgba(232, 244, 255, 0.85)',
                  }}
                >
                  {question.explanation}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Next button */}
          <AnimatePresence>
            {showFeedback && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{ textAlign: 'center' }}
              >
                <motion.button
                  onClick={handleNext}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="cta-btn"
                >
                  {currentQuestion < 4 ? 'Next Scenario →' : 'See Your Results →'}
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
