import React from 'react';
import { calendarData } from '../data/calendarData';
import '../styles/CalendarView.css';

function CalendarView() {
  const getTimeSlotClass = (time, dayIndex) => {
    const dayName = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][dayIndex];
    
    if (dayName === 'Tue' && time === '09:00') {
      return 'time-slot highlighted-primary';
    }
    
    if (
      (dayName === 'Thu' && time === '11:00') ||
      (dayName === 'Sat' && time === '12:00') ||
      (dayName === 'Sun' && time === '09:00')
    ) {
      return 'time-slot highlighted-secondary';
    }
    
    return 'time-slot';
  };

  return (
    <div className="calendar-view">
      <h2>October 2021</h2>
      <table className="calendar-grid">
        <thead>
          <tr>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
              <th 
                key={day} 
                className={
                  day === 'Tue' ? 'tuesday-header' : 
                  day === 'Sun' ? 'sunday-header' : ''
                }
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="day-numbers">
            {calendarData.days.map((day, index) => (
              <td 
                key={index} 
                className={
                  index === 1 ? 'tuesday-date' : 
                  index === 6 ? 'sunday-date' : ''
                }
              >
                {day}
              </td>
            ))}
          </tr>
          {calendarData.times.map((timeRow, rowIndex) => (
            <tr key={rowIndex}>
              {timeRow.map((time, colIndex) => (
                <td 
                  key={colIndex} 
                  className={colIndex === 1 ? 'tuesday-cell' : ''}
                >
                  {time && (
                    <div className={getTimeSlotClass(time, colIndex)}>
                      {time}
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CalendarView;