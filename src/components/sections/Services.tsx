import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Camera, Video, Edit, Image, Share2, Mic, Film, Heart, Package, Headphones, PenTool, CreditCard, Image as ImageIcon, User, Globe, Smartphone, Layout, Users } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Website Designing",
    description: "Create stunning, responsive websites that perfectly represent your brand and engage your audience.",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "App Development",
    description: "Build powerful mobile applications that deliver exceptional user experiences across all platforms.",
  },
  {
    icon: <Edit className="w-8 h-8" />,
    title: "Video Editing",
    description: "Transform raw footage into compelling stories with professional editing and post-production.",
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Posters and Brochures",
    description: "Design eye-catching marketing materials that effectively communicate your message.",
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: "Social Media",
    description: "Create and manage engaging social media content that builds your brand presence.",
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Advertisement & Product Shoots",
    description: "Professional photography that showcases your products in their best light.",
  },
  {
    icon: <Film className="w-8 h-8" />,
    title: "Ad & Reel Creation",
    description: "Create viral-worthy ads and reels that capture attention and drive engagement.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Wedding/Event Shoots",
    description: "Capture your special moments with our professional photography and videography services.",
  },
];

const additionalServices = [
  {
    icon: <Package className="w-8 h-8" />,
    title: "Merchandise & Branding",
    description: "Design custom merchandise and branding templates that make your brand stand out.",
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "Podcast Edits",
    description: "Professional podcast editing and post-production to ensure crystal-clear audio quality.",
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Logo Designing",
    description: "Create unique and memorable logos that perfectly represent your brand identity.",
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "ID Cards & Wrist Bands",
    description: "Design professional ID cards and wristbands for events, organizations, and businesses.",
  },
  {
    icon: <ImageIcon className="w-8 h-8" />,
    title: "Thumbnails & Banners",
    description: "Create eye-catching thumbnails and banners that drive engagement and clicks.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Model Shoots",
    description: "Professional model photography for fashion, commercial, and portfolio needs.",
  },
];

const Services: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
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
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>

        {/* More Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-flex items-center bg-yellow-400/10 text-yellow-400 font-medium py-3 px-8 rounded-lg hover:bg-yellow-400/20 transition-colors"
          >
            {showMore ? 'Show Less' : 'More Services'}
            <ArrowRight className={`ml-2 w-5 h-5 transition-transform ${showMore ? 'rotate-90' : ''}`} />
          </button>
        </motion.div>

        {/* Additional Services */}
        {showMore && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {additionalServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        )}

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