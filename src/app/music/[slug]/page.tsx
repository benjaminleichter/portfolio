import Navigation from '@/components/Navigation';
import { getMusicProjects } from '@/lib/projects';
import { MusicProject } from '@/types/projects';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface Props {
  params: {
    slug: string;
  };
}

export default function MusicProjectDetail({ params }: Props) {
  const projects = getMusicProjects();
  const project = projects.find((p: MusicProject) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            href="/music" 
            className="text-purple-600 hover:text-purple-800 mb-8 inline-flex items-center"
          >
            ← Back to Music Projects
          </Link>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{project.title}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="md:col-span-2">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed mb-6">{project.description}</p>
                
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Tools Used</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Track Details</h2>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-gray-900">Genre:</span>
                    <p className="text-gray-700">{project.genre}</p>
                  </div>
                  
                  <div>
                    <span className="font-medium text-gray-900">Duration:</span>
                    <p className="text-gray-700">{project.duration}</p>
                  </div>
                  
                  <div>
                    <span className="font-medium text-gray-900">Release Date:</span>
                    <p className="text-gray-700">{project.releaseDate}</p>
                  </div>
                  
                  <div>
                    <span className="font-medium text-gray-900">Project Type:</span>
                    <p className="text-gray-700">{project.projectType}</p>
                  </div>
                  
                  {project.featured && (
                    <div>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm font-medium">
                        Featured Track
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              {project.audioUrl && (
                <a
                  href={project.audioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
                >
                  Listen on SoundCloud
                </a>
              )}
              {project.spotifyUrl && (
                <a
                  href={project.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  Listen on Spotify
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
  const projects = getMusicProjects();
  return projects.map((project: MusicProject) => ({
    slug: project.id,
  }));
}