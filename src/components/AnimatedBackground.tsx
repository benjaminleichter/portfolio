'use client';

import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      generateShapes();
    };

    const gridSize = 150;
    const shapeSize = 30;
    const shapes: Array<{
      type: 'circle' | 'triangle' | 'square';
      x: number;
      y: number;
      opacity: number;
      phase: number;
      fadeSpeed: number;
    }> = [];

    const isInTextArea = (x: number, y: number) => {
      // Define text exclusion zone (approximate center area where text appears)
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Create a generous exclusion zone around the center text
      const textWidth = Math.min(canvas.width * 0.8, 800); // Max width of text area
      const textHeight = 200; // Approximate height of name + title
      
      const leftBound = centerX - textWidth / 2;
      const rightBound = centerX + textWidth / 2;
      const topBound = centerY - textHeight / 2;
      const bottomBound = centerY + textHeight / 2;
      
      return x >= leftBound && x <= rightBound && y >= topBound && y <= bottomBound;
    };

    const generateShapes = () => {
      shapes.length = 0;
      const cols = Math.ceil(canvas.width / gridSize);
      const rows = Math.ceil(canvas.height / gridSize);
      
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          // Checkerboard pattern - only place shapes on alternating cells
          if ((row + col) % 2 === 0) {
            const shapeTypes = ['circle', 'triangle', 'square'] as const;
            const randomType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
            
            // Random position within the grid cell
            const x = col * gridSize + Math.random() * (gridSize - shapeSize) + shapeSize / 2;
            const y = row * gridSize + Math.random() * (gridSize - shapeSize) + shapeSize / 2;
            
            // Only add shape if it's not in the text area
            if (!isInTextArea(x, y)) {
              shapes.push({
                type: randomType,
                x,
                y,
                opacity: 0,
                phase: Math.random() * Math.PI * 2,
                fadeSpeed: 0.003 + Math.random() * 0.007
              });
            }
          }
        }
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const drawCircle = (x: number, y: number, size: number, opacity: number) => {
      ctx.beginPath();
      ctx.arc(x, y, size / 2, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(0, 0, 0, ${opacity})`;
      ctx.fillStyle = `rgba(249, 249, 249, ${opacity})`;
      ctx.lineWidth = 2;
      ctx.fill();
      ctx.stroke();
    };

    const drawTriangle = (x: number, y: number, size: number, opacity: number) => {
      const height = (size * Math.sqrt(3)) / 2;
      ctx.beginPath();
      ctx.moveTo(x, y - height / 2);
      ctx.lineTo(x - size / 2, y + height / 2);
      ctx.lineTo(x + size / 2, y + height / 2);
      ctx.closePath();
      ctx.strokeStyle = `rgba(0, 0, 0, ${opacity})`;
      ctx.fillStyle = `rgba(249, 249, 249, ${opacity})`;
      ctx.lineWidth = 2;
      ctx.fill();
      ctx.stroke();
    };

    const drawSquare = (x: number, y: number, size: number, opacity: number) => {
      ctx.beginPath();
      ctx.rect(x - size / 2, y - size / 2, size, size);
      ctx.strokeStyle = `rgba(0, 0, 0, ${opacity})`;
      ctx.fillStyle = `rgba(249, 249, 249, ${opacity})`;
      ctx.lineWidth = 2;
      ctx.fill();
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      shapes.forEach((shape) => {
        const sine = Math.sin(shape.phase);
        shape.opacity = Math.max(0, Math.min(0.6, sine * 0.6)); // Limit max opacity for subtlety
        
        if (shape.opacity > 0.01) { // Only draw if visible enough
          if (shape.type === 'circle') {
            drawCircle(shape.x, shape.y, shapeSize, shape.opacity);
          } else if (shape.type === 'triangle') {
            drawTriangle(shape.x, shape.y, shapeSize, shape.opacity);
          } else if (shape.type === 'square') {
            drawSquare(shape.x, shape.y, shapeSize, shape.opacity);
          }
        }
        
        shape.phase += shape.fadeSpeed;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default AnimatedBackground;