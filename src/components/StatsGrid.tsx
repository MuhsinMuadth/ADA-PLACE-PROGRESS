// Reusable StatsGrid component

import React from 'react';
import { StatsGridProps } from '../types';

const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  return (
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card" style={stat.color ? { background: stat.color } : {}}>
          <span className="stat-number" style={{color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>
            {stat.number}
          </span>
          <div className="stat-label">{stat.label}</div>
          {stat.subtitle && (
            <div style={{fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)', marginTop: '0.25rem'}}>
              {stat.subtitle}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
