import ProjectDetailPage from '@/components/ProjectDetailPage';
import { getMusicProjects } from '@/lib/projects';
import { MusicProject } from '@/types/projects';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function MusicProjectDetail({ params }: Props) {
  const { slug } = await params;
  const projects = getMusicProjects();
  const project = projects.find((p: MusicProject) => p.id === slug);

  if (!project) {
    notFound();
  }

  const details = [
    { label: 'Genre', value: project.genre },
    { label: 'Duration', value: project.duration },
    { label: 'Release Date', value: project.releaseDate },
    { label: 'Project Type', value: project.projectType }
  ];

  const links = [];
  if (project.audioUrl) {
    links.push({
      url: project.audioUrl,
      label: 'Listen on SoundCloud',
      colorClass: 'bg-purple-600 hover:bg-purple-700'
    });
  }
  if (project.spotifyUrl) {
    links.push({
      url: project.spotifyUrl,
      label: 'Listen on Spotify',
      colorClass: 'bg-green-600 hover:bg-green-700'
    });
  }

  return (
    <ProjectDetailPage
      backUrl="/music"
      backLabel="Back to Music Projects"
      backColorClass="text-purple-600 hover:text-purple-800"
      title={project.title}
      description={project.description}
      tags={project.tools}
      tagColorClass="bg-purple-100 text-purple-800"
      backgroundClass="bg-gradient-to-br from-purple-50 to-pink-50"
      details={details}
      featured={project.featured}
      featuredLabel="Featured Track"
      links={links}
    />
  );
}

export async function generateStaticParams() {
  const projects = getMusicProjects();
  return projects.map((project: MusicProject) => ({
    slug: project.id,
  }));
}