import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isInPortfolio, setIsInPortfolio] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handlePortfolioEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('#portfolio')) {
        setIsInPortfolio(true);
      }
    };

    const handlePortfolioLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('#portfolio')) {
        setIsInPortfolio(false);
      }
    };

    // Only add the custom cursor on large screens
    if (window.innerWidth >= 1024) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseenter', handleMouseEnter);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseover', handlePortfolioEnter);
      document.addEventListener('mouseout', handlePortfolioLeave);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handlePortfolioEnter);
      document.removeEventListener('mouseout', handlePortfolioLeave);
    };
  }, []);

  // Don't render on small screens
  if (typeof window !== 'undefined' && window.innerWidth < 1024) {
    return null;
  }

  return (
    <>
      {/* Main cursor circle - hidden in portfolio section */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          opacity: isVisible && !isInPortfolio ? 1 : 0,
        }}
        transition={{
          type: "spring",
          mass: 0.6,
          stiffness: 150,
          damping: 10,
        }}
      >
        <div className="w-8 h-8 rounded-full bg-yellow-400/30 backdrop-blur-sm" />
      </motion.div>

      {/* Smaller inner circle - always visible */}
      <motion.div
        className="fixed pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          mass: 0.3,
          stiffness: 200,
          damping: 20,
        }}
      >
        <div className="w-2 h-2 rounded-full bg-yellow-400" />
      </motion.div>
    </>
  );
};

export default CustomCursor;