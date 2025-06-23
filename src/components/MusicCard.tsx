import { MusicProject } from '@/types/projects';
import Link from 'next/link';

interface MusicCardProps {
  project: MusicProject;
}

const MusicCard = ({ project }: MusicCardProps) => {
  return (
    <Link 
      href={`/music/${project.id}`}
      className={`block bg-off-white border-2 border-black rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer ${
        project.featured ? 'border-4 border-black' : ''
      }`}
    >
      {project.featured && (
        <div className="flex items-center mb-2">
          <span className="bg-off-white border border-black text-black text-xs font-semibold px-2 py-1 rounded-full">
            Featured
          </span>
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {project.title}
      </h3>
      
      <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
        <span className="font-medium">{project.genre}</span>
        <span>{project.duration}</span>
        <span className="bg-off-white border border-black px-2 py-1 rounded text-xs">
          {project.projectType}
        </span>
      </div>
      
      <p className="text-gray-700 mb-4 leading-relaxed">
        {project.description}
      </p>
      
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="px-3 py-1 bg-off-white border border-black text-black text-sm rounded-full"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div className="flex space-x-4 mb-3">
        {project.audioUrl && (
          <span className="text-black font-medium text-sm">
            Listen →
          </span>
        )}
        {project.spotifyUrl && (
          <span className="text-gray-600 font-medium text-sm">
            Spotify →
          </span>
        )}
        {project.youtubeUrl && (
          <span className="text-gray-600 font-medium text-sm">
            YouTube →
          </span>
        )}
      </div>

      <div className="text-xs text-gray-500">
        Released {project.releaseDate}
      </div>
    </Link>
  );
};

export default MusicCard;