import React from 'react';

const Placements: React.FC = () => {
  return (
    <>
      <div className="dashboard-header">
        <h1 className="dashboard-title">Placement Opportunities</h1>
        <p className="dashboard-subtitle">Discover your perfect industry placement match</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-number">127</span>
          <div className="stat-label">Available Placements</div>
        </div>
        <div className="stat-card">
          <span className="stat-number">45</span>
          <div className="stat-label">Partner Companies</div>
        </div>
        <div className="stat-card">
          <span className="stat-number">12</span>
          <div className="stat-label">Your Matches</div>
        </div>
        <div className="stat-card">
          <span className="stat-number">3</span>
          <div className="stat-label">Applications Sent</div>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <div className="card-header">
            <div className="card-icon">🔍</div>
            <div className="card-title">Search & Filter</div>
          </div>
          <div className="card-content">
            <div style={{marginBottom: '1rem'}}>
              <input 
                type="text" 
                placeholder="Search placements..." 
                style={{
                  width: '100%', 
                  padding: '0.75rem', 
                  border: '1px solid rgba(255,255,255,0.3)', 
                  borderRadius: '8px', 
                  background: 'rgba(255,255,255,0.1)', 
                  color: 'white', 
                  marginBottom: '0.5rem'
                }}
              />
              <select 
                style={{
                  width: '100%', 
                  padding: '0.75rem', 
                  border: '1px solid rgba(255,255,255,0.3)', 
                  borderRadius: '8px', 
                  background: 'rgba(255,255,255,0.1)', 
                  color: 'white', 
                  marginBottom: '0.5rem'
                }}
              >
                <option>All Industries</option>
                <option>Technology</option>
                <option>Finance</option>
                <option>Healthcare</option>
              </select>
            </div>
            <button className="btn btn-primary" style={{width: '100%'}}>Apply Filters</button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-icon">⭐</div>
            <div className="card-title">Top Matches</div>
          </div>
          <div className="card-content">
            <div className="placement-card">
              <div className="placement-header">
                <div className="company-name">TechFlow Digital</div>
                <div className="match-score">92% Match</div>
              </div>
              <div className="placement-details">
                Full-stack Development • Manchester • 6 months
              </div>
              <div className="placement-tags">
                <span className="tag">React</span>
                <span className="tag">Node.js</span>
                <span className="tag">Remote</span>
              </div>
              <button className="btn btn-primary">Apply Now</button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-icon">📊</div>
            <div className="card-title">Application Status</div>
          </div>
          <div className="card-content">
            <div style={{marginBottom: '1rem'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                <span>TechCorp - Applied</span>
                <span style={{color: 'var(--accent)'}}>Under Review</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                <span>WebDev Inc - Applied</span>
                <span style={{color: 'var(--secondary)'}}>Interview Scheduled</span>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                <span>DataFlow - Applied</span>
                <span style={{color: 'var(--danger)'}}>Declined</span>
              </div>
            </div>
            <button className="btn btn-secondary" style={{width: '100%'}}>View All Applications</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Placements;