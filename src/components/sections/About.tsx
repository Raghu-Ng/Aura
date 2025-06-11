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
    { icon: <Camera size={32} />, count: 70, label: 'Projects' },
    { icon: <Film size={32} />, count: 45, label: 'Collaborations' },
    { icon: <Award size={32} />, count: 2, label: 'Awards' },
    { icon: <Users size={32} />, count: 70, label: 'Happy Clients' }
  ];
  
  return (
    <section id="about" ref={sectionRef} className="section-padding bg-black">
      <div className="container mx-auto container-padding">
        <div className="mb-16 text-center">
          <h2 className="reveal-element mb-6">About AuRa</h2>
          <p className="reveal-element max-w-3xl mx-auto text-lg text-yellow-300 ">
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
            <div className="aspect-w-4` aspect-h-3 overflow-hidden rounded-lg">
              <img 
                // src="https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                //src="/src/assets/images/side.png" 
                src="/images/Side.png" 
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
          <div className="space-y-15">
            <div className="reveal-element">
              <h3 className="mb-4 text-yellow-100">Our Story</h3>
              <p className="text-yellow-300" style={{ fontSize: '20px' }}>
              Once upon a coffee-fueled brainstorm in 2021, The AuRa Productions was born — not in a fancy boardroom, but probably in a cramped room with too many sticky notes and not enough sleep. Our big idea? To flip visual storytelling on its head and actually make it feel something.<br></br>
Fast forward to today, we're no longer just a "small team with big dreams" — we're a full-blown creative agency helping brands speak human (and occasionally meme) fluently. Whether it's a viral ad or a cinematic brand story, we don’t just make content — we create experiences.
<br></br>     
<br></br>         </p>
            </div>
            
            <div className="reveal-element">
              <h3 className="mb-4 text-yellow-100">Our Approach</h3>
              <p className="text-yellow-300"  style={{ fontSize: '20px' }}>
              Every brand’s got a story — not just the “About Us” kind, but the goosebump-giving, doomscroll-stopping kind.<br></br>
We’re here to dig that out (without making it weird…).<br></br>
Our secret sauce? We don’t reveal it. Wanna know?<br></br>
Let’s talk. 😉<br></br>
<br></br>
              </p>
            </div>
            
            <div className="reveal-element">
              <h3 className="mb-4 text-yellow-100">Our Team</h3>
              <p className="text-yellow-300"  style={{ fontSize: '20px' }}>
              We’re a bunch of strategy nerds, design geeks, content wizards, and meme lords — united by one mission: making your brand impossible to ignore.<br></br>

Some of us speak in pixels, others in punchlines, but together we turn chaos into clicks and scrolls into conversions.<br></br>

We’ve got the skills, the ideas, and just the right amount of caffeine-fueled madness.
Wanna meet the brains behind the magic?<br></br>
Slide into our inbox. ✉️✨
<br></br>
<br></br>
              </p>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div 
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-20"
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