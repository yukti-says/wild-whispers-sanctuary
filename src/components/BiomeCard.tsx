
import React, { useState } from 'react';
import { MapPin, Heart, Volume2, Camera, TreePine, Droplets } from 'lucide-react';

interface BiomeCardProps {
  name: string;
  location: string;
  status: string;
  funFact: string;
  soundUrl?: string;
  imageUrl?: string;
  statusColor: string;
  habitatIcon?: React.ReactNode;
}

const BiomeCard: React.FC<BiomeCardProps> = ({
  name,
  location,
  status,
  funFact,
  soundUrl,
  imageUrl,
  statusColor,
  habitatIcon
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSound = () => {
    if (soundUrl) {
      const audio = new Audio(soundUrl);
      audio.play();
      setIsPlaying(true);
      setTimeout(() => setIsPlaying(false), 3000);
    }
  };

  return (
    <div 
      className={`glassmorphic-enhanced p-8 max-w-sm transform transition-all duration-700 hover:scale-105 hover:-translate-y-3 hover-glow ripple-effect ${isHovered ? 'bg-mist-50/30' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animal Image */}
      {imageUrl && (
        <div className="mb-6 relative overflow-hidden rounded-2xl">
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-48 object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-900/50 to-transparent" />
          {habitatIcon && (
            <div className="absolute top-4 right-4 text-2xl animate-breath bg-mist-50/20 backdrop-blur-sm rounded-full p-2">
              {habitatIcon}
            </div>
          )}
        </div>
      )}

      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-3">
          <h3 className="font-playfair text-2xl font-bold text-text-dark cinematic-text">{name}</h3>
        </div>
        <div className={`w-4 h-4 rounded-full ${statusColor} animate-pulse-glow shadow-lg`}></div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3 text-text-secondary">
          <MapPin className="w-5 h-5 text-teal-600 animate-pulse" />
          <span className="text-sm font-poppins font-medium">{location}</span>
        </div>

        <div className="flex items-center gap-3">
          <Heart className="w-5 h-5 text-red-500 animate-pulse" />
          <span className="text-sm text-text-secondary font-poppins">
            Status: <span className="font-semibold text-text-primary">{status}</span>
          </span>
        </div>

        <div className="bg-forest-900/30 backdrop-blur-sm p-4 rounded-xl border border-mist-200/20">
          <p className="text-text-secondary text-sm leading-relaxed font-poppins">
            <span className="text-lg mr-2">💡</span>
            {funFact}
          </p>
        </div>

        <div className="flex gap-3 pt-4">
          <button 
            onClick={playSound}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl bg-moss-600/60 hover:bg-moss-500/70 transition-all duration-500 text-mist-50 text-sm font-poppins font-medium backdrop-blur-md border border-moss-400/30 hover-glow ${isPlaying ? 'animate-pulse scale-105' : ''}`}
          >
            <Volume2 className="w-4 h-4" />
            {isPlaying ? 'Playing...' : 'Listen'}
          </button>
          
          <button className="flex items-center gap-2 px-4 py-3 rounded-xl bg-teal-600/60 hover:bg-teal-500/70 transition-all duration-500 text-mist-50 text-sm font-poppins font-medium backdrop-blur-md border border-teal-400/30 hover-glow">
            <Camera className="w-4 h-4" />
            Watch
          </button>
        </div>
      </div>

      {/* Enhanced floating animation element */}
      {isHovered && (
        <div className="absolute -top-3 -right-3 text-3xl animate-bounce">
          <div className="glassmorphic p-2 rounded-full">
            ✨
          </div>
        </div>
      )}

      {/* Subtle glow effect on hover */}
      {isHovered && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-moss-400/10 to-teal-400/10 animate-pulse pointer-events-none"></div>
      )}
    </div>
  );
};

export default BiomeCard;
