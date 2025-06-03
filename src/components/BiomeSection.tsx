
import React, { useEffect, useRef, useState } from 'react';
import BiomeCard from './BiomeCard';

interface BiomeSectionProps {
  title: string;
  description: string;
  backgroundGradient: string;
  animals: Array<{
    name: string;
    location: string;
    status: string;
    funFact: string;
    statusColor: string;
  }>;
  emoji: string;
}

const BiomeSection: React.FC<BiomeSectionProps> = ({
  title,
  description,
  backgroundGradient,
  animals,
  emoji
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={`min-h-screen relative overflow-hidden ${backgroundGradient}`}
      style={{
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
      }}
    >
      {/* Parallax overlay */}
      <div 
        className="absolute inset-0 bg-black/30"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-6xl mb-6 animate-float">{emoji}</div>
          <h2 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {animals.map((animal, index) => (
            <div 
              key={animal.name}
              className="animate-on-scroll"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <BiomeCard
                name={animal.name}
                location={animal.location}
                status={animal.status}
                funFact={animal.funFact}
                statusColor={animal.statusColor}
              />
            </div>
          ))}
        </div>

        {/* Interactive elements */}
        <div className="mt-16 text-center">
          <button className="glassmorphic px-8 py-4 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group">
            <span className="flex items-center gap-2">
              Explore More {title}
              <span className="group-hover:animate-bounce">→</span>
            </span>
          </button>
        </div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-20 left-10 animate-float opacity-50">
        <div className="glassmorphic w-16 h-16 rounded-full flex items-center justify-center text-2xl">
          🌿
        </div>
      </div>
      
      <div className="absolute bottom-20 right-10 animate-float opacity-50" style={{ animationDelay: '2s' }}>
        <div className="glassmorphic w-20 h-20 rounded-full flex items-center justify-center text-3xl">
          ✨
        </div>
      </div>
    </section>
  );
};

export default BiomeSection;
