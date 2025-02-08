import { useState } from 'react';

const Question = ({ question, onAnswer, streak }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleSelect = (option) => {
    if (selectedAnswer) return;
    setSelectedAnswer(option);
    setTimeout(() => {
      onAnswer(option.is_correct);
      setSelectedAnswer(null);
    }, 1500);
  };

  return (
    <div className="question-card">
      <h3 className="question-text">{question.description}</h3>
      {streak > 0 && (
        <div className="streak-display">
          🔥 Streak: {streak}
          {streak > 3 && <span className="streak-flame">🔥</span>}
        </div>
      )}
      <div className="options-grid">
        {question.options.map((option) => (
          <button
            key={option.id}
            className={`option-btn ${selectedAnswer?.id === option.id ? 
              (option.is_correct ? 'correct' : 'wrong') : ''}`}
            onClick={() => handleSelect(option)}
            disabled={selectedAnswer}
          >
            <span className="option-text">{option.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;