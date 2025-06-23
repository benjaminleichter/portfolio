import Navigation from '@/components/Navigation';
import Link from 'next/link';

interface DetailItem {
  label: string;
  value: string;
}

interface ProjectDetailPageProps {
  backUrl: string;
  backLabel: string;
  backColorClass: string;
  title: string;
  description: string;
  tags: string[];
  tagColorClass: string;
  backgroundClass: string;
  details: DetailItem[];
  featured?: boolean;
  featuredLabel: string;
  links: Array<{
    url: string;
    label: string;
    colorClass: string;
  }>;
}

const ProjectDetailPage = ({
  backUrl,
  backLabel,
  backColorClass,
  title,
  description,
  tags,
  tagColorClass,
  backgroundClass,
  details,
  featured,
  featuredLabel,
  links
}: ProjectDetailPageProps) => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            href={backUrl}
            className={`${backColorClass} mb-8 inline-flex items-center`}
          >
            ← {backLabel}
          </Link>
          
          <div className={`${backgroundClass} rounded-lg shadow-lg p-8`}>
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{title}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="md:col-span-2">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed mb-6">{description}</p>
                
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {tags.length > 0 && (tags[0].includes('React') || tags[0].includes('Next') ? 'Technologies' : 'Tools Used')}
                </h2>
                <div className="flex flex-wrap gap-2 mb-6">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 ${tagColorClass} rounded-full text-sm font-medium`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {details.some(d => d.label === 'Genre') ? 'Track Details' : 'Project Details'}
                </h2>
                <div className="space-y-3">
                  {details.map((detail, index) => (
                    <div key={index}>
                      <span className="font-medium text-gray-900">{detail.label}:</span>
                      <p className="text-gray-700">{detail.value}</p>
                    </div>
                  ))}
                  
                  {featured && (
                    <div>
                      <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm font-medium">
                        {featuredLabel}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-6 py-3 ${link.colorClass} text-white rounded-lg font-medium transition-colors`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
