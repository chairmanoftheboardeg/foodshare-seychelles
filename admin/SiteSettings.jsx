import React, { useState } from 'react';

const SiteSettings = () => {
  const [email, setEmail] = useState('admin@foodshare-seychelles.online'); // Based on footer info
  const [phone, setPhone] = useState('[Contact Number]'); // Based on footer info
  const [siteName, setSiteName] = useState('FoodShare Seychelles');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Settings Saved:', { email, phone, siteName });
    alert('Settings updated successfully!');
  };

  return (
    <div className="page-container">
      <h2>⚙️ Site Settings</h2>
      <p>Configure the primary contact information and general system parameters.</p>

      <form onSubmit={handleSubmit} className="settings-form">
        <div className="form-group">
          <label>Organization Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Organization Phone:</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Site Name:</label>
          <input type="text" value={siteName} onChange={(e) => setSiteName(e.target.value)} />
        </div>

        <button type="submit" className="btn-primary">Save Settings</button>
      </form>
    </div>
  );
};

export default SiteSettings;
