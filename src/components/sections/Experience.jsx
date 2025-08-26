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
    gradient: "from-purple-500 via-blue-500 to-cyan-500",
    bgGradient: "from-purple-50 to-blue-50",
    description: [
      "Developed features for the Pluralsight Skills app using Kotlin Multiplatform Mobile (KMM)",
      "Built platform-specific UIs with Jetpack Compose and SwiftUI",
      "Integrated Wootric SDK and implemented notification framework",
      "Resolved bugs and improved app performance"
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
  // ... (other experiences as before)
  {
    id: 2,
    position: "Software Developer",
    company: "Explified",
    location: "Remote",
    duration: "June 2024 - Jan 2025",
    type: "Internship",
    gradient: "from-emerald-500 via-teal-500 to-blue-500",
    bgGradient: "from-emerald-50 to-teal-50",
    description: [
      "Developed cross-platform mobile applications using Flutter framework",
      "Built responsive web applications with React.js and state management using Redux/Context API",
      "Participated in production deployment for mobile and web apps",
      "Deployed apps on Google Play Store and Apple App Store"
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

const ExperienceCard = ({ experience, index, isInView }) => (
  <motion.div
    className="relative flex flex-col w-full"
    variants={fadeInUp}
    initial="initial"
    animate={isInView ? "animate" : "initial"}
    transition={{ delay: index * 0.3 }}
  >
    {/* Container: card appearance only, no logo/timeline */}
    <div className={`relative bg-gradient-to-br ${experience.bgGradient} backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-4 sm:p-6 md:p-8 mb-8`}>
      <div className="mb-6 text-left">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{experience.position}</h3>
        <div className="flex flex-wrap items-center gap-4 mb-3">
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
      {/* Achievements */}
      <div className="mb-4 text-left">
        <h4 className="flex items-center text-sm font-semibold text-gray-800 mb-2">
          <HiStar className="w-4 h-4 mr-1 text-yellow-500" />
          Key Achievements
        </h4>
        <div className="flex flex-wrap gap-2">
          {experience.achievements.map((achievement, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-white/80 text-gray-700 text-xs rounded-md font-medium shadow-sm"
            >
              {achievement}
            </span>
          ))}
        </div>
      </div>
      {/* Responsibilities */}
      <div className="mb-4 text-left">
        <h4 className="flex items-center text-sm font-semibold text-gray-800 mb-3">
          <HiCode className="w-4 h-4 mr-1 text-purple-500" />
          Responsibilities
        </h4>
        <ul className="space-y-3">
          {experience.description.map((item, idx) => (
            <li key={idx} className="flex items-start text-gray-700 text-sm leading-relaxed">
              <HiChevronRight className="w-3 h-3 mt-1 mr-2 text-blue-500 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Tech Stack */}
      <div className="text-left">
        <h4 className="flex items-center text-sm font-semibold text-gray-800 mb-3">
          <HiLightBulb className="w-4 h-4 mr-1 text-orange-500" />
          Tech Stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, idx) => (
            <TechnologyTag key={tech.name} tech={tech} index={idx} />
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  const { ref, isInView } = useIntersectionObserver();

  const handleDownloadResume = () => {
    const resumeUrl = 'Arjun_Kharade_Mobile_Developer.pdf';
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id="experience" ref={ref} className="section-padding bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* BG decorations - kept subtle */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      <div className="container-max relative">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mb-10"
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full mb-6"
            variants={fadeInUp}
          >
            <HiTrendingUp className="w-4 h-4 mr-2" />
            Professional Journey
          </motion.div>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6"
            variants={fadeInUp}
          >
            Experience Timeline
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Building expertise through hands-on experience in mobile development, cross-platform solutions, and modern software engineering practices.
          </motion.p>
        </motion.div>
        {/* Responsive grid for experience cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
        {/* Download Resume Button */}
        <motion.div
          className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl shadow-2xl p-10 mt-20 text-white overflow-hidden flex justify-center items-center"
          variants={fadeInUp}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ delay: 1.2 }}
        >
          <button
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-2xl hover:bg-gray-100 transition-all duration-200 shadow-xl hover:shadow-2xl"
            onClick={handleDownloadResume}
          >
            <HiBriefcase className="w-5 h-5 mr-2" />
            Download Resume
            <HiChevronRight className="w-4 h-4 ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
