"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const duration = 0.05;

const colors = [
  "rgb(239, 68, 68)",   // red
  "rgb(59, 130, 246)",  // blue
  "rgb(16, 185, 129)",  // green
  "rgb(245, 158, 11)",  // yellow
  "rgb(139, 92, 246)",  // purple
  "rgb(236, 72, 153)",  // pink
  "rgb(6, 182, 212)",   // cyan
  "rgb(249, 115, 22)"   // orange
];

const fonts = [
  '"Noto Sans", sans-serif',
  'Georgia, serif',
  '"Times New Roman", serif',
  '"Courier New", monospace',
  'Impact, sans-serif',
  '"Comic Sans MS", cursive',
  '"Arial Black", sans-serif',
  '"Trebuchet MS", sans-serif'
];

const getRandomStyle = (ref: HTMLSpanElement) => {
  const currentColor = getComputedStyle(ref).color;
  const currentFont = getComputedStyle(ref).fontFamily;
  
  // Filter out current color and pick randomly from remaining
  const availableColors = colors.filter(color => color !== currentColor);
  const randomColor = availableColors[Math.floor(Math.random() * availableColors.length)];
  
  // Filter out current font and pick randomly from remaining
  const currentFontName = currentFont.split(',')[0].replace(/"/g, '');
  const availableFonts = fonts.filter(font => !font.includes(currentFontName));
  const randomFont = availableFonts[Math.floor(Math.random() * availableFonts.length)];
  
  gsap.to(ref, { color: randomColor, fontFamily: randomFont, duration });
}
const Hero = () => {
  const benRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const { current } = benRef;
    if (current !== null) {

      // Create the animation timeline
      const tl = gsap.timeline({
        repeat: -1,
        onStart: () => getRandomStyle(current),
        onRepeat: () => getRandomStyle(current),
        delay: 3
      });

      tl.to(current, {
        scale: 0.9,
        rotation: "-10",
        duration,
        ease: "ease.out(2)"
      }).to(current, {
        scale: 1.1,
        rotation: "10",
        duration,
        ease: "ease.out(2)"
      })
        .to(current, {
          scale: 1,
          duration,
          rotation: 0,
          ease: "ease.out(2)"
        })
        .to({}, { duration: 3 }); // Pause for 3 seconds before repeating
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
          Hi, I&apos;m <span ref={benRef} className="inline-block absolute align-baseline">Ben</span><span className="invisible">Ben</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;