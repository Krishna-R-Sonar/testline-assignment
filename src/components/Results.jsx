import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';

const Results = ({ score, totalQuestions, onRestart }) => {
  useEffect(() => {
    const duration = 2000;
    const end = Date.now() + duration;

    const fire = () => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 60,
        origin: { x: 0 },
        colors: ['#2563eb', '#4f46e5']
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#2563eb', '#4f46e5']
      });

      if (Date.now() < end) requestAnimationFrame(fire);
    };

    fire();
    
    // Burst effect
    confetti({
      particleCount: 100,
      spread: 85,
      origin: { y: 0.6 }
    });
  }, []);

  return (
    <motion.div 
      className="results-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="trophy"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        🏆
      </motion.div>
      <h2 className="celebration-title">Quiz Mastered! 🎉</h2>
      <motion.div 
        className="score-display"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <div className="score-badge">
          {score}
          <span className="score-label">Total Points</span>
        </div>
      </motion.div>
      <p className="stats">Accuracy: {Math.round((score/(totalQuestions*10))*100)}%</p>
      <motion.button 
        className="restart-btn"
        onClick={onRestart}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span>Play Again</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </motion.button>
    </motion.div>
  );
};

export default Results;