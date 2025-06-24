import Navigation from '@/components/Navigation';
import MusicSection from '@/components/MusicSection';

export default function Music() {
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        {isProduction ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Music</h1>
              <p className="text-xl text-gray-600">Coming Soon</p>
            </div>
          </div>
        ) : (
          <MusicSection />
        )}
      </div>
    </div>
  );
}