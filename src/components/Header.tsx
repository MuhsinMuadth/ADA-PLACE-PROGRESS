import React from 'react';

type Page = 'dashboard' | 'placements' | 'progress' | 'analytics';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onOpenProfile: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenProfile }) => {
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
                className={`nav-link ${currentPage === 'placements' ? 'active' : ''}`}
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
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;