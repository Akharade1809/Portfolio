import { motion } from 'framer-motion';
import { 
  SiKotlin, SiDart, SiSwift, SiC, SiJavascript, SiPython,
  SiAndroid, SiFlutter, SiFirebase, SiMongodb, SiMysql, SiAmazonaws,
  SiGitlab, SiJira, SiHtml5, SiTailwindcss, SiOracle,
  SiBitrise, SiSnyk
} from 'react-icons/si';
import { 
  FaCode, FaPalette, FaLayerGroup, FaDatabase, 
  FaTools, FaCubes, FaMobile, FaJava, FaConfluence,
} from 'react-icons/fa';
import { fadeInUp, fadeInLeft, staggerContainer } from '../../utils/animations';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { TbBrandKotlin } from 'react-icons/tb';
import { GiLightBulb } from 'react-icons/gi';
import { BiTrendingUp } from 'react-icons/bi';

const skillsData = {
  languages: {
    title: "Programming Languages",
    icon: <FaCode className="w-6 h-6" />,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-gradient-to-br from-blue-50/80 to-indigo-50/80",
    borderColor: "border-blue-200/50",
    skills: [
      { name: "Kotlin", icon: <SiKotlin className="text-purple-600" /> },
      { name: "Java", icon: <FaJava className="text-red-600" /> },
      { name: "Dart", icon: <SiDart className="text-blue-500" /> },
      { name: "Swift", icon: <SiSwift className="text-orange-500" /> },
      { name: "C", icon: <SiC className="text-blue-700" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
      { name: "Python", icon: <SiPython className="text-blue-600" /> }
    ]
  },
  uiux: {
    title: "UI & UX",
    icon: <FaPalette className="w-6 h-6" />,
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-gradient-to-br from-pink-50/80 to-rose-50/80",
    borderColor: "border-pink-200/50",
    skills: [
      { name: "Jetpack Compose", icon: <SiAndroid className="text-green-600" /> },
      { name: "SwiftUI", icon: <SiSwift className="text-blue-500" /> },
      { name: "Material Design", icon: <FaPalette className="text-blue-600" /> },
      { name: "XML", icon: <FaCode className="text-orange-600" /> },
      { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "Material UI", icon: <FaPalette className="text-blue-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> }
    ]
  },
  frameworks: {
    title: "Frameworks & Libraries",
    icon: <FaLayerGroup className="w-6 h-6" />,
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-gradient-to-br from-green-50/80 to-emerald-50/80",
    borderColor: "border-green-200/50",
    skills: [
      { name: "Android SDK", icon: <SiAndroid className="text-green-500" /> },
      { name: "Kotlin Multiplatform", icon: <SiKotlin className="text-purple-500" /> },
      { name: "iOS SDK", icon: <SiSwift className="text-gray-700" /> },
      { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
      { name: "Ktor", icon: <SiKotlin className="text-purple-600" /> },
      { name: "Koin (DI)", icon: <FaLayerGroup className="text-green-600" /> }
    ]
  },
  databases: {
    title: "Databases & Storage",
    icon: <FaDatabase className="w-6 h-6" />,
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-gradient-to-br from-purple-50/80 to-violet-50/80",
    borderColor: "border-purple-200/50",
    skills: [
      { name: "Firebase", icon: <SiFirebase className="text-orange-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      { name: "SQLite", icon: <FaDatabase className="text-blue-500" /> },
      { name: "SQLDelight", icon: <FaDatabase className="text-purple-600" /> },
      { name: "AWS Storage", icon: <SiAmazonaws className="text-orange-500" /> },
      { name: "Oracle CLI", icon: <SiOracle className="text-red-600" /> }
    ]
  },
  architecture: {
    title: "Architecture Patterns",
    icon: <FaCubes className="w-6 h-6" />,
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-gradient-to-br from-orange-50/80 to-amber-50/80",
    borderColor: "border-orange-200/50",
    skills: [
      { name: "MVI", icon: <FaCubes className="text-blue-600" /> },
      { name: "MVVM", icon: <FaCubes className="text-green-600" /> },
      { name: "MVC", icon: <FaCubes className="text-purple-600" /> },
      { name: "BloC", icon: <FaCubes className="text-orange-600" /> }
    ]
  },
  tools: {
    title: "Development Tools",
    icon: <FaTools className="w-6 h-6" />,
    color: "from-gray-500 to-slate-600",
    bgColor: "bg-gradient-to-br from-gray-50/80 to-slate-50/80",
    borderColor: "border-gray-200/50",
    skills: [
      { name: "JIRA", icon: <SiJira className="text-blue-600" /> },
      { name: "GitLab", icon: <SiGitlab className="text-orange-600" /> },
      { name: "Confluence", icon: <FaConfluence className="text-blue-500" /> },
      { name: "Wootric", icon: <FaTools className="text-green-500" /> },
      { name: "Mux", icon: <FaTools className="text-red-500" /> },
      { name: "FCM", icon: <SiFirebase className="text-orange-500" /> },
      { name: "Bitrise", icon: <SiBitrise className="text-purple-500" /> },
      { name: "Detekt", icon: <TbBrandKotlin className="text-gray-600" /> },
      { name: "Snyk", icon: <SiSnyk className="text-purple-600" /> }
    ]
  }
};

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      className="group relative bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 hover:shadow-xl hover:border-white/40 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ 
        scale: 1.08, 
        y: -5,
        rotate: 2,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
    >
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl"></div>
      
      <div className="relative flex flex-col items-center space-y-3">
        <motion.div 
          className="text-2xl group-hover:scale-125 transition-transform duration-300"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          {skill.icon}
        </motion.div>
        <span className="text-sm font-medium text-gray-700 text-center leading-tight">
          {skill.name}
        </span>
      </div>

      {/* Hover glow effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-purple-400/0 to-cyan-400/0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        whileHover={{
          background: "linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1), rgba(6, 182, 212, 0.1))"
        }}
      />
    </motion.div>
  );
};

const SkillCategory = ({ category, categoryData, index, isInView }) => {
  return (
    <motion.div
      className={`relative ${categoryData.bgColor} backdrop-blur-xl rounded-3xl p-8 shadow-2xl border ${categoryData.borderColor} overflow-hidden`}
      variants={fadeInUp}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ delay: index * 0.15 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-xl"></div>
      
      {/* Header */}
      <div className="relative flex items-center mb-8">
        <motion.div 
          className={`p-4 rounded-2xl bg-gradient-to-r ${categoryData.color} text-white mr-4 shadow-xl border border-white/20`}
          whileHover={{ 
            scale: 1.1, 
            rotate: 5,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)"
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {categoryData.icon}
        </motion.div>
        <div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            {categoryData.title}
          </h3>
          <motion.div 
            className={`h-1 bg-gradient-to-r ${categoryData.color} rounded-full mt-1`}
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : { width: 0 }}
            transition={{ delay: (index * 0.15) + 0.3, duration: 0.8 }}
          />
        </div>
      </div>

      {/* Skills Grid */}
      <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {categoryData.skills.map((skill, skillIndex) => (
          <SkillCard 
            key={skill.name} 
            skill={skill} 
            index={skillIndex}
          />
        ))}
      </div>
    </motion.div>
  );
};

const SpecialtyHighlight = ({ isInView }) => {
  const specialties = [
    {
      title: "Mobile Development",
      icon: <FaMobile className="text-3xl text-white" />,
      description: "Native Android, Cross-platform Flutter & KMP",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50/80 to-cyan-50/80"
    },
    {
      title: "Modern Architecture",
      icon: <FaCubes className="text-3xl text-white" />,
      description: "Clean Architecture, SOLID principles, Design patterns",
      gradient: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-50/80 to-violet-50/80"
    },
    {
      title: "Full Stack",
      icon: <FaLayerGroup className="text-3xl text-white" />,
      description: "Frontend, Backend, Database, and Cloud integration",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50/80 to-emerald-50/80"
    }
  ];

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
          <GiLightBulb className="w-4 h-4 mr-2 text-orange-500" />
          <span className="text-sm font-medium text-gray-700">Core Expertise</span>
        </motion.div>
        
        <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">
          Core Specialties
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Areas where I excel and deliver exceptional results
        </p>
      </motion.div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {specialties.map((specialty, index) => (
          <motion.div
            key={specialty.title}
            className={`relative bg-gradient-to-br ${specialty.bgGradient} backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20 text-center overflow-hidden`}
            variants={fadeInUp}
            whileHover={{ 
              scale: 1.05,
              y: -10,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
            }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl"></div>
            
            <motion.div 
              className={`relative inline-flex p-6 rounded-2xl bg-gradient-to-r ${specialty.gradient} mb-6 shadow-xl`}
              whileHover={{ 
                scale: 1.1, 
                rotate: 5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)"
              }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {specialty.icon}
            </motion.div>
            
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              {specialty.title}
            </h4>
            <p className="text-gray-600 leading-relaxed">
              {specialty.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { ref, isInView } = useIntersectionObserver();

  return (
    <section id="skills" ref={ref} className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
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
        <motion.div 
          className="absolute top-1/4 right-1/4 w-24 h-24 bg-pink-200/20 rounded-full blur-xl"
          animate={{ 
            y: [0, -50, 0],
            x: [0, 25, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
            <BiTrendingUp className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Technical Expertise</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6"
            variants={fadeInUp}
          >
            Skills & Technologies
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            A comprehensive showcase of my technical expertise across mobile development, 
            full-stack solutions, and modern software architecture.
          </motion.p>
        </motion.div>

        {/* Enhanced Skills Categories */}
        <div className="space-y-12">
          {Object.entries(skillsData).map(([category, categoryData], index) => (
            <SkillCategory
              key={category}
              category={category}
              categoryData={categoryData}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Enhanced Core Specialties */}
        <SpecialtyHighlight isInView={isInView} />

        {/* Enhanced Stats Section */}
        <motion.div
          className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl shadow-2xl p-10 mt-20 text-white overflow-hidden"
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
            <motion.div className="text-center mb-8" variants={fadeInUp}>
              <h3 className="text-2xl font-bold mb-2">Professional Achievements</h3>
              <p className="text-gray-300">Measurable impact through technology</p>
            </motion.div>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "2.5+", label: "Years Experience", delay: 0.1 },
                { number: "30+", label: "Technologies", delay: 0.2 },
                { number: "20+", label: "Projects", delay: 0.3 },
                { number: "5+", label: "Clients", delay: 0.4 }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: stat.delay }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -5
                  }}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <motion.h4 
                      className="text-4xl font-bold mb-2"
                      whileHover={{ scale: 1.1 }}
                    >
                      {stat.number}
                    </motion.h4>
                    <p className="text-gray-300 font-medium">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
