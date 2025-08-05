import React from 'react';

const Analytics: React.FC = () => {
  return (
    <>
      <div className="dashboard-header">
        <h1 className="dashboard-title">Platform Analytics</h1>
        <p className="dashboard-subtitle">Insights and performance metrics across the placement ecosystem</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-number">92%</span>
          <div className="stat-label">Placement Success Rate</div>
        </div>
        <div className="stat-card">
          <span className="stat-number">4.3/5</span>
          <div className="stat-label">Average Student Rating</div>
        </div>
        <div className="stat-card">
          <span className="stat-number">67%</span>
          <div className="stat-label">Job Conversion Rate</div>
        </div>
        <div className="stat-card">
          <span className="stat-number">156</span>
          <div className="stat-label">Active Students</div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <div className="card-header">
            <div className="card-icon">📊</div>
            <div className="card-title">Performance Trends</div>
          </div>
          <div className="card-content">
            <div style={{marginBottom: '1.5rem'}}>
              <h4 style={{color: 'white', marginBottom: '1rem'}}>Monthly Metrics</h4>
              
              <div style={{marginBottom: '1rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                  <span>New Placements</span>
                  <span style={{color: 'var(--secondary)', fontWeight: 600}}>28 (+12%)</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '80%'}}></div>
                </div>
              </div>

              <div style={{marginBottom: '1rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                  <span>Successful Matches</span>
                  <span style={{color: 'var(--secondary)', fontWeight: 600}}>26 (+8%)</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '93%'}}></div>
                </div>
              </div>

              <div style={{marginBottom: '1rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                  <span>Completion Rate</span>
                  <span style={{color: 'var(--secondary)', fontWeight: 600}}>89% (+5%)</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '89%'}}></div>
                </div>
              </div>
            </div>
            <button className="btn btn-primary">View Detailed Analytics</button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-icon">🏢</div>
            <div className="card-title">Employer Insights</div>
          </div>
          <div className="card-content">
            <div style={{marginBottom: '1rem'}}>
              <h4 style={{color: 'white', marginBottom: '1rem'}}>Top Performing Partners</h4>
              
              <div style={{marginBottom: '0.75rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem'}}>
                  <span style={{fontWeight: 600}}>TechFlow Digital</span>
                  <span style={{color: 'var(--secondary)'}}>98% satisfaction</span>
                </div>
                <div style={{fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)'}}>12 active placements • 95% completion rate</div>
              </div>

              <div style={{marginBottom: '0.75rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem'}}>
                  <span style={{fontWeight: 600}}>CloudTech Solutions</span>
                  <span style={{color: 'var(--secondary)'}}>95% satisfaction</span>
                </div>
                <div style={{fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)'}}>8 active placements • 92% completion rate</div>
              </div>

              <div style={{marginBottom: '1rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem'}}>
                  <span style={{fontWeight: 600}}>DataDrive Analytics</span>
                  <span style={{color: 'var(--secondary)'}}>93% satisfaction</span>
                </div>
                <div style={{fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)'}}>6 active placements • 88% completion rate</div>
              </div>
            </div>
            <button className="btn btn-secondary">View All Partners</button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-icon">🎯</div>
            <div className="card-title">Student Outcomes</div>
          </div>
          <div className="card-content">
            <div style={{marginBottom: '1rem'}}>
              <h4 style={{color: 'white', marginBottom: '1rem'}}>Success Metrics</h4>
              
              <div style={{marginBottom: '1rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                  <span>Placement Completion</span>
                  <span>92%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '92%'}}></div>
                </div>
              </div>

              <div style={{marginBottom: '1rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                  <span>Job Offers Received</span>
                  <span>67%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '67%'}}></div>
                </div>
              </div>

              <div style={{marginBottom: '1rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                  <span>Skills Development</span>
                  <span>85%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '85%'}}></div>
                </div>
              </div>
            </div>
            <button className="btn btn-primary">Student Reports</button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-icon">⚡</div>
            <div className="card-title">Platform Health</div>
          </div>
          <div className="card-content">
            <div style={{marginBottom: '1rem'}}>
              <h4 style={{color: 'white', marginBottom: '1rem'}}>System Performance</h4>
              
              <div style={{marginBottom: '0.75rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <span>Matching Accuracy</span>
                  <span style={{color: 'var(--secondary)'}}>94%</span>
                </div>
              </div>

              <div style={{marginBottom: '0.75rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <span>Average Response Time</span>
                  <span style={{color: 'var(--secondary)'}}>1.2s</span>
                </div>
              </div>

              <div style={{marginBottom: '0.75rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <span>User Satisfaction</span>
                  <span style={{color: 'var(--secondary)'}}>4.6/5</span>
                </div>
              </div>

              <div style={{marginBottom: '1rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <span>System Uptime</span>
                  <span style={{color: 'var(--secondary)'}}>99.8%</span>
                </div>
              </div>
            </div>
            <button className="btn btn-secondary">System Dashboard</button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-icon">📈</div>
            <div className="card-title">Growth Insights</div>
          </div>
          <div className="card-content">
            <div style={{marginBottom: '1rem'}}>
              <h4 style={{color: 'white', marginBottom: '1rem'}}>Year-over-Year Growth</h4>
              
              <div style={{marginBottom: '0.75rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <span>Student Enrollment</span>
                  <span style={{color: 'var(--secondary)'}}>+23%</span>
                </div>
              </div>

              <div style={{marginBottom: '0.75rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <span>Partner Companies</span>
                  <span style={{color: 'var(--secondary)'}}>+18%</span>
                </div>
              </div>

              <div style={{marginBottom: '0.75rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <span>Placement Opportunities</span>
                  <span style={{color: 'var(--secondary)'}}>+31%</span>
                </div>
              </div>

              <div style={{marginBottom: '1rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <span>Success Rate</span>
                  <span style={{color: 'var(--secondary)'}}>+8%</span>
                </div>
              </div>
            </div>
            <button className="btn btn-primary">Growth Reports</button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-icon">🔄</div>
            <div className="card-title">Industry Trends</div>
          </div>
          <div className="card-content">
            <div style={{marginBottom: '1rem'}}>
              <h4 style={{color: 'white', marginBottom: '1rem'}}>Most In-Demand Skills</h4>
              
              <div style={{marginBottom: '0.5rem'}}>
                <span className="interest-tag">React</span>
                <span className="interest-tag">Python</span>
                <span className="interest-tag">AWS</span>
              </div>
              <div style={{marginBottom: '0.5rem'}}>
                <span className="interest-tag">JavaScript</span>
                <span className="interest-tag">Node.js</span>
                <span className="interest-tag">Docker</span>
              </div>
              <div style={{marginBottom: '1rem'}}>
                <span className="interest-tag">SQL</span>
                <span className="interest-tag">Git</span>
                <span className="interest-tag">Agile</span>
              </div>

              <h4 style={{color: 'white', marginBottom: '0.5rem'}}>Growing Industries</h4>
              <div style={{marginBottom: '1rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem'}}>
                  <span>FinTech</span>
                  <span style={{color: 'var(--secondary)'}}>+45%</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem'}}>
                  <span>HealthTech</span>
                  <span style={{color: 'var(--secondary)'}}>+38%</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <span>E-commerce</span>
                  <span style={{color: 'var(--secondary)'}}>+25%</span>
                </div>
              </div>
            </div>
            <button className="btn btn-secondary">Industry Analysis</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;