import React, { useEffect } from 'react';
import CosmicBackground from '../components/CosmicBackground';
import NavigationBar from '../components/NavigationBar';
import HeroSection from '../components/HeroSection';
import BiomeSection from '../components/BiomeSection';

const Index = () => {
  useEffect(() => {
    // Create enhanced scroll progress indicator
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

  // Enhanced biome data with animal images
  const biomeSections = [
    {
      title: "African Savanna",
      description: "Witness the majesty of Africa's golden plains, where ancient spirits roam free and elephants walk in timeless migration paths under endless crimson skies.",
      backgroundGradient: "bg-savanna-gradient",
      emoji: "🦁",
      animals: [
        {
          name: "African Lion",
          location: "Serengeti National Park, Tanzania",
          status: "Vulnerable",
          funFact: "A lion's roar can be heard from up to 5 miles away, serving as a powerful communication tool across the vast savanna. Their calls create a symphony that echoes through the African night.",
          statusColor: "bg-yellow-500",
          habitatIcon: "🌾",
          imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop"
        },
        {
          name: "African Elephant",
          location: "Amboseli National Park, Kenya",
          status: "Endangered",
          funFact: "Elephants have incredible memories spanning decades and can recognize the bones of their deceased family members, often returning to visit them in touching ceremonies of remembrance.",
          statusColor: "bg-red-500",
          habitatIcon: "🐘",
          imageUrl: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=300&fit=crop"
        },
        {
          name: "Cheetah",
          location: "Masai Mara, Kenya",
          status: "Vulnerable",
          funFact: "Cheetahs can accelerate from 0 to 60 mph in just 3 seconds, making them nature's sports car. Their hearts beat up to 250 times per minute during a chase.",
          statusColor: "bg-yellow-500",
          habitatIcon: "⚡",
          imageUrl: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=400&h=300&fit=crop"
        }
      ]
    },
    {
      title: "Ocean Depths",
      description: "Dive into the mysterious cerulean world where gentle giants glide through ancient currents and coral cities pulse with vibrant life in an underwater ballet.",
      backgroundGradient: "bg-ocean-gradient",
      emoji: "🐋",
      animals: [
        {
          name: "Humpback Whale",
          location: "Pacific Ocean Migration Routes",
          status: "Least Concern",
          funFact: "Humpback whales compose complex songs that can last up to 30 minutes and travel across entire ocean basins. Each population has its own unique dialect, like underwater cultures.",
          statusColor: "bg-green-500",
          habitatIcon: "🌊",
          imageUrl: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=400&h=300&fit=crop"
        },
        {
          name: "Great White Shark",
          location: "Coastal Waters Worldwide",
          status: "Vulnerable",
          funFact: "Great whites can detect a single drop of blood in 25 gallons of water and sense electrical fields from other animals' heartbeats, making them living sensors of the sea.",
          statusColor: "bg-yellow-500",
          habitatIcon: "⚡",
          imageUrl: "https://images.unsplash.com/photo-1441057206919-63d19fac2369?w=400&h=300&fit=crop"
        },
        {
          name: "Sea Turtle",
          location: "Tropical Ocean Waters",
          status: "Endangered",
          funFact: "Sea turtles navigate using Earth's magnetic field like a natural GPS and can return to the exact beach where they were born decades later to lay their own eggs.",
          statusColor: "bg-red-500",
          habitatIcon: "🧭",
          imageUrl: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=400&h=300&fit=crop"
        }
      ]
    },
    {
      title: "Amazon Rainforest",
      description: "Enter the world's most biodiverse sanctuary, where every emerald leaf holds ancient secrets and vibrant creatures paint the canopy with a living masterpiece of nature's art.",
      backgroundGradient: "bg-forest-gradient",
      emoji: "🦜",
      animals: [
        {
          name: "Jaguar",
          location: "Amazon Basin, Brazil",
          status: "Near Threatened",
          funFact: "Jaguars have the strongest bite force of any big cat and are excellent swimmers, often hunting caimans in rivers. They're known as 'yaguareté' - 'the true beast' by indigenous peoples.",
          statusColor: "bg-orange-500",
          habitatIcon: "🌿",
          imageUrl: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=300&fit=crop"
        },
        {
          name: "Scarlet Macaw",
          location: "Amazon Rainforest Canopy",
          status: "Least Concern",
          funFact: "Scarlet macaws can live over 50 years and form lifelong partnerships, often seen flying together in synchronized flight. They can learn over 100 words and understand context.",
          statusColor: "bg-green-500",
          habitatIcon: "🌳",
          imageUrl: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=400&h=300&fit=crop"
        },
        {
          name: "Poison Dart Frog",
          location: "Amazon Rainforest Floor",
          status: "Various",
          funFact: "Their brilliant colors warn predators of their toxicity, with some species carrying enough poison to kill 10 adult humans. Indigenous peoples have used their toxins for hunting arrows for centuries.",
          statusColor: "bg-blue-500",
          habitatIcon: "🍃",
          imageUrl: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937?w=400&h=300&fit=crop"
        }
      ]
    }
  ];

  return (
    <div className="relative">
      {/* Enhanced scroll progress indicator */}
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

      {/* Enhanced Footer Section */}
      <section className="relative py-24 bg-gradient-to-b from-forest-900 via-forest-800 to-forest-900">
        <div className="container mx-auto px-6 text-center">
          <h3 className="font-playfair text-5xl font-bold text-mist-50 mb-8 cinematic-text">
            Continue Your Wild Journey
          </h3>
          <p className="text-text-secondary text-xl mb-12 max-w-3xl mx-auto font-merriweather leading-relaxed">
            Join millions of nature lovers in protecting and celebrating Earth's incredible biodiversity. 
            Every click, every share, every moment of wonder contributes to conservation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="glassmorphic-enhanced px-10 py-5 text-text-dark hover:bg-moss-500/30 transition-all duration-500 transform hover:scale-110 hover-glow font-merriweather font-bold text-lg">
              Explore More Biomes
            </button>
            <button className="glassmorphic-enhanced px-10 py-5 text-text-dark hover:bg-teal-500/30 transition-all duration-500 transform hover:scale-110 hover-glow font-merriweather font-bold text-lg">
              Support Conservation
            </button>
          </div>
          
          <div className="text-mist-300/70 text-sm font-poppins">
            <p>© 2024 WildWhispers. Step Into the Wild. Feel It. Learn It. Love It.</p>
            <p className="mt-2 italic">Crafted with 💚 for Earth's magnificent creatures</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
