import { useState } from 'react';
import StartScreen from './StartScreen';
import Question from './Question';
import Results from './Results';
import ProgressBar from './ProgressBar';

const Quiz = ({ quizData }) => {
  const [quizState, setQuizState] = useState({
    started: false,
    currentQuestion: 0,
    score: 0,
    streak: 0,
    showResults: false
  });

  const handleAnswer = (isCorrect) => {
    setQuizState(prev => {
      const newState = { ...prev };
      if (isCorrect) {
        newState.score += 10 + (prev.streak);
        newState.streak++;
      } else {
        newState.streak = 0;
      }

      if (prev.currentQuestion < quizData.questions.length - 1) {
        newState.currentQuestion++;
      } else {
        newState.showResults = true;
      }
      return newState;
    });
  };

  return (
    <div className="quiz-container">
      {!quizState.started ? (
        <StartScreen 
          onStart={() => setQuizState(p => ({ ...p, started: true }))}
          description={quizData.description}
        />
      ) : quizState.showResults ? (
        <Results 
          score={quizState.score} 
          totalQuestions={quizData.questions.length}
          onRestart={() => setQuizState({
            started: false,
            currentQuestion: 0,
            score: 0,
            streak: 0,
            showResults: false
          })}
        />
      ) : (
        <>
          <ProgressBar 
            current={quizState.currentQuestion + 1} 
            total={quizData.questions.length} 
          />
          <Question 
            question={quizData.questions[quizState.currentQuestion]}
            onAnswer={handleAnswer}
            streak={quizState.streak}
          />
        </>
      )}
    </div>
  );
};

export default Quiz;