import React from 'react';
import { upcomingAppointments } from '../data/appointments';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import '../styles/UpcomingSchedule.css';

function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
      <h2>The Upcoming Schedule</h2>
      
      <div className="schedule-days">
        <div className="schedule-day">
          <h3>On Thursday</h3>
          <div className="appointment-cards">
            {upcomingAppointments
              .filter(appt => appt.day === 'Thursday')
              .map((appt, index) => (
                <SimpleAppointmentCard key={index} title={appt.title} icon={appt.icon} time={appt.time} />
              ))}
          </div>
        </div>
      
        <div className="schedule-day">
          <h3>On Saturday</h3>
          <div className="appointment-cards">
            {upcomingAppointments
              .filter(appt => appt.day === 'Saturday')
              .map((appt, index) => (
                <SimpleAppointmentCard key={index} title={appt.title} icon={appt.icon} time={appt.time} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingSchedule;