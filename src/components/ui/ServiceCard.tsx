import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
      className="group bg-yellow-400/5 p-6 rounded-lg hover:bg-yellow-400/10 transition-all duration-300"
    >
      <div className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl font-medium text-yellow-100 mb-3">{title}</h3>
      
      <p className="text-yellow-300 mb-4">
        {description}
      </p>
      
      <a 
        href="#contact" 
        className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
      >
        Learn more
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </motion.div>
  );
};

export default ServiceCard;