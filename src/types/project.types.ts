export type ProjectStatus = 'completed' | 'in-progress';

export interface Project {
  id: string;
  title: string;
  status: ProjectStatus;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
}
