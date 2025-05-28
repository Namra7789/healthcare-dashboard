import React from 'react';
import '../styles/AnatomySection.css';
import placeholderImage from '../assets/body.jpg';

function AnatomySection() {
  return (
    <div className="anatomy-section">
      <div className="anatomy-image-container">
        <img src={placeholderImage} alt="Human anatomy" className="anatomy-image" />
        <div className="health-indicator heart-indicator">
          <span>❤️</span>
          <div className="indicator-text">Healthy Heart</div>
        </div>
        <div className="health-indicator log-indicator">
          <span>🦵</span>
          <div className="indicator-text">Healthy Leg</div>
        </div>
      </div>
    </div>
  );
}

export default AnatomySection;