
import React, { useEffect, useRef, useState } from 'react';

const Globe3D = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationId: number;
    let rotation = 0;

    const drawGlobe = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(canvas.width, canvas.height) * 0.2;
      
      // Apply scroll-based zoom effect
      const zoomFactor = 1 + (scrollY * 0.002);
      const currentRadius = radius * zoomFactor;
      
      // Globe base
      const gradient = ctx.createRadialGradient(
        centerX - currentRadius * 0.3,
        centerY - currentRadius * 0.3,
        0,
        centerX,
        centerY,
        currentRadius
      );
      gradient.addColorStop(0, '#4ade80');
      gradient.addColorStop(0.3, '#22c55e');
      gradient.addColorStop(0.7, '#16a34a');
      gradient.addColorStop(1, '#15803d');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, currentRadius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Add continent outlines (simplified)
      ctx.strokeStyle = '#065f46';
      ctx.lineWidth = 2;
      
      // Draw simplified continents with rotation
      const continents = [
        // Africa
        { x: 0.1, y: 0.2, width: 0.3, height: 0.5 },
        // Asia
        { x: 0.4, y: -0.1, width: 0.4, height: 0.4 },
        // Americas
        { x: -0.4, y: 0, width: 0.2, height: 0.6 },
      ];

      continents.forEach(continent => {
        const rotatedX = continent.x * Math.cos(rotation) - continent.y * Math.sin(rotation);
        const rotatedY = continent.x * Math.sin(rotation) + continent.y * Math.cos(rotation);
        
        if (rotatedX > -0.5) { // Only draw if visible
          ctx.beginPath();
          ctx.ellipse(
            centerX + rotatedX * currentRadius,
            centerY + rotatedY * currentRadius,
            continent.width * currentRadius * 0.3,
            continent.height * currentRadius * 0.3,
            0,
            0,
            Math.PI * 2
          );
          ctx.stroke();
        }
      });
      
      // Add atmospheric glow
      const glowGradient = ctx.createRadialGradient(
        centerX, centerY, currentRadius,
        centerX, centerY, currentRadius * 1.3
      );
      glowGradient.addColorStop(0, 'rgba(34, 197, 94, 0.3)');
      glowGradient.addColorStop(1, 'rgba(34, 197, 94, 0)');
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, currentRadius * 1.3, 0, Math.PI * 2);
      ctx.fillStyle = glowGradient;
      ctx.fill();

      rotation += 0.005;
      animationId = requestAnimationFrame(drawGlobe);
    };

    drawGlobe();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [scrollY]);

  // Calculate opacity based on scroll position
  const opacity = Math.max(0, 1 - scrollY / 800);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity }}
    />
  );
};

export default Globe3D;
