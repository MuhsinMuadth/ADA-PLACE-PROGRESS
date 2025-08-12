import React, { useState } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Dashboard from './pages/Dashboard';
import Placements from './pages/Placements';
import PlacementDetail from './pages/PlacementDetail';
import Progress from './pages/Progress';
import Analytics from './pages/Analytics';
import ProfilePanel from './components/ProfilePanel';
import Modal from './components/Modal';
import ApplicationModal from './components/ApplicationModal';

type Page = 'dashboard' | 'placements' | 'placement-detail' | 'progress' | 'analytics';

interface User {
  email: string;
  name: string;
  role: 'student' | 'employer' | 'staff';
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [selectedPlacementId, setSelectedPlacementId] = useState<number>(1);
  const [user, setUser] = useState<User | null>(null);
  const [loginError, setLoginError] = useState<string>('');

  // Demo credentials for the prototype
  const validCredentials = {
    'jamie.sullivan@ada.ac.uk': {
      password: 'student123',
      user: {
        email: 'jamie.sullivan@ada.ac.uk',
        name: 'Jamie Sullivan',
        role: 'student' as const
      }
    },
    'admin@ada.ac.uk': {
      password: 'admin123',
      user: {
        email: 'admin@ada.ac.uk',
        name: 'Admin User',
        role: 'staff' as const
      }
    },
    'employer@company.com': {
      password: 'employer123',
      user: {
        email: 'employer@company.com',
        name: 'Employer User',
        role: 'employer' as const
      }
    }
  };

  const handleLogin = (email: string, password: string) => {
    const credentials = validCredentials[email as keyof typeof validCredentials];
    
    if (credentials && credentials.password === password) {
      setUser(credentials.user);
      setLoginError('');
    } else {
      setLoginError('Invalid email or password. Please try again or use the demo account.');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('dashboard');
    setIsProfileOpen(false);
    setIsModalOpen(false);
    setIsApplicationModalOpen(false);
  };

  const handleViewPlacementDetail = (placementId: number) => {
    setSelectedPlacementId(placementId);
    setCurrentPage('placement-detail');
  };

  const handleOpenApplicationModal = (placementId: number) => {
    setSelectedPlacementId(placementId);
    setIsApplicationModalOpen(true);
  };

  const handleBackToPlacementsList = () => {
    setCurrentPage('placements');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onOpenModal={() => setIsModalOpen(true)} onViewPlacementDetail={handleViewPlacementDetail} />;
      case 'placements':
        return <Placements onViewPlacementDetail={handleViewPlacementDetail} />;
      case 'placement-detail':
        return (
          <PlacementDetail 
            placementId={selectedPlacementId}
            onBack={handleBackToPlacementsList}
            onOpenApplicationModal={handleOpenApplicationModal}
          />
        );
      case 'progress':
        return <Progress onOpenModal={() => setIsModalOpen(true)} />;
      case 'analytics':
        return <Analytics />;
      default:
        return <Dashboard onOpenModal={() => setIsModalOpen(true)} onViewPlacementDetail={handleViewPlacementDetail} />;
    }
  };

  // Show login screen if user is not authenticated
  if (!user) {
    return <Login onLogin={handleLogin} error={loginError} />;
  }

  return (
    <div className="App">
      <Header 
        currentPage={currentPage} 
        onNavigate={setCurrentPage}
        onOpenProfile={() => setIsProfileOpen(true)}
        onLogout={handleLogout}
      />
      
      <main className="main">
        <div className="container">
          {renderPage()}
        </div>
      </main>

      <ProfilePanel 
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />

      <Modal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentPage={currentPage}
      />

      <ApplicationModal 
        isOpen={isApplicationModalOpen}
        onClose={() => setIsApplicationModalOpen(false)}
        placementId={selectedPlacementId}
        placementTitle="Full-Stack Developer"
        companyName="TechFlow Digital"
      />
    </div>
  );
}

export default App;