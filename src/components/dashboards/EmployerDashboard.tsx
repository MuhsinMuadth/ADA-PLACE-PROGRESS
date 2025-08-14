// Employer Dashboard component - extracted from main Dashboard

import React from 'react';
import { DashboardProps } from '../../types';
import { handlePlacementCardClick } from '../../utils';
import StatsGrid from '../StatsGrid';

const EmployerDashboard: React.FC<DashboardProps> = ({ onOpenModal, onViewPlacementDetail }) => {
  const employerStats = [
    { number: '24', label: 'Available Students' },
    { number: '6', label: 'Active Placements' },
    { number: '89%', label: 'Completion Rate' },
    { number: '4', label: 'Hired Post-Placement' }
  ];

  return (
    <div className="content-section active">
      <StatsGrid stats={employerStats} />

      <div className="dashboard-grid">
        <div className="card">
          <div className="card-header">
            <div className="card-icon">👥</div>
            <div className="card-title">Student Matches</div>
          </div>
          <div className="card-content">
            <div className="placement-card" onClick={handlePlacementCardClick}>
              <div className="placement-header">
                <div className="company-name">Sarah Mitchell</div>
                <div className="match-score">95% Match</div>
              </div>
              <div className="placement-details">
                Digital T-Level • Frontend Focus • Available Now
              </div>
              <div className="placement-tags">
                <span className="tag">React</span>
                <span className="tag">JavaScript</span>
                <span className="tag">Git</span>
              </div>
              <button className="btn btn-primary">View Profile</button>
            </div>
            
            <div className="placement-card" onClick={handlePlacementCardClick}>
              <div className="placement-header">
                <div className="company-name">James Rodriguez</div>
                <div className="match-score">92% Match</div>
              </div>
              <div className="placement-details">
                Digital T-Level • Full-stack • Available in 2 weeks
              </div>
              <div className="placement-tags">
                <span className="tag">Python</span>
                <span className="tag">Django</span>
                <span className="tag">SQL</span>
              </div>
              <button className="btn btn-secondary">Contact Student</button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-icon">📊</div>
            <div className="card-title">Placement Management</div>
          </div>
          <div className="card-content">
            <h4 style={{color: 'white', marginBottom: '1rem'}}>Current Placements</h4>
            <div style={{marginBottom: '1rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                <strong style={{color: 'white'}}>Emma Thompson</strong>
                <span style={{color: 'var(--secondary)'}}>Week 6/12</span>
              </div>
              <p style={{fontSize: '0.9rem', marginBottom: '0.5rem'}}>Frontend Development Track</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '50%'}}></div>
              </div>
            </div>
            <button className="btn btn-primary" style={{width: '100%'}}>Manage All Placements</button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-icon">💬</div>
            <div className="card-title">Communication Hub</div>
          </div>
          <div className="card-content">
            <div style={{marginBottom: '1rem'}}>
              <h4 style={{color: 'white', marginBottom: '0.5rem'}}>Recent Messages</h4>
              <div style={{padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', marginBottom: '0.5rem'}}>
                <div style={{fontWeight: 600, color: 'white'}}>Emma Thompson</div>
                <div style={{fontSize: '0.9rem'}}>Weekly update: Completed React component task</div>
              </div>
              <div style={{padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px'}}>
                <div style={{fontWeight: 600, color: 'white'}}>ADA Placement Team</div>
                <div style={{fontSize: '0.9rem'}}>Mid-placement review scheduled for next week</div>
              </div>
            </div>
            <button className="btn btn-secondary">Open Messages</button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-icon">🎯</div>
            <div className="card-title">Recruitment Pipeline</div>
          </div>
          <div className="card-content">
            <div style={{marginBottom: '1rem'}}>
              <h4 style={{color: 'var(--secondary)', marginBottom: '0.5rem'}}>Post-Placement Hiring</h4>
              <p style={{marginBottom: '1rem'}}>3 students eligible for permanent roles</p>
              <div style={{marginBottom: '0.5rem'}}>
                <span>Alex Chen - Software Developer</span>
                <button className="btn btn-primary" style={{float: 'right', padding: '0.25rem 0.75rem', fontSize: '0.8rem'}}>Make Offer</button>
              </div>
              <div style={{clear: 'both', marginBottom: '1rem'}}></div>
            </div>
            <button className="btn btn-secondary" style={{width: '100%'}}>View All Candidates</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerDashboard;
