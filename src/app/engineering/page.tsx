import Navigation from '@/components/Navigation';
import EngineeringSection from '@/components/EngineeringSection';

export default function Engineering() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-16">
        <EngineeringSection />
      </div>
    </div>
  );
}