
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
    habitatIcon?: React.ReactNode;
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
      {/* Enhanced parallax overlay with organic patterns */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-forest-900/40 via-transparent to-forest-900/20"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      />

      {/* Floating organic shapes */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(106, 153, 78, 0.3) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(42, 157, 143, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 50% 90%, rgba(181, 163, 106, 0.25) 0%, transparent 60%)
          `,
          transform: `translateY(${scrollY * -0.1}px) rotate(${scrollY * 0.01}deg)`,
        }}
      />

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className={`text-center mb-20 transition-all duration-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-8xl mb-8 animate-float filter drop-shadow-lg">{emoji}</div>
          <h2 className="font-playfair text-5xl md:text-8xl font-bold text-mist-50 mb-8 cinematic-text">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-mist-100/90 max-w-4xl mx-auto leading-relaxed font-libre italic">
            {description}
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 transition-all duration-1200 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {animals.map((animal, index) => (
            <div 
              key={animal.name}
              className="animate-on-scroll documentary-fade"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <BiomeCard
                name={animal.name}
                location={animal.location}
                status={animal.status}
                funFact={animal.funFact}
                statusColor={animal.statusColor}
                habitatIcon={animal.habitatIcon}
              />
            </div>
          ))}
        </div>

        {/* Enhanced interactive elements */}
        <div className="mt-20 text-center">
          <button className="glassmorphic-enhanced px-12 py-6 text-mist-50 hover:bg-moss-500/30 transition-all duration-500 transform hover:scale-110 hover-glow group ripple-effect">
            <span className="flex items-center gap-3 font-libre font-semibold text-lg">
              Explore More {title}
              <span className="group-hover:animate-bounce text-moss-400 text-xl">→</span>
            </span>
          </button>
        </div>
      </div>

      {/* Enhanced decorative floating elements */}
      <div className="absolute top-32 left-16 animate-float opacity-60">
        <div className="glassmorphic-enhanced w-20 h-20 rounded-full flex items-center justify-center text-3xl backdrop-blur-xl">
          🌿
        </div>
      </div>
      
      <div className="absolute bottom-32 right-16 animate-float opacity-60" style={{ animationDelay: '2s' }}>
        <div className="glassmorphic-enhanced w-24 h-24 rounded-full flex items-center justify-center text-4xl backdrop-blur-xl">
          ✨
        </div>
      </div>

      <div className="absolute top-1/2 left-8 animate-float opacity-40" style={{ animationDelay: '4s' }}>
        <div className="glassmorphic w-16 h-16 rounded-full flex items-center justify-center text-2xl">
          🦋
        </div>
      </div>
    </section>
  );
};

export default BiomeSection;
