import React from 'react';
import '../styles/SimpleAppointmentCard.css';

function SimpleAppointmentCard({ title,icon, time }) {
  return (
    <div className="simple-appointment-card">
      <div className="appointment-details">
        <span className="appointment-title">{title}</span>
        <span className="appointment-icon">{icon}</span>
        <div className="appointment-time">{time}</div>
      </div>
      
    </div>
  );
}

export default SimpleAppointmentCard;