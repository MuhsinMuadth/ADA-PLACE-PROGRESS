// Reusable PlacementCard component

import React from 'react';
import { PlacementCardProps } from '../types';
import { getMatchScoreColors, handlePlacementCardClick } from '../utils';

const PlacementCard: React.FC<PlacementCardProps> = ({ 
  placement, 
  onViewDetail, 
  onPlacementCardClick = handlePlacementCardClick,
  showApplyButton = true,
  onApply
}) => {
  return (
    <div 
      className="placement-card" 
      onClick={onPlacementCardClick}
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
      {/* Featured/Urgent Badges */}
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
          <div style={{color: 'rgba(255,255,255,0.9)', fontSize: '1rem', fontWeight: '600'}}>
            {placement.role}
          </div>
        </div>
        <div 
          className="match-score" 
          style={{
            background: getMatchScoreColors(placement.matchScore),
            color: 'white',
            padding: '0.5rem 0.875rem',
            borderRadius: '20px',
            fontSize: '0.9rem',
            fontWeight: '700',
            border: '2px solid rgba(255,255,255,0.2)'
          }}
        >
          {placement.matchScore}% Match
        </div>
      </div>

      <div style={{marginBottom: '1rem'}}>
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
        {showApplyButton && (
          <button 
            className="btn btn-primary" 
            style={{flex: 1, padding: '0.75rem', fontWeight: '600'}}
            onClick={(e) => {
              e.stopPropagation();
              onApply?.(placement.id);
            }}
          >
            Apply Now
          </button>
        )}
        <button 
          className="btn btn-secondary" 
          style={{padding: '0.75rem 1rem', fontWeight: '600'}}
          onClick={(e) => {
            e.stopPropagation();
            onViewDetail(placement.id);
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default PlacementCard;
