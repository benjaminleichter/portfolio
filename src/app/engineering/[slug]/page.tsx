import ProjectDetailPage from '@/components/ProjectDetailPage';
import { getEngineeringProjects } from '@/lib/projects';
import { EngineeringProject } from '@/types/projects';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function EngineeringProjectDetail({ params }: Props) {
  const { slug } = await params;
  const projects = getEngineeringProjects();
  const project = projects.find((p: EngineeringProject) => p.id === slug);

  if (!project) {
    notFound();
  }

  const links = [];
  if (project.liveUrl) {
    links.push({
      url: project.liveUrl,
      label: 'View',
      colorClass: 'bg-blue-600 hover:bg-blue-700'
    });
  }

  return (
    <ProjectDetailPage
      backUrl="/engineering"
      backLabel="Back to Engineering Projects"
      backColorClass="text-blue-600 hover:text-blue-800"
      title={project.title}
      description={project.description}
      tags={project.technologies}
      tagColorClass="bg-blue-100 text-blue-800"
      backgroundClass="bg-off-white"
      featured={project.featured}
      featuredLabel="Featured Project"
      links={links}
      details={[]}
    />
  );
}

export async function generateStaticParams() {
  const projects = getEngineeringProjects();
  return projects.map((project: EngineeringProject) => ({
    slug: project.id,
  }));
}