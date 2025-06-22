import { MusicProject } from '@/types/projects';

interface MusicCardProps {
  project: MusicProject;
}

const MusicCard = ({ project }: MusicCardProps) => {
  return (
    <div className={`bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 hover:shadow-lg transition-shadow ${
      project.featured ? 'ring-2 ring-purple-200 bg-gradient-to-br from-purple-100 to-pink-100' : ''
    }`}>
      {project.featured && (
        <div className="flex items-center mb-2">
          <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full">
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
        <span className="bg-gray-100 px-2 py-1 rounded text-xs">
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
              className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      <div className="flex space-x-4 mb-3">
        {project.audioUrl && (
          <a
            href={project.audioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-800 font-medium text-sm"
          >
            Listen →
          </a>
        )}
        {project.spotifyUrl && (
          <a
            href={project.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-800 font-medium text-sm"
          >
            Spotify →
          </a>
        )}
        {project.youtubeUrl && (
          <a
            href={project.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-800 font-medium text-sm"
          >
            YouTube →
          </a>
        )}
      </div>

      <div className="text-xs text-gray-500">
        Released {project.releaseDate}
      </div>
    </div>
  );
};

export default MusicCard;