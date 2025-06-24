export interface EngineeringProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  featured: boolean;
}

export interface MusicProject {
  id: string;
  title: string;
  description: string;
  genre: string;
  tools: string[];
  audioUrl?: string;
  spotifyUrl?: string;
  youtubeUrl?: string;
  featured: boolean;
  releaseDate: string;
  duration: string;
  projectType: 'Student Project' | 'Personal' | 'Collaboration' | 'Commercial';
}