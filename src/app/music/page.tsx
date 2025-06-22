import Navigation from '@/components/Navigation';
import MusicSection from '@/components/MusicSection';

export default function Music() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <MusicSection />
      </div>
    </div>
  );
}