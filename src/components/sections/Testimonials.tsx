import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import TestimonialCard from '../ui/TestimonialCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const clientLogos = [
  {
    name: 'Invntree',
    logo: 'https://www.invntree.com/wp-content/uploads/2023/03/cropped-invntree-logo.png',
  },
  {
    name: 'Canman',
    logo: 'https://canman.co/wp-content/uploads/2019/10/cropped-logo-2.png',
  },
  {
    name: 'White Black Border',
    logo: '/images/white black-border.png',
  },
  // First set of duplicates
  {
    name: 'Invntree',
    logo: 'https://www.invntree.com/wp-content/uploads/2023/03/cropped-invntree-logo.png',
  },
  {
    name: 'Canman',
    logo: 'https://canman.co/wp-content/uploads/2019/10/cropped-logo-2.png',
  },
  {
    name: 'White Black Border',
    logo: '/images/white black-border.png',
  },
  // Second set of duplicates
  {
    name: 'Invntree',
    logo: 'https://www.invntree.com/wp-content/uploads/2023/03/cropped-invntree-logo.png',
  },
  {
    name: 'Canman',
    logo: 'https://canman.co/wp-content/uploads/2019/10/cropped-logo-2.png',
  },
  {
    name: 'White Black Border',
    logo: '/images/white black-border.png',
  },
  // Third set of duplicates
  {
    name: 'Invntree',
    logo: 'https://www.invntree.com/wp-content/uploads/2023/03/cropped-invntree-logo.png',
  },
  {
    name: 'Canman',
    logo: 'https://canman.co/wp-content/uploads/2019/10/cropped-logo-2.png',
  },
  {
    name: 'White Black Border',
    logo: '/images/white black-border.png',
  },
  // Fourth set of duplicates
  {
    name: 'Invntree',
    logo: 'https://www.invntree.com/wp-content/uploads/2023/03/cropped-invntree-logo.png',
  },
  {
    name: 'Canman',
    logo: 'https://canman.co/wp-content/uploads/2019/10/cropped-logo-2.png',
  },
  {
    name: 'White Black Border',
    logo: '/images/white black-border.png',
  },
];

const Testimonials: React.FC = () => {
  const testimonials = [
    // {
    //   id: 1,
    //   name: 'Kartik Puttaiah',
    //   company: 'Founder,\nCanman',
    //   image: '/images/karthik.jpg',
    //   quote: 'The Aura Productions was seamless.They truly understood Canman’s vision and delivered an ad that speaks to our audience.Looking forward to more collaborations!',
    // },
    {
      id: 2,
      name: 'Akash Kengua',
      company: 'Marketing Lead,\nInvntree',
      image: '/images/akash.jpg',
      quote: 'The AURA Productions team did a great job editing our podcast videos—clean, professional, and exactly what we needed. They were super easy to work with and delivered everything seamlessly.',
    },
    {
      id: 3,
      name: 'Guru Raj',
      company: 'Founder,\nDance Beatz Studio',
      image: '/images/gururaj.png',
      quote: 'The AURA Productions team, led by Raghava, did a fantastic job on our complete branding—from posters and flyers to banners and business cards. Their creativity and attention to detail truly stood out. Excited for more collaborations ahead!',
    },
    {
      id: 4,
      name: 'Arjun Vibe',
      company: 'founder,\nArtisan Collective',
      image: 'https://images.pexels.com/photos/14564834/pexels-photo-14564834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      quote: 'The website AuRa designed for our collective perfectly balances aesthetics and functionality. Our online sales have increased since the launch.',
    },
  ];
  
  const sliderRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const logoScrollRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const scrollLogos = () => {
      if (logoScrollRef.current) {
        logoScrollRef.current.scrollLeft += 1;
        if (logoScrollRef.current.scrollLeft >= logoScrollRef.current.scrollWidth / 2) {
          logoScrollRef.current.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scrollLogos, 30);
    return () => clearInterval(interval);
  }, []);
  
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

        {/* Client Logos Section */}
        {/* <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-8"
          >
            <h3 className="text-xl text-aura-yellow-300">Trusted by Industry Leaders</h3>
          </motion.div>

          <div 
            ref={logoScrollRef}
            className="flex overflow-hidden relative"
            style={{ scrollbarWidth: 'none' }}
          >
            <div className="flex animate-scroll">
              {clientLogos.map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex-shrink-0 px-8 mx-4"
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="h-12 object-contain filter brightness-0 saturate-100 invert sepia-100 hue-rotate-[320deg] opacity-70 hover:opacity-100 transition-opacity"
                    style={{ filter: 'brightness(0) saturate(100%) invert(77%) sepia(29%) saturate(1032%) hue-rotate(359deg) brightness(103%) contrast(107%)' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;