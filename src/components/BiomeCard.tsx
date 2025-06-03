
import React, { useState } from 'react';
import { MapPin, Heart, Volume2, Camera } from 'lucide-react';

interface BiomeCardProps {
  name: string;
  location: string;
  status: string;
  funFact: string;
  soundUrl?: string;
  imageUrl?: string;
  statusColor: string;
}

const BiomeCard: React.FC<BiomeCardProps> = ({
  name,
  location,
  status,
  funFact,
  soundUrl,
  imageUrl,
  statusColor
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSound = () => {
    if (soundUrl) {
      const audio = new Audio(soundUrl);
      audio.play();
      setIsPlaying(true);
      setTimeout(() => setIsPlaying(false), 2000);
    }
  };

  return (
    <div 
      className={`glassmorphic p-6 max-w-sm transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${isHovered ? 'bg-white/20' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-playfair text-2xl font-semibold text-white">{name}</h3>
        <div className={`w-3 h-3 rounded-full ${statusColor} animate-pulse-glow`}></div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-gray-200">
          <MapPin className="w-4 h-4 text-forest-400" />
          <span className="text-sm">{location}</span>
        </div>

        <div className="flex items-center gap-2">
          <Heart className="w-4 h-4 text-red-400" />
          <span className="text-sm text-gray-200">Status: <span className="font-medium">{status}</span></span>
        </div>

        <p className="text-gray-300 text-sm leading-relaxed bg-black/20 p-3 rounded-lg">
          💡 {funFact}
        </p>

        <div className="flex gap-2 pt-2">
          <button 
            onClick={playSound}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg bg-forest-600/50 hover:bg-forest-600 transition-all duration-300 text-white text-sm ${isPlaying ? 'animate-pulse' : ''}`}
          >
            <Volume2 className="w-4 h-4" />
            {isPlaying ? 'Playing...' : 'Listen'}
          </button>
          
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-ocean-600/50 hover:bg-ocean-600 transition-all duration-300 text-white text-sm">
            <Camera className="w-4 h-4" />
            Watch
          </button>
        </div>
      </div>

      {/* Floating animation element */}
      {isHovered && (
        <div className="absolute -top-2 -right-2 text-2xl animate-bounce">
          🌟
        </div>
      )}
    </div>
  );
};

export default BiomeCard;
