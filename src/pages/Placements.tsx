import React from 'react';
import { PlacementsProps } from '../types';
import { usePlacementFilters } from '../hooks';
import { placementData, filterOptions, sectorOptions } from '../data/mockData';
import { handlePlacementCardClick } from '../utils';
import StatsGrid from '../components/StatsGrid';
import PlacementCard from '../components/PlacementCard';

const Placements: React.FC<PlacementsProps> = ({ onViewPlacementDetail, onOpenApplicationModal }) => {
  const {
    activeFilter,
    searchTerm,
    selectedSector,
    filteredPlacements,
    setActiveFilter,
    setSearchTerm,
    setSelectedSector
  } = usePlacementFilters(placementData);

  const placementStats = [
    { 
      number: '127', 
      label: 'Available Placements', 
      subtitle: '+12 this week',
      color: 'linear-gradient(135deg, var(--primary), var(--primary-dark))'
    },
    { 
      number: '42', 
      label: 'Perfect Matches', 
      subtitle: '85%+ match rate',
      color: 'linear-gradient(135deg, var(--secondary), #059669)'
    },
    { 
      number: '3', 
      label: 'Applications Sent', 
      subtitle: '2 responses pending',
      color: 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
    }
  ];

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
      <StatsGrid stats={placementStats} />

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
          <PlacementCard
            key={placement.id}
            placement={placement}
            onViewDetail={onViewPlacementDetail}
            onApply={onOpenApplicationModal}
            onPlacementCardClick={(e) => handlePlacementCardClick(e, 'translateY(-5px) scale(1.02)')}
          />
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
                    <div style={{fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)'}}>Full-Stack Developer Role</div>
                  </div>
                  <span style={{
                    background: 'var(--accent)', 
                    color: 'white', 
                    padding: '0.25rem 0.75rem', 
                    borderRadius: '15px', 
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>
                    📧 Interview Pending
                  </span>
                </div>
                <div style={{fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)'}}>Applied 3 days ago • Expected response by Friday</div>
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
                  <span style={{color: 'var(--secondary)', fontSize: '0.9rem', fontWeight: '600'}}>Complete</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                  <span style={{fontSize: '0.9rem'}}>⏳ Interview Skills</span>
                  <span style={{color: 'var(--accent)', fontSize: '0.9rem', fontWeight: '600'}}>80%</span>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                  <span style={{fontSize: '0.9rem'}}>📚 Industry Knowledge</span>
                  <span style={{color: 'var(--accent)', fontSize: '0.9rem', fontWeight: '600'}}>75%</span>
                </div>
              </div>
            </div>
            <button className="btn btn-primary" style={{width: '100%'}}>Improve Readiness</button>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-icon">📈</div>
            <div className="card-title">Market Insights</div>
          </div>
          <div className="card-content">
            <div style={{marginBottom: '1.5rem'}}>
              <h4 style={{color: 'white', marginBottom: '1rem'}}>🔥 Trending This Week</h4>
              
              <div style={{marginBottom: '1rem', padding: '0.75rem', background: 'rgba(16,185,129,0.1)', borderRadius: '8px', border: '1px solid rgba(16,185,129,0.3)'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <div>
                    <span style={{fontWeight: '600', color: 'white'}}>💻 Technology</span>
                    <div style={{fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)'}}>42 new placements this month</div>
                  </div>
                  <span style={{color: 'white', fontWeight: '600', background: 'var(--secondary)', padding: '0.25rem 0.5rem', borderRadius: '12px', fontSize: '0.85rem'}}>+23%</span>
                </div>
              </div>

              <div style={{marginBottom: '1rem', padding: '0.75rem', background: 'rgba(99,102,241,0.1)', borderRadius: '8px', border: '1px solid rgba(99,102,241,0.3)'}}>
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
