import React from 'react';
import DashboardOverview from './DashboardOverview';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import AppointmentCards from './AppointmentCards';
import '../styles/DashboardMainContent.css';

function DashboardMainContent() {
  return (
    <main className="dashboard-main">
      <div className="main-content-container">
        <div className="left-section">
          <div className="dashboard-header">
            <h1>Dashboard</h1>
            <div className="week-label">This week</div>
          </div>
          <DashboardOverview />
          <ActivityFeed />
        </div>
        <div className="right-section">
          <div className="right-content">
            <CalendarView />
            <AppointmentCards />
            <UpcomingSchedule />
          </div>
        </div>
      </div>
    </main>
  );
}

export default DashboardMainContent;