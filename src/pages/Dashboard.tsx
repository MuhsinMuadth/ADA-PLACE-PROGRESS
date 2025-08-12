import React, { useState } from 'react';

interface DashboardProps {
  onOpenModal: () => void;
  onViewPlacementDetail: (placementId: number) => void;
}

type UserType = 'student' | 'employer' | 'staff';

const Dashboard: React.FC<DashboardProps> = ({ onOpenModal, onViewPlacementDetail }) => {
  const [activeUserType, setActiveUserType] = useState<UserType>('student');

  const handlePlacementCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!(e.target as HTMLElement).classList.contains('btn')) {
      const card = e.currentTarget;
      card.style.transform = 'translateX(15px)';
      setTimeout(() => {
        card.style.transform = '';
      }, 200);
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
          onClick={() => setActiveUserType('student')}
        >
          👨‍🎓 Student Dashboard
        </button>
        <button 
          className={`user-type-btn ${activeUserType === 'employer' ? 'active' : ''}`} 
          onClick={() => setActiveUserType('employer')}
        >
          🏢 Employer Portal
        </button>
        <button 
          className={`user-type-btn ${activeUserType === 'staff' ? 'active' : ''}`} 
          onClick={() => setActiveUserType('staff')}
        >
          👩‍💼 Staff Admin
        </button>
      </div>

      {/* Student Dashboard */}
      <div className={`content-section ${activeUserType === 'student' ? 'active' : ''}`}>
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-number" style={{color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>85%</span>
            <div className="stat-label">Profile Complete</div>
          </div>
          <div className="stat-card">
            <span className="stat-number" style={{color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>12</span>
            <div className="stat-label">Placement Matches</div>
          </div>
          <div className="stat-card">
            <span className="stat-number" style={{color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>3</span>
            <div className="stat-label">Applications Sent</div>
          </div>
          <div className="stat-card">
            <span className="stat-number" style={{color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>1</span>
            <div className="stat-label">Interview Scheduled</div>
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="card">
            <div className="card-header">
              <div className="card-icon">🎯</div>
              <div className="card-title">Recommended For You</div>
              <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)' }}>Based on your T-Level profile and interests</div>
            </div>
            <div className="card-content">
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

      {/* Employer Dashboard */}
      <div className={`content-section ${activeUserType === 'employer' ? 'active' : ''}`}>
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-number" style={{color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>24</span>
            <div className="stat-label">Available Students</div>
          </div>
          <div className="stat-card">
            <span className="stat-number" style={{color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>6</span>
            <div className="stat-label">Active Placements</div>
          </div>
          <div className="stat-card">
            <span className="stat-number" style={{color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>89%</span>
            <div className="stat-label">Completion Rate</div>
          </div>
          <div className="stat-card">
            <span className="stat-number" style={{color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>4</span>
            <div className="stat-label">Hired Post-Placement</div>
          </div>
        </div>

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

      {/* Staff Dashboard */}
      <div className={`content-section ${activeUserType === 'staff' ? 'active' : ''}`}>
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-number" style={{color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>156</span>
            <div className="stat-label">Active Students</div>
          </div>
          <div className="stat-card">
            <span className="stat-number" style={{color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>45</span>
            <div className="stat-label">Partner Employers</div>
          </div>
          <div className="stat-card">
            <span className="stat-number" style={{color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>92%</span>
            <div className="stat-label">Placement Success Rate</div>
          </div>
          <div className="stat-card">
            <span className="stat-number" style={{color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>67%</span>
            <div className="stat-label">Job Conversion Rate</div>
          </div>
        </div>

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
    </>
  );
};

export default Dashboard;