// Student Dashboard component - extracted from main Dashboard

import React from 'react';
import { DashboardProps } from '../../types';
import { handlePlacementCardClick } from '../../utils';
import StatsGrid from '../StatsGrid';

const StudentDashboard: React.FC<DashboardProps> = ({ onOpenModal, onViewPlacementDetail }) => {
  const studentStats = [
    { number: '85%', label: 'Profile Complete' },
    { number: '12', label: 'Placement Matches' },
    { number: '3', label: 'Applications Sent' },
    { number: '1', label: 'Interview Scheduled' }
  ];

  return (
    <div className="content-section active">
      <StatsGrid stats={studentStats} />

      <div className="dashboard-grid">
        <div className="card">
          <div className="card-header">
            <div className="card-icon">🎯</div>
            <div className="card-title">Recommended For You</div>
          </div>
          <div className="card-content">
            <p style={{marginBottom: '1rem'}}>Based on your T-Level profile and interests:</p>
            <div className="placement-card" onClick={handlePlacementCardClick} style={{ marginBottom: '1rem', position: 'relative' }}>
              {/* Featured badge */}
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                background: 'linear-gradient(45deg, var(--accent), #f97316)',
                color: 'white',
                padding: '0.25rem 0.75rem',
                borderRadius: '0 0 12px 16px',
                fontSize: '0.75rem',
                fontWeight: '600',
                zIndex: 2
              }}>
                ⭐ Top Match
              </div>
              
              <div style={{ paddingTop: '1rem' }}>
                <div className="placement-header" style={{ marginBottom: '0.75rem' }}>
                  <div>
                    <div className="company-name" style={{ fontSize: '1.1rem', fontWeight: '700' }}>TechFlow Digital</div>
                    <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem' }}>Full-Stack Developer</div>
                  </div>
                  <div className="match-score" style={{ 
                    background: 'linear-gradient(45deg, var(--secondary), #059669)',
                    fontSize: '0.9rem', 
                    padding: '0.4rem 0.8rem' 
                  }}>
                    95% Match
                  </div>
                </div>
                
                <div style={{ marginBottom: '0.75rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
                  Build cutting-edge web applications with React and Node.js in a fast-growing startup environment.
                </div>
                
                <div className="placement-details" style={{ marginBottom: '0.75rem', fontSize: '0.85rem' }}>
                  📍 Manchester • ⏱️ 6 months • 💰 £18,000 • 🏠 Remote/Hybrid
                </div>
                
                <div className="placement-tags" style={{ marginBottom: '1rem' }}>
                  <span className="tag">React</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">TypeScript</span>
                  <span className="tag">Remote</span>
                </div>
                
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button className="btn btn-primary" style={{ flex: 1 }}>🚀 Apply Now</button>
                  <button 
                    className="btn btn-secondary" 
                    onClick={(e) => {
                      e.stopPropagation();
                      onViewPlacementDetail(1);
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
            
            <div className="placement-card" onClick={handlePlacementCardClick} style={{ position: 'relative' }}>
              <div className="placement-header" style={{ marginBottom: '0.75rem' }}>
                <div>
                  <div className="company-name" style={{ fontSize: '1.1rem', fontWeight: '700' }}>HealthTech Solutions</div>
                  <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem' }}>Digital Health Developer</div>
                </div>
                <div className="match-score" style={{ 
                  background: 'linear-gradient(45deg, var(--accent), #f97316)',
                  fontSize: '0.9rem', 
                  padding: '0.4rem 0.8rem' 
                }}>
                  88% Match
                </div>
              </div>
              
              <div style={{ marginBottom: '0.75rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>
                Help digitize healthcare processes to improve patient outcomes using Python and modern frameworks.
              </div>
              
              <div className="placement-details" style={{ marginBottom: '0.75rem', fontSize: '0.85rem' }}>
                📍 Birmingham • ⏱️ 8 months • 💰 £19,500 • 🏢 Hybrid
              </div>
              
              <div className="placement-tags" style={{ marginBottom: '1rem' }}>
                <span className="tag">Python</span>
                <span className="tag">Django</span>
                <span className="tag">Healthcare</span>
                <span className="tag">Hybrid</span>
              </div>
              
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button className="btn btn-secondary" style={{ flex: 1 }}>Learn More</button>
                <button 
                  className="btn btn-secondary" 
                  onClick={(e) => {
                    e.stopPropagation();
                    onViewPlacementDetail(2);
                  }}
                >
                  View Details
                </button>
              </div>
            </div>
            
            {/* Show More Button */}
            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <button 
                className="btn btn-primary" 
                style={{ padding: '0.75rem 2rem' }}
              >
                View All Placements →
              </button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-icon">📋</div>
            <div className="card-title">Readiness Checklist</div>
          </div>
          <div className="card-content">
            <div style={{marginBottom: '1rem'}}>
              <div style={{display: 'flex', justifyContent: 'between', marginBottom: '0.5rem'}}>
                <span>✅ CV Updated</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'between', marginBottom: '0.5rem'}}>
                <span>✅ Portfolio Complete</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'between', marginBottom: '0.5rem'}}>
                <span>⏳ Interview Prep</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'between', marginBottom: '0.5rem'}}>
                <span>❌ Industry Research</span>
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '75%'}}></div>
            </div>
            <p style={{textAlign: 'center', marginTop: '0.5rem'}}>75% Complete</p>
            <button className="btn btn-primary" style={{width: '100%', marginTop: '1rem'}}>Complete Tasks</button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-icon">📈</div>
            <div className="card-title">Progress Tracking</div>
          </div>
          <div className="card-content">
            <div style={{marginBottom: '1rem'}}>
              <h4 style={{color: 'white', marginBottom: '0.5rem'}}>Current Placement: WebDev Corp</h4>
              <p style={{marginBottom: '1rem'}}>Week 8 of 12 • Frontend Development Track</p>
              
              <div style={{marginBottom: '1rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                  <span>Technical Skills</span>
                  <span>4.2/5</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '84%'}}></div>
                </div>
              </div>

              <div style={{marginBottom: '1rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                  <span>Communication</span>
                  <span>4.5/5</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '90%'}}></div>
                </div>
              </div>
            </div>
            <button className="btn btn-secondary" onClick={onOpenModal}>View Full Report</button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-icon">🎓</div>
            <div className="card-title">Career Pathways</div>
          </div>
          <div className="card-content">
            <p style={{marginBottom: '1rem'}}>Based on your placement performance and interests:</p>
            <div style={{marginBottom: '1rem'}}>
              <h4 style={{color: 'var(--secondary)', marginBottom: '0.5rem'}}>🌟 Recommended Next Steps</h4>
              <ul style={{color: 'rgba(255,255,255,0.9)', marginLeft: '1rem'}}>
                <li>Level 6 Software Development Apprenticeship</li>
                <li>Junior Frontend Developer Role</li>
                <li>Further specialization in React/Vue</li>
              </ul>
            </div>
            <button className="btn btn-primary">Explore Opportunities</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
