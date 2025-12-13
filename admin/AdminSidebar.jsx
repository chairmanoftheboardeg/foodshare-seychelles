import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AdminSidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard Home', path: '/admin/home'
    { name: 'Inventory Management', path: '/admin/inventory'
    { name: 'Donation Requests', path: '/admin/donations'
    { name: 'Staff Tasks', path: '/admin/tasks'
    { name: 'Volunteer Apps', path: '/admin/volunteers'
    { name: 'Site Settings', path: '/admin/settings'
  ];

  return (
    <aside className="sidebar">
      <h2 className="panel-title">Admin Panel</h2>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path}
                className={location.pathname === item.path ? 'active-link' : ''}
              >
                <span className="icon">{item.icon}</span> {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="logout-section">
        <Link to="/logout" className="logout-link">
          <span className="icon">➡️</span> Logout
        </Link>
      </div>
    </aside>
  );
};

export default AdminSidebar;
