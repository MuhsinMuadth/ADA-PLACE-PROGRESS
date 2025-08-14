// Custom hooks for the ADA Place & Progress platform

import { useState, useCallback, useMemo } from 'react';
import { User, Page, Placement } from '../types';
import { validCredentials } from '../data/mockData';
import { filterPlacements } from '../utils';

/**
 * Hook for managing user authentication state
 */
export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loginError, setLoginError] = useState<string>('');

  const handleLogin = useCallback((email: string, password: string) => {
    const credentials = validCredentials[email];
    
    if (credentials && credentials.password === password) {
      setUser(credentials.user);
      setLoginError('');
      return true;
    } else {
      setLoginError('Invalid email or password. Please try again or use the demo account.');
      return false;
    }
  }, []);

  const handleLogout = useCallback(() => {
    setUser(null);
    setLoginError('');
  }, []);

  return {
    user,
    loginError,
    handleLogin,
    handleLogout,
    isAuthenticated: !!user
  };
};

/**
 * Hook for managing navigation state
 */
export const useNavigation = () => {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [selectedPlacementId, setSelectedPlacementId] = useState<number>(1);

  const handleNavigate = useCallback((page: Page) => {
    setCurrentPage(page);
  }, []);

  const handleViewPlacementDetail = useCallback((placementId: number) => {
    setSelectedPlacementId(placementId);
    setCurrentPage('placement-detail');
  }, []);

  const handleBackToPlacementsList = useCallback(() => {
    setCurrentPage('placements');
  }, []);

  return {
    currentPage,
    selectedPlacementId,
    handleNavigate,
    handleViewPlacementDetail,
    handleBackToPlacementsList,
    setCurrentPage
  };
};

/**
 * Hook for managing modal states
 */
export const useModals = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);

  const openProfile = useCallback(() => setIsProfileOpen(true), []);
  const closeProfile = useCallback(() => setIsProfileOpen(false), []);
  const openModal = useCallback(() => setIsModalOpen(true), []);
  const closeModal = useCallback(() => setIsModalOpen(false), []);
  const openApplicationModal = useCallback(() => setIsApplicationModalOpen(true), []);
  const closeApplicationModal = useCallback(() => setIsApplicationModalOpen(false), []);

  return {
    isProfileOpen,
    isModalOpen,
    isApplicationModalOpen,
    openProfile,
    closeProfile,
    openModal,
    closeModal,
    openApplicationModal,
    closeApplicationModal
  };
};

/**
 * Hook for managing placement filtering and search
 */
export const usePlacementFilters = (placements: Placement[]) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('all');

  const filteredPlacements = useMemo(() => {
    return filterPlacements(placements, searchTerm, selectedSector, activeFilter);
  }, [placements, searchTerm, selectedSector, activeFilter]);

  const resetFilters = useCallback(() => {
    setActiveFilter('all');
    setSearchTerm('');
    setSelectedSector('all');
  }, []);

  return {
    activeFilter,
    searchTerm,
    selectedSector,
    filteredPlacements,
    setActiveFilter,
    setSearchTerm,
    setSelectedSector,
    resetFilters
  };
};
