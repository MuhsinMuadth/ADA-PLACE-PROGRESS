import React from 'react';

interface ProgressProps {
  onOpenModal: () => void;
}

const Progress: React.FC<ProgressProps> = ({ onOpenModal }) => {
  return (
    <>
      <div className="dashboard-header">
        <h1 className="dashboard-title">Progress Tracking</h1>
        <p className="dashboard-subtitle">Monitor your placement journey and skill development</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-number" style={{color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>8/12</span>
          <div className="stat-label">Weeks Completed</div>
        </div>
        <div className="stat-card">
          <span className="stat-number" style={{color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>4.2/5</span>
          <div className="stat-label">Average Rating</div>
        </div>
        <div className="stat-card">
          <span className="stat-number" style={{color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>15</span>
          <div className="stat-label">Skills Developed</div>
        </div>
        <div className="stat-card">
          <span className="stat-number" style={{color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>3</span>
          <div className="stat-label">Certifications Earned</div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <div className="card-header">
            <div className="card-icon">📈</div>
            <div className="card-title">Current Placement Progress</div>
          </div>
          <div className="card-content">
            <h4 style={{color: 'white', marginBottom: '1rem'}}>WebDev Corp - Frontend Development Track</h4>
            
            <div style={{marginBottom: '1.5rem'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                <span>Overall Progress</span>
                <span>67%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '67%'}}></div>
              </div>
            </div>

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

            <button className="btn btn-secondary" onClick={onOpenModal}>View Detailed Report</button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-icon">🎯</div>
            <div className="card-title">Weekly Goals</div>
          </div>
          <div className="card-content">
            <div style={{marginBottom: '1rem'}}>
              <h4 style={{color: 'white', marginBottom: '0.5rem'}}>Week 9 Objectives</h4>
              <div style={{marginBottom: '0.5rem'}}>
                <span>✅ Complete React Router implementation</span>
              </div>
              <div style={{marginBottom: '0.5rem'}}>
                <span>⏳ Build responsive dashboard layout</span>
              </div>
              <div style={{marginBottom: '0.5rem'}}>
                <span>❌ Conduct user testing session</span>
              </div>
              <div style={{marginBottom: '0.5rem'}}>
                <span>❌ Present weekly progress to team</span>
              </div>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{width: '50%'}}></div>
            </div>
            <p style={{textAlign: 'center', marginTop: '0.5rem'}}>2 of 4 goals completed</p>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-icon">🏆</div>
            <div className="card-title">Recent Achievements</div>
          </div>
          <div className="card-content">
            <div style={{marginBottom: '1rem'}}>
              <div className="achievement-badge" style={{width: '100%', margin: '0.5rem 0'}}>
                🎯 Week 8 Goals Completed
              </div>
              <div className="achievement-badge" style={{width: '100%', margin: '0.5rem 0'}}>
                💻 React Components Mastery
              </div>
              <div className="achievement-badge" style={{width: '100%', margin: '0.5rem 0'}}>
                👥 Positive Team Feedback
              </div>
              <div className="achievement-badge" style={{width: '100%', margin: '0.5rem 0'}}>
                📚 Advanced JavaScript Cert
              </div>
            </div>
            <button className="btn btn-primary" style={{width: '100%'}}>View All Achievements</button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-icon">📊</div>
            <div className="card-title">Skill Development</div>
          </div>
          <div className="card-content">
            <div style={{marginBottom: '1rem'}}>
              <h4 style={{color: 'white', marginBottom: '1rem'}}>Recent Improvements</h4>
              
              <div className="skill-item" style={{marginBottom: '0.75rem'}}>
                <span className="skill-name">React</span>
                <div className="skill-level">
                  <div className="skill-progress" style={{width: '85%'}}></div>
                </div>
                <span className="skill-percentage">+15%</span>
              </div>
              
              <div className="skill-item" style={{marginBottom: '0.75rem'}}>
                <span className="skill-name">Problem Solving</span>
                <div className="skill-level">
                  <div className="skill-progress" style={{width: '87%'}}></div>
                </div>
                <span className="skill-percentage">+12%</span>
              </div>
              
              <div className="skill-item" style={{marginBottom: '0.75rem'}}>
                <span className="skill-name">Communication</span>
                <div className="skill-level">
                  <div className="skill-progress" style={{width: '90%'}}></div>
                </div>
                <span className="skill-percentage">+8%</span>
              </div>
            </div>
            <button className="btn btn-secondary" style={{width: '100%'}}>View Skill Portfolio</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress;