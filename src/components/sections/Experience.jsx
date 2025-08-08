import { motion } from 'framer-motion';
import { 
  HiBriefcase, HiCalendar, HiLocationMarker, HiCode, 
  HiLightBulb, HiTrendingUp, HiStar, HiChevronRight
} from 'react-icons/hi';
import { 
  SiKotlin, SiFlutter, SiReact, SiAndroid, SiIos, SiSwift,
  SiJetpackcompose, SiRedux, SiGit
} from 'react-icons/si';
import { fadeInUp, fadeInLeft, staggerContainer } from '../../utils/animations';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const experienceData = [
  {
    id: 1,
    position: "Mobile Application Developer",
    company: "Pluralsight",
    location: "Bangalore, India",
    duration: "Jan 2025 - June 2025",
    type: "Internship",
    companyLogo: "🎯",
    gradient: "from-purple-500 via-blue-500 to-cyan-500",
    bgGradient: "from-purple-50 to-blue-50",
    description: [
      "Developing features for the Pluralsight Skills app using Kotlin Multiplatform Mobile (KMM)",
      "Building platform-specific UIs with Jetpack Compose and SwiftUI",
      "Integrated Wootric SDK and implemented notification framework",
      "Actively resolving bugs and improving app performance"
    ],
    technologies: [
      { name: "Kotlin", icon: <SiKotlin className="text-purple-600" />, color: "bg-purple-100" },
      { name: "KMP", icon: <SiKotlin className="text-blue-600" />, color: "bg-blue-100" },
      { name: "Android", icon: <SiAndroid className="text-green-600" />, color: "bg-green-100" },
      { name: "Jetpack Compose", icon: <SiJetpackcompose className="text-blue-600" />, color: "bg-blue-100" },
      { name: "SwiftUI", icon: <SiSwift className="text-orange-600" />, color: "bg-orange-100" },
      { name: "iOS", icon: <SiIos className="text-gray-600" />, color: "bg-gray-100" },
      { name: "Git", icon: <SiGit className="text-red-600" />, color: "bg-red-100" }
    ],
    achievements: [
      "Cross-platform development expertise",
      "Native UI implementation",
      "SDK integration"
    ]
  },
  {
    id: 2,
    position: "Software Developer",
    company: "Explified",
    location: "Remote",
    duration: "June 2024 - Jan 2025",
    type: "Internship",
    companyLogo: "🚀",
    gradient: "from-emerald-500 via-teal-500 to-blue-500",
    bgGradient: "from-emerald-50 to-teal-50",
    description: [
      "Developed cross-platform mobile applications using Flutter framework",
      "Built responsive web applications with React.js and state management using Redux/Context API",
      "Participated in production deployment for mobile and web apps",
      "Successfully deployed applications on Google Play Store and Apple App Store"
    ],
    technologies: [
      { name: "Flutter", icon: <SiFlutter className="text-blue-500" />, color: "bg-blue-100" },
      { name: "React.js", icon: <SiReact className="text-blue-600" />, color: "bg-blue-100" },
      { name: "Redux", icon: <SiRedux className="text-purple-600" />, color: "bg-purple-100" },
      { name: "React Native", icon: <SiReact className="text-cyan-600" />, color: "bg-cyan-100" },
      { name: "Context API", icon: <SiReact className="text-blue-500" />, color: "bg-blue-100" },
      { name: "Play Store", icon: <SiAndroid className="text-green-600" />, color: "bg-green-100" },
      { name: "App Store", icon: <SiIos className="text-gray-600" />, color: "bg-gray-100" }
    ],
    achievements: [
      "Full-stack development",
      "Production deployments",
      "Store publications"
    ]
  }
];

const TechnologyTag = ({ tech, index }) => (
  <motion.div
    className={`flex items-center space-x-2 px-3 py-2 ${tech.color} rounded-full border border-white/50 shadow-sm`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
    whileHover={{ scale: 1.05, y: -2 }}
  >
    <span className="text-sm">{tech.icon}</span>
    <span className="text-xs font-medium text-gray-700">{tech.name}</span>
  </motion.div>
);

const ExperienceCard = ({ experience, index, isInView }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      className="relative flex items-center w-full mb-12"
      variants={fadeInUp}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ delay: index * 0.3 }}
    >
      {/* Enhanced Timeline */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20">
        <motion.div 
          className={`relative p-1 bg-gradient-to-r ${experience.gradient} rounded-full shadow-xl`}
          animate={{ 
            scale: [1, 1.1, 1],
            boxShadow: [
              "0 0 20px rgba(0,0,0,0.1)",
              "0 0 30px rgba(59,130,246,0.3)",
              "0 0 20px rgba(0,0,0,0.1)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <span className="text-sm">{experience.companyLogo}</span>
          </div>
        </motion.div>
        
        {index < experienceData.length - 1 && (
          <motion.div 
            className={`w-1 h-32 bg-gradient-to-b ${experience.gradient} mt-4 opacity-30`}
            initial={{ height: 0 }}
            animate={{ height: 128 }}
            transition={{ delay: (index * 0.3) + 0.5, duration: 0.8 }}
          />
        )}
      </div>

      {/* Enhanced Content Card - Fixed Alignment */}
      <motion.div 
        className={`w-full ${isEven ? 'pr-1/2' : 'pl-1/2'}`}
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className={`relative bg-gradient-to-br ${experience.bgGradient} backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8 overflow-hidden ${
          isEven ? 'mr-12' : 'ml-12'
        }`}>
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className={`absolute inset-0 bg-gradient-to-br ${experience.gradient}`}></div>
          </div>

          {/* Header - Fixed to always align left */}
          <div className="text-left mb-6">
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: (index * 0.3) + 0.1 }}
            >
              {experience.position}
            </motion.h3>
            
            <div className="flex items-center justify-start space-x-4 mb-3">
              <div className="flex items-center text-gray-700">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${experience.gradient} text-white mr-2`}>
                  <HiBriefcase className="w-4 h-4" />
                </div>
                <span className="font-semibold">{experience.company}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-start text-sm text-gray-600">
              <div className="flex items-center">
                <HiLocationMarker className="w-4 h-4 mr-1 text-red-500" />
                <span>{experience.location}</span>
              </div>
              <div className="flex items-center">
                <HiCalendar className="w-4 h-4 mr-1 text-blue-500" />
                <span>{experience.duration}</span>
              </div>
              <span className="px-3 py-1 bg-white/70 text-gray-700 text-xs rounded-full font-medium shadow-sm">
                {experience.type}
              </span>
            </div>
          </div>

          {/* Achievements highlight - Fixed alignment */}
          <div className="mb-6 text-left">
            <h4 className="flex items-center text-sm font-semibold text-gray-800 mb-2">
              <HiStar className="w-4 h-4 mr-1 text-yellow-500" />
              Key Achievements
            </h4>
            <div className="flex flex-wrap gap-2 justify-start">
              {experience.achievements.map((achievement, idx) => (
                <motion.span
                  key={idx}
                  className="px-2 py-1 bg-white/80 text-gray-700 text-xs rounded-md font-medium shadow-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (index * 0.3) + 0.4 + (idx * 0.1) }}
                >
                  {achievement}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Description - Fixed alignment */}
          <div className="mb-6 text-left">
            <h4 className="flex items-center text-sm font-semibold text-gray-800 mb-3">
              <HiCode className="w-4 h-4 mr-1 text-purple-500" />
              Responsibilities
            </h4>
            <ul className="space-y-3">
              {experience.description.map((item, idx) => (
                <motion.li 
                  key={idx} 
                  className="flex items-start text-gray-700 text-sm leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (index * 0.3) + 0.3 + (idx * 0.1) }}
                >
                  <HiChevronRight className="w-3 h-3 mt-1 mr-2 text-blue-500 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Technologies - Fixed alignment */}
          <div className="text-left">
            <h4 className="flex items-center text-sm font-semibold text-gray-800 mb-3">
              <HiLightBulb className="w-4 h-4 mr-1 text-orange-500" />
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2 justify-start">
              {experience.technologies.map((tech, idx) => (
                <TechnologyTag key={tech.name} tech={tech} index={idx} />
              ))}
            </div>
          </div>

          {/* Progress indicator */}
          <motion.div 
            className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${experience.gradient}`}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ delay: (index * 0.3) + 0.8, duration: 1 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const MobileExperienceCard = ({ experience, index, isInView }) => (
  <motion.div
    className="relative pl-12 pb-8"
    variants={fadeInLeft}
    initial="initial"
    animate={isInView ? "animate" : "initial"}
    transition={{ delay: index * 0.2 }}
  >
    <div className="absolute left-0 top-0 flex flex-col items-center">
      <motion.div 
        className={`p-1 bg-gradient-to-r ${experience.gradient} rounded-full shadow-lg`}
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <span className="text-lg">{experience.companyLogo}</span>
        </div>
      </motion.div>
      {index < experienceData.length - 1 && (
        <div className={`w-1 h-full bg-gradient-to-b ${experience.gradient} mt-2 opacity-30`}></div>
      )}
    </div>

    <motion.div 
      className={`bg-gradient-to-br ${experience.bgGradient} rounded-2xl shadow-xl border border-white/20 p-6 relative overflow-hidden`}
      whileHover={{ scale: 1.02, y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Mobile header */}
      <div className="flex items-center justify-between mb-4">
        <span className="px-2 py-1 bg-white/70 text-gray-600 text-xs rounded-full font-medium">
          {experience.type}
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {experience.position}
      </h3>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-700">
          <div className={`p-1.5 rounded-lg bg-gradient-to-r ${experience.gradient} text-white mr-2`}>
            <HiBriefcase className="w-3 h-3" />
          </div>
          <span className="font-semibold">{experience.company}</span>
        </div>
        
        <div className="flex flex-wrap gap-3 text-sm text-gray-600">
          <div className="flex items-center">
            <HiLocationMarker className="w-3 h-3 mr-1 text-red-500" />
            <span>{experience.location}</span>
          </div>
          <div className="flex items-center">
            <HiCalendar className="w-3 h-3 mr-1 text-blue-500" />
            <span>{experience.duration}</span>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex flex-wrap gap-1">
          {experience.achievements.map((achievement, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-white/80 text-gray-700 text-xs rounded-md font-medium"
            >
              {achievement}
            </span>
          ))}
        </div>
      </div>

      <ul className="space-y-2 mb-4">
        {experience.description.map((item, idx) => (
          <li key={idx} className="text-gray-700 text-sm flex items-start">
            <HiChevronRight className="w-3 h-3 mt-0.5 mr-2 text-blue-500 flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech, idx) => (
          <TechnologyTag key={tech.name} tech={tech} index={idx} />
        ))}
      </div>
    </motion.div>
  </motion.div>
);

const Experience = () => {
  const { ref, isInView } = useIntersectionObserver();

  // Function to handle resume download
  const handleDownloadResume = () => {
  // Your resume should be in the public folder, not src/assets
  const resumeUrl = 'Arjun_Kharade_Mobile_Developer.pdf';
  window.open(resumeUrl, '_blank');
};

  return (
    <section id="experience" ref={ref} className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-max relative">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full mb-6"
            variants={fadeInUp}
          >
            <HiTrendingUp className="w-4 h-4 mr-2" />
            Professional Journey
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6"
            variants={fadeInUp}
          >
            Experience Timeline
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Building expertise through hands-on experience in mobile development, 
            cross-platform solutions, and modern software engineering practices.
          </motion.p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {experienceData.map((experience, index) => (
            <ExperienceCard 
              key={experience.id} 
              experience={experience} 
              index={index} 
              isInView={isInView} 
            />
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {experienceData.map((experience, index) => (
            <MobileExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Working Download Resume Button */}
        <motion.div 
          className="text-center mt-20"
          variants={fadeInUp}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ delay: 1.2 }}
        >
          <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            <div className="relative">
              <h3 className="text-2xl font-bold mb-4">Ready to Collaborate?</h3>
              <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                Let's discuss how my mobile development expertise and passion for innovation 
                can contribute to your next project.
              </p>
              <motion.button
                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-2xl hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadResume}
              >
                <HiBriefcase className="w-5 h-5 mr-2" />
                Download Resume
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <HiChevronRight className="w-4 h-4" />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
