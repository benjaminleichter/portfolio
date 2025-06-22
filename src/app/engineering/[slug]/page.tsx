import Navigation from '@/components/Navigation';
import { getEngineeringProjects } from '@/lib/projects';
import { EngineeringProject } from '@/types/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';

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

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            href="/engineering" 
            className="text-blue-600 hover:text-blue-800 mb-8 inline-flex items-center"
          >
            ← Back to Engineering Projects
          </Link>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{project.title}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="md:col-span-2">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed mb-6">{project.description}</p>
                
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Technologies</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Project Details</h2>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-gray-900">Duration:</span>
                    <p className="text-gray-700">{project.startDate} - {project.endDate}</p>
                  </div>
                  
                  {project.featured && (
                    <div>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm font-medium">
                        Featured Project
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  View Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 transition-colors"
                >
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const projects = getEngineeringProjects();
  return projects.map((project: EngineeringProject) => ({
    slug: project.id,
  }));
}