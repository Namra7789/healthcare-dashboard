import React from 'react';
import { healthStatusData } from '../data/healthData';
import '../styles/HealthStatusCards.css';

function HealthStatusCards() {
  return (
    <div className="health-status-cards">
      {healthStatusData.map((item, index) => (
        <div key={index} className="health-card">
          <div className="health-icon">{item.icon}</div>
          <div className="health-info">
            <div className="health-title">{item.title}</div>
            <div className="health-date">{item.date}</div>
            <div className="progress-container">
              <div 
                className="progress-bar" 
                style={{
                  width: `${item.progress}%`,
                  backgroundColor: item.color
                }}
              ></div>
            </div>
          </div>
        </div>
      ))}
      <div className="details-link">Details →</div>
    </div>
  );
}

export default HealthStatusCards;