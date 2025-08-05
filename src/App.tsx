import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Placements from './pages/Placements';
import Progress from './pages/Progress';
import Analytics from './pages/Analytics';
import ProfilePanel from './components/ProfilePanel';
import Modal from './components/Modal';

type Page = 'dashboard' | 'placements' | 'progress' | 'analytics';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onOpenModal={() => setIsModalOpen(true)} />;
      case 'placements':
        return <Placements />;
      case 'progress':
        return <Progress onOpenModal={() => setIsModalOpen(true)} />;
      case 'analytics':
        return <Analytics />;
      default:
        return <Dashboard onOpenModal={() => setIsModalOpen(true)} />;
    }
  };

  return (
    <div className="App">
      <Header 
        currentPage={currentPage} 
        onNavigate={setCurrentPage}
        onOpenProfile={() => setIsProfileOpen(true)}
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
    </div>
  );
}

export default App;