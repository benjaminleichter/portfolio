import Navigation from '@/components/Navigation';
import ContactSection from '@/components/ContactSection';

export default function Contact() {
  return (
    <div className="min-h-screen relative">
      <div className="relative z-10">
        <Navigation />
        <div className="pt-16">
          <ContactSection />
        </div>
      </div>
    </div>
  );
}