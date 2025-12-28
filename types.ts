
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  goal: string;
  imageUrl: string;
  link?: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  type: 'development' | 'education';
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
