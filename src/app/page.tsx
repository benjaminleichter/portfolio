import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function Home() {
  return (
    <div className="min-h-screen relative bg-off-white">
      <AnimatedBackground />
      <Navigation />
      <Hero />
    </div>
  );
}
