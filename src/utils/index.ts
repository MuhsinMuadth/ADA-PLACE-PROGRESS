// Utility functions for the ADA Place & Progress platform

import { Placement } from '../types';

/**
 * Handles the visual feedback when a placement card is clicked
 */
export const handlePlacementCardClick = (e: React.MouseEvent<HTMLDivElement>, transform = 'translateX(15px)') => {
  if (!(e.target as HTMLElement).classList.contains('btn')) {
    const card = e.currentTarget;
    card.style.transform = transform;
    setTimeout(() => {
      card.style.transform = '';
    }, 200);
  }
};

/**
 * Filters placements based on search term, sector, and active filter
 */
export const filterPlacements = (
  placements: Placement[],
  searchTerm: string,
  selectedSector: string,
  activeFilter: string
): Placement[] => {
  return placements.filter(placement => {
    const matchesSearch = placement.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         placement.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         placement.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesSector = selectedSector === 'all' || placement.sector === selectedSector;
    
    const matchesFilter = (() => {
      switch (activeFilter) {
        case 'featured':
          return placement.featured === true;
        case 'urgent':
          return placement.urgent === true;
        case 'remote':
          return placement.tags.some(tag => tag.toLowerCase().includes('remote'));
        case 'high-match':
          return placement.matchScore >= 90;
        default:
          return true;
      }
    })();
    
    return matchesSearch && matchesSector && matchesFilter;
  });
};

/**
 * Formats salary string for display
 */
export const formatSalary = (salary: string): string => {
  return salary.replace(/£(\d+),?(\d+)/g, '£$1,$2');
};

/**
 * Gets the gradient colors for match score badges
 */
export const getMatchScoreColors = (score: number): string => {
  if (score >= 95) return 'linear-gradient(45deg, var(--secondary), #059669)';
  if (score >= 90) return 'linear-gradient(45deg, var(--primary), var(--primary-dark))';
  if (score >= 85) return 'linear-gradient(45deg, var(--accent), #f97316)';
  return 'linear-gradient(45deg, #6b7280, #4b5563)';
};

/**
 * Validates email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Capitalizes first letter of each word
 */
export const capitalizeWords = (str: string): string => {
  return str.replace(/\b\w/g, l => l.toUpperCase());
};

/**
 * Truncates text to specified length with ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
};

/**
 * Calculates completion percentage
 */
export const calculateCompletionPercentage = (completed: number, total: number): number => {
  return Math.round((completed / total) * 100);
};
