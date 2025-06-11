import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import CustomCursor from './components/ui/CustomCursor';
import ScrollToTop from './components/ui/ScrollToTop';
import { MotionConfig } from 'framer-motion';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [videoProgress, setVideoProgress] = useState(0);
  const [fakeProgress, setFakeProgress] = useState(0);
  const fakeInterval = useRef<number | null>(null);

  // Hybrid progress: use real video progress if available, otherwise use fake progress
  const displayProgress = videoProgress > 0 ? videoProgress : fakeProgress;

  useEffect(() => {
    if (loading && videoProgress < 100) {
      // Start fake progress if real progress is not available
      if (fakeInterval.current === null) {
        fakeInterval.current = window.setInterval(() => {
          setFakeProgress((prev) => {
            if (prev < 90) return prev + 1;
            return prev;
          });
        }, 20);
      }
    } else {
      // Stop fake progress
      if (fakeInterval.current !== null) {
        clearInterval(fakeInterval.current);
        fakeInterval.current = null;
      }
    }
    // Cleanup on unmount
    return () => {
      if (fakeInterval.current !== null) {
        clearInterval(fakeInterval.current);
        fakeInterval.current = null;
      }
    };
  }, [loading, videoProgress]);

  useEffect(() => {
    // If video is ready, set progress to 100%
    if (videoProgress === 100) {
      setFakeProgress(100);
    }
  }, [videoProgress]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative">
        <CustomCursor />
        <Navbar />
        <main>
          <Hero 
            onVideoReady={() => setLoading(false)}
            onVideoProgress={setVideoProgress}
          />
          <About />
          <Services />
          <Portfolio />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
        {loading && (
          <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#181a15] z-50 pointer-events-auto">
            <div className="w-[400px] max-w-[80vw] h-1 bg-transparent relative mb-5">
              <div
                className="absolute left-0 top-1 h-1 bg-[#e0b84c] transition-all duration-200"
                style={{ width: `${displayProgress}%` }}
              />
            </div>
            <span className="text-[#e0b84c] text-lg font-semibold select-none">Welcome to the World of AuRa</span>
            <div className="flex items-center justify-between">
              <span className="text-[#e0b84c] text-base font-normal select-none">{displayProgress}%</span>
            </div>
          </div>
        )}
      </div>
    </MotionConfig>
  );
};

export default App;