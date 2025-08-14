import React from 'react';
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
import { useAuth, useNavigation, useModals } from './hooks';

function App() {
  const { user, loginError, handleLogin, handleLogout, isAuthenticated } = useAuth();
  const { 
    currentPage, 
    selectedPlacementId, 
    handleViewPlacementDetail, 
    handleBackToPlacementsList,
    setCurrentPage 
  } = useNavigation();
  const {
    isProfileOpen,
    isModalOpen,
    isApplicationModalOpen,
    openProfile,
    closeProfile,
    openModal,
    closeModal,
    openApplicationModal,
    closeApplicationModal
  } = useModals();

  const handleOpenApplicationModal = (placementId: number) => {
    openApplicationModal();
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard user={user} onOpenModal={openModal} onViewPlacementDetail={handleViewPlacementDetail} onOpenApplicationModal={handleOpenApplicationModal} />;
      case 'placements':
        return <Placements onViewPlacementDetail={handleViewPlacementDetail} onOpenApplicationModal={handleOpenApplicationModal} />;
      case 'placement-detail':
        return (
          <PlacementDetail 
            placementId={selectedPlacementId}
            onBack={handleBackToPlacementsList}
            onOpenApplicationModal={handleOpenApplicationModal}
          />
        );
      case 'progress':
        return <Progress onOpenModal={openModal} />;
      case 'analytics':
        return <Analytics />;
      default:
        return <Dashboard user={user} onOpenModal={openModal} onViewPlacementDetail={handleViewPlacementDetail} onOpenApplicationModal={handleOpenApplicationModal} />;
    }
  };

  // Show login screen if user is not authenticated
  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} error={loginError} />;
  }

  return (
    <div className="App">
      <Header 
        currentPage={currentPage} 
        onNavigate={setCurrentPage}
        onOpenProfile={openProfile}
        onLogout={handleLogout}
      />
      
      <main className="main">
        <div className="container">
          {renderPage()}
        </div>
      </main>

      <ProfilePanel 
        isOpen={isProfileOpen}
        onClose={closeProfile}
      />

      <Modal 
        isOpen={isModalOpen}
        onClose={closeModal}
        currentPage={currentPage}
      />

      <ApplicationModal 
        isOpen={isApplicationModalOpen}
        onClose={closeApplicationModal}
        placementId={selectedPlacementId}
        placementTitle="Full-Stack Developer"
        companyName="TechFlow Digital"
      />
    </div>
  );
}

export default App;