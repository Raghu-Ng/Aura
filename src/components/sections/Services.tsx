import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Camera, Video, Edit, Image, Share2, Mic, Film, Heart } from 'lucide-react';

const services = [
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Photography",
    description: "Professional photography that captures the essence of your brand and products.",
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Videography",
    description: "Cinematic video production that tells your story in a compelling way.",
  },
  {
    icon: <Edit className="w-8 h-8" />,
    title: "Video Editing",
    description: "Professional post-production to transform raw footage into captivating content.",
  },
  {
    icon: <Image className="w-8 h-8" />,
    title: "Photo Editing",
    description: "Expert retouching and color grading to perfect your visual assets.",
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: "Social Media",
    description: "Strategic content creation and management to build your online presence.",
  },
  {
    icon: <Mic className="w-8 h-8" />,
    title: "Podcast Production",
    description: "End-to-end podcast production from recording to distribution.",
  },
  {
    icon: <Film className="w-8 h-8" />,
    title: "Ad & Reel Creation",
    description: "Scroll-stopping ads and reels designed for engagement and conversion.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Wedding/Event Shoots",
    description: "Capturing special moments with a blend of artistry and professionalism.",
  },
];

const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="services" ref={containerRef} className="section-padding bg-black relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{ y, opacity }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-yellow-400/5" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">Our Services</h2>
          <p className="max-w-3xl mx-auto text-lg text-yellow-300">
            We offer a comprehensive range of creative services to help elevate your brand and connect with your audience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-yellow-400/5 p-6 rounded-lg hover:bg-yellow-400/10 transition-all duration-300"
            >
              <div className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium text-yellow-100 mb-3">{service.title}</h3>
              <p className="text-yellow-300 mb-4">{service.description}</p>
              <a 
                href="#" 
                className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                Learn more
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a 
            href="#contact" 
            className="inline-flex items-center bg-yellow-400 text-black font-medium py-3 px-8 rounded-lg hover:bg-yellow-300 transition-colors"
          >
            Discuss Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;