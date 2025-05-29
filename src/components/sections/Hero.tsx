import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import CameraModel from '../3d/CameraModel';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    if (titleRef.current) {
      const chars = titleRef.current.innerText.split('');
      titleRef.current.innerHTML = '';
      
      chars.forEach((char, index) => {
        const span = document.createElement('span');
        span.innerText = char;
        span.style.opacity = '0';
        span.style.transform = 'translateY(20px)';
        span.style.display = char === ' ' ? 'inline' : 'inline-block';
        titleRef.current?.appendChild(span);
        
        gsap.to(span, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.5 + (index * 0.03),
          ease: 'power3.out'
        });
      });
    }
    
    // Create subtle background animation
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to('.hero-bg-glow', {
      opacity: 0.5,
      scale: 1.1,
      duration: 5,
      ease: 'sine.inOut'
    });
  }, []);
  
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-yellow-400/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-yellow-400">The AuRa</span>
            <br />
            <span className="text-yellow-100">Productions</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-yellow-300 mb-8 max-w-3xl mx-auto"
          >
            Capturing moments, creating memories, and crafting visual stories that last forever.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="#services" 
              className="inline-flex items-center justify-center bg-yellow-400 text-black font-medium py-3 px-8 rounded-lg hover:bg-yellow-300 transition-colors"
            >
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center bg-yellow-400/10 text-yellow-400 font-medium py-3 px-8 rounded-lg hover:bg-yellow-400/20 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
          <motion.div
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="w-1.5 h-1.5 bg-yellow-300 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;