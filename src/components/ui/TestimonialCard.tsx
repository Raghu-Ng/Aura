import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    company: string;
    image: string;
    quote: string;
  };
  index: number;
  isInView: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-yellow-400/5 p-6 rounded-lg shadow-aura h-full"
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
          />
        </div>
        <div>
          <h4 className="text-lg font-medium text-yellow-100">{testimonial.name}</h4>
          <p className="text-yellow-300">{testimonial.company}</p>
        </div>
      </div>
      
      <div className="mt-4">
        <Quote className="w-6 h-6 text-yellow-400 mb-2" />
        <p className="text-yellow-200 italic">
          {testimonial.quote}
        </p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;