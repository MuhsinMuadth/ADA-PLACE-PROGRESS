import React from 'react';
import { DashboardProps } from '../types';
import { useDashboardUserType } from '../hooks';
import StudentDashboard from '../components/dashboards/StudentDashboard';
import EmployerDashboard from '../components/dashboards/EmployerDashboard';
import StaffDashboard from '../components/dashboards/StaffDashboard';

const Dashboard: React.FC<DashboardProps> = ({ onOpenModal, onViewPlacementDetail, onOpenApplicationModal }) => {
  const { activeUserType, switchUserType } = useDashboardUserType();

  const renderDashboard = () => {
    switch (activeUserType) {
      case 'student':
        return <StudentDashboard onOpenModal={onOpenModal} onViewPlacementDetail={onViewPlacementDetail} onOpenApplicationModal={onOpenApplicationModal} />;
      case 'employer':
        return <EmployerDashboard onOpenModal={onOpenModal} onViewPlacementDetail={onViewPlacementDetail} />;
      case 'staff':
        return <StaffDashboard onOpenModal={onOpenModal} onViewPlacementDetail={onViewPlacementDetail} />;
      default:
        return <StudentDashboard onOpenModal={onOpenModal} onViewPlacementDetail={onViewPlacementDetail} onOpenApplicationModal={onOpenApplicationModal} />;
    }
  };

  return (
    <>
      <div className="dashboard-header">
        <h1 className="dashboard-title">The ADA Place & Progress Platform</h1>
        <p className="dashboard-subtitle">Connecting T-Level students with industry placements that drive career success</p>
      </div>

      <div className="user-type-selector">
        <button 
          className={`user-type-btn ${activeUserType === 'student' ? 'active' : ''}`} 
          onClick={() => switchUserType('student')}
        >
          👨‍🎓 Student Dashboard
        </button>
        <button 
          className={`user-type-btn ${activeUserType === 'employer' ? 'active' : ''}`} 
          onClick={() => switchUserType('employer')}
        >
          🏢 Employer Portal
        </button>
        <button 
          className={`user-type-btn ${activeUserType === 'staff' ? 'active' : ''}`} 
          onClick={() => switchUserType('staff')}
        >
          👩‍💼 Staff Admin
        </button>
      </div>

      {renderDashboard()}
    </>
  );
};

export default Dashboard;