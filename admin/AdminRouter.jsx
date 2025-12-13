import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminDashboard from './pages/AdminDashboard';
import AdminUsers from './pages/AdminUsers';
import AdminRoles from './pages/AdminRoles';
import AdminReports from './pages/AdminReports';
import AdminSettings from './pages/AdminSettings';

// Assume this component is rendered when the URL is /admin/*
const AdminRouter = () => {
  return (
    <div className="admin-layout">
      {/* The Sidebar component is static/persistent */}
      <AdminSidebar />
      
      {/* The main content area where pages are rendered */}
      <main className="admin-content">
        <Routes>
          {/* Default Route: Redirects /admin to /admin/dashboard */}
          <Route path="/" element={<Navigate replace to="dashboard" />} /> 
          
          {/* Defined Routes for each page */}
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="roles" element={<AdminRoles />} />
          <Route path="reports" element={<AdminReports />} />
          <Route path="settings" element={<AdminSettings />} />
          
          {/* 404/Catch-all route */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </main>
    </div>
  );
};

export default AdminRouter;
