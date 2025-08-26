import { motion } from 'framer-motion';
import { HiArrowDown, HiMail, HiEye, HiSparkles } from 'react-icons/hi';
import { SiLinkedin, SiGithub, SiGmail } from 'react-icons/si';
import { fadeInUp, fadeInLeft, staggerContainer } from '../../utils/animations';
import { PERSONAL_INFO } from '../../utils/constants';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import Button from '../common/Button';
import profileImage from '../../assets/profile.jpg';

const Hero = () => {
  const { ref, isInView } = useIntersectionObserver();

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <SiLinkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/arjun-amit-kharade-308b82303/", 
      color: "hover:bg-blue-600 hover:text-white hover:scale-110",
      bgColor: "bg-blue-50/80 text-blue-600 backdrop-blur-sm border border-blue-200/50"
    },
    {
      name: "GitHub", 
      icon: <SiGithub className="w-5 h-5" />,
      url: "https://github.com/Akharade1809",
      color: "hover:bg-gray-800 hover:text-white hover:scale-110",
      bgColor: "bg-gray-50/80 text-gray-700 backdrop-blur-sm border border-gray-200/50"
    },
    {
      name: "Mail", 
      icon: <SiGmail className="w-5 h-5" />,
      url: "mailto:arjunkharade1643@gmail.com",
      color: "hover:bg-red-600 hover:text-white hover:scale-110",
      bgColor: "bg-red-50/80 text-red-700 backdrop-blur-sm border border-red-200/50"
    }
  ];

  // Navigation functions
  const handleGetInTouch = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleViewProjects = () => {
    const projectsElement = document.getElementById('projects');
    if (projectsElement) {
      projectsElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" ref={ref} className="min-h-screen flex items-center section-padding pt-24 relative overflow-hidden">
      {/* Enhanced Background with Glass Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyan-200/20 rounded-full blur-2xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container-max w-full relative">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          {/* Enhanced Content */}
          <motion.div variants={fadeInLeft} className="space-y-8 relative">
            {/* Glass card wrapper */}
            <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl -m-8 p-8"></div>
            
            <div className="relative z-10 space-y-8">
              <div className="space-y-4">
                <motion.div
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 rounded-full"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                >
                  <HiSparkles className="w-4 h-4 mr-2 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">Available for opportunities</span>
                </motion.div>
                
                <motion.p 
                  className="text-lg text-gray-600 font-medium"
                  variants={fadeInUp}
                >
                  Hello, I'm
                </motion.p>
                
                <motion.h1 
                  className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight"
                  variants={fadeInUp}
                >
                  {PERSONAL_INFO.name}
                </motion.h1>
                
                <motion.h2 
                  className="text-2xl lg:text-3xl font-medium bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent"
                  variants={fadeInUp}
                >
                  {PERSONAL_INFO.title}
                </motion.h2>
              </div>

              <motion.p 
                className="text-lg text-gray-600 leading-relaxed max-w-xl"
                variants={fadeInUp}
              >
                Passionate Mobile Application Developer with 1+ years of experience creating 
                innovative cross-platform solutions. Specialized in Android, Flutter, React-Native, and modern 
                frameworks, bringing ideas to life through clean code and exceptional user experiences.
              </motion.p>

              {/* Enhanced Social Links */}
              <motion.div 
                className="flex items-center space-x-4"
                variants={fadeInUp}
              >
                <span className="text-sm font-medium text-gray-600">Connect with me:</span>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl ${social.bgColor} ${social.color} transition-all duration-300 shadow-lg hover:shadow-xl`}
                      whileHover={{ scale: 1.1, y: -3, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Enhanced Action Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                variants={fadeInUp}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="primary" 
                    size="lg"
                    onClick={handleGetInTouch}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl backdrop-blur-sm border border-white/20"
                  >
                    <HiMail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={handleViewProjects}
                    className="bg-white/70 backdrop-blur-sm border-2 border-gray-300/50 hover:bg-gray-900 hover:text-white shadow-lg hover:shadow-xl"
                  >
                    <HiEye className="w-5 h-5 mr-2" />
                    View Projects
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Profile Image */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            variants={fadeInLeft}
          >
            <div className="relative">
              {/* Gradient rings */}
              <motion.div 
                className="absolute inset-0 w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 blur-xl"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.div 
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm"
                animate={{ 
                  boxShadow: [
                    "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    "0 25px 50px -12px rgba(59, 130, 246, 0.4)",
                    "0 25px 50px -12px rgba(147, 51, 234, 0.4)",
                    "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  ]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  repeatType: "reverse" 
                }}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={profileImage} 
                  alt="Arjun Kharade - Mobile Application Developer"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-purple-500/10"></div>
              </motion.div>
              
              {/* Enhanced Floating elements */}
              <motion.div 
                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-xl backdrop-blur-sm border border-white/20"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 180, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <div className="w-full h-full rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <HiSparkles className="w-6 h-6 text-white" />
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg backdrop-blur-sm border border-white/20"
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -180, -360],
                  scale: [1, 0.9, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <div className="w-full h-full rounded-full bg-white/20 backdrop-blur-sm"></div>
              </motion.div>

              {/* Status indicator */}
              <motion.div 
                className="absolute top-4 right-4 flex items-center space-x-2 bg-green-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg border border-white/20"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>Available</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs text-gray-500 font-medium">Scroll to explore</span>
          <motion.div 
            className="p-2 bg-white/70 backdrop-blur-sm rounded-full shadow-lg border border-white/20"
            whileHover={{ scale: 1.1 }}
          >
            <HiArrowDown className="w-4 h-4 text-gray-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
