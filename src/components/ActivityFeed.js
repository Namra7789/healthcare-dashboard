import React from 'react';
import '../styles/ActivityFeed.css';

function ActivityFeed() {
  const barData = [
    [100, 60, 40, 30], // Mon 
    [100, 60, 40, 30], // Tue 
    [100, 60, 40, 30], // Wed 
    [100, 60, 40, 30], // Thu 
    [100, 60, 40, 30], // Fri 
    [100, 60, 40, 30], // Sat 
    [100, 60, 40, 30]  // Sun
  ];

  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h2>Activity</h2>
        <span className="appointments-count">3 appointments on this week</span>
      </div>
      
      <div className="activity-graph">
        <div className="graph-bars">
          {barData.map((dayBars, dayIndex) => {
            const isAlternateDay = dayIndex % 2 !== 0; 
            return (
              <div key={dayIndex} className="day-column">
                <div className="bar-group">
                  
                  <div className="bar primary" style={{ height: `${dayBars[0]}px` }}>
                    {isAlternateDay ? (
                      <>
                        <div className="bar-segment left"></div>
                        <div className="bar-segment right"></div>
                      </>
                    ) : null}
                  </div>
                  
                  
                  <div 
                    className="bar secondary" 
                    style={{ height: `${dayBars[1]}px` }}
                  ></div>
                  
                  
                  <div className="bar tertiary" style={{ height: `${dayBars[2]}px` }}>
                    <div className="bar-segment left"></div>
                    <div className="bar-segment right"></div>
                  </div>
                  
                  
                  <div 
                    className="bar fourth" 
                    style={{ height: `${dayBars[3]}px` }}
                  ></div>
                </div>
                <div className="day-label">
                  {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][dayIndex]}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ActivityFeed;