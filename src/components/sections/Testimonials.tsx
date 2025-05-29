import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import TestimonialCard from '../ui/TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'Coastal Retreat Resort',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'The photography and video work AuRa Productions created for our resort captured the essence of our brand perfectly. Their team was professional, creative, and delivered beyond our expectations.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'Innovate Tech',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'Working with AuRa on our product photography elevated our brand to a new level. Their attention to detail and understanding of our vision resulted in images that truly showcase our products.',
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      company: 'Mindful Living Podcast',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'AuRa Productions transformed our podcast from amateur to professional. Their production quality, branding, and strategy have helped us grow our listener base by 200% in just three months.',
    },
    {
      id: 4,
      name: 'David Thompson',
      company: 'Artisan Collective',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'The website AuRa designed for our collective perfectly balances aesthetics and functionality. Our online sales have increased dramatically since the launch.',
    },
  ];
  
  const sliderRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -330, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 330, behavior: 'smooth' });
    }
  };
  
  return (
    <section id="testimonials" ref={sectionRef} className="section-padding bg-black">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-6">Client Testimonials</h2>
          <p className="max-w-3xl mx-auto text-lg text-aura-yellow-300">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 z-10 hidden md:block">
            <button 
              onClick={scrollLeft}
              className="bg-aura-yellow-400/10 hover:bg-aura-yellow-400/20 text-aura-yellow-300 p-3 rounded-full shadow-aura transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 z-10 hidden md:block">
            <button 
              onClick={scrollRight}
              className="bg-aura-yellow-400/10 hover:bg-aura-yellow-400/20 text-aura-yellow-300 p-3 rounded-full shadow-aura transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Testimonials Slider */}
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto snap-x snap-mandatory py-8 px-2 -mx-4 md:mx-0 scrollbar-hide"
            style={{ scrollbarWidth: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="flex-shrink-0 w-[300px] sm:w-[350px] md:w-[400px] px-4 snap-center"
              >
                <TestimonialCard 
                  testimonial={testimonial}
                  index={index}
                  isInView={isInView}
                />
              </div>
            ))}
          </div>
          
          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === 0 ? 'bg-aura-yellow-400' : 'bg-aura-yellow-400/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;