
import React, { useEffect, useState } from 'react';
import { ChevronDown, Volume2 } from 'lucide-react';
import Globe3D from './Globe3D';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Globe3D />
      
      <div className={`text-center z-10 px-4 transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="font-cinzel text-6xl md:text-8xl font-bold text-white mb-6 leading-tight tracking-wide">
          Wild<span className="text-forest-400">Whispers</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-4 max-w-2xl mx-auto font-cinzel">
          A Journey Through Earth's Untamed Beauty
        </p>
        
        <p className="text-lg text-gray-300 mb-12 font-medium tracking-wide">
          Step Into the Wild. Feel It. Learn It. Love It.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="glassmorphic px-8 py-4 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group">
            <span className="flex items-center gap-2">
              <Volume2 className="w-5 h-5 group-hover:animate-pulse" />
              Begin Your Journey
            </span>
          </button>
          
          <button className="text-forest-300 hover:text-forest-200 transition-colors duration-300 flex items-center gap-2">
            <span>Explore Biomes</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
        onClick={scrollToNext}
      >
        <div className="flex flex-col items-center gap-2 text-white/70 group-hover:text-white transition-colors">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </div>
      </div>

      {/* Floating ambient indicators */}
      <div className="absolute top-20 left-20 animate-float">
        <div className="glassmorphic p-3 text-white/80">
          <span className="text-sm">🌍 Earth's Wonders</span>
        </div>
      </div>
      
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="glassmorphic p-3 text-white/80">
          <span className="text-sm">🦁 Wildlife Stories</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
