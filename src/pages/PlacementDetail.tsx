import React, { useState } from 'react';
import { PlacementDetailProps } from '../types';

const PlacementDetail: React.FC<PlacementDetailProps> = ({ 
  placementId, 
  onBack, 
  onOpenApplicationModal 
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'requirements' | 'company' | 'benefits'>('overview');

  // Mock data for the placement detail - in real app this would come from API
  const placementData = {
    1: {
      id: 1,
      company: 'TechFlow Digital',
      role: 'Full-Stack Developer',
      location: 'Manchester',
      duration: '6 months',
      matchScore: 95,
      sector: 'technology',
      tags: ['React', 'Node.js', 'TypeScript', 'Remote'],
      salary: '£5,000',
      description: 'Join our innovative team building next-generation web applications that serve millions of users worldwide. You\'ll work alongside experienced developers on cutting-edge projects using modern technologies.',
      urgent: false,
      featured: true,
      startDate: '15th September 2025',
      applicationDeadline: '1st September 2025',
      logo: '🚀',
      companySize: '50-100 employees',
      established: '2018',
      industry: 'Software Development',
      companyDescription: 'TechFlow Digital is a fast-growing software company specializing in scalable web applications and digital transformation solutions. We pride ourselves on our collaborative culture and commitment to innovation.',
      requirements: [
        'Currently enrolled in Digital T-Level program',
        'Basic understanding of JavaScript and web development',
        'Enthusiasm for learning new technologies',
        'Strong problem-solving skills',
        'Good communication and teamwork abilities'
      ],
      responsibilities: [
        'Develop and maintain web applications using React and Node.js',
        'Collaborate with designers to implement user interfaces',
        'Write clean, maintainable, and well-documented code',
        'Participate in code reviews and team meetings',
        'Learn and apply best practices in software development',
        'Contribute to testing and debugging processes'
      ],
      benefits: [
        'Competitive placement salary',
        'Mentorship from senior developers',
        'Flexible hybrid working arrangement',
        'Access to latest development tools and technologies',
        'Professional development opportunities',
        'Potential for permanent role upon completion'
      ],
      learningOutcomes: [
        'Master modern JavaScript frameworks (React, Node.js)',
        'Understand full-stack development workflows',
        'Experience with version control and collaboration tools',
        'Learn agile development methodologies',
        'Develop professional communication skills'
      ],
      companyValues: [
        'Innovation-driven approach to problem solving',
        'Collaborative and inclusive work environment',
        'Commitment to continuous learning and growth',
        'Work-life balance and employee wellbeing'
      ]
    }
    // Add more placement data as needed
  };

  const placement = placementData[placementId as keyof typeof placementData] || placementData[1];

  const tabs = [
    { key: 'overview', label: 'Overview', icon: '📋' },
    { key: 'requirements', label: 'Requirements', icon: '✅' },
    { key: 'company', label: 'Company', icon: '🏢' },
    { key: 'benefits', label: 'Benefits', icon: '🎁' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ color: 'white', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem' }}>
                📝 Role Description
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.5', fontSize: '1.05rem' }}>
                {placement.description}
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ color: 'white', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem' }}>
                🎯 Key Responsibilities
              </h3>
              <ul style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.5', fontSize: '1rem' }}>
                {placement.responsibilities.slice(0, 4).map((responsibility, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>{responsibility}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 style={{ color: 'white', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem' }}>
                🎓 What You'll Learn
              </h3>
              <ul style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.5', fontSize: '1rem' }}>
                {placement.learningOutcomes.slice(0, 4).map((outcome, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>{outcome}</li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'requirements':
        return (
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ color: 'white', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem' }}>
                ✅ Requirements
              </h3>
              <div style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(34,197,94,0.05))', border: '1px solid rgba(34,197,94,0.4)', borderRadius: '12px', padding: '1.25rem' }}>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                  {placement.requirements.map((requirement, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      background: 'rgba(255,255,255,0.08)',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                      <div style={{ 
                        background: 'rgba(34,197,94,0.2)', 
                        borderRadius: '50%', 
                        width: '24px', 
                        height: '24px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        fontSize: '0.75rem',
                        flexShrink: 0
                      }}>
                        ✓
                      </div>
                      <span style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1rem', lineHeight: '1.4' }}>
                        {requirement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ color: 'white', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem' }}>
                🛠️ Technical Skills
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '0.75rem' }}>
                {placement.tags.map(tag => (
                  <div key={tag} style={{
                    background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(147,51,234,0.2))',
                    color: 'white',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    border: '1px solid rgba(59,130,246,0.4)',
                    textAlign: 'center',
                    transition: 'all 0.2s ease',
                    cursor: 'default',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{ color: 'white', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem' }}>
                📊 Your Match Score
              </h3>
              <div style={{ 
                background: 'linear-gradient(135deg, rgba(34,197,94,0.15), rgba(16,185,129,0.1))', 
                border: '1px solid rgba(34,197,94,0.4)', 
                borderRadius: '12px', 
                padding: '1.5rem',
                textAlign: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}>
                <div style={{ 
                  fontSize: '2.5rem', 
                  fontWeight: '700', 
                  background: 'linear-gradient(135deg, #10b981, #34d399)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '0.5rem' 
                }}>
                  {placement.matchScore}%
                </div>
                <p style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1rem', margin: 0, fontWeight: '500' }}>
                  Excellent Match! Your skills align well with this role.
                </p>
              </div>
            </div>
          </div>
        );

      case 'company':
        return (
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ fontSize: '2.5rem' }}>{placement.logo}</div>
                <div>
                  <h2 style={{ color: 'white', margin: 0, fontSize: '1.5rem' }}>{placement.company}</h2>
                  <p style={{ color: 'rgba(255,255,255,0.8)', margin: '0.25rem 0', fontSize: '0.95rem' }}>
                    {placement.industry}
                  </p>
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: '600', color: 'white' }}>{placement.companySize}</div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>Team Size</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: '600', color: 'white' }}>{placement.established}</div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>Established</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.2rem', fontWeight: '600', color: 'white' }}>{placement.location}</div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>Location</div>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ color: 'white', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem' }}>
                🏢 About the Company
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.5', fontSize: '1.05rem' }}>
                {placement.companyDescription}
              </p>
            </div>

            <div>
              <h3 style={{ color: 'white', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem' }}>
                💝 Company Values
              </h3>
              <ul style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.5', fontSize: '1rem' }}>
                {placement.companyValues.map((value, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>{value}</li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'benefits':
        return (
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ color: 'white', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem' }}>
                🎁 Placement Benefits
              </h3>
              <div style={{ display: 'grid', gap: '0.75rem' }}>
                {placement.benefits.map((benefit, index) => (
                  <div key={index} style={{
                    background: 'rgba(99,102,241,0.08)',
                    border: '1px solid rgba(99,102,241,0.2)',
                    borderRadius: '8px',
                    padding: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem'
                  }}>
                    <div style={{ fontSize: '1.3rem' }}>✨</div>
                    <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem' }}>{benefit}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ 
              background: 'rgba(245,158,11,0.08)', 
              border: '1px solid rgba(245,158,11,0.2)', 
              borderRadius: '8px', 
              padding: '1rem' 
            }}>
              <h3 style={{ color: 'white', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem' }}>
                💰 Compensation & Timeline
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                <div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>Placement Salary</div>
                  <div style={{ color: 'white', fontSize: '1.25rem', fontWeight: '600' }}>{placement.salary}</div>
                </div>
                <div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>Duration</div>
                  <div style={{ color: 'white', fontSize: '1.25rem', fontWeight: '600' }}>{placement.duration}</div>
                </div>
                <div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>Start Date</div>
                  <div style={{ color: 'white', fontSize: '1.25rem', fontWeight: '600' }}>{placement.startDate}</div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      {/* Compact Header */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginBottom: '1.5rem',
        background: 'rgba(255,255,255,0.05)',
        padding: '1rem 1.5rem',
        borderRadius: '12px',
        border: '1px solid rgba(255,255,255,0.1)'
      }}>
        <button 
          onClick={onBack}
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '8px',
            color: 'white',
            padding: '0.75rem 1.25rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.9rem',
            fontWeight: '500',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
          }}
        >
          ← Back
        </button>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {placement.featured && (
            <span style={{
              background: 'var(--accent)',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: '600'
            }}>
              ⭐ Featured
            </span>
          )}
          {placement.urgent && (
            <span style={{
              background: 'var(--danger)',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: '600'
            }}>
              🚨 Urgent
            </span>
          )}
        </div>
      </div>

      {/* Compact Main Card */}
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <div className="card-content" style={{ padding: '1.5rem' }}>
          {/* Header Row */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ fontSize: '2.5rem' }}>{placement.logo}</div>
                <div>
                  <h1 style={{ color: 'white', fontSize: '2rem', fontWeight: '700', marginBottom: '0.25rem', lineHeight: '1.1' }}>
                    {placement.role}
                  </h1>
                  <h2 style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', fontWeight: '500', margin: 0 }}>
                    {placement.company}
                  </h2>
                </div>
              </div>
              
              {/* Quick Info Grid */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
                gap: '0.75rem', 
                marginBottom: '1rem' 
              }}>
                <div style={{ 
                  background: 'rgba(255,255,255,0.05)', 
                  padding: '0.75rem', 
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '1.2rem' }}>📍</div>
                  <div style={{ color: 'white', fontWeight: '600', fontSize: '1rem' }}>{placement.location}</div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>Location</div>
                </div>
                <div style={{ 
                  background: 'rgba(255,255,255,0.05)', 
                  padding: '0.75rem', 
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '1.2rem' }}>⏱️</div>
                  <div style={{ color: 'white', fontWeight: '600', fontSize: '1rem' }}>{placement.duration}</div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>Duration</div>
                </div>
                <div style={{ 
                  background: 'rgba(255,255,255,0.05)', 
                  padding: '0.75rem', 
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '1.2rem' }}>💰</div>
                  <div style={{ color: 'white', fontWeight: '600', fontSize: '1rem' }}>{placement.salary}</div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>Salary</div>
                </div>
                <div style={{ 
                  background: 'var(--secondary)', 
                  padding: '0.75rem', 
                  borderRadius: '8px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '1.2rem' }}>🎯</div>
                  <div style={{ color: 'white', fontWeight: '700', fontSize: '1rem' }}>{placement.matchScore}%</div>
                  <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.85rem' }}>Match</div>
                </div>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {placement.tags.map(tag => (
                  <span key={tag} style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    fontWeight: '500'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.5', fontSize: '0.95rem', margin: 0 }}>
                {placement.description}
              </p>
            </div>

            <div style={{ marginLeft: '2rem', textAlign: 'center' }}>
              <button 
                onClick={() => onOpenApplicationModal(placement.id)}
                style={{
                  background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))',
                  color: 'white',
                  border: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '12px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(99,102,241,0.3)',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(99,102,241,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(99,102,241,0.3)';
                }}
              >
                🚀 Apply Now
              </button>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', marginTop: '0.5rem' }}>
                Apply by: {placement.applicationDeadline}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Tab Navigation */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)', 
        gap: '0.5rem', 
        marginBottom: '1.5rem'
      }}>
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as any)}
            style={{
              padding: '0.75rem 1rem',
              background: activeTab === tab.key 
                ? 'var(--primary)' 
                : 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px',
              color: 'white',
              fontSize: '0.95rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}
            onMouseEnter={(e) => {
              if (activeTab !== tab.key) {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== tab.key) {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              }
            }}
          >
            <span style={{ fontSize: '1.1rem' }}>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Compact Tab Content */}
      <div className="card">
        <div className="card-content" style={{ padding: '1.5rem' }}>
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default PlacementDetail;
