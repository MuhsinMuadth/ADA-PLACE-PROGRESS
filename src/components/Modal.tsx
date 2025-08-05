import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, currentPage }) => {
  const renderModalContent = () => {
    if (currentPage === 'progress') {
      return (
        <>
          <h2 style={{color: 'var(--dark)', marginBottom: '1rem'}}>Detailed Progress Report</h2>
          <div style={{color: 'var(--text)'}}>
            <h3>Week 8 Summary - WebDev Corp</h3>
            <p><strong>Placement Track:</strong> Frontend Development</p>
            <p><strong>Supervisor:</strong> Mark Thompson</p>
            
            <h4 style={{marginTop: '1.5rem', color: 'var(--primary)'}}>Weekly Achievements</h4>
            <ul>
              <li>Successfully implemented responsive design for client project</li>
              <li>Led presentation on accessibility best practices</li>
              <li>Completed advanced JavaScript certification</li>
              <li>Collaborated effectively with senior development team</li>
            </ul>

            <h4 style={{marginTop: '1.5rem', color: 'var(--primary)'}}>Areas of Growth</h4>
            <ul>
              <li>React component optimization techniques</li>
              <li>Advanced state management patterns</li>
              <li>Cross-browser compatibility testing</li>
            </ul>

            <h4 style={{marginTop: '1.5rem', color: 'var(--primary)'}}>Next Week's Focus</h4>
            <ul>
              <li>Begin work on final capstone project</li>
              <li>Shadow senior developer for backend exposure</li>
              <li>Prepare mid-placement presentation</li>
            </ul>
          </div>
        </>
      );
    } else {
      return (
        <>
          <h2 style={{color: 'var(--dark)', marginBottom: '1rem'}}>Placement Progress Report</h2>
          <div style={{color: 'var(--text)'}}>
            <h3>Emma Thompson - WebDev Corp</h3>
            <p><strong>Placement Period:</strong> Week 8 of 12</p>
            <p><strong>Track:</strong> Frontend Development</p>
            
            <h4 style={{marginTop: '1.5rem', color: 'var(--primary)'}}>Performance Metrics</h4>
            <ul>
              <li>Technical Skills: 4.2/5 - Excellent progress with React components</li>
              <li>Communication: 4.5/5 - Proactive in team meetings</li>
              <li>Problem Solving: 4.0/5 - Shows strong analytical thinking</li>
              <li>Initiative: 4.3/5 - Regularly suggests improvements</li>
            </ul>

            <h4 style={{marginTop: '1.5rem', color: 'var(--primary)'}}>Recent Achievements</h4>
            <ul>
              <li>Successfully implemented responsive design for client project</li>
              <li>Led presentation on accessibility best practices</li>
              <li>Completed advanced JavaScript certification</li>
            </ul>

            <h4 style={{marginTop: '1.5rem', color: 'var(--primary)'}}>Next Steps</h4>
            <ul>
              <li>Begin work on final capstone project</li>
              <li>Shadow senior developer for backend exposure</li>
              <li>Prepare for potential permanent role discussion</li>
            </ul>
          </div>
        </>
      );
    }
  };

  return (
    <div className={`modal ${isOpen ? 'active' : ''}`}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        {renderModalContent()}
      </div>
    </div>
  );
};

export default Modal;