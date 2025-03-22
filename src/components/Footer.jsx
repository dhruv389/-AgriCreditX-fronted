import React, { useState, useEffect } from 'react';
import { 
  FaLeaf, 
  FaHome, 
  FaUsers, 
  FaFileAlt, 
  FaChartPie, 
  FaChartBar, 
  FaCog, 
  FaSignOutAlt,
  FaBell,
  FaUserCircle,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
  FaSeedling,
  FaHandHoldingUsd,
  FaRegCopyright
} from 'react-icons/fa';






const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Handle scroll event to show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-black relative">
      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop} 
        className={`fixed right-8 bottom-8 p-3 rounded-full bg-green-400/80 backdrop-blur-md hover:bg-green-500/80 transition-all z-20 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{boxShadow: '0 4px 15px rgba(74, 222, 128, 0.3)'}}
      >
        <FaArrowUp className="text-white" />
      </button>
      
      {/* Main Footer */}
      <div className="backdrop-blur-md bg-gray-900/30 pt-16 pb-8 border-t border-gray-800/50" style={{boxShadow: '0 -4px 30px rgba(0, 0, 0, 0.1)'}}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="absolute -inset-1 bg-green-500 rounded-full blur opacity-30"></div>
                  <FaSeedling className="relative text-green-400 text-3xl" />
                </div>
                <div className="font-bold text-xl tracking-wider">
                  <span className="text-white">Agri</span>
                  <span className="text-green-400">CreditX</span>
                </div>
              </div>
              <p className="text-gray-300">
                Empowering farmers with innovative financial solutions to grow their agricultural businesses sustainably.
              </p>
              
              {/* Social Media Links */}
              <div className="flex space-x-4 pt-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800/70 hover:bg-green-400/20 flex items-center justify-center transition-colors group">
                  <FaFacebookF className="text-gray-400 group-hover:text-green-400 transition-colors" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800/70 hover:bg-green-400/20 flex items-center justify-center transition-colors group">
                  <FaTwitter className="text-gray-400 group-hover:text-green-400 transition-colors" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800/70 hover:bg-green-400/20 flex items-center justify-center transition-colors group">
                  <FaInstagram className="text-gray-400 group-hover:text-green-400 transition-colors" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800/70 hover:bg-green-400/20 flex items-center justify-center transition-colors group">
                  <FaLinkedinIn className="text-gray-400 group-hover:text-green-400 transition-colors" />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-green-400 font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors inline-flex items-center">
                    <span className="h-1 w-1 bg-green-400 mr-2 rounded-full"></span>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors inline-flex items-center">
                    <span className="h-1 w-1 bg-green-400 mr-2 rounded-full"></span>
                    Loan Programs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors inline-flex items-center">
                    <span className="h-1 w-1 bg-green-400 mr-2 rounded-full"></span>
                    Agricultural Advisory
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors inline-flex items-center">
                    <span className="h-1 w-1 bg-green-400 mr-2 rounded-full"></span>
                    Farmers Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors inline-flex items-center">
                    <span className="h-1 w-1 bg-green-400 mr-2 rounded-full"></span>
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-green-400 transition-colors inline-flex items-center">
                    <span className="h-1 w-1 bg-green-400 mr-2 rounded-full"></span>
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-green-400 font-semibold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="text-green-400 mt-1 mr-3" />
                  <span className="text-gray-300">
                    123 Agri Tower, Rural District<br />
                    Farming State, 560001
                  </span>
                </li>
                <li className="flex items-center">
                  <FaPhoneAlt className="text-green-400 mr-3" />
                  <span className="text-gray-300">+91 800-123-4567</span>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="text-green-400 mr-3" />
                  <span className="text-gray-300">info@farm-credit.com</span>
                </li>
              </ul>
            </div>
            
            {/* Newsletter */}
            <div>
              <h3 className="text-green-400 font-semibold text-lg mb-4">Subscribe to Newsletter</h3>
              <p className="text-gray-300 mb-4">Stay updated with our latest news and offers.</p>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full py-3 px-4 rounded-lg bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-500"
                />
                <button className="absolute right-1 top-1 bottom-1 px-4 bg-green-400 hover:bg-green-500 text-black rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></div>
          
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 flex items-center">
              <FaRegCopyright className="mr-2" /> 
              <span>2025 AgriCreditX. All rights reserved.</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer