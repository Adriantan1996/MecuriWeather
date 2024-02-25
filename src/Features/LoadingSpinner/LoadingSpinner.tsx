import React from "react";
import "./LoadingSpinner.css";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="loading-spinner-overlay" data-testid="LoadingSpinner">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingSpinner;
