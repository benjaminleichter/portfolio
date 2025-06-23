import { MusicProject } from '@/types/projects';
import BaseCard from './BaseCard';

interface MusicCardProps {
  project: MusicProject;
}

const MusicCard = ({ project }: MusicCardProps) => {
  const links = [];
  if (project.audioUrl) {
    links.push({ label: 'Listen', primary: true });
  }
  if (project.spotifyUrl) {
    links.push({ label: 'Spotify' });
  }
  if (project.youtubeUrl) {
    links.push({ label: 'YouTube' });
  }

  return (
    <BaseCard
      href={`/music/${project.id}`}
      featured={project.featured}
      title={project.title}
      description={project.description}
      tags={project.tools}
      links={links}
      dateInfo={`Released ${project.releaseDate}`}
    >
      <div className="flex items-center gap-4 mb-1 text-sm text-gray-600">
        <span className="font-medium">{project.genre}</span>
        <span>{project.duration}</span>
        <span className="bg-off-white border border-black px-2 py-1 rounded text-xs">
          {project.projectType}
        </span>
      </div>
    </BaseCard>
  );
};

export default MusicCard;