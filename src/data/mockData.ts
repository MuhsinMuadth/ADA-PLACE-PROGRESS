// Mock data for the ADA Place & Progress platform

import { Placement, LoginCredentials, FilterOption, SectorOption } from '../types';

// Demo credentials for the prototype
export const validCredentials: LoginCredentials = {
  'jamie.sullivan@ada.ac.uk': {
    password: 'student123',
    user: {
      email: 'jamie.sullivan@ada.ac.uk',
      name: 'Jamie Sullivan',
      role: 'student'
    }
  },
  'admin@ada.ac.uk': {
    password: 'admin123',
    user: {
      email: 'admin@ada.ac.uk',
      name: 'Admin User',
      role: 'staff'
    }
  },
  'employer@company.com': {
    password: 'employer123',
    user: {
      email: 'employer@company.com',
      name: 'Employer User',
      role: 'employer'
    }
  }
};

// Placement data
export const placementData: Placement[] = [
  {
    id: 1,
    company: 'TechFlow Digital',
    role: 'Full-Stack Developer',
    location: 'Manchester',
    duration: '6 months',
    matchScore: 95,
    sector: 'technology',
    tags: ['React', 'Node.js', 'TypeScript', 'Remote'],
    salary: '£5,000',
    description: 'Build cutting-edge web applications with React and Node.js in a fast-growing startup environment.',
    urgent: false,
    featured: true,
    logo: '🚀',
    industry: 'Technology & Software Development',
    requirements: [
      'Strong foundation in JavaScript and web development',
      'Basic understanding of React or similar frontend frameworks',
      'Familiarity with Node.js and backend development concepts',
      'Knowledge of version control systems (Git)',
      'Good problem-solving and analytical skills'
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
    ],
    startDate: 'March 2025',
    workType: 'Hybrid'
  },
  {
    id: 2,
    company: 'HealthTech Solutions',
    role: 'Digital Health Developer',
    location: 'Birmingham',
    duration: '8 months',
    matchScore: 88,
    sector: 'healthcare',
    tags: ['Python', 'Django', 'Healthcare', 'Hybrid'],
    salary: '£6,000',
    description: 'Help digitize healthcare processes to improve patient outcomes using Python and modern frameworks.',
    urgent: false,
    featured: false,
    logo: '🏥',
    industry: 'Healthcare Technology',
    requirements: [
      'Basic knowledge of Python programming',
      'Interest in healthcare technology and digital transformation',
      'Understanding of database concepts',
      'Strong attention to detail and accuracy',
      'Ability to work with sensitive data responsibly'
    ],
    benefits: [
      'Exposure to cutting-edge healthcare technology',
      'Mentorship from healthcare and tech professionals',
      'Contribution to meaningful patient care improvements',
      'Professional development in regulated industry',
      'Competitive salary with performance bonuses'
    ],
    learningOutcomes: [
      'Develop expertise in Python and Django framework',
      'Understand healthcare data standards and compliance',
      'Learn about digital health solutions and their impact',
      'Gain experience in regulated software development',
      'Build skills in data security and privacy protection'
    ],
    companyValues: [
      'Patient-first approach to technology development',
      'Commitment to data security and privacy',
      'Innovation in healthcare delivery',
      'Collaborative partnership with healthcare providers'
    ],
    startDate: 'April 2025',
    workType: 'Hybrid'
  },
  {
    id: 3,
    company: 'GreenTech Innovations',
    role: 'Sustainability Data Analyst',
    location: 'Leeds',
    duration: '7 months',
    matchScore: 82,
    sector: 'sustainability',
    tags: ['Data Analysis', 'Python', 'Sustainability', 'On-site'],
    salary: '£6,500',
    description: 'Analyze environmental data to drive sustainable business decisions and green technology implementations.',
    urgent: true,
    featured: false,
    logo: '🌱',
    industry: 'Environmental Technology',
    requirements: [
      'Interest in environmental sustainability and data analysis',
      'Basic understanding of statistical concepts',
      'Familiarity with data visualization tools',
      'Strong analytical and problem-solving skills',
      'Passion for environmental conservation'
    ],
    benefits: [
      'Direct impact on environmental sustainability initiatives',
      'Training in advanced data analysis techniques',
      'Exposure to green technology innovations',
      'Professional development in emerging field',
      'Networking opportunities in sustainability sector'
    ],
    learningOutcomes: [
      'Master data analysis and visualization techniques',
      'Understand environmental impact measurement',
      'Learn about sustainable business practices',
      'Develop expertise in green technology solutions',
      'Build skills in communicating data insights to stakeholders'
    ],
    companyValues: [
      'Environmental stewardship and responsibility',
      'Data-driven decision making for sustainability',
      'Innovation in green technology solutions',
      'Collaboration for global environmental impact'
    ],
    startDate: 'February 2025',
    workType: 'On-site'
  }
];

// Filter options for placements
export const filterOptions: FilterOption[] = [
  { key: 'all', label: 'All Placements', icon: '🎯' },
  { key: 'featured', label: 'Featured', icon: '⭐' },
  { key: 'urgent', label: 'Urgent', icon: '🚨' },
  { key: 'remote', label: 'Remote', icon: '🏠' },
  { key: 'high-match', label: '90%+ Match', icon: '🎪' }
];

// Sector options for filtering
export const sectorOptions: SectorOption[] = [
  { key: 'all', label: 'All Sectors', icon: '🌐' },
  { key: 'technology', label: 'Technology', icon: '💻' },
  { key: 'healthcare', label: 'Healthcare', icon: '🏥' },
  { key: 'finance', label: 'Finance', icon: '💰' },
  { key: 'sustainability', label: 'Sustainability', icon: '🌱' },
  { key: 'education', label: 'Education', icon: '🎓' },
  { key: 'media', label: 'Media & Creative', icon: '🎨' }
];

// Get placement by ID
export const getPlacementById = (id: number): Placement | undefined => {
  return placementData.find(placement => placement.id === id);
};
