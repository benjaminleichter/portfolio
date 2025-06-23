import { getEngineeringProjects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';

const EngineeringSection = () => {
  const projects = getEngineeringProjects();

  return (
    <section id="engineering" className="py-20 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Software Engineering
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional projects and technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringSection;