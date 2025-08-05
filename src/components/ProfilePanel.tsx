import React, { useState } from 'react';

interface ProfilePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

type ProfileTab = 'overview' | 'academic' | 'skills' | 'documents';

const ProfilePanel: React.FC<ProfilePanelProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<ProfileTab>('overview');

  const downloadDocument = (type: string) => {
    const documentNames = {
      'cv': 'Jamie_Sullivan_CV.pdf',
      'portfolio': 'portfolio.jamiesullivan.dev',
      'transcript': 'Academic_Transcript_JS.pdf',
      'certificates': 'Certifications_Bundle.zip',
      'projects': 'github.com/jamiesullivan'
    };
    
    if (type === 'portfolio' || type === 'projects') {
      alert(`Opening: ${documentNames[type as keyof typeof documentNames]}`);
    } else {
      alert(`Downloading: ${documentNames[type as keyof typeof documentNames]}`);
    }
  };

  return (
    <>
      <div 
        className={`profile-overlay ${isOpen ? 'active' : ''}`} 
        onClick={onClose}
      />
      <div className={`profile-panel ${isOpen ? 'active' : ''}`}>
        <div className="profile-header">
          <button className="profile-close" onClick={onClose}>&times;</button>
          <div className="profile-avatar">JS</div>
          <div className="profile-name">Jamie Sullivan</div>
          <div className="profile-course">Digital T-Level • Year 2 • Manchester Campus</div>
        </div>
        
        <div className="profile-content">
          <div className="profile-tabs">
            <button 
              className={`profile-tab ${activeTab === 'overview' ? 'active' : ''}`} 
              onClick={() => setActiveTab('overview')}
            >
              📊 Overview
            </button>
            <button 
              className={`profile-tab ${activeTab === 'academic' ? 'active' : ''}`} 
              onClick={() => setActiveTab('academic')}
            >
              🎓 Academic
            </button>
            <button 
              className={`profile-tab ${activeTab === 'skills' ? 'active' : ''}`} 
              onClick={() => setActiveTab('skills')}
            >
              💪 Skills
            </button>
            <button 
              className={`profile-tab ${activeTab === 'documents' ? 'active' : ''}`} 
              onClick={() => setActiveTab('documents')}
            >
              📄 Documents
            </button>
          </div>

          {/* Overview Tab */}
          <div className={`profile-tab-content ${activeTab === 'overview' ? 'active' : ''}`}>
            <div className="profile-section">
              <div className="profile-section-title">
                👤 Personal Information
              </div>
              <div className="contact-grid">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-info">
                    <div style={{fontWeight: 600, color: 'var(--text)'}}>Email</div>
                    <div style={{color: 'var(--text-light)'}}>j.sullivan@ada.ac.uk</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <div className="contact-info">
                    <div style={{fontWeight: 600, color: 'var(--text)'}}>Phone</div>
                    <div style={{color: 'var(--text-light)'}}>+44 7700 900123</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-info">
                    <div style={{fontWeight: 600, color: 'var(--text)'}}>Location</div>
                    <div style={{color: 'var(--text-light)'}}>Manchester, UK</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">🎂</div>
                  <div className="contact-info">
                    <div style={{fontWeight: 600, color: 'var(--text)'}}>Age</div>
                    <div style={{color: 'var(--text-light)'}}>18 years old</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="profile-section">
              <div className="profile-section-title">
                🎯 Career Aspirations
              </div>
              <div className="profile-item">
                <div className="profile-item-label">Primary Goal</div>
                <div className="profile-item-value">Full-Stack Software Developer specializing in web applications</div>
              </div>
              <div className="profile-item">
                <div className="profile-item-label">Industry Preference</div>
                <div className="profile-item-value">Fintech, E-commerce, or SaaS companies</div>
              </div>
              <div className="profile-item">
                <div className="profile-item-label">Long-term Vision</div>
                <div className="profile-item-value">Technical Lead role within 5 years, potentially starting own tech consultancy</div>
              </div>
            </div>

            <div className="profile-section">
              <div className="profile-section-title">
                ❤️ Interests & Hobbies
              </div>
              <div style={{marginBottom: '1rem'}}>
                <span className="interest-tag">💻 Web Development</span>
                <span className="interest-tag">🎮 Game Development</span>
                <span className="interest-tag">🤖 AI/Machine Learning</span>
                <span className="interest-tag">🎵 Music Production</span>
                <span className="interest-tag">📚 Tech Podcasts</span>
                <span className="interest-tag">🏃‍♂️ Running</span>
                <span className="interest-tag">♟️ Chess</span>
                <span className="interest-tag">🎨 Digital Art</span>
              </div>
            </div>
          </div>

          {/* Academic Tab */}
          <div className={`profile-tab-content ${activeTab === 'academic' ? 'active' : ''}`}>
            <div className="profile-section">
              <div className="profile-section-title">
                📊 T-Level Predicted Grades
              </div>
              <div className="grade-card">
                <div className="grade-subject">Digital Production, Design & Development</div>
                <div className="grade-predicted">Distinction*</div>
                <div className="grade-current">Current: Distinction</div>
              </div>
              <div className="grade-card" style={{background: 'linear-gradient(45deg, var(--secondary), #059669)'}}>
                <div className="grade-subject">Core Mathematics</div>
                <div className="grade-predicted">A</div>
                <div className="grade-current">Current: B+</div>
              </div>
              <div className="grade-card" style={{background: 'linear-gradient(45deg, var(--accent), #f97316)'}}>
                <div className="grade-subject">Core English</div>
                <div className="grade-predicted">B</div>
                <div className="grade-current">Current: B</div>
              </div>
            </div>

            <div className="profile-section">
              <div className="profile-section-title">
                🏆 Achievements & Certifications
              </div>
              <div style={{marginBottom: '1rem'}}>
                <div className="achievement-badge">🥇 Student of the Month - March 2025</div>
                <div className="achievement-badge">💻 JavaScript Fundamentals Certified</div>
                <div className="achievement-badge">🎨 Responsive Web Design Certified</div>
                <div className="achievement-badge">☁️ AWS Cloud Practitioner</div>
                <div className="achievement-badge">📱 React Development Specialist</div>
                <div className="achievement-badge">🏅 Hackathon Winner - Manchester Tech 2024</div>
              </div>
            </div>

            <div className="profile-section">
              <div className="profile-section-title">
                📈 Academic Progress
              </div>
              <div className="profile-item">
                <div className="profile-item-label">Overall Progress</div>
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem'}}>
                  <div className="progress-bar" style={{flex: 1, margin: 0}}>
                    <div className="progress-fill" style={{width: '78%'}}></div>
                  </div>
                  <span style={{color: 'var(--secondary)', fontWeight: 600}}>78%</span>
                </div>
              </div>
              <div className="profile-item">
                <div className="profile-item-label">Attendance Rate</div>
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem'}}>
                  <div className="progress-bar" style={{flex: 1, margin: 0}}>
                    <div className="progress-fill" style={{width: '96%'}}></div>
                  </div>
                  <span style={{color: 'var(--secondary)', fontWeight: 600}}>96%</span>
                </div>
              </div>
              <div className="profile-item">
                <div className="profile-item-label">Assignment Completion</div>
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem'}}>
                  <div className="progress-bar" style={{flex: 1, margin: 0}}>
                    <div className="progress-fill" style={{width: '94%'}}></div>
                  </div>
                  <span style={{color: 'var(--secondary)', fontWeight: 600}}>94%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Tab */}
          <div className={`profile-tab-content ${activeTab === 'skills' ? 'active' : ''}`}>
            <div className="profile-section">
              <div className="profile-section-title">
                💻 Technical Skills
              </div>
              <div className="skill-item">
                <span className="skill-name">JavaScript</span>
                <div className="skill-level">
                  <div className="skill-progress" style={{width: '85%'}}></div>
                </div>
                <span className="skill-percentage">85%</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">React</span>
                <div className="skill-level">
                  <div className="skill-progress" style={{width: '80%'}}></div>
                </div>
                <span className="skill-percentage">80%</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">HTML/CSS</span>
                <div className="skill-level">
                  <div className="skill-progress" style={{width: '92%'}}></div>
                </div>
                <span className="skill-percentage">92%</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">Node.js</span>
                <div className="skill-level">
                  <div className="skill-progress" style={{width: '70%'}}></div>
                </div>
                <span className="skill-percentage">70%</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">Python</span>
                <div className="skill-level">
                  <div className="skill-progress" style={{width: '65%'}}></div>
                </div>
                <span className="skill-percentage">65%</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">SQL</span>
                <div className="skill-level">
                  <div className="skill-progress" style={{width: '75%'}}></div>
                </div>
                <span className="skill-percentage">75%</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">Git/GitHub</span>
                <div className="skill-level">
                  <div className="skill-progress" style={{width: '88%'}}></div>
                </div>
                <span className="skill-percentage">88%</span>
              </div>
            </div>

            <div className="profile-section">
              <div className="profile-section-title">
                🤝 Soft Skills
              </div>
              <div className="skill-item">
                <span className="skill-name">Communication</span>
                <div className="skill-level">
                  <div className="skill-progress" style={{width: '90%'}}></div>
                </div>
                <span className="skill-percentage">90%</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">Problem Solving</span>
                <div className="skill-level">
                  <div className="skill-progress" style={{width: '87%'}}></div>
                </div>
                <span className="skill-percentage">87%</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">Teamwork</span>
                <div className="skill-level">
                  <div className="skill-progress" style={{width: '93%'}}></div>
                </div>
                <span className="skill-percentage">93%</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">Time Management</span>
                <div className="skill-level">
                  <div className="skill-progress" style={{width: '82%'}}></div>
                </div>
                <span className="skill-percentage">82%</span>
              </div>
              <div className="skill-item">
                <span className="skill-name">Leadership</span>
                <div className="skill-level">
                  <div className="skill-progress" style={{width: '78%'}}></div>
                </div>
                <span className="skill-percentage">78%</span>
              </div>
            </div>

            <div className="profile-section">
              <div className="profile-section-title">
                🛠️ Tools & Technologies
              </div>
              <div style={{marginBottom: '1rem'}}>
                <span className="interest-tag">VS Code</span>
                <span className="interest-tag">Figma</span>
                <span className="interest-tag">Adobe Creative Suite</span>
                <span className="interest-tag">Docker</span>
                <span className="interest-tag">AWS</span>
                <span className="interest-tag">MongoDB</span>
                <span className="interest-tag">PostgreSQL</span>
                <span className="interest-tag">Postman</span>
                <span className="interest-tag">Slack</span>
                <span className="interest-tag">Trello</span>
                <span className="interest-tag">Webpack</span>
                <span className="interest-tag">Jest</span>
              </div>
            </div>
          </div>

          {/* Documents Tab */}
          <div className={`profile-tab-content ${activeTab === 'documents' ? 'active' : ''}`}>
            <div className="profile-section">
              <div className="profile-section-title">
                📄 Documents & Portfolio
              </div>
              
              <div className="document-item" onClick={() => downloadDocument('cv')}>
                <div className="document-icon">📄</div>
                <div className="document-info">
                  <div className="document-name">CV - Jamie Sullivan</div>
                  <div className="document-meta">Updated: 15 Mar 2025 • PDF • 2.1 MB</div>
                </div>
                <div style={{color: 'var(--primary)'}}>📥</div>
              </div>

              <div className="document-item" onClick={() => downloadDocument('portfolio')}>
                <div className="document-icon">🎨</div>
                <div className="document-info">
                  <div className="document-name">Digital Portfolio</div>
                  <div className="document-meta">Live Site • Updated: 20 Mar 2025</div>
                </div>
                <div style={{color: 'var(--primary)'}}>🔗</div>
              </div>

              <div className="document-item" onClick={() => downloadDocument('transcript')}>
                <div className="document-icon">🎓</div>
                <div className="document-info">
                  <div className="document-name">Academic Transcript</div>
                  <div className="document-meta">Year 1-2 • PDF • 1.3 MB</div>
                </div>
                <div style={{color: 'var(--primary)'}}>📥</div>
              </div>

              <div className="document-item" onClick={() => downloadDocument('certificates')}>
                <div className="document-icon">🏆</div>
                <div className="document-info">
                  <div className="document-name">Certifications Bundle</div>
                  <div className="document-meta">AWS, JavaScript, React • ZIP • 5.2 MB</div>
                </div>
                <div style={{color: 'var(--primary)'}}>📥</div>
              </div>

              <div className="document-item" onClick={() => downloadDocument('projects')}>
                <div className="document-icon">💻</div>
                <div className="document-info">
                  <div className="document-name">GitHub Projects</div>
                  <div className="document-meta">15 repositories • Public profile</div>
                </div>
                <div style={{color: 'var(--primary)'}}>🔗</div>
              </div>
            </div>

            <div className="profile-section">
              <div className="profile-section-title">
                📚 References
              </div>
              
              <div className="profile-item">
                <div className="profile-item-label">Academic Reference</div>
                <div className="profile-item-value">
                  <strong>Dr. Sarah Mitchell</strong><br/>
                  Senior Lecturer, Digital Technologies<br/>
                  ADA Manchester • s.mitchell@ada.ac.uk<br/>
                  +44 161 234 5678
                </div>
              </div>

              <div className="profile-item">
                <div className="profile-item-label">Industry Reference</div>
                <div className="profile-item-value">
                  <strong>Mark Thompson</strong><br/>
                  Senior Developer, TechFlow Digital<br/>
                  Previous Placement Supervisor<br/>
                  m.thompson@techflow.co.uk • +44 161 987 6543
                </div>
              </div>
            </div>

            <div className="profile-section">
              <div className="profile-section-title">
                ⚙️ Privacy Settings
              </div>
              
              <div className="profile-item">
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <div>
                    <div className="profile-item-label">Profile Visibility</div>
                    <div className="profile-item-value">Visible to placement partners</div>
                  </div>
                  <button className="btn btn-secondary" style={{padding: '0.5rem 1rem', fontSize: '0.8rem'}}>Edit</button>
                </div>
              </div>

              <div className="profile-item">
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <div>
                    <div className="profile-item-label">Contact Preferences</div>
                    <div className="profile-item-value">Email & platform notifications</div>
                  </div>
                  <button className="btn btn-secondary" style={{padding: '0.5rem 1rem', fontSize: '0.8rem'}}>Edit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePanel;