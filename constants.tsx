
import React from 'react';
import { Project, Experience, SkillCategory } from './types';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Users, 
  Globe, 
  Database, 
  Layout, 
  Feather 
} from 'lucide-react';

export const SKILLS: SkillCategory[] = [
  {
    title: 'Frontend Mastery',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Framer Motion', 'Web Accessibility']
  },
  {
    title: 'Backend & Systems',
    skills: ['Node.js', 'PostgreSQL', 'Redis', 'GraphQL', 'System Architecture', 'Cloud Infrastructure']
  },
  {
    title: 'Tools of the Trade',
    skills: ['Git', 'Docker', 'CI/CD Pipelines', 'Figma', 'Jest', 'NeoVim']
  },
  {
    title: 'Human Elements',
    skills: ['Technical Pedagogy', 'Mentorship', 'Agile Leadership', 'Public Speaking', 'Empathy']
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'The Learning Engine',
    description: 'A revolutionary pedagogical platform for adaptive coding education.',
    longDescription: 'Developed a system that maps student progress and dynamically generates curriculum based on cognitive load theories.',
    techStack: ['Next.js', 'AI Integration', 'Tailwind', 'PostgreSQL'],
    goal: 'Democratize high-level engineering education by removing traditional barriers.',
    imageUrl: 'https://picsum.photos/seed/edu/800/600'
  },
  {
    id: '2',
    title: 'Chronos Architecture',
    description: 'A timeless component library designed for high-availability systems.',
    longDescription: 'Created a set of UI primitives that focus on structural integrity and future-proof design patterns.',
    techStack: ['TypeScript', 'Stitches', 'React', 'Storybook'],
    goal: 'Provide developers with building blocks that remain relevant for decades.',
    imageUrl: 'https://picsum.photos/seed/arch/800/600'
  },
  {
    id: '3',
    title: 'Impact Trace',
    description: 'Environmental data visualization for supply chain transparency.',
    longDescription: 'Built a real-time dashboard visualizing carbon footprint across global logistics networks.',
    techStack: ['D3.js', 'React', 'Node.js', 'AWS'],
    goal: 'Make invisible environmental costs visible to decision makers.',
    imageUrl: 'https://picsum.photos/seed/eco/800/600'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    role: 'Senior Software Engineer',
    organization: 'Horizon Systems',
    period: '2021 — Present',
    description: 'Leading the development of distributed systems and mentoring junior developers in clean architecture.',
    type: 'development'
  },
  {
    id: 'exp2',
    role: 'Lead Technical Educator',
    organization: 'Code Craft Academy',
    period: '2019 — 2021',
    description: 'Redesigned the full-stack curriculum, graduating over 500+ students into high-impact roles.',
    type: 'education'
  },
  {
    id: 'exp3',
    role: 'Full Stack Developer',
    organization: 'Lumina Soft',
    period: '2017 — 2019',
    description: 'Architected scalable web applications and internal tooling for enterprise clients.',
    type: 'development'
  }
];
