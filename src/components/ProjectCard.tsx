import { EngineeringProject } from '@/types/projects';
import Link from 'next/link';

interface ProjectCardProps {
  project: EngineeringProject;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link 
      href={`/engineering/${project.id}`}
      className={`block bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer ${
        project.featured ? 'ring-2 ring-blue-200 bg-blue-50' : ''
      }`}
    >
      {project.featured && (
        <div className="flex items-center mb-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
            Featured
          </span>
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {project.title}
      </h3>
      
      <p className="text-gray-700 mb-4 leading-relaxed">
        {project.description}
      </p>
      
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex space-x-4 mb-3">
        {project.liveUrl && (
          <span className="text-blue-600 font-medium text-sm">
            View Live →
          </span>
        )}
        {project.githubUrl && (
          <span className="text-gray-600 font-medium text-sm">
            GitHub →
          </span>
        )}
      </div>

      <div className="text-xs text-gray-500">
        {project.startDate} {project.endDate && `- ${project.endDate}`}
      </div>
    </Link>
  );
};

export default ProjectCard;