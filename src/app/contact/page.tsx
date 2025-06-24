import Navigation from '@/components/Navigation';
import ContactSection from '@/components/ContactSection';
import AnimatedBackgroundGeneral from '@/components/AnimatedBackgroundGeneral';

export default function Contact() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackgroundGeneral />
      <div className="relative z-10">
        <Navigation />
        <div className="pt-16">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}