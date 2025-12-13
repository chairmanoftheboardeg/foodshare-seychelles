import React from 'react';

const VolunteerApps = () => {
  // Placeholder data for volunteer applications
  const applications = [
    { id: 301, name: 'Michael Scott', status: 'New Application', appliedDate: '2025-12-10' },
    { id: 302, name: 'Dwight Schrute', status: 'Interview Scheduled', appliedDate: '2025-12-05' },
  ];

  return (
    <div className="page-container">
      <h2>👥 Volunteer Applications</h2>
      <p>Review applications from individuals interested in volunteering with FoodShare.</p>

      <ul className="application-list">
        {applications.map(app => (
          <li key={app.id} className="app-item">
            <strong>{app.name}</strong> - Applied: {app.appliedDate}
            <div className="actions">
              <span className={`status-tag ${app.status.toLowerCase().replace(' ', '-')}`}>{app.status}</span>
              <button className="btn-info">View Details</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VolunteerApps;
