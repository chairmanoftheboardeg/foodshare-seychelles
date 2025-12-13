import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
// Import the custom components corresponding to your sidebar menu items
import DashboardHome from './pages/DashboardHome';
import InventoryManagement from './pages/InventoryManagement';
import DonationRequests from './pages/DonationRequests';
import StaffTasks from './pages/StaffTasks';
import VolunteerApps from './pages/VolunteerApps';
import SiteSettings from './pages/SiteSettings';

// The Main Admin Router component
const AdminRouter = () => {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <main className="admin-content">
        <Routes>
          {/* Default Route: Ensure /admin goes to the main page */}
          <Route path="/" element={<Navigate replace to="home" />} /> 
          
          {/* Routes matching your sidebar */}
          <Route path="home" element={<DashboardHome />} />
          <Route path="inventory" element={<InventoryManagement />} />
          <Route path="donations" element={<DonationRequests />} />
          <Route path="tasks" element={<StaffTasks />} />
          <Route path="volunteers" element={<VolunteerApps />} />
          <Route path="settings" element={<SiteSettings />} />
          
          {/* Fallback */}
          <Route path="*" element={<h1>404 - Admin Page Not Found</h1>} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminRouter;
