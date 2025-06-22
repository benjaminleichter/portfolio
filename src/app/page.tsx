import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import EngineeringSection from '@/components/EngineeringSection';
import MusicSection from '@/components/MusicSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <EngineeringSection />
      <MusicSection />
      <ContactSection />
    </div>
  );
}
