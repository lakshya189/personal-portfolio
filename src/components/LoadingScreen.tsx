import React, { useEffect, useState } from 'react';
import '../styles/LoadingScreen.css';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        // Speed up the loading by incrementing by 2 instead of 1
        setProgress(prev => Math.min(prev + 2, 100));
      } else {
        // When loading reaches 100%, hide the loader immediately
        setTimeout(() => {
          setLoading(false);
        }, 300);
      }
    }, 10); // Faster loading speed

    return () => clearTimeout(timer);
  }, [progress]);

  if (!loading) return null;

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <h1 className="loading-title">
          <span className="text-purple">Lakshya</span> Soni
        </h1>
        <div className="loading-bar-container">
          <div
            className="loading-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="loading-text">{progress}%</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
