import React from 'react';
import { HeaderProps } from '../types';

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenProfile, onLogout }) => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">ADA Place & Progress</div>
          <ul className="nav-links">
            <li>
              <button 
                className={`nav-link ${currentPage === 'dashboard' ? 'active' : ''}`}
                onClick={() => onNavigate('dashboard')}
              >
                Dashboard
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${currentPage === 'placements' || currentPage === 'placement-detail' ? 'active' : ''}`}
                onClick={() => onNavigate('placements')}
              >
                Placements
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${currentPage === 'progress' ? 'active' : ''}`}
                onClick={() => onNavigate('progress')}
              >
                Progress
              </button>
            </li>
            <li>
              <button 
                className={`nav-link ${currentPage === 'analytics' ? 'active' : ''}`}
                onClick={() => onNavigate('analytics')}
              >
                Analytics
              </button>
            </li>
          </ul>
          <div className="user-menu">
            <div className="notification-badge">🔔</div>
            <div className="user-avatar" onClick={onOpenProfile}>JS</div>
            <button 
              className="logout-btn" 
              onClick={onLogout}
              title="Logout"
            >
              ↪️
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;