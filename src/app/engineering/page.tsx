import Navigation from '@/components/Navigation';
import EngineeringSection from '@/components/EngineeringSection';
import AnimatedBackgroundGeneral from '@/components/AnimatedBackgroundGeneral';

export default function Engineering() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackgroundGeneral />
      <div className="relative z-10">
        <Navigation />
        <div className="pt-16">
          <EngineeringSection />
        </div>
      </div>
    </div>
  );
}