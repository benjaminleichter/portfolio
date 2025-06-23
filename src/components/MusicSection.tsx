import { getMusicProjects } from '@/lib/projects';
import MusicCard from '@/components/MusicCard';

const MusicSection = () => {
  const projects = getMusicProjects();

  return (
    <section id="music" className="py-20 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Music Production
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Student projects and hobbyist creations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <MusicCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicSection;