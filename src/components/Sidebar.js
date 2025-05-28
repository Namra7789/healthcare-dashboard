import React from 'react';
import { navItems } from '../data/navigation';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-section">
        <h3 className="sidebar-heading">General</h3>
        <ul className="nav-list">
          {navItems.general.map((item, index) => (
            <li key={index} className={`nav-item ${item.name === 'Dashboard' ? 'active' : ''}`}>
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="sidebar-section">
        <h3 className="sidebar-heading">Tools</h3>
        <ul className="nav-list">
          {navItems.tools.map((item, index) => (
            <li key={index} className="nav-item">
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="sidebar-section settings">
        <ul className="nav-list">
          <li className="nav-item">
            <span className="nav-icon">⚙️</span>
            <span className="nav-text">Setting</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;