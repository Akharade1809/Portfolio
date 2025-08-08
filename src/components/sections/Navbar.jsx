import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX, HiDownload } from 'react-icons/hi';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { NAVIGATION_ITEMS } from '../../utils/constants';
import Button from '../common/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollPosition, isScrollingDown } = useScrollPosition();

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'skills', 'projects', 'education', 'contact'];
      const scrollPos = window.scrollY + 100; // Offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced navbar classes with better glass effect
  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrollPosition > 50 
      ? 'bg-white/80 backdrop-blur-xl shadow-xl border-b border-white/20' 
      : 'bg-transparent'
  } ${isScrollingDown ? '-translate-y-full' : 'translate-y-0'}`;

  const handleDownloadResume = () => {
    const resumeUrl = '/Arjun_Kharade_Mobile_Developer.pdf';
    window.open(resumeUrl, '_blank');
  };

  const handleNavClick = (href) => {
    setIsOpen(false);
    // Smooth scroll to section
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <motion.nav 
      className={navbarClasses}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Enhanced glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-xl"></div>
      
      <div className="container-max section-padding py-4 relative">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <motion.h1 
              className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent"
              whileHover={{
                background: "linear-gradient(to right, #1f2937, #1e40af, #7c3aed)",
                WebkitBackgroundClip: "text"
              }}
            >
              Portfolio
            </motion.h1>
          </motion.div>

          {/* Desktop Navigation with Active States */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item, index) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              
              return (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative font-medium transition-all duration-300 group ${
                    isActive 
                      ? 'text-blue-600 font-semibold' 
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                  
                  {/* Active underline */}
                  <motion.span 
                    className={`absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    } transition-transform duration-300`}
                    initial={false}
                    animate={{ scaleX: isActive ? 1 : 0 }}
                  />
                  
                  {/* Hover underline */}
                  <span className={`absolute inset-x-0 -bottom-1 h-0.5 bg-gray-900 transform transition-transform duration-200 ${
                    isActive ? 'scale-x-0' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </motion.button>
              );
            })}
            
            {/* Enhanced Download CV Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="primary" 
                size="sm" 
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <HiDownload className="w-4 h-4 mr-1" />
                Download CV
              </Button>
            </motion.div>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-white/20 backdrop-blur-md text-gray-900 hover:bg-white/30 transition-all duration-200 border border-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <HiX size={20} /> : <HiMenu size={20} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <motion.div 
          className={`md:hidden mt-4 ${isOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0, 
            height: isOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 space-y-4 shadow-2xl border border-white/20"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {NAVIGATION_ITEMS.map((item, index) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              
              return (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`block w-full text-left p-3 rounded-xl font-medium transition-all duration-200 ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      className="w-2 h-2 bg-white rounded-full ml-auto"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                    />
                  )}
                </motion.button>
              );
            })}
            
            {/* Enhanced Mobile Download Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button 
                variant="primary" 
                size="sm" 
                className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
                onClick={handleDownloadResume}
              >
                <HiDownload className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
