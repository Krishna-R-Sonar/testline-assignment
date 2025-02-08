import { useState, useEffect } from 'react';
import Quiz from './components/Quiz';
import Loader from './components/Loader';
import ErrorMessage from './components/Error';
import './App.css';

function App() {
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/Uw5CrX');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Validate API structure
        if (!data.questions || !Array.isArray(data.questions)) {
          throw new Error('Invalid quiz data format from API');
        }
        
        setQuizData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="app">
      <h1 className="app-title">{quizData.title}</h1>
      <Quiz quizData={quizData} />
    </div>
  );
}

export default App;