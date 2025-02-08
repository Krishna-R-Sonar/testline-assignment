const StartScreen = ({ onStart, description }) => {
  return (
    <div className="start-screen">
      <div className="start-card">
        <h2>Welcome to the Quiz!</h2>
        <p className="quiz-description">{description}</p>
        <button className="start-button" onClick={onStart}>
          Start Quiz 🚀
        </button>
      </div>
    </div>
  );
};

export default StartScreen;