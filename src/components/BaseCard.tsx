import Link from 'next/link';
import { ReactNode } from 'react';

interface BaseCardProps {
  href: string;
  featured?: boolean;
  title: string;
  description: string;
  tags: string[];
  links: Array<{ label: string; primary?: boolean }>;
  dateInfo: string;
  children?: ReactNode;
}

const BaseCard = ({ 
  href, 
  featured, 
  title, 
  description, 
  tags, 
  links, 
  dateInfo, 
  children 
}: BaseCardProps) => {
  return (
    <Link 
      href={href}
      className={`block bg-off-white border-2 border-black rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer ${
        featured ? 'border-4 border-black' : ''
      }`}
    >
      {featured && (
        <div className="flex items-center mb-2">
          <span className="bg-off-white border border-black text-black text-xs font-semibold px-2 py-1 rounded-full">
            Featured
          </span>
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>
      
      {children}
      
      <p className="text-gray-700 mb-4 leading-relaxed">
        {description}
      </p>
      
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-off-white border border-black text-black text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex space-x-4 mb-3">
        {links.map((link, index) => (
          <span 
            key={index}
            className={`font-medium text-sm ${
              link.primary ? 'text-black' : 'text-gray-600'
            }`}
          >
            {link.label} →
          </span>
        ))}
      </div>

      <div className="text-xs text-gray-500">
        {dateInfo}
      </div>
    </Link>
  );
};

export default BaseCard;