import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="bg-aura-teal-700/40 backdrop-blur-sm rounded-lg p-6 h-full shadow-aura border border-aura-teal-600/30 hover:border-aura-teal-500/50 transition-all duration-300"
    >
      <div className="bg-aura-teal-600/50 p-3 rounded-md inline-block mb-4">
        <div className="text-aura-gray-200">
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl font-medium mb-3 text-aura-gray-100">{title}</h3>
      
      <p className="text-aura-gray-400">
        {description}
      </p>
      
      <div className="mt-6 pt-4 border-t border-aura-teal-600/30">
        <button className="text-aura-gray-300 hover:text-aura-gray-100 font-medium transition-colors duration-300">
          Learn more →
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;