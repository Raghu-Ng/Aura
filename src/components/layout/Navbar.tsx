import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Camera, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Update navbar background
      setIsScrolled(scrollPosition > 50);
      
      // Update scroll progress
      const progress = scrollPosition / windowHeight;
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About', href: '#about' },
    { title: 'Services', href: '#services' },
    { title: 'Our Work', href: '#portfolio' },
    { title: 'Testimonials', href: '#testimonials' },
    { title: 'Contact', href: '#contact' },
  ];
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="relative">
        {/* Scroll Progress Indicator */}
        <motion.div 
          className="absolute bottom-0 left-0 h-0.5 bg-yellow-400"
          style={{ width: `${scrollProgress * 100}%` }}
        />
        
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap min-w-0 items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-2 min-w-0">
              <Camera className="w-6 h-6 md:w-7 md:h-7 text-yellow-400" />
              <span className="font-display text-lg md:text-xl text-yellow-100 truncate">
                The AuRa Productions
              </span>
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4 lg:space-x-8 min-w-0">
              {navLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-yellow-300 hover:text-yellow-100 transition-colors duration-300 font-medium truncate"
                >
                  {link.title}
                </a>
              ))}
            </nav>
            
            {/* Contact Button (Desktop) */}
            <div className="hidden md:block ml-2 flex-shrink-0">
              <a 
                href="#contact" 
                className="btn btn-outline"
              >
                Start Your Project
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-yellow-400 hover:text-yellow-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <motion.div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-lg z-40 md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <nav className="flex flex-col items-center space-y-6">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className="text-xl text-yellow-300 hover:text-yellow-100 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </a>
            ))}
            <a 
              href="#contact" 
              className="btn btn-outline mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Start Your Project
            </a>
          </nav>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;