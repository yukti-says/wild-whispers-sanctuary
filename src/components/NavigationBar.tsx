
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Heart, Camera, Headphones } from 'lucide-react';

const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Explore', icon: Globe, href: '#explore' },
    { name: 'Conservation', icon: Heart, href: '#conservation' },
    { name: 'Gallery', icon: Camera, href: '#gallery' },
    { name: 'Sounds', icon: Headphones, href: '#sounds' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glassmorphic backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-forest-500 flex items-center justify-center text-white font-bold">
              🌍
            </div>
            <span className="font-playfair text-xl font-semibold text-white">
              WildWhispers
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300 group"
              >
                <item.icon className="w-4 h-4 group-hover:animate-pulse" />
                <span className="font-medium">{item.name}</span>
              </a>
            ))}
            
            <button className="glassmorphic px-6 py-2 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </a>
              ))}
              
              <button className="glassmorphic px-6 py-3 text-white hover:bg-white/20 transition-all duration-300 mt-2">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
