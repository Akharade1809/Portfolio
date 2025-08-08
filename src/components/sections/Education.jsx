import { motion } from 'framer-motion';
import { 
  HiAcademicCap, HiCalendar, HiLocationMarker, HiStar, HiBookOpen, HiLightBulb,
  HiSparkles, HiTrendingUp, HiChevronRight
} from 'react-icons/hi';
import { 
  SiCoursera, SiUdemy, SiEdx, SiGooglecloud, SiAmazonaws,
  SiMicrosoft, SiOracle, SiAndroid
} from 'react-icons/si';
import { BiTrophy } from 'react-icons/bi';
import { DiJava } from 'react-icons/di';
import { FaMobile } from 'react-icons/fa';
import { fadeInUp, fadeInLeft, staggerContainer } from '../../utils/animations';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const educationData = [
  {
    id: 1,
    type: "degree",
    title: "Bachelor of Engineering in Computer Science",
    institution: "Dayananda Sagar College of Engineering (DSCE)",
    location: "Bangalore, Karnataka",
    duration: "2021 - 2025",
    grade: "CGPA: 9.25/10",
    description: "Comprehensive study of computer science fundamentals with specialization in mobile application development, software engineering, and modern programming practices.",
    highlights: [
      "Data Structures & Algorithms",
      "Software Engineering Principles",
      "Database Management Systems",
      "Web Development Technologies",
      "Mobile Application Development"
    ],
    icon: <HiAcademicCap className="w-6 h-6" />,
    color: "from-blue-500 to-indigo-600",
    bgGradient: "from-blue-50/80 to-indigo-50/80",
    borderColor: "border-blue-200/50"
  },
  {
    id: 2,
    type: "course",
    title: "Android with Kotlin: Fundamentals",
    institution: "Pluralsight Skills",
    location: "Online",
    duration: "2025",
    grade: "Certified",
    description: "Advanced course covering modern Android development with Kotlin, focusing on best practices and fundamental concepts.",
    highlights: [
      "Kotlin Programming",
      "Android Architecture",
      "UI Development",
      "Testing Practices",
      "Performance Optimization"
    ],
    icon: <SiAndroid className="w-6 h-6" />,
    color: "from-green-500 to-emerald-600",
    bgGradient: "from-green-50/80 to-emerald-50/80",
    borderColor: "border-green-200/50"
  },
  {
    id: 3,
    type: "certification",
    title: "Data Structures and Algorithms using Java",
    institution: "Infosys SpringBoard",
    location: "Online",
    duration: "2023",
    grade: "Certificate of Completion",
    description: "Comprehensive course covering fundamental data structures and algorithms implementation using Java programming language.",
    highlights: [
      "Algorithm Design",
      "Data Structure Implementation",
      "Problem Solving",
      "Java Programming",
      "Complexity Analysis"
    ],
    icon: <DiJava className="w-6 h-6" />,
    color: "from-orange-500 to-amber-600",
    bgGradient: "from-orange-50/80 to-amber-50/80",
    borderColor: "border-orange-200/50"
  },
  {
    id: 4,
    type: "course",
    title: "Software Engineering",
    institution: "Infosys SpringBoard",
    location: "Online",
    duration: "2023",
    grade: "Certificate of Completion",
    description: "Foundational course in software engineering principles, methodologies, and best practices for professional development.",
    highlights: [
      "SDLC Methodologies",
      "Agile Practices",
      "Testing Strategies",
      "Documentation",
      "Quality Assurance"
    ],
    icon: <SiCoursera className="w-6 h-6" />,
    color: "from-purple-500 to-violet-600",
    bgGradient: "from-purple-50/80 to-violet-50/80",
    borderColor: "border-purple-200/50"
  }
];

const achievementsData = [
  {
    title: "Best Project Award",
    description: "Received best project award for innovative mobile app solution",
    year: "2025",
    icon: <HiLightBulb className="w-6 h-6 text-yellow-400" />,
    gradient: "from-yellow-500 to-orange-500",
    bgGradient: "from-yellow-50/80 to-orange-50/80"
  },
  {
    title: "Technical Paper Publication",
    description: "Published research paper on mobile app security",
    year: "2025",
    icon: <HiBookOpen className="w-6 h-6 text-green-400" />,
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50/80 to-emerald-50/80"
  },
  {
    title: "Cross-Platform Expertise",
    description: "Successfully deployed apps on both Play Store and App Store",
    year: "2024",
    icon: <FaMobile className="w-6 h-6 text-cyan-400" />,
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-50/80 to-blue-50/80"
  },
  {
    title: "Hackathon Winner",
    description: "Developed production-ready project in 24 hours",
    year: "2023",
    icon: <BiTrophy className="w-6 h-6 text-purple-400" />,
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50/80 to-pink-50/80"
  }
];

const EducationCard = ({ education, index, isInView }) => {
  const typeStyles = {
    degree: {
      badge: "bg-blue-600 text-white",
      dotColor: "bg-blue-500"
    },
    certification: {
      badge: "bg-green-600 text-white",
      dotColor: "bg-green-500"
    },
    course: {
      badge: "bg-purple-600 text-white",
      dotColor: "bg-purple-500"
    }
  };

  const currentStyle = typeStyles[education.type];
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="relative flex items-center w-full mb-16"
      variants={fadeInUp}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ delay: index * 0.3 }}
    >
      {/* Enhanced Timeline */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20">
        <motion.div 
          className={`relative p-1 bg-gradient-to-r ${education.color} rounded-full shadow-xl`}
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
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className="text-gray-700 text-lg">
              {education.icon}
            </div>
          </div>
        </motion.div>
        
        {index < educationData.length - 1 && (
          <motion.div 
            className={`w-1 h-32 bg-gradient-to-b ${education.color} mt-4 opacity-30`}
            initial={{ height: 0 }}
            animate={{ height: 128 }}
            transition={{ delay: (index * 0.3) + 0.5, duration: 0.8 }}
          />
        )}
      </div>

      {/* Enhanced Content Card */}
      <motion.div 
        className={`w-full ${isEven ? 'pr-1/2' : 'pl-1/2'}`}
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className={`relative bg-gradient-to-br ${education.bgGradient} backdrop-blur-xl rounded-3xl shadow-2xl border ${education.borderColor} p-8 overflow-hidden ${
          isEven ? 'mr-12' : 'ml-12'
        }`}>
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-xl"></div>
          
          {/* Header */}
          <div className="relative mb-6">
            <div className="flex items-center justify-between mb-4">
              <motion.span 
                className={`px-4 py-2 rounded-full text-sm font-semibold ${currentStyle.badge} shadow-lg backdrop-blur-sm border border-white/20`}
                whileHover={{ scale: 1.05 }}
              >
                {education.type.charAt(0).toUpperCase() + education.type.slice(1)}
              </motion.span>
              <span className="px-3 py-1 bg-white/70 text-gray-700 text-sm rounded-full font-medium shadow-sm backdrop-blur-sm">
                {education.grade}
              </span>
            </div>
            
            <motion.h3 
              className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (index * 0.3) + 0.1 }}
            >
              {education.title}
            </motion.h3>
            
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <HiAcademicCap className="w-4 h-4 mr-2 text-blue-500" />
                <span className="font-medium">{education.institution}</span>
              </div>
              <div className="flex items-center">
                <HiLocationMarker className="w-4 h-4 mr-2 text-red-500" />
                <span>{education.location}</span>
              </div>
              <div className="flex items-center">
                <HiCalendar className="w-4 h-4 mr-2 text-green-500" />
                <span>{education.duration}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-gray-600 leading-relaxed">
              {education.description}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="flex items-center text-sm font-semibold text-gray-800 mb-3">
              <HiStar className="w-4 h-4 mr-1 text-yellow-500" />
              Key Learning Areas
            </h4>
            <div className="flex flex-wrap gap-2">
              {education.highlights.map((highlight, idx) => (
                <motion.span
                  key={idx}
                  className="px-3 py-2 bg-white/70 backdrop-blur-sm text-gray-700 text-xs rounded-full font-medium shadow-sm border border-white/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (index * 0.3) + 0.4 + (idx * 0.1) }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {highlight}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Progress indicator */}
          <motion.div 
            className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${education.color} rounded-full`}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ delay: (index * 0.3) + 0.8, duration: 1 }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

const MobileEducationCard = ({ education, index, isInView }) => {
  const typeStyles = {
    degree: { badge: "bg-blue-600 text-white" },
    certification: { badge: "bg-green-600 text-white" },
    course: { badge: "bg-purple-600 text-white" }
  };

  const currentStyle = typeStyles[education.type];

  return (
    <motion.div
      className="relative pl-12 pb-8"
      variants={fadeInLeft}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ delay: index * 0.2 }}
    >
      <div className="absolute left-0 top-0 flex flex-col items-center">
        <motion.div 
          className={`p-1 bg-gradient-to-r ${education.color} rounded-full shadow-lg`}
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <div className="text-gray-700 text-sm">
              {education.icon}
            </div>
          </div>
        </motion.div>
        {index < educationData.length - 1 && (
          <div className={`w-1 h-full bg-gradient-to-b ${education.color} mt-2 opacity-30`}></div>
        )}
      </div>

      <motion.div 
        className={`bg-gradient-to-br ${education.bgGradient} backdrop-blur-xl rounded-2xl shadow-xl border ${education.borderColor} p-6 relative overflow-hidden`}
        whileHover={{ scale: 1.02, y: -3 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="flex items-center justify-between mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${currentStyle.badge} shadow-lg`}>
            {education.type.charAt(0).toUpperCase() + education.type.slice(1)}
          </span>
          <span className="text-xs text-gray-500 font-medium">{education.grade}</span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {education.title}
        </h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-700">
            <HiAcademicCap className="w-4 h-4 mr-2 text-blue-500" />
            <span className="font-semibold text-sm">{education.institution}</span>
          </div>
          
          <div className="flex flex-wrap gap-3 text-sm text-gray-600">
            <div className="flex items-center">
              <HiLocationMarker className="w-3 h-3 mr-1 text-red-500" />
              <span>{education.location}</span>
            </div>
            <div className="flex items-center">
              <HiCalendar className="w-3 h-3 mr-1 text-green-500" />
              <span>{education.duration}</span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {education.description}
        </p>

        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Key Learning:</h4>
          <div className="flex flex-wrap gap-2">
            {education.highlights.map((highlight, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-white/70 text-gray-700 text-xs rounded-md font-medium shadow-sm"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const AchievementsSection = ({ isInView }) => {
  return (
    <motion.div
      className="mt-20"
      variants={staggerContainer}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      <motion.div className="text-center mb-12" variants={fadeInUp}>
        <motion.div
          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 rounded-full mb-6"
          whileHover={{ scale: 1.05 }}
        >
          <HiSparkles className="w-4 h-4 mr-2 text-yellow-500" />
          <span className="text-sm font-medium text-gray-700">Academic Excellence</span>
        </motion.div>
        
        <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">
          Academic Achievements
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Recognition and accomplishments throughout my academic journey
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {achievementsData.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            className={`relative bg-gradient-to-br ${achievement.bgGradient} backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/20 overflow-hidden`}
            variants={fadeInUp}
            whileHover={{ 
              scale: 1.03, 
              y: -5,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
            }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl"></div>
            
            <div className="flex items-start space-x-4 relative">
              <motion.div 
                className={`flex-shrink-0 p-3 rounded-2xl bg-gradient-to-r ${achievement.gradient} shadow-xl`}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="text-white">
                  {achievement.icon}
                </div>
              </motion.div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {achievement.title}
                  </h4>
                  <span className="text-sm text-gray-500 font-medium bg-white/50 px-2 py-1 rounded-full">
                    {achievement.year}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Education = () => {
  const { ref, isInView } = useIntersectionObserver();

  return (
    <section id="education" ref={ref} className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Enhanced Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-48 h-48 bg-purple-200/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/3 w-32 h-32 bg-cyan-200/20 rounded-full blur-2xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.4, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container-max relative">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 rounded-full mb-6"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            <HiTrendingUp className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Academic Journey</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6"
            variants={fadeInUp}
          >
            Education & Certifications
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            My academic journey and continuous learning path through formal education, 
            professional certifications, and specialized courses.
          </motion.p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          <div className="space-y-0">
            {educationData.map((education, index) => (
              <EducationCard 
                key={education.id} 
                education={education} 
                index={index} 
                isInView={isInView} 
              />
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {educationData.map((education, index) => (
            <MobileEducationCard
              key={education.id}
              education={education}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Achievements Section */}
        <AchievementsSection isInView={isInView} />

        {/* Enhanced Learning Philosophy */}
        <motion.div
          className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl shadow-2xl p-10 mt-20 text-white overflow-hidden text-center"
          variants={fadeInUp}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ delay: 1 }}
        >
          {/* Background decorations */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-2xl"></div>
          
          <div className="relative">
            <motion.div
              className="inline-flex p-4 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 border border-white/20"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <HiLightBulb className="w-12 h-12 text-yellow-400" />
            </motion.div>
            
            <h3 className="text-3xl font-bold mb-6">
              Continuous Learning Philosophy
            </h3>
            <p className="text-gray-200 max-w-2xl mx-auto text-lg leading-relaxed">
              "Technology evolves rapidly, and I believe in staying ahead through continuous learning. 
              My education foundation combined with ongoing certifications keeps me current with industry trends and best practices."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
