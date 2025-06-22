import { EngineeringProject, MusicProject } from '@/types/projects';
import engineeringData from '@/data/engineering-projects.json';
import musicData from '@/data/music-projects.json';

export function getEngineeringProjects(): EngineeringProject[] {
  return engineeringData as EngineeringProject[];
}

export function getMusicProjects(): MusicProject[] {  
  return musicData as MusicProject[];
}

export function getFeaturedEngineeringProjects(): EngineeringProject[] {
  return getEngineeringProjects().filter(project => project.featured);
}

export function getFeaturedMusicProjects(): MusicProject[] {
  return getMusicProjects().filter(project => project.featured);
}

export function getEngineeringProjectById(id: string): EngineeringProject | undefined {
  return getEngineeringProjects().find(project => project.id === id);
}

export function getMusicProjectById(id: string): MusicProject | undefined {
  return getMusicProjects().find(project => project.id === id);
}