import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import '../styles/DashboardOverview.css';

function DashboardOverview() {
    return (
        <div className="dashboard-overview">
          <div className="overview-content">
            <AnatomySection />
            <HealthStatusCards />
          </div>
        </div>
      );
}

export default DashboardOverview;