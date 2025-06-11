import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import PortfolioItem from '../ui/PortfolioItem';
import MouseFollower from '../ui/MouseFollower';
import { ArrowRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const portfolioRef = useRef<HTMLDivElement>(null);
  const [showMouseFollower, setShowMouseFollower] = useState(false);
  
  // Portfolio data
  const portfolioItems = [
    {
      id: 1,
      title: 'Pixels & Prestige',
      category: 'website',
      // image: '/src/components/video/portfolio/website.png',
      image: '/images/website.png',
      // image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Crafting elite web experiences with visuals that whisper luxury and code that commands attention — our lens captured the soul of a 5-star resort and transformed it into a scroll-worthy digital masterpiece.'
    },
    {
      id: 2,
      title: 'Shaping Digital Presence',
      category: 'Socials',
      // image: '/src/components/video/portfolio/Soc.png',
      image: '/images/Soc.png',
      // image: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'We build meaningful brand voices across platforms—curating content, managing engagement, and crafting a consistent narrative that connects with your audience.Documentary-style video series for city tourism'
    },
    {
      id: 3,
      title: 'Flow in Every Frame',
      category: 'video',
      image: '/images/videoedit.png',
      // image: '/src/components/video/portfolio/videoedit.png',
      // image: 'https://images.pexels.com/photos/3756772/pexels-photo-3756772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'We shape raw footage into powerful stories—cutting with intention, blending with rhythm, and delivering edits that engage, evoke, and elevate.'
    },
    {
      id: 4,
      title: 'Lens Meets Detail',
      category: 'Shooting',
      // image: '/src/components/video/portfolio/prodsuct.png',
      image: '/images/prodsuct.png',
      // image: 'https://img.freepik.com/free-photo/laptop-shopping-bags-online-shopping-concept_1423-190.jpg?ga=GA1.1.1079821049.1748499116&semt=ais_items_boosted&w=740',
      description: 'From concept to composition, we capture every product with precision and purpose—turning everyday items into brand statements through thoughtful visuals'
    },
    {
      id: 5,
      title: 'Forever Moments',
      category: 'wedding',
      image: '/images/wed.png',
      // image: '/src/components/video/portfolio/wedding.png',
      // image: 'https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'We don’t just capture events—we preserve emotions. From candid glances to grand moments, our lens tells stories that time can never fade.'
    },
    {
      id: 6,
      title: 'Wear Your Identity',
      category: 'Branding',
      // image: '/src/components/video/portfolio/bRAND.png',
      image: '/images/Brand.png',
      // image: 'https://img.freepik.com/free-photo/3d-rendering-camera-with-film-roll_23-2150985330.jpg?ga=GA1.1.1079821049.1748499116&semt=ais_items_boosted&w=740',
      description: 'We create merchandise that embodies your brand’s essence—turning logos and ideas into tangible expressions that your audience proudly carries.'
    }
  ];
  
  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);
  
  const filterCategories = [
    { id: 'all', label: 'All Work' },
    { id: 'website', label: 'Website' },
    { id: 'video', label: 'Video' },
    { id: 'Shooting', label: 'Shooting' },
    { id: 'Branding', label: 'Branding' },
    { id: 'Socials', label: 'Socials' },
    { id: 'wedding', label: 'Wedding' }
  ];
  
  useEffect(() => {
    const handleMouseEnter = () => setShowMouseFollower(true);
    const handleMouseLeave = () => setShowMouseFollower(false);
    
    if (portfolioRef.current) {
      portfolioRef.current.addEventListener('mouseenter', handleMouseEnter);
      portfolioRef.current.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (portfolioRef.current) {
        portfolioRef.current.removeEventListener('mouseenter', handleMouseEnter);
        portfolioRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);
  
  return (
    <section id="portfolio" ref={portfolioRef} className="section-padding relative bg-black">
      {showMouseFollower && <MouseFollower />}
      
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="mb-6">Our Work</h2>
          <p className="max-w-3xl mx-auto text-lg text-aura-yellow-300">
            Explore our portfolio of creative projects spanning photography, video, web design, and more.
          </p>
        </motion.div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeFilter === 'all'
                ? 'bg-yellow-400 text-black'
                : 'bg-yellow-400/10 text-yellow-300 hover:bg-yellow-400/20 hover:scale-105'
            }`}
          >
            All Work
          </button>
          <button
            onClick={() => setActiveFilter('website')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeFilter === 'website'
                ? 'bg-yellow-400 text-black'
                : 'bg-yellow-400/10 text-yellow-300 hover:bg-yellow-400/20 hover:scale-105'
            }`}
          >
            Website
          </button>
          <button
            onClick={() => setActiveFilter('video')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeFilter === 'Video'
                ? 'bg-yellow-400 text-black'
                : 'bg-yellow-400/10 text-yellow-300 hover:bg-yellow-400/20 hover:scale-105'
            }`}
          >
            Video
          </button>
          <button
            onClick={() => setActiveFilter('Shooting')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeFilter === 'Shooting'
                ? 'bg-yellow-400 text-black'
                : 'bg-yellow-400/10 text-yellow-300 hover:bg-yellow-400/20 hover:scale-105'
            }`}
          >
            Shooting
          </button>
          <button
            onClick={() => setActiveFilter('Branding')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeFilter === 'Branding'
                ? 'bg-yellow-400 text-black'
                : 'bg-yellow-400/10 text-yellow-300 hover:bg-yellow-400/20 hover:scale-105'
            }`}
          >
            Branding
          </button>
          <button
            onClick={() => setActiveFilter('wedding')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeFilter === 'wedding'
                ? 'bg-yellow-400 text-black'
                : 'bg-yellow-400/10 text-yellow-300 hover:bg-yellow-400/20 hover:scale-105'
            }`}
          >
            Wedding
          </button>
        </div>
        
        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <PortfolioItem 
              key={item.id}
              item={item}
              index={index}
            />
          ))}
        </motion.div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="mb-4">Ready to start your project?</h3>
          <p className="text-aura-yellow-300 mb-8 max-w-xl mx-auto">
            Let's collaborate to bring your vision to life with our creative expertise.
          </p>
          <a href="#contact" className="btn btn-primary group">
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;