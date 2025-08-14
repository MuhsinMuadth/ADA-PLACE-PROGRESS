import React, { useState } from 'react';

interface PlacementsProps {
  onViewPlacementDetail: (placementId: number) => void;
}

const Placements: React.FC<PlacementsProps> = ({ onViewPlacementDetail }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('all');

  const handlePlacementCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!(e.target as HTMLElement).classList.contains('btn')) {
      const card = e.currentTarget;
      card.style.transform = 'translateY(-5px) scale(1.02)';
      setTimeout(() => {
        card.style.transform = '';
      }, 200);
    }
  };

  const placementData = [
    {
      id: 1,
      company: 'TechFlow Digital',
      role: 'Full-Stack Developer',
      location: 'Manchester',
      duration: '6 months',
      matchScore: 95,
      sector: 'technology',
      tags: ['React', 'Node.js', 'TypeScript', 'Remote'],
      salary: '£5,000',
      description: 'Join our innovative team building next-generation web applications',
      urgent: false,
      featured: true
    },
    {
      id: 2,
      company: 'HealthTech Solutions',
      role: 'Digital Health Developer',
      location: 'Birmingham',
      duration: '8 months',
      matchScore: 92,
      sector: 'healthcare',
      tags: ['Python', 'Django', 'Healthcare', 'Hybrid'],
      salary: '£6,000',
      description: 'Help digitize healthcare processes to improve patient outcomes',
      urgent: true,
      featured: true
    },
    {
      id: 3,
      company: 'CloudBuild Infrastructure',
      role: 'Cloud Engineer',
      location: 'London',
      duration: '6 months',
      matchScore: 89,
      sector: 'technology',
      tags: ['AWS', 'Docker', 'DevOps', 'On-site'],
      salary: '£8,000',
      description: 'Build and maintain scalable cloud infrastructure solutions',
      urgent: false,
      featured: false
    },
    {
      id: 4,
      company: 'ConstructTech Ltd',
      role: 'Digital Construction Coordinator',
      location: 'Leeds',
      duration: '10 months',
      matchScore: 85,
      sector: 'construction',
      tags: ['BIM', 'CAD', 'Project Management', 'On-site'],
      salary: '£6,500',
      description: 'Modernize construction workflows with cutting-edge digital tools',
      urgent: false,
      featured: false
    }
  ];

  const filterOptions = [
    { key: 'all', label: 'All Placements', icon: '🌟' },
    { key: 'matches', label: 'Top Matches', icon: '🎯' },
    { key: 'featured', label: 'Featured', icon: '⭐' },
    { key: 'urgent', label: 'Urgent', icon: '🚨' }
  ];

  const sectorOptions = [
    { key: 'all', label: 'All Sectors', icon: '🏢' },
    { key: 'technology', label: 'Technology', icon: '💻' },
    { key: 'healthcare', label: 'Healthcare', icon: '🏥' },
    { key: 'construction', label: 'Construction', icon: '🏗️' },
    { key: 'finance', label: 'Finance', icon: '💰' }
  ];

  const filteredPlacements = placementData.filter(placement => {
    if (activeFilter === 'matches' && placement.matchScore < 90) return false;
    if (activeFilter === 'featured' && !placement.featured) return false;
    if (activeFilter === 'urgent' && !placement.urgent) return false;
    if (selectedSector !== 'all' && placement.sector !== selectedSector) return false;
    if (searchTerm && !placement.company.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !placement.role.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  return (
    <>
      <div className="dashboard-header">
        <h1 className="dashboard-title">🎯 Placement Opportunities</h1>
        <p className="dashboard-subtitle">
          Discover industry placements that match your skills, interests, and career aspirations.<br/>
          Your pathway to professional success starts here.
        </p>
      </div>

      {/* Enhanced Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card" style={{background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))'}}>
          <span className="stat-number" style={{color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>127</span>
          <div className="stat-label">Available Placements</div>
          <div style={{fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)', marginTop: '0.25rem'}}>
            +12 this week
          </div>
        </div>
        <div className="stat-card" style={{background: 'linear-gradient(135deg, var(--secondary), #059669)'}}>
          <span className="stat-number" style={{color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.4)'}}>45</span>
          <div className="stat-label">Partner Companies</div>
          <div style={{fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)', marginTop: '0.25rem'}}>
            Across 8 sectors
          </div>
        </div>
        <div className="stat-card" style={{background: 'linear-gradient(135deg, var(--accent), #f97316)'}}>
          <span className="stat-number" style={{color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.4)'}}>12</span>
          <div className="stat-label">Your Matches</div>
          <div style={{fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)', marginTop: '0.25rem'}}>
            85%+ match rate
          </div>
        </div>
        <div className="stat-card" style={{background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)'}}>
          <span className="stat-number" style={{color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>3</span>
          <div className="stat-label">Applications Sent</div>
          <div style={{fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)', marginTop: '0.25rem'}}>
            2 responses pending
          </div>
        </div>
      </div>

      {/* Advanced Search and Filter Section */}
      <div style={{marginBottom: '2rem'}}>
        <div className="card" style={{marginBottom: '1rem'}}>
          <div className="card-header">
            <div className="card-icon">🔍</div>
            <div className="card-title">Smart Search & Filters</div>
          </div>
          <div className="card-content">
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '1.5rem'}}>
              <input 
                type="text" 
                placeholder="Search by company or role..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="placement-search-input"
                style={{
                  padding: '0.875rem 1rem', 
                  border: '2px solid rgba(255,255,255,0.2)', 
                  borderRadius: '12px', 
                  background: 'rgba(255,255,255,0.1)', 
                  color: 'white', 
                  fontSize: '0.95rem',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--primary)';
                  e.target.style.background = 'rgba(255,255,255,0.15)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255,255,255,0.2)';
                  e.target.style.background = 'rgba(255,255,255,0.1)';
                }}
              />
              <select 
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                style={{
                  padding: '0.875rem 1rem', 
                  border: '2px solid rgba(255,255,255,0.2)', 
                  borderRadius: '12px', 
                  background: 'rgba(255,255,255,0.1)', 
                  color: 'white', 
                  fontSize: '0.95rem',
                  backdropFilter: 'blur(10px)',
                  cursor: 'pointer'
                }}
              >
                {sectorOptions.map(sector => (
                  <option key={sector.key} value={sector.key} style={{background: 'var(--dark)', color: 'white'}}>
                    {sector.icon} {sector.label}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Filter Buttons */}
            <div style={{display: 'flex', gap: '0.75rem', flexWrap: 'wrap'}}>
              {filterOptions.map(filter => (
                <button 
                  key={filter.key}
                  onClick={() => setActiveFilter(filter.key)}
                  style={{
                    padding: '0.5rem 1rem',
                    background: activeFilter === filter.key ? 'var(--primary)' : 'rgba(255,255,255,0.1)',
                    border: `2px solid ${activeFilter === filter.key ? 'var(--primary)' : 'rgba(255,255,255,0.2)'}`,
                    borderRadius: '20px',
                    color: 'white',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  <span>{filter.icon}</span>
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Placement Cards Grid */}
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '1.5rem', marginBottom: '2rem'}}>
        {filteredPlacements.map(placement => (
          <div 
            key={placement.id}
            className="placement-card" 
            onClick={handlePlacementCardClick}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '16px',
              padding: '1.5rem',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
            >
            {/* Featured/Urgent Badges - Moved to top left corner, side by side */}
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              display: 'flex',
              flexDirection: 'row',
              gap: '0.25rem',
              zIndex: 2
            }}>
              {placement.featured && (
                <div style={{
                  background: 'linear-gradient(45deg, var(--accent), #f97316)',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '0 0 12px 16px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  boxShadow: '0 2px 8px rgba(245, 158, 11, 0.3)'
                }}>
                  ⭐ Featured
                </div>
              )}
              {placement.urgent && (
                <div style={{
                  background: 'linear-gradient(45deg, var(--danger), #dc2626)',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: placement.featured ? '0 0 12px 0' : '0 0 12px 16px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  boxShadow: '0 2px 8px rgba(239, 68, 68, 0.3)'
                }}>
                  🚨 Urgent
                </div>
              )}
            </div>

            <div className="placement-header" style={{marginBottom: '1rem', marginTop: '1.5rem'}}>
              <div>
                <div className="company-name" style={{fontSize: '1.2rem', fontWeight: '700', color: 'white', marginBottom: '0.25rem'}}>
                  {placement.company}
                </div>
                <div style={{fontSize: '1rem', color: 'rgba(255,255,255,0.9)', fontWeight: '600'}}>
                  {placement.role}
                </div>
              </div>
              <div className="match-score" style={{
                background: `linear-gradient(45deg, 
                  ${placement.matchScore >= 90 ? 'var(--secondary)' : placement.matchScore >= 80 ? 'var(--accent)' : 'var(--primary)'}, 
                  ${placement.matchScore >= 90 ? '#059669' : placement.matchScore >= 80 ? '#f97316' : 'var(--primary-dark)'}
                )`,
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '25px',
                fontSize: '0.9rem',
                fontWeight: '700',
                minWidth: 'fit-content',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                border: '2px solid rgba(255,255,255,0.2)'
              }}>
                {placement.matchScore}% Match
              </div>
            </div>            <div style={{marginBottom: '1rem'}}>
              <p style={{color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: '1.4', marginBottom: '0.75rem'}}>
                {placement.description}
              </p>
              <div className="placement-details" style={{display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)'}}>
                <span>📍 {placement.location}</span>
                <span>⏱️ {placement.duration}</span>
                <span>💰 {placement.salary}</span>
              </div>
            </div>

            <div className="placement-tags" style={{marginBottom: '1.5rem'}}>
              {placement.tags.map(tag => (
                <span key={tag} className="tag" style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  color: 'white',
                  padding: '0.375rem 0.75rem',
                  borderRadius: '15px',
                  fontSize: '0.8rem',
                  fontWeight: '500',
                  margin: '0.25rem 0.25rem 0.25rem 0',
                  border: '1px solid rgba(255,255,255,0.2)'
                }}>
                  {tag}
                </span>
              ))}
            </div>

            <div style={{display: 'flex', gap: '0.75rem'}}>
              <button className="btn btn-primary" style={{flex: 1, padding: '0.75rem', fontWeight: '600'}}>
                Apply Now
              </button>
              <button 
                className="btn btn-secondary" 
                style={{padding: '0.75rem 1rem', fontWeight: '600'}}
                onClick={(e) => {
                  e.stopPropagation();
                  onViewPlacementDetail(placement.id);
                }}
              >
                View Details
              </button>
              <button style={{
                padding: '0.75rem 1rem',
                background: 'rgba(255,255,255,0.1)',
                border: '2px solid rgba(255,255,255,0.2)',
                borderRadius: '8px',
                color: 'white',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                💾
              </button>
              <button style={{
                padding: '0.75rem 1rem',
                background: 'rgba(255,255,255,0.1)',
                border: '2px solid rgba(255,255,255,0.2)',
                borderRadius: '8px',
                color: 'white',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                📤
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Application Tracking Dashboard */}
      <div className="dashboard-grid">
        <div className="card">
          <div className="card-header">
            <div className="card-icon">📊</div>
            <div className="card-title">Application Pipeline</div>
          </div>
          <div className="card-content">
            <div style={{marginBottom: '1.5rem'}}>
              <h4 style={{color: 'white', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                📋 Active Applications
              </h4>
              
              <div style={{marginBottom: '1rem', padding: '1rem', background: 'rgba(245,158,11,0.1)', border: '2px solid rgba(245,158,11,0.3)', borderRadius: '12px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem'}}>
                  <div>
                    <strong style={{color: 'white', fontSize: '1rem'}}>TechCorp Solutions</strong>
                    <div style={{fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)'}}>Backend Developer Role</div>
                  </div>
                  <span style={{
                    background: 'var(--accent)', 
                    color: 'white', 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '15px', 
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>
                    📝 Under Review
                  </span>
                </div>
                <div style={{fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)'}}>Applied 3 days ago • Response expected within 5 days</div>
              </div>

              <div style={{marginBottom: '1rem', padding: '1rem', background: 'rgba(16,185,129,0.1)', border: '2px solid rgba(16,185,129,0.3)', borderRadius: '12px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem'}}>
                  <div>
                    <strong style={{color: 'white', fontSize: '1rem'}}>WebDev Innovations</strong>
                    <div style={{fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)'}}>Frontend Developer Role</div>
                  </div>
                  <span style={{
                    background: 'var(--secondary)', 
                    color: 'white', 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '15px', 
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>
                    🎯 Interview Scheduled
                  </span>
                </div>
                <div style={{fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)'}}>Video interview on Friday 2PM • Preparation materials sent</div>
              </div>

              <div style={{marginBottom: '1rem', padding: '1rem', background: 'rgba(239,68,68,0.1)', border: '2px solid rgba(239,68,68,0.3)', borderRadius: '12px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem'}}>
                  <div>
                    <strong style={{color: 'white', fontSize: '1rem'}}>DataFlow Analytics</strong>
                    <div style={{fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)'}}>Data Analyst Role</div>
                  </div>
                  <span style={{
                    background: 'var(--danger)', 
                    color: 'white', 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '15px', 
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>
                    ❌ Not Selected
                  </span>
                </div>
                <div style={{fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)'}}>Feedback: Great technical skills, but looking for different specialization</div>
              </div>
            </div>
            <button className="btn btn-secondary" style={{width: '100%'}}>View Application History</button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-icon">🎓</div>
            <div className="card-title">Placement Readiness</div>
          </div>
          <div className="card-content">
            <div style={{marginBottom: '1.5rem'}}>
              <h4 style={{color: 'white', marginBottom: '1rem'}}>📈 Your Readiness Score</h4>
              <div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
                <div style={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: 'conic-gradient(var(--secondary) 0deg 306deg, rgba(255,255,255,0.2) 306deg 360deg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  position: 'relative'
                }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: '800'
                  }}>
                    85%
                  </div>
                </div>
              </div>

              <div style={{marginBottom: '1rem'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                  <span style={{fontSize: '0.9rem'}}>✅ CV & Portfolio</span>
                  <span style={{color: 'var(--secondary)', fontWeight: '600'}}>Complete</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                  <span style={{fontSize: '0.9rem'}}>✅ Technical Skills</span>
                  <span style={{color: 'var(--secondary)', fontWeight: '600'}}>Verified</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                  <span style={{fontSize: '0.9rem'}}>⏳ Interview Prep</span>
                  <span style={{color: 'var(--accent)', fontWeight: '600'}}>In Progress</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                  <span style={{fontSize: '0.9rem'}}>❌ Industry Research</span>
                  <span style={{color: 'var(--danger)', fontWeight: '600'}}>Needs Attention</span>
                </div>
              </div>
            </div>
            <button className="btn btn-primary" style={{width: '100%'}}>Complete Readiness Tasks</button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-icon">🤝</div>
            <div className="card-title">Industry Insights</div>
          </div>
          <div className="card-content">
            <div style={{marginBottom: '1.5rem'}}>
              <h4 style={{color: 'white', marginBottom: '1rem'}}>🔥 Trending Sectors</h4>
              
              <div style={{marginBottom: '1rem', padding: '0.75rem', background: 'rgba(99,102,241,0.1)', borderRadius: '8px', border: '1px solid rgba(99,102,241,0.3)'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <div>
                    <span style={{fontWeight: '600', color: 'white'}}>💻 Technology</span>
                    <div style={{fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)'}}>42 new placements this month</div>
                  </div>
                  <span style={{color: 'white', fontWeight: '600', background: 'var(--secondary)', padding: '0.25rem 0.5rem', borderRadius: '12px', fontSize: '0.85rem'}}>+23%</span>
                </div>
              </div>

              <div style={{marginBottom: '1rem', padding: '0.75rem', background: 'rgba(16,185,129,0.1)', borderRadius: '8px', border: '1px solid rgba(16,185,129,0.3)'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <div>
                    <span style={{fontWeight: '600', color: 'white'}}>🏥 Healthcare</span>
                    <div style={{fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)'}}>18 new placements this month</div>
                  </div>
                  <span style={{color: 'white', fontWeight: '600', background: 'var(--secondary)', padding: '0.25rem 0.5rem', borderRadius: '12px', fontSize: '0.85rem'}}>+15%</span>
                </div>
              </div>

              <div style={{marginBottom: '1rem'}}>
                <h4 style={{color: 'white', marginBottom: '0.5rem', fontSize: '1rem'}}>💡 Quick Tips</h4>
                <div style={{fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.4'}}>
                  • Applications submitted within 48 hours have 3x higher response rates<br/>
                  • Students with completed portfolios receive 40% more interview invitations
                </div>
              </div>
            </div>
            <button className="btn btn-secondary" style={{width: '100%'}}>View Market Report</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Placements;