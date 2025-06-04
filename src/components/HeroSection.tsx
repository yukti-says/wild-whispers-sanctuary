
import React, { useEffect, useState } from 'react';
import { ChevronDown, Volume2, Leaf, Globe } from 'lucide-react';
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
        <h1 className="font-playfair text-6xl md:text-8xl font-bold text-text-dark mb-6 leading-tight tracking-wide cinematic-text">
          Wild<span className="text-moss-600 animate-pulse-glow">Whispers</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-text-primary mb-4 max-w-3xl mx-auto font-crimson italic font-semibold">
          A Journey Through Earth's Untamed Beauty
        </p>
        
        <p className="text-lg text-text-secondary mb-12 font-medium tracking-wide font-poppins max-w-2xl mx-auto">
          Step Into the Wild. Feel It. Learn It. Love It.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="glassmorphic-enhanced px-10 py-5 text-text-dark hover:bg-moss-500/20 transition-all duration-500 transform hover:scale-110 hover-glow group ripple-effect">
            <span className="flex items-center gap-3">
              <Volume2 className="w-6 h-6 group-hover:animate-pulse text-moss-600" />
              <span className="font-crimson font-bold text-lg">Begin Your Journey</span>
            </span>
          </button>
          
          <button className="text-moss-700 hover:text-moss-800 transition-all duration-500 flex items-center gap-3 group hover-glow">
            <Leaf className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-poppins font-semibold text-text-primary">Explore Biomes</span>
            <ChevronDown className="w-5 h-5 animate-bounce group-hover:translate-y-1" />
          </button>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
        onClick={scrollToNext}
      >
        <div className="flex flex-col items-center gap-3 text-text-secondary group-hover:text-text-dark transition-all duration-300">
          <span className="text-sm font-medium font-poppins">Scroll to explore</span>
          <div className="glassmorphic p-3 rounded-full group-hover:bg-moss-500/20 transition-all duration-300">
            <ChevronDown className="w-6 h-6 animate-bounce group-hover:animate-pulse text-text-primary" />
          </div>
        </div>
      </div>

      {/* Enhanced floating ambient indicators */}
      <div className="absolute top-20 left-20 animate-float">
        <div className="glassmorphic-enhanced p-4 text-text-primary hover-glow">
          <span className="text-sm font-crimson font-semibold flex items-center gap-2">
            <Globe className="w-4 h-4 text-teal-600" />
            Earth's Wonders
          </span>
        </div>
      </div>
      
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="glassmorphic-enhanced p-4 text-text-primary hover-glow">
          <span className="text-sm font-crimson font-semibold flex items-center gap-2">
            <span className="text-ochre-600">🦁</span>
            Wildlife Stories
          </span>
        </div>
      </div>

      <div className="absolute bottom-32 right-10 animate-float" style={{ animationDelay: '3s' }}>
        <div className="glassmorphic-enhanced p-4 text-text-primary hover-glow">
          <span className="text-sm font-crimson font-semibold flex items-center gap-2">
            <Leaf className="w-4 h-4 text-moss-600" />
            Conservation
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
