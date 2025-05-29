import React from 'react';
import { Camera, Instagram, Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-aura-yellow-300">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Camera className="w-6 h-6 text-aura-yellow-300" />
              <span className="font-display text-xl text-aura-yellow-100">
                The AuRa Productions
              </span>
            </div>
            <p className="mb-6">
              Creating captivating digital experiences that elevate brands and engage audiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-aura-yellow-400 hover:text-aura-yellow-200 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-aura-yellow-400 hover:text-aura-yellow-200 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-aura-yellow-400 hover:text-aura-yellow-200 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-aura-yellow-400 hover:text-aura-yellow-200 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-aura-yellow-100 font-display text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-aura-yellow-200 transition-colors">Photography</a></li>
              <li><a href="#" className="hover:text-aura-yellow-200 transition-colors">Videography</a></li>
              <li><a href="#" className="hover:text-aura-yellow-200 transition-colors">Website Design</a></li>
              <li><a href="#" className="hover:text-aura-yellow-200 transition-colors">Social Media Management</a></li>
              <li><a href="#" className="hover:text-aura-yellow-200 transition-colors">Podcast Production</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-aura-yellow-100 font-display text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-aura-yellow-200 transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-aura-yellow-200 transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-aura-yellow-200 transition-colors">Client Reviews</a></li>
              <li><a href="#" className="hover:text-aura-yellow-200 transition-colors">Privacy Policy</a></li>
              <li><a href="#contact" className="hover:text-aura-yellow-200 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-aura-yellow-200 font-display text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 flex-shrink-0 text-aura-yellow-300" />
                <span className="text-aura-yellow-300">123 Creative St, Digital City, DC 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-aura-yellow-300" />
                <span className="text-aura-yellow-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-aura-yellow-300" />
                <span className="text-aura-yellow-300">info@auraproductions.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-aura-yellow-400/20 text-center md:flex md:justify-between md:items-center">
          <p className="text-aura-yellow-300">&copy; {currentYear} The AuRa Productions. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="mx-2 text-aura-yellow-300 hover:text-aura-yellow-200 transition-colors">Terms</a>
            <a href="#" className="mx-2 text-aura-yellow-300 hover:text-aura-yellow-200 transition-colors">Privacy</a>
            <a href="#" className="mx-2 text-aura-yellow-300 hover:text-aura-yellow-200 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;