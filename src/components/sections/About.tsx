import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Camera, Film, Award, Users } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (sectionRef.current) {
      const textElements = sectionRef.current.querySelectorAll('.reveal-element');
      
      textElements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    }
  }, []);
  
  const stats = [
    { icon: <Camera size={32} />, count: 300, label: 'Photo Projects' },
    { icon: <Film size={32} />, count: 150, label: 'Video Productions' },
    { icon: <Award size={32} />, count: 15, label: 'Industry Awards' },
    { icon: <Users size={32} />, count: 120, label: 'Happy Clients' }
  ];
  
  return (
    <section id="about" ref={sectionRef} className="section-padding bg-black">
      <div className="container mx-auto container-padding">
        <div className="mb-16 text-center">
          <h2 className="reveal-element mb-6">About AuRa</h2>
          <p className="reveal-element max-w-3xl mx-auto text-lg text-yellow-300">
            The AuRa Productions is a creative digital marketing agency specializing in premium visual storytelling, 
            brand development, and digital content creation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg">
              <img 
                src="https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Creative team working together" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-yellow-400/10 p-6 rounded-lg shadow-aura max-w-xs">
              <p className="text-yellow-200 italic">
                "We don't just capture moments, we create experiences that resonate."
              </p>
            </div>
          </motion.div>
          
          {/* Text Content */}
          <div className="space-y-6">
            <div className="reveal-element">
              <h3 className="mb-4 text-yellow-100">Our Story</h3>
              <p className="text-yellow-300">
                Founded in 2018, The AuRa Productions began as a small photography studio with a vision to 
                redefine visual storytelling. Today, we've grown into a full-service creative agency, 
                partnering with brands to create compelling content that connects with audiences.
              </p>
            </div>
            
            <div className="reveal-element">
              <h3 className="mb-4 text-yellow-100">Our Approach</h3>
              <p className="text-yellow-300">
                We believe that every brand has a unique story to tell. Our collaborative approach combines 
                technical expertise with creative vision to develop authentic content that captures the 
                essence of your brand and resonates with your audience.
              </p>
            </div>
            
            <div className="reveal-element">
              <h3 className="mb-4 text-yellow-100">Our Team</h3>
              <p className="text-yellow-300">
                Our diverse team of photographers, videographers, designers, and strategists brings a 
                wealth of experience and a passion for storytelling to every project. We're united by a 
                commitment to excellence and a drive to push creative boundaries.
              </p>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div 
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center bg-yellow-400/5 p-6 rounded-lg text-center"
            >
              <div className="text-yellow-300 mb-4">
                {stat.icon}
              </div>
              <h4 className="text-4xl font-semibold mb-2 text-yellow-100">
                {stat.count}+
              </h4>
              <p className="text-yellow-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;