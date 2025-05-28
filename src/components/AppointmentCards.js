import React from 'react';
import '../styles/AppointmentCards.css';

function AppointmentCards() {
  return (
    <div className="appointment-cards">
      <div className="appointment-card dentist">
        <div className="card-header">
          <span className="badge">Dentist</span>
          <span className="icon"> 🦷 </span>
          
        </div>
        <div className="card-body">
        <span className="time">9:00 - 11:00</span>
          <div className="doctor">Dr. Cameron Williamson</div>
        </div>
      </div>
      
      <div className="appointment-card physio">
        <div className="card-header">
          <span className="badge">Physiotherapy</span>
          <span className="icon"> 💪 </span>
          
        </div>
        <div className="card-body">
          <span className="time">11:00 - 12:00</span>
          <div className="doctor"> Dr. Kevin Dejones</div>
        </div>
      </div>
    </div>
  );
}

export default AppointmentCards;