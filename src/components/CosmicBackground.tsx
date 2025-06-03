
import React, { useEffect, useState } from 'react';

const CosmicBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 jungle-bg">
      {/* Enhanced organic aurora effect */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: 'linear-gradient(135deg, rgba(106, 153, 78, 0.3) 0%, rgba(42, 157, 143, 0.25) 50%, rgba(181, 163, 106, 0.2) 100%)',
          transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.02}deg)`,
        }}
      />
      
      {/* Misty overlay */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(circle at 30% 70%, rgba(240, 247, 244, 0.15) 0%, transparent 50%)',
          transform: `translateX(${scrollY * -0.1}px)`,
        }}
      />
      
      {/* Enhanced floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-stars-twinkle"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              backgroundColor: i % 3 === 0 ? '#F0F7F4' : i % 3 === 1 ? '#6A994E' : '#2A9D8F',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              opacity: 0.6 + Math.random() * 0.4,
            }}
          />
        ))}
      </div>

      {/* Subtle gradient overlay for depth */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(180deg, rgba(27, 67, 50, 0.8) 0%, rgba(56, 102, 65, 0.4) 50%, rgba(106, 153, 78, 0.2) 100%)',
        }}
      />
    </div>
  );
};

export default CosmicBackground;
