import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="min-h-screen relative bg-off-white flex flex-col items-center">
      <Navigation />
      <Hero />
    </div>
  );
}
