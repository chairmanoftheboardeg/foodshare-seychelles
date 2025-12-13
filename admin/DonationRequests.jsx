import React from 'react';

const DonationRequests = () => {
  // Placeholder data for pending donation requests
  const pendingRequests = [
    { id: 101, donor: 'ABC Bakery', items: 'Bread, Pastries', status: 'Pending Review' },
    { id: 102, donor: 'John Doe', items: 'Canned Goods', status: 'Awaiting Pickup' },
  ];

  return (
    <div className="page-container">
      <h2>❤️ Donation Requests</h2>
      <p>Review, approve, assign staff for pickup, and log all incoming donation offers.</p>

      <div className="request-filters">
        <label>Filter Status:</label>
        <select><option>Pending Review</option><option>Awaiting Pickup</option></select>
      </div>

      <ul className="request-list">
        {pendingRequests.map(req => (
          <li key={req.id} className="request-item">
            <strong>Donor:</strong> {req.donor} ({req.items}) - Status: {req.status}
            <div className="actions">
              <button className="btn-success">Approve</button>
              <button className="btn-warning">Reject</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonationRequests;
