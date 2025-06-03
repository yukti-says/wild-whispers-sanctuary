
import React, { useEffect } from 'react';
import CosmicBackground from '../components/CosmicBackground';
import NavigationBar from '../components/NavigationBar';
import HeroSection from '../components/HeroSection';
import BiomeSection from '../components/BiomeSection';

const Index = () => {
  useEffect(() => {
    // Create scroll progress indicator
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      const progressBar = document.querySelector('.scroll-indicator') as HTMLElement;
      if (progressBar) {
        progressBar.style.transform = `scaleX(${scrollPercent / 100})`;
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  // Biome data
  const biomeSections = [
    {
      title: "African Savanna",
      description: "Witness the majesty of Africa's golden plains, where lions roam free and elephants walk in ancient migration paths under endless skies.",
      backgroundGradient: "bg-earth-gradient",
      emoji: "🦁",
      animals: [
        {
          name: "African Lion",
          location: "Serengeti National Park, Tanzania",
          status: "Vulnerable",
          funFact: "A lion's roar can be heard from up to 5 miles away, serving as a powerful communication tool across the vast savanna.",
          statusColor: "bg-yellow-500"
        },
        {
          name: "African Elephant",
          location: "Amboseli National Park, Kenya",
          status: "Endangered",
          funFact: "Elephants have incredible memories and can recognize the bones of their deceased family members, often returning to visit them.",
          statusColor: "bg-red-500"
        },
        {
          name: "Cheetah",
          location: "Masai Mara, Kenya",
          status: "Vulnerable",
          funFact: "Cheetahs can accelerate from 0 to 60 mph in just 3 seconds, making them the fastest land animal on Earth.",
          statusColor: "bg-yellow-500"
        }
      ]
    },
    {
      title: "Ocean Depths",
      description: "Dive into the mysterious blue world where giants glide through ancient currents and coral cities pulse with vibrant life.",
      backgroundGradient: "bg-ocean-gradient",
      emoji: "🐋",
      animals: [
        {
          name: "Humpback Whale",
          location: "Pacific Ocean Migration Routes",
          status: "Least Concern",
          funFact: "Humpback whales compose complex songs that can last up to 30 minutes and travel across entire ocean basins.",
          statusColor: "bg-green-500"
        },
        {
          name: "Great White Shark",
          location: "Coastal Waters Worldwide",
          status: "Vulnerable",
          funFact: "Great whites can detect a single drop of blood in 25 gallons of water and sense electrical fields from other animals.",
          statusColor: "bg-yellow-500"
        },
        {
          name: "Sea Turtle",
          location: "Tropical Ocean Waters",
          status: "Endangered",
          funFact: "Sea turtles navigate using Earth's magnetic field and can return to the exact beach where they were born to lay their eggs.",
          statusColor: "bg-red-500"
        }
      ]
    },
    {
      title: "Amazon Rainforest",
      description: "Enter the world's most biodiverse ecosystem, where every tree holds secrets and colorful creatures paint the canopy with life.",
      backgroundGradient: "bg-forest-gradient",
      emoji: "🦜",
      animals: [
        {
          name: "Jaguar",
          location: "Amazon Basin, Brazil",
          status: "Near Threatened",
          funFact: "Jaguars have the strongest bite force of any big cat and are excellent swimmers, often hunting caimans in rivers.",
          statusColor: "bg-orange-500"
        },
        {
          name: "Scarlet Macaw",
          location: "Amazon Rainforest Canopy",
          status: "Least Concern",
          funFact: "Scarlet macaws can live over 50 years and form lifelong partnerships, often seen flying together in synchronized flight.",
          statusColor: "bg-green-500"
        },
        {
          name: "Poison Dart Frog",
          location: "Amazon Rainforest Floor",
          status: "Various",
          funFact: "Their bright colors warn predators of their toxicity, with some species carrying enough poison to kill 10 adult humans.",
          statusColor: "bg-blue-500"
        }
      ]
    }
  ];

  return (
    <div className="relative">
      {/* Scroll progress indicator */}
      <div className="scroll-indicator" />
      
      {/* Fixed cosmic background */}
      <CosmicBackground />
      
      {/* Navigation */}
      <NavigationBar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Biome Sections */}
      {biomeSections.map((biome, index) => (
        <BiomeSection
          key={biome.title}
          title={biome.title}
          description={biome.description}
          backgroundGradient={biome.backgroundGradient}
          animals={biome.animals}
          emoji={biome.emoji}
        />
      ))}

      {/* Footer Section */}
      <section className="relative py-20 bg-gradient-to-b from-cosmic-900 to-black">
        <div className="container mx-auto px-6 text-center">
          <h3 className="font-playfair text-4xl font-bold text-white mb-6">
            Continue Your Wild Journey
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join millions of nature lovers in protecting and celebrating Earth's incredible biodiversity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="glassmorphic px-8 py-4 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              Explore More Biomes
            </button>
            <button className="glassmorphic px-8 py-4 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              Support Conservation
            </button>
          </div>
          
          <div className="mt-12 text-gray-400 text-sm">
            <p>© 2024 WildWhispers. Step Into the Wild. Feel It. Learn It. Love It.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
