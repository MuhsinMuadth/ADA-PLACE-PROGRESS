import React from 'react';
import { DashboardProps } from '../types';
import StudentDashboard from '../components/dashboards/StudentDashboard';
import EmployerDashboard from '../components/dashboards/EmployerDashboard';
import StaffDashboard from '../components/dashboards/StaffDashboard';

const Dashboard: React.FC<DashboardProps> = ({ user, onOpenModal, onViewPlacementDetail, onOpenApplicationModal }) => {
  const renderDashboard = () => {
    if (!user) return null;
    
    switch (user.role) {
      case 'student':
        return <StudentDashboard user={user} onOpenModal={onOpenModal} onViewPlacementDetail={onViewPlacementDetail} onOpenApplicationModal={onOpenApplicationModal} />;
      case 'employer':
        return <EmployerDashboard user={user} onOpenModal={onOpenModal} onViewPlacementDetail={onViewPlacementDetail} />;
      case 'staff':
        return <StaffDashboard user={user} onOpenModal={onOpenModal} onViewPlacementDetail={onViewPlacementDetail} />;
      default:
        return <StudentDashboard user={user} onOpenModal={onOpenModal} onViewPlacementDetail={onViewPlacementDetail} onOpenApplicationModal={onOpenApplicationModal} />;
    }
  };

  const getDashboardTitle = () => {
    if (!user) return 'Dashboard';
    
    switch (user.role) {
      case 'student':
        return 'Student Dashboard';
      case 'employer':
        return 'Employer Portal';
      case 'staff':
        return 'Staff Admin Dashboard';
      default:
        return 'Dashboard';
    }
  };

  const getDashboardSubtitle = () => {
    if (!user) return 'Welcome to ADA Place & Progress';
    
    switch (user.role) {
      case 'student':
        return 'Track your placement journey and discover new opportunities';
      case 'employer':
        return 'Manage placements and connect with talented students';
      case 'staff':
        return 'Oversee the placement ecosystem and support student success';
      default:
        return 'Welcome to ADA Place & Progress';
    }
  };

  return (
    <>
      <div className="dashboard-header">
        <h1 className="dashboard-title">{getDashboardTitle()}</h1>
        <p className="dashboard-subtitle">{getDashboardSubtitle()}</p>
        {user && (
          <div className="welcome-message">
            Welcome back, <strong>{user.name}</strong>!
          </div>
        )}
      </div>

      {renderDashboard()}
    </>
  );
};

export default Dashboard;