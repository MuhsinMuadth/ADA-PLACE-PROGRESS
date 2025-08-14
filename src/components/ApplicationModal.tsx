import React, { useState } from 'react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  placementId: number;
  placementTitle?: string;
  companyName?: string;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({ 
  isOpen, 
  onClose, 
  placementId, 
  placementTitle = "Full-Stack Developer",
  companyName = "TechFlow Digital"
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: 'Jamie',
    lastName: 'Sullivan',
    email: 'jamie.sullivan@ada.ac.uk',
    phone: '+44 7123 456789',
    
    // Academic Information
    currentYear: 'Year 2',
    tLevelSubject: 'Digital Production, Design and Development',
    expectedGraduation: '2025',
    currentGrade: 'Distinction*',
    
    // Experience & Skills
    relevantExperience: '',
    technicalSkills: ['JavaScript', 'React', 'HTML/CSS'],
    portfolioUrl: 'https://github.com/jamiesullivan',
    cvFile: null as File | null,
    
    // Motivation
    whyInterested: '',
    careerGoals: '',
    availability: 'September 2025',
    
    // Additional
    additionalInfo: '',
    agreesToTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 4;

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      updateFormData('cvFile', file);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after showing success message
    setTimeout(() => {
      setIsSubmitted(false);
      setCurrentStep(1);
      onClose();
    }, 3000);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h3 style={{ color: 'var(--dark)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              👤 Personal Information
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--dark)' }}>
                  First Name *
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => updateFormData('firstName', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid rgba(0,0,0,0.1)',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--dark)' }}>
                  Last Name *
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => updateFormData('lastName', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid rgba(0,0,0,0.1)',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--dark)' }}>
                Email Address *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid rgba(0,0,0,0.1)',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--dark)' }}>
                Phone Number *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid rgba(0,0,0,0.1)',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h3 style={{ color: 'var(--dark)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              🎓 Academic Information
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--dark)' }}>
                  Current Year *
                </label>
                <select
                  value={formData.currentYear}
                  onChange={(e) => updateFormData('currentYear', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid rgba(0,0,0,0.1)',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                >
                  <option value="Year 1">Year 1</option>
                  <option value="Year 2">Year 2</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--dark)' }}>
                  Expected Graduation *
                </label>
                <input
                  type="text"
                  value={formData.expectedGraduation}
                  onChange={(e) => updateFormData('expectedGraduation', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '2px solid rgba(0,0,0,0.1)',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--dark)' }}>
                T-Level Subject *
              </label>
              <select
                value={formData.tLevelSubject}
                onChange={(e) => updateFormData('tLevelSubject', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid rgba(0,0,0,0.1)',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              >
                <option value="Digital Production, Design and Development">Digital Production, Design and Development</option>
                <option value="Health and Healthcare Science">Health and Healthcare Science</option>
                <option value="Design, Surveying and Planning for Construction">Design, Surveying and Planning for Construction</option>
                <option value="Engineering and Manufacturing">Engineering and Manufacturing</option>
              </select>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--dark)' }}>
                Current Grade
              </label>
              <select
                value={formData.currentGrade}
                onChange={(e) => updateFormData('currentGrade', e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid rgba(0,0,0,0.1)',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              >
                <option value="">Select current grade</option>
                <option value="Distinction*">Distinction*</option>
                <option value="Distinction">Distinction</option>
                <option value="Merit">Merit</option>
                <option value="Pass">Pass</option>
                <option value="In Progress">In Progress</option>
              </select>
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h3 style={{ color: 'var(--dark)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              💼 Experience & Portfolio
            </h3>
            
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--dark)' }}>
                Relevant Experience
              </label>
              <textarea
                value={formData.relevantExperience}
                onChange={(e) => updateFormData('relevantExperience', e.target.value)}
                placeholder="Describe any relevant work experience, projects, or internships..."
                rows={4}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid rgba(0,0,0,0.1)',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--dark)' }}>
                Technical Skills
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                {formData.technicalSkills.map((skill, index) => (
                  <span key={index} style={{
                    background: 'var(--primary)',
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '15px',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    {skill}
                    <button
                      type="button"
                      onClick={() => {
                        const newSkills = formData.technicalSkills.filter((_, i) => i !== index);
                        updateFormData('technicalSkills', newSkills);
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'white',
                        cursor: 'pointer',
                        fontSize: '0.8rem'
                      }}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <input
                type="text"
                placeholder="Add a skill and press Enter"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    const value = e.currentTarget.value.trim();
                    if (value && !formData.technicalSkills.includes(value)) {
                      updateFormData('technicalSkills', [...formData.technicalSkills, value]);
                      e.currentTarget.value = '';
                    }
                  }
                }}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid rgba(0,0,0,0.1)',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--dark)' }}>
                Portfolio/GitHub URL
              </label>
              <input
                type="url"
                value={formData.portfolioUrl}
                onChange={(e) => updateFormData('portfolioUrl', e.target.value)}
                placeholder="https://github.com/yourname or your portfolio URL"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid rgba(0,0,0,0.1)',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--dark)' }}>
                Upload CV *
              </label>
              <div style={{
                border: '2px dashed rgba(0,0,0,0.2)',
                borderRadius: '8px',
                padding: '2rem',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileUpload}
                  style={{ display: 'none' }}
                  id="cv-upload"
                />
                <label htmlFor="cv-upload" style={{ cursor: 'pointer' }}>
                  {formData.cvFile ? (
                    <div>
                      <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📄</div>
                      <div style={{ color: 'var(--primary)', fontWeight: '600' }}>
                        {formData.cvFile.name}
                      </div>
                      <div style={{ fontSize: '0.9rem', color: 'rgba(0,0,0,0.6)' }}>
                        Click to replace
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📎</div>
                      <div style={{ color: 'var(--primary)', fontWeight: '600' }}>
                        Click to upload your CV
                      </div>
                      <div style={{ fontSize: '0.9rem', color: 'rgba(0,0,0,0.6)' }}>
                        PDF, DOC, or DOCX files accepted
                      </div>
                    </div>
                  )}
                </label>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <h3 style={{ color: 'var(--dark)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              💭 Motivation & Availability
            </h3>
            
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--dark)' }}>
                Why are you interested in this placement? *
              </label>
              <textarea
                value={formData.whyInterested}
                onChange={(e) => updateFormData('whyInterested', e.target.value)}
                placeholder="Explain what attracts you to this role and company..."
                rows={4}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid rgba(0,0,0,0.1)',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--dark)' }}>
                Career Goals
              </label>
              <textarea
                value={formData.careerGoals}
                onChange={(e) => updateFormData('careerGoals', e.target.value)}
                placeholder="What are your career aspirations after completing this placement?"
                rows={3}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid rgba(0,0,0,0.1)',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--dark)' }}>
                Availability *
              </label>
              <input
                type="text"
                value={formData.availability}
                onChange={(e) => updateFormData('availability', e.target.value)}
                placeholder="When can you start this placement?"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid rgba(0,0,0,0.1)',
                  borderRadius: '8px',
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--dark)' }}>
                Additional Information
              </label>
              <textarea
                value={formData.additionalInfo}
                onChange={(e) => updateFormData('additionalInfo', e.target.value)}
                placeholder="Any additional information you'd like to share..."
                rows={3}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '2px solid rgba(0,0,0,0.1)',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
              />
            </div>

            <div style={{ 
              background: 'rgba(99,102,241,0.1)', 
              border: '2px solid rgba(99,102,241,0.2)', 
              borderRadius: '8px', 
              padding: '1rem',
              marginBottom: '1rem'
            }}>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={formData.agreesToTerms}
                  onChange={(e) => updateFormData('agreesToTerms', e.target.checked)}
                  style={{ marginTop: '0.25rem' }}
                />
                <span style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>
                  I confirm that the information provided is accurate and I agree to the terms and conditions of the placement program. I understand that ADA will share my application details with the employer. *
                </span>
              </label>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal active" style={{ zIndex: 1000 }}>
      <div className="modal-content" style={{ maxWidth: '600px', maxHeight: '90vh', overflow: 'auto' }}>
        {isSubmitted ? (
          <div style={{ textAlign: 'center', padding: '2rem', position: 'relative' }}>
            <button 
              onClick={() => {
                setIsSubmitted(false);
                setCurrentStep(1);
                onClose();
              }}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(0,0,0,0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '1.2rem',
                color: 'rgba(0,0,0,0.6)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0,0,0,0.1)';
              }}
            >
              ×
            </button>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
            <h2 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Application Submitted!</h2>
            <p style={{ color: 'var(--text)', fontSize: '1.1rem', marginBottom: '1rem' }}>
              Thank you for applying to <strong>{placementTitle}</strong> at <strong>{companyName}</strong>.
            </p>
            <p style={{ color: 'rgba(0,0,0,0.7)', fontSize: '1rem' }}>
              We'll review your application and get back to you within 5 business days.
            </p>
            <div style={{ 
              background: 'rgba(16,185,129,0.1)', 
              border: '2px solid rgba(16,185,129,0.3)', 
              borderRadius: '8px', 
              padding: '1rem',
              marginTop: '1.5rem'
            }}>
              <div style={{ fontWeight: '600', color: 'var(--secondary)', marginBottom: '0.5rem' }}>
                What happens next?
              </div>
              <ul style={{ textAlign: 'left', color: 'rgba(0,0,0,0.8)' }}>
                <li>Application review by {companyName}</li>
                <li>Initial screening call (if shortlisted)</li>
                <li>Technical interview or assessment</li>
                <li>Final interview and placement offer</li>
              </ul>
            </div>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
              <div>
                <h2 style={{ color: 'var(--dark)', margin: 0, fontSize: '1.5rem' }}>
                  Apply to {placementTitle}
                </h2>
                <p style={{ color: 'rgba(0,0,0,0.7)', margin: '0.25rem 0 0 0' }}>
                  at {companyName}
                </p>
              </div>
              <button className="modal-close" onClick={onClose} style={{ fontSize: '1.5rem' }}>
                &times;
              </button>
            </div>

            {/* Progress Indicator */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                {Array.from({ length: totalSteps }, (_, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: '4px',
                      background: i < currentStep ? 'var(--primary)' : 'rgba(0,0,0,0.2)',
                      marginRight: i < totalSteps - 1 ? '0.5rem' : 0,
                      borderRadius: '2px',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>
              <div style={{ textAlign: 'center', fontSize: '0.9rem', color: 'rgba(0,0,0,0.6)' }}>
                Step {currentStep} of {totalSteps}
              </div>
            </div>

            {/* Form Content */}
            <div style={{ marginBottom: '2rem' }}>
              {renderStep()}
            </div>

            {/* Navigation Buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem' }}>
              <button
                type="button"
                onClick={() => currentStep > 1 ? setCurrentStep(prev => prev - 1) : onClose()}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'rgba(0,0,0,0.1)',
                  border: '2px solid rgba(0,0,0,0.2)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  color: 'var(--dark)'
                }}
              >
                {currentStep > 1 ? '← Previous' : 'Cancel'}
              </button>

              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep(prev => prev + 1)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    background: 'var(--primary)',
                    border: 'none',
                    borderRadius: '8px',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: '600'
                  }}
                >
                  Next →
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!formData.agreesToTerms || isSubmitting}
                  style={{
                    padding: '0.75rem 2rem',
                    background: formData.agreesToTerms && !isSubmitting ? 'var(--secondary)' : 'rgba(0,0,0,0.3)',
                    border: 'none',
                    borderRadius: '8px',
                    color: 'white',
                    cursor: formData.agreesToTerms && !isSubmitting ? 'pointer' : 'not-allowed',
                    fontSize: '1rem',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div style={{
                        width: '20px',
                        height: '20px',
                        border: '2px solid rgba(255,255,255,0.3)',
                        borderTop: '2px solid white',
                        borderRadius: '50%',
                        animation: 'spin 1s linear infinite'
                      }} />
                      Submitting...
                    </>
                  ) : (
                    <>🚀 Submit Application</>
                  )}
                </button>
              )}
            </div>
          </>
        )}
      </div>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default ApplicationModal;
