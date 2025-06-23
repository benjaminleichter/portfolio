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
  if (project.githubUrl) {
    links.push({ label: 'GitHub' });
  }

  const dateInfo = project.endDate 
    ? `${project.startDate} - ${project.endDate}`
    : project.startDate;

  return (
    <BaseCard
      href={`/engineering/${project.id}`}
      featured={project.featured}
      title={project.title}
      description={project.description}
      tags={project.technologies}
      links={links}
      dateInfo={dateInfo}
    />
  );
};

export default ProjectCard;