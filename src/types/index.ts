// Shared types and interfaces for the ADA Place & Progress platform

export type Page = 'dashboard' | 'placements' | 'placement-detail' | 'progress' | 'analytics';

export type UserRole = 'student' | 'employer' | 'staff';

export type UserType = 'student' | 'employer' | 'staff';

export interface User {
  email: string;
  name: string;
  role: UserRole;
}

export interface Placement {
  id: number;
  company: string;
  role: string;
  location: string;
  duration: string;
  matchScore: number;
  sector: string;
  tags: string[];
  salary: string;
  description: string;
  urgent?: boolean;
  featured?: boolean;
  logo?: string;
  industry?: string;
  requirements?: string[];
  benefits?: string[];
  learningOutcomes?: string[];
  companyValues?: string[];
  startDate?: string;
  workType?: string;
}

export interface StatCard {
  number: string | number;
  label: string;
  subtitle?: string;
  color?: string;
}

export interface DashboardProps {
  onOpenModal: () => void;
  onViewPlacementDetail: (placementId: number) => void;
}

export interface PlacementsProps {
  onViewPlacementDetail: (placementId: number) => void;
}

export interface PlacementDetailProps {
  placementId: number;
  onBack: () => void;
  onOpenApplicationModal: (placementId: number) => void;
}

export interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onOpenProfile: () => void;
  onLogout: () => void;
}

export interface FilterOption {
  key: string;
  label: string;
  icon: string;
}

export interface SectorOption {
  key: string;
  label: string;
  icon: string;
}

export interface TabOption {
  key: string;
  label: string;
  icon: string;
}

export interface PlacementCardProps {
  placement: Placement;
  onViewDetail: (placementId: number) => void;
  onPlacementCardClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  showApplyButton?: boolean;
  onApply?: (placementId: number) => void;
}

export interface StatsGridProps {
  stats: StatCard[];
}

export interface LoginCredentials {
  [email: string]: {
    password: string;
    user: User;
  };
}
