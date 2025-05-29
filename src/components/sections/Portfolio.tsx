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
      title: 'Coastal Elegance',
      category: 'photography',
      image: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Commercial photography for luxury resort brand'
    },
    {
      id: 2,
      title: 'Urban Stories',
      category: 'video',
      image: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Documentary-style video series for city tourism'
    },
    {
      id: 3,
      title: 'Mindful Moments',
      category: 'podcast',
      image: 'https://images.pexels.com/photos/3756772/pexels-photo-3756772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Wellness podcast production and branding'
    },
    {
      id: 4,
      title: 'E-Commerce',
      category: 'website',
      image: 'https://img.freepik.com/free-photo/laptop-shopping-bags-online-shopping-concept_1423-190.jpg?ga=GA1.1.1079821049.1748499116&semt=ais_items_boosted&w=740',
      description: 'E-commerce website for handcrafted goods'
    },
    {
      id: 5,
      title: 'Forever Moments',
      category: 'wedding',
      image: 'https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Destination wedding photography and videography'
    },
    {
      id: 6,
      title: 'Tech Innovations',
      category: 'photography',
      image: 'https://img.freepik.com/free-photo/3d-rendering-camera-with-film-roll_23-2150985330.jpg?ga=GA1.1.1079821049.1748499116&semt=ais_items_boosted&w=740',
      description: 'Product photography for tech startup'
    }
  ];
  
  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);
  
  const filterCategories = [
    { id: 'all', label: 'All Work' },
    { id: 'photography', label: 'Photography' },
    { id: 'video', label: 'Video' },
    { id: 'podcast', label: 'Podcast' },
    { id: 'website', label: 'Website' },
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
          {filterCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-md transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-aura-yellow-400 text-aura-black'
                  : 'bg-aura-yellow-400/10 text-aura-yellow-300 hover:bg-aura-yellow-400/20 hover:text-aura-yellow-200'
              }`}
            >
              {category.label}
            </button>
          ))}
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