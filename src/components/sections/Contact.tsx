import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const SERVICE_ID = 'service_hseblpd';
const TEMPLATE_ID = 'template_9x11wxp';
const PUBLIC_KEY = 'qgB76q7zN9U1lPrPH';

const Contact: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm<FormData>();
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);
    console.log('Form data being sent to EmailJS:', data);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          message: data.message,
        },
        PUBLIC_KEY
      );
      reset();
    } catch (error) {
      setSubmitError('There was an error sending your message. Please try again later.');
    }
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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-yellow-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Name is required' })}
                className={`w-full px-4 py-3 bg-yellow-400/5 border border-yellow-400/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400/50 text-yellow-200 ${errors.name ? 'border-red-500' : ''}`}
                placeholder="Your name"
                disabled={isSubmitting}
              />
              {errors.name && <span className="text-red-400 text-sm mt-1 block">{errors.name.message}</span>}
            </div>
            <div>
              <label htmlFor="email" className="block text-yellow-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email address',
                  },
                })}
                className={`w-full px-4 py-3 bg-yellow-400/5 border border-yellow-400/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400/50 text-yellow-200 ${errors.email ? 'border-red-500' : ''}`}
                placeholder="Your email"
                disabled={isSubmitting}
              />
              {errors.email && <span className="text-red-400 text-sm mt-1 block">{errors.email.message}</span>}
            </div>
            <div>
              <label htmlFor="phone" className="block text-yellow-300 mb-2">Phone</label>
              <input
                type="tel"
                id="phone"
                {...register('phone', { required: 'Phone number is required' })}
                className={`w-full px-4 py-3 bg-yellow-400/5 border border-yellow-400/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400/50 text-yellow-200 ${errors.phone ? 'border-red-500' : ''}`}
                placeholder="Your phone number"
                disabled={isSubmitting}
              />
              {errors.phone && <span className="text-red-400 text-sm mt-1 block">{errors.phone.message}</span>}
            </div>
            <div>
              <label htmlFor="message" className="block text-yellow-300 mb-2">Message</label>
              <textarea
                id="message"
                rows={6}
                {...register('message', { required: 'Message is required' })}
                className={`w-full px-4 py-3 bg-yellow-400/5 border border-yellow-400/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400/50 text-yellow-200 ${errors.message ? 'border-red-500' : ''}`}
                placeholder="Your message"
                disabled={isSubmitting}
              ></textarea>
              {errors.message && <span className="text-red-400 text-sm mt-1 block">{errors.message.message}</span>}
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-medium py-3 px-6 rounded-lg hover:bg-yellow-300 transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  Send Message <Send className="w-5 h-5" />
                </>
              )}
            </button>
            {isSubmitSuccessful && !submitError && (
              <div className="text-green-400 text-center mt-2">Thank you! Your message has been sent.</div>
            )}
            {submitError && (
              <div className="text-red-400 text-center mt-2">{submitError}</div>
            )}
          </form>
          
          <div className="space-y-8">
            <div className="bg-yellow-400/5 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-yellow-100 mb-4">Contact Information</h3>
              <div className="space-y-4">
                {/* <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-yellow-400 mt-1" />
                  <div>
                    <h4 className="text-yellow-200 font-medium">Location</h4>
                    <p className="text-yellow-300">123 Photography Street, New York, NY 10001</p>
                  </div>
                </div> */}
                
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-yellow-400 mt-1" />
                  <div>
                    <h4 className="text-yellow-200 font-medium">Phone</h4>
                    <p className="text-yellow-300">+91 9535858066</p>
                    <p className="text-yellow-300">+91 8105267256</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-yellow-400 mt-1" />
                  <div>
                    <h4 className="text-yellow-200 font-medium">Email</h4>
                    <p className="text-yellow-300">theauraproductions1@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-400/5 p-6 rounded-lg">
              <h3 className="text-xl font-medium text-yellow-100 mb-4">Business Hours</h3>
              <div className="space-y-2">
                <p className="text-yellow-300">Monday - Saturday: 9:00 AM - 10:00 PM</p>
                <p className="text-yellow-300">Sunday: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;