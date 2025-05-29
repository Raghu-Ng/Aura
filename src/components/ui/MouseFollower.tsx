import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MouseFollower: React.FC = () => {
  const followerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const follower = followerRef.current;
    if (!follower) return;
    
    const curvePoints = 12; // Number of points in the curve
    const curveElements: HTMLDivElement[] = [];
    
    // Create curve points
    for (let i = 0; i < curvePoints; i++) {
      const dot = document.createElement('div');
      dot.className = 'absolute w-1.5 h-1.5 rounded-full bg-aura-gray-300 opacity-0';
      follower.appendChild(dot);
      curveElements.push(dot);
    }
    
    // Mouse position history
    const mouseHistory: { x: number; y: number }[] = Array(curvePoints).fill({ x: 0, y: 0 });
    
    const updateCurve = (e: MouseEvent) => {
      // Update mouse history
      mouseHistory.pop(); // Remove oldest position
      mouseHistory.unshift({ x: e.clientX, y: e.clientY }); // Add current position
      
      // Update curve points
      curveElements.forEach((dot, index) => {
        if (index < mouseHistory.length) {
          const position = mouseHistory[index];
          
          gsap.to(dot, {
            left: position.x,
            top: position.y,
            opacity: 1 - (index / curvePoints),
            duration: 0.2,
            ease: 'power2.out',
          });
        }
      });
    };
    
    // Initial setup
    gsap.set(curveElements, { opacity: 0 });
    
    window.addEventListener('mousemove', updateCurve);
    
    return () => {
      window.removeEventListener('mousemove', updateCurve);
    };
  }, []);
  
  return (
    <div 
      ref={followerRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-10"
    ></div>
  );
};

export default MouseFollower;