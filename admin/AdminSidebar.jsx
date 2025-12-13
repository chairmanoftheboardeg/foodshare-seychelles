import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AdminSidebar = () => {
  // useLocation helps us determine the active link for styling
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard' },
    { name: 'Manage Users', path: '/admin/users' },
    { name: 'Roles & Permissions', path: '/admin/roles' },
    { name: 'System Reports', path: '/admin/reports' },
    { name: 'System Settings', path: '/admin/settings' },
  ];

  return (
    <aside className="sidebar">
      <h2>Admin Panel</h2>
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path}
                // Apply 'active' class if the current path matches the item's path
                className={location.pathname === item.path ? 'active-link' : ''}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="logout-section">
        {/* Important: Logout should probably still use a regular <a> or button for a backend API call */}
        <button onClick={() => console.log('Logging out...')}>Logout</button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
