import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  service: string;
  message: string;
};

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  
  const onSubmit = (data: FormData) => {
    console.log(data);
    // Here you would typically send the form data to your server
    alert('Form submitted! In a real application, this would be sent to the server.');
  };
  
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">Get in Touch</h2>
          <p className="max-w-3xl mx-auto text-lg text-aura-gray-400">
            Ready to start your project? Contact us today to discuss how we can bring your vision to life.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-yellow-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-yellow-400/5 border border-yellow-400/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400/50 text-yellow-200"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-yellow-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-yellow-400/5 border border-yellow-400/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400/50 text-yellow-200"
                placeholder="Your email"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-yellow-300 mb-2">Message</label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 bg-yellow-400/5 border border-yellow-400/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400/50 text-yellow-200"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <button className="w-full bg-yellow-400 text-black font-medium py-3 px-6 rounded-lg hover:bg-yellow-300 transition-colors">
              Send Message
            </button>
          </div>
          
          <div className="space-y-8">
            <div className="bg-yellow-400/5 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-yellow-100 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-yellow-400 mt-1" />
                  <div>
                    <h4 className="text-yellow-200 font-medium">Location</h4>
                    <p className="text-yellow-300">123 Photography Street, New York, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-yellow-400 mt-1" />
                  <div>
                    <h4 className="text-yellow-200 font-medium">Phone</h4>
                    <p className="text-yellow-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-yellow-400 mt-1" />
                  <div>
                    <h4 className="text-yellow-200 font-medium">Email</h4>
                    <p className="text-yellow-300">contact@aurastudios.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-400/5 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-yellow-100 mb-4">Business Hours</h3>
              <div className="space-y-2">
                <p className="text-yellow-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-yellow-300">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-yellow-300">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;