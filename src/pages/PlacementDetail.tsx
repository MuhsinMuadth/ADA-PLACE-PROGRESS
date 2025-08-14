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
      salary: '£18,000',
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
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'white', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                📝 Role Description
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.6', fontSize: '1rem' }}>
                {placement.description}
              </p>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'white', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                🎯 Key Responsibilities
              </h3>
              <ul style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.6' }}>
                {placement.responsibilities.map((responsibility, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>{responsibility}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 style={{ color: 'white', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                🎓 Learning Outcomes
              </h3>
              <ul style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.6' }}>
                {placement.learningOutcomes.map((outcome, index) => (
                  <li key={index} style={{ marginBottom: '0.5rem' }}>{outcome}</li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'requirements':
        return (
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'white', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                ✅ Essential Requirements
              </h3>
              <div style={{ background: 'rgba(16,185,129,0.1)', border: '2px solid rgba(16,185,129,0.3)', borderRadius: '12px', padding: '1.5rem' }}>
                <ul style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.6', margin: 0 }}>
                  {placement.requirements.map((requirement, index) => (
                    <li key={index} style={{ marginBottom: '0.75rem' }}>{requirement}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'white', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                🛠️ Technical Skills
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {placement.tags.map(tag => (
                  <span key={tag} style={{
                    background: 'rgba(99,102,241,0.2)',
                    color: 'white',
                    padding: '0.75rem 1.25rem',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    border: '2px solid rgba(99,102,241,0.4)'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{ color: 'white', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                📊 Your Match Score
              </h3>
              <div style={{ 
                background: 'rgba(16,185,129,0.1)', 
                border: '2px solid rgba(16,185,129,0.3)', 
                borderRadius: '12px', 
                padding: '1.5rem',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--secondary)', marginBottom: '0.5rem' }}>
                  {placement.matchScore}%
                </div>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', margin: 0 }}>
                  Excellent Match! Your skills and interests align strongly with this role.
                </p>
              </div>
            </div>
          </div>
        );

      case 'company':
        return (
          <div>
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ 
                  fontSize: '4rem', 
                  background: 'rgba(255,255,255,0.1)', 
                  padding: '1rem', 
                  borderRadius: '20px' 
                }}>
                  {placement.logo}
                </div>
                <div>
                  <h2 style={{ color: 'white', margin: 0, fontSize: '2rem' }}>{placement.company}</h2>
                  <p style={{ color: 'rgba(255,255,255,0.8)', margin: '0.5rem 0', fontSize: '1.1rem' }}>
                    {placement.industry}
                  </p>
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '12px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white' }}>{placement.companySize}</div>
                  <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>Team Size</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '12px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white' }}>{placement.established}</div>
                  <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>Established</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '1rem', borderRadius: '12px', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'white' }}>{placement.location}</div>
                  <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>Location</div>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'white', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                🏢 About the Company
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.6', fontSize: '1rem' }}>
                {placement.companyDescription}
              </p>
            </div>

            <div>
              <h3 style={{ color: 'white', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                💝 Company Values
              </h3>
              <ul style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.6' }}>
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
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: 'white', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                🎁 Placement Benefits
              </h3>
              <div style={{ display: 'grid', gap: '1rem' }}>
                {placement.benefits.map((benefit, index) => (
                  <div key={index} style={{
                    background: 'rgba(99,102,241,0.1)',
                    border: '2px solid rgba(99,102,241,0.3)',
                    borderRadius: '12px',
                    padding: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}>
                    <div style={{ fontSize: '1.5rem' }}>✨</div>
                    <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem' }}>{benefit}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ 
              background: 'rgba(245,158,11,0.1)', 
              border: '2px solid rgba(245,158,11,0.3)', 
              borderRadius: '12px', 
              padding: '1.5rem' 
            }}>
              <h3 style={{ color: 'white', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                💰 Compensation & Timeline
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                <div>
                  <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>Placement Salary</div>
                  <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: '700' }}>{placement.salary}</div>
                </div>
                <div>
                  <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>Duration</div>
                  <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: '700' }}>{placement.duration}</div>
                </div>
                <div>
                  <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>Start Date</div>
                  <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: '700' }}>{placement.startDate}</div>
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
      {/* Header with back button */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginBottom: '2rem',
        background: 'rgba(255,255,255,0.1)',
        padding: '1rem 1.5rem',
        borderRadius: '16px',
        border: '1px solid rgba(255,255,255,0.2)'
      }}>
        <button 
          onClick={onBack}
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: '2px solid rgba(255,255,255,0.2)',
            borderRadius: '12px',
            color: 'white',
            padding: '0.75rem 1rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '1rem',
            fontWeight: '600',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
          }}
        >
          ← Back to Placements
        </button>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {placement.featured && (
            <span style={{
              background: 'linear-gradient(45deg, var(--accent), #f97316)',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              ⭐ Featured
            </span>
          )}
          {placement.urgent && (
            <span style={{
              background: 'linear-gradient(45deg, var(--danger), #dc2626)',
              color: 'white',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              fontSize: '0.9rem',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              🚨 Urgent
            </span>
          )}
        </div>
      </div>

      {/* Main placement header */}
      <div className="card" style={{ marginBottom: '2rem' }}>
        <div className="card-content">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
            <div>
              <h1 style={{ color: 'white', fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>
                {placement.role}
              </h1>
              <h2 style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
                {placement.company}
              </h2>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '1rem', color: 'rgba(255,255,255,0.8)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  📍 {placement.location}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  ⏱️ {placement.duration}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  💰 {placement.salary}
                </span>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                background: `linear-gradient(45deg, var(--secondary), #059669)`,
                color: 'white',
                padding: '1rem 1.5rem',
                borderRadius: '20px',
                fontSize: '1.2rem',
                fontWeight: '800',
                marginBottom: '1rem',
                boxShadow: '0 4px 20px rgba(16,185,129,0.3)'
              }}>
                {placement.matchScore}% Match
              </div>
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                Apply by: {placement.applicationDeadline}
              </div>
            </div>
          </div>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
            {placement.tags.map(tag => (
              <span key={tag} style={{
                background: 'rgba(255, 255, 255, 0.15)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: '600',
                border: '2px solid rgba(255,255,255,0.2)'
              }}>
                {tag}
              </span>
            ))}
          </div>

          {/* Main CTA */}
          <button 
            onClick={() => onOpenApplicationModal(placement.id)}
            style={{
              background: 'linear-gradient(45deg, var(--primary), var(--primary-dark))',
              color: 'white',
              border: 'none',
              padding: '1rem 3rem',
              borderRadius: '12px',
              fontSize: '1.2rem',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 6px 20px rgba(99,102,241,0.4)',
              transition: 'all 0.3s ease',
              width: '100%'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(99,102,241,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(99,102,241,0.4)';
            }}
          >
            🚀 Apply Now - Start Your Journey
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div style={{ 
        display: 'flex', 
        gap: '0.5rem', 
        marginBottom: '2rem',
        background: 'rgba(255,255,255,0.1)',
        padding: '0.5rem',
        borderRadius: '16px',
        border: '1px solid rgba(255,255,255,0.2)'
      }}>
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as any)}
            style={{
              flex: 1,
              padding: '1rem',
              background: activeTab === tab.key ? 'var(--primary)' : 'transparent',
              border: 'none',
              borderRadius: '12px',
              color: 'white',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="card">
        <div className="card-content">
          {renderTabContent()}
        </div>
      </div>

      {/* Bottom CTA */}
      <div style={{ 
        position: 'sticky', 
        bottom: '2rem', 
        background: 'rgba(0,0,0,0.9)', 
        padding: '1.5rem', 
        borderRadius: '16px',
        border: '2px solid rgba(255,255,255,0.2)',
        marginTop: '2rem',
        display: 'flex',
        gap: '1rem',
        alignItems: 'center'
      }}>
        <div style={{ flex: 1 }}>
          <div style={{ color: 'white', fontWeight: '700', fontSize: '1.1rem' }}>
            Ready to apply for this amazing opportunity?
          </div>
          <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
            Join {placement.company} and accelerate your career in {placement.sector}
          </div>
        </div>
        <button 
          onClick={() => onOpenApplicationModal(placement.id)}
          style={{
            background: 'linear-gradient(45deg, var(--secondary), #059669)',
            color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '12px',
            fontSize: '1.1rem',
            fontWeight: '700',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(16,185,129,0.4)',
            transition: 'all 0.3s ease',
            whiteSpace: 'nowrap'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Apply Now 🚀
        </button>
      </div>
    </div>
  );
};

export default PlacementDetail;
