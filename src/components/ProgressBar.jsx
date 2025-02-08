const ProgressBar = ({ current, total }) => (
  <div className="progress-container">
    <div 
      className="progress-bar"
      style={{ width: `${(current / total) * 100}%` }}
    />
    <div className="progress-text">
      Question {current} of {total}
    </div>
  </div>
);

export default ProgressBar;