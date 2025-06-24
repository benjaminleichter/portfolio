import { EngineeringProject } from '@/types/projects';
import BaseCard from './BaseCard';

interface ProjectCardProps {
  project: EngineeringProject;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const links = [];
  if (project.liveUrl) {
    links.push({ label: 'View Live', primary: true });
  }

  return (
    <BaseCard
      href={`/engineering/${project.id}`}
      featured={project.featured}
      title={project.title}
      description={project.description}
      tags={project.technologies}
      links={links}
    />
  );
};

export default ProjectCard;