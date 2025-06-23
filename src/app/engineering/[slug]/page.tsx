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

  const details = [
    {
      label: 'Duration',
      value: project.endDate ? `${project.startDate} - ${project.endDate}` : project.startDate
    }
  ];

  const links = [];
  if (project.liveUrl) {
    links.push({
      url: project.liveUrl,
      label: 'View Live Demo',
      colorClass: 'bg-blue-600 hover:bg-blue-700'
    });
  }
  if (project.githubUrl) {
    links.push({
      url: project.githubUrl,
      label: 'View on GitHub',
      colorClass: 'bg-gray-800 hover:bg-gray-900'
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
      details={details}
      featured={project.featured}
      featuredLabel="Featured Project"
      links={links}
    />
  );
}

export async function generateStaticParams() {
  const projects = getEngineeringProjects();
  return projects.map((project: EngineeringProject) => ({
    slug: project.id,
  }));
}