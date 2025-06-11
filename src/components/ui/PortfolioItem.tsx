import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface PortfolioItemProps {
  item: {
    id: number;
    title: string;
    category: string;
    image: string;
    description: string;
  };
  index: number;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ item, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg shadow-aura"
    >
      {/* Image */}
      <div className="aspect-w-4 aspect-h-3 relative overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-aura-teal-900/90 via-aura-teal-800/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
            <span className="text-aura-gray-400 uppercase text-sm tracking-wider">
              {item.category}
            </span>
            <h3 className="text-xl font-medium text-aura-gray-100 mb-2">{item.title}</h3>
            <p className="text-aura-gray-300 mb-4">{item.description}</p>
            
            {/* <button className="flex items-center text-aura-gray-200 hover:text-aura-gray-100 transition-colors">
              <span className="mr-2">View Project</span>
              <ExternalLink size={16} />
            </button> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioItem;