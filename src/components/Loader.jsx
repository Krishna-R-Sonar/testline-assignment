import { PropagateLoader } from 'react-spinners';

const Loader = () => (
  <div className="loader-container">
    <PropagateLoader 
      color="#2563eb"
      size={20}
      speedMultiplier={1.2}
    />
    <p className="loading-text">Preparing Your Quiz Experience</p>
  </div>
);

export default Loader;