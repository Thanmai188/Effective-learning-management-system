import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>My Courses</h3>
          <p>3 Enrolled</p>
        </div>
        <div className="dashboard-card">
          <h3>Progress</h3>
          <p>75%</p>
        </div>
        <div className="dashboard-card">
          <h3>Assignments</h3>
          <p>2 Pending</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;