// Staff Dashboard component - extracted from main Dashboard

import React from 'react';
import { DashboardProps } from '../../types';
import StatsGrid from '../StatsGrid';

const StaffDashboard: React.FC<DashboardProps> = ({ onOpenModal, onViewPlacementDetail }) => {
  const staffStats = [
    { number: '156', label: 'Active Students' },
    { number: '45', label: 'Partner Employers' },
    { number: '92%', label: 'Placement Success Rate' },
    { number: '67%', label: 'Job Conversion Rate' }
  ];

  return (
    <div className="content-section active">
      <StatsGrid stats={staffStats} />

      <div className="dashboard-grid">
        <div className="card">
          <div className="card-header">
            <div className="card-icon">📈</div>
            <div className="card-title">Platform Analytics</div>
          </div>
          <div className="card-content">
            <div style={{marginBottom: '1rem'}}>
              <h4 style={{color: 'white', marginBottom: '0.5rem'}}>This Month's Performance</h4>
              <div style={{marginBottom: '1rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                  <span>New Placements</span>
                  <span style={{color: 'var(--secondary)', fontWeight: 600}}>28</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                  <span>Successful Matches</span>
                  <span style={{color: 'var(--secondary)', fontWeight: 600}}>26</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                  <span>Avg. Match Score</span>
                  <span style={{color: 'var(--secondary)', fontWeight: 600}}>87%</span>
                </div>
              </div>
            </div>
            <button className="btn btn-primary">View Full Analytics</button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-icon">⚠️</div>
            <div className="card-title">Alerts & Actions</div>
          </div>
          <div className="card-content">
            <div style={{marginBottom: '1rem'}}>
              <div style={{padding: '0.75rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '8px', marginBottom: '0.5rem'}}>
                <div style={{fontWeight: 600, color: 'var(--danger)'}}>Placement at Risk</div>
                <div style={{fontSize: '0.9rem'}}>Student Alex Johnson - Performance concerns at TechCorp</div>
              </div>
              <div style={{padding: '0.75rem', background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.3)', borderRadius: '8px', marginBottom: '0.5rem'}}>
                <div style={{fontWeight: 600, color: 'var(--accent)'}}>Review Due</div>
                <div style={{fontSize: '0.9rem'}}>Mid-placement review for 8 students this week</div>
              </div>
            </div>
            <button className="btn btn-secondary">Manage Alerts</button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-icon">🏢</div>
            <div className="card-title">Employer Relations</div>
          </div>
          <div className="card-content">
            <div style={{marginBottom: '1rem'}}>
              <h4 style={{color: 'white', marginBottom: '0.5rem'}}>Top Performing Partners</h4>
              <div style={{marginBottom: '0.5rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <span>TechFlow Digital</span>
                  <span style={{color: 'var(--secondary)'}}>98% satisfaction</span>
                </div>
              </div>
              <div style={{marginBottom: '0.5rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <span>CloudTech Solutions</span>
                  <span style={{color: 'var(--secondary)'}}>95% satisfaction</span>
                </div>
              </div>
              <div style={{marginBottom: '1rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <span>DataDrive Analytics</span>
                  <span style={{color: 'var(--secondary)'}}>93% satisfaction</span>
                </div>
              </div>
            </div>
            <button className="btn btn-primary">Manage Partners</button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-icon">🛠️</div>
            <div className="card-title">Platform Management</div>
          </div>
          <div className="card-content">
            <div style={{marginBottom: '1rem'}}>
              <h4 style={{color: 'white', marginBottom: '1rem'}}>Quick Actions</h4>
              <button className="btn btn-secondary" style={{width: '100%', marginBottom: '0.5rem'}}>Add New Employer</button>
              <button className="btn btn-secondary" style={{width: '100%', marginBottom: '0.5rem'}}>Bulk Student Import</button>
              <button className="btn btn-secondary" style={{width: '100%', marginBottom: '0.5rem'}}>Generate Reports</button>
              <button className="btn btn-primary" style={{width: '100%'}}>System Settings</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;
