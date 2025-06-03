
import React, { useEffect, useState } from 'react';

const CosmicBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0" style={{ background: 'radial-gradient(ellipse at center, #051a05 0%, #0a3d0a 35%, #0f2e0f 100%)' }}>
      {/* Animated aurora effect with dark green tones */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'linear-gradient(135deg, rgba(26, 90, 26, 0.4) 0%, rgba(45, 122, 45, 0.3) 100%)',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-forest-300 rounded-full animate-stars-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CosmicBackground;
