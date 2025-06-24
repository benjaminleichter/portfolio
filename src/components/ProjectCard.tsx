import { EngineeringProject } from '@/types/projects';
import BaseCard from './BaseCard';

interface ProjectCardProps {
  project: EngineeringProject;
}

const ProjectCard = ({ project }: ProjectCardProps) => (
  <BaseCard
    href={project.liveUrl}
    external={true}
    featured={project.featured}
    title={project.title}
    description={project.description}
    tags={project.technologies}
    links={[]}
  />
);

export default ProjectCard;