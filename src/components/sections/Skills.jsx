import { color, motion } from 'framer-motion';
import {
  SiKotlin, SiDart, SiSwift, SiC, SiJavascript, SiPython,
  SiAndroid, SiFlutter, SiFirebase, SiMongodb, SiMysql, SiAmazonaws,
  SiGitlab, SiJira, SiHtml5, SiTailwindcss, SiOracle,
  SiBitrise, SiSnyk,
  SiGo,
  SiMaterialdesign,
  SiReact,
  SiKtor,
  SiSpringboot,
  SiApachekafka,
  SiAmazonsqs,
  SiRedis,
  SiGithub
} from 'react-icons/si';
import {
  FaCode, FaPalette, FaLayerGroup, FaDatabase,
  FaTools, FaCubes, FaMobile, FaJava, FaConfluence,
  FaNodeJs,
} from 'react-icons/fa';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { TbBrandKotlin, TbBrandReactNative } from 'react-icons/tb';
import { GiLightBulb } from 'react-icons/gi';
import { BiTrendingUp } from 'react-icons/bi';
import { FaMessage } from 'react-icons/fa6';

const skillsData = {
  languages: {
    title: "Programming Languages",
    icon: <FaCode />,
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
      { name: "Python", icon: <SiPython className="text-blue-600" /> },
      { name: "Go", icon: <SiGo className="text-blue-400" /> }
    ]
  },
  uiux: {
    title: "UI & UX",
    icon: <FaPalette />,
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-gradient-to-br from-pink-50/80 to-rose-50/80",
    borderColor: "border-pink-200/50",
    skills: [
      { name: "Jetpack Compose", icon: <SiAndroid className="text-green-600" /> },
      { name: "SwiftUI", icon: <SiSwift className="text-blue-500" /> },
      { name: "Material Design", icon: <SiMaterialdesign className="text-blue-600" /> },
      { name: "XML", icon: <FaCode className="text-orange-600" /> },
      { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> }
    ]
  },
  frameworks: {
    title: "Frameworks & Libraries",
    icon: <FaLayerGroup />,
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-gradient-to-br from-green-50/80 to-emerald-50/80",
    borderColor: "border-green-200/50",
    skills: [
      { name: "Android SDK", icon: <SiAndroid className="text-green-500" /> },
      { name: "Kotlin Multiplatform", icon: <SiKotlin className="text-purple-500" /> },
      { name: "iOS SDK", icon: <SiSwift className="text-gray-700" /> },
      { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
      { name: "Springboot", icon: <SiSpringboot className="text-green-600" /> },
      { name: "React", icon: <SiReact className="text-blue-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "React-Native", icon: <TbBrandReactNative className="text-blue-600" /> },
      { name: "Ktor", icon: <SiKtor className="text-purple-600" /> },
      { name: "Koin (DI)", icon: <FaLayerGroup className="text-green-600" /> }
    ]
  },
  databases: {
    title: "Databases & Storage",
    icon: <FaDatabase />,
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
messaging: {
  title: "Messaging & Caching",
  icon: <FaMessage/>,
  color: "from-cyan-400 via-blue-500 to-violet-600",         // bright neon blue-violet gradient
  bgColor: "bg-gradient-to-br from-cyan-50 via-blue-50 to-violet-50", // light pastel neon background
  borderColor: "border-cyan-300/60",                        // neon cyan border with transparency
  skills: [
    { name: "Kafka", icon: <SiApachekafka className="text-blue-500 drop-shadow-[0_0_8px_blue]" /> },  // neon blue icon
    { name: "Amazon SQS", icon: <SiAmazonsqs className="text-cyan-400 drop-shadow-[0_0_8px_cyan]" /> }, // neon cyan
    { name: "Redis", icon: <SiRedis className="text-violet-600 drop-shadow-[0_0_10px_violet]" /> }   // neon violet
  ]
},


  architecture: {
    title: "Architecture Patterns",
    icon: <FaCubes />,
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
    icon: <FaTools />,
    color: "from-gray-500 to-slate-600",
    bgColor: "bg-gradient-to-br from-gray-50/80 to-slate-50/80",
    borderColor: "border-gray-200/50",
    skills: [
      { name: "JIRA", icon: <SiJira className="text-blue-600" /> },
      { name: "GitHub", icon: <SiGithub className="text-black-600" /> },
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

const SkillCard = ({ skill, index }) => (
  <motion.div
    className="group relative bg-white/70 backdrop-blur-sm rounded-xl p-2 sm:p-3 md:p-4 shadow-lg border border-white/20
    hover:shadow-xl hover:border-white/40 transition-all duration-300"
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
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl"></div>
    <div className="relative flex flex-col items-center space-y-2 sm:space-y-3">
      <motion.div
        className="text-xl sm:text-2xl md:text-3xl group-hover:scale-125 transition-transform duration-300"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        {skill.icon}
      </motion.div>
      <span className="text-xs sm:text-sm font-medium text-gray-700 text-center leading-tight">
        {skill.name}
      </span>
    </div>
  </motion.div>
);

const SkillCategory = ({ category, categoryData, index, isInView }) => (
  <motion.div
    className={`relative ${categoryData.bgColor} backdrop-blur-xl rounded-3xl px-3 py-5 sm:p-8 shadow-2xl border ${categoryData.borderColor} overflow-hidden`}
    variants={fadeInUp}
    initial="initial"
    animate={isInView ? "animate" : "initial"}
    transition={{ delay: index * 0.15 }}
    whileHover={{
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
    }}
  >
    <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl"></div>
    <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-xl"></div>
    <div className="relative flex items-center mb-6 sm:mb-8">
      <motion.div
        className={`flex items-center justify-center rounded-2xl mr-3 p-2 sm:p-3 md:p-4 bg-gradient-to-r ${categoryData.color} text-white shadow-xl border border-white/20`}
        whileHover={{
          scale: 1.1,
          rotate: 5,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)"
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <span className="text-xl sm:text-2xl md:text-3xl">{categoryData.icon}</span>
      </motion.div>
      <div>
        <h3 className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
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
    <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
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

const SpecialtyHighlight = ({ isInView }) => {
  const specialties = [
    {
      title: "Mobile Development",
      icon: <FaMobile />,
      description: "Native Android, Cross-platform Flutter & KMP",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50/80 to-cyan-50/80"
    },
    {
      title: "Modern Architecture",
      icon: <FaCubes />,
      description: "Clean Architecture, SOLID principles, Design patterns",
      gradient: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-50/80 to-violet-50/80"
    },
    {
      title: "Full Stack",
      icon: <FaLayerGroup />,
      description: "Frontend, Backend, Database, and Cloud integration",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50/80 to-emerald-50/80"
    }
  ];

  return (
    <motion.div
      className="mt-10 sm:mt-20"
      variants={staggerContainer}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
    >
      <motion.div className="text-center mb-8 sm:mb-12" variants={fadeInUp}>
        <motion.div
          className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 rounded-full mb-4"
          whileHover={{ scale: 1.05 }}
        >
          <GiLightBulb className="w-4 h-4 mr-2 text-orange-500" />
          <span className="text-sm font-medium text-gray-700">Core Expertise</span>
        </motion.div>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-2 sm:mb-4">
          Core Specialties
        </h3>
        <p className="text-gray-600 max-w-xl mx-auto text-xs sm:text-sm md:text-base">
          Areas where I excel and deliver exceptional results.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
        {specialties.map((specialty, index) => (
          <motion.div
            key={specialty.title}
            className={`relative bg-gradient-to-br ${specialty.bgGradient} backdrop-blur-xl rounded-2xl px-4 py-6 sm:p-8 shadow-2xl border border-white/20 text-center overflow-hidden`}
            variants={fadeInUp}
            whileHover={{
              scale: 1.05,
              y: -10,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
            }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
          >
            <div className="absolute top-0 right-0 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl"></div>
            <motion.div
              className={`inline-flex items-center justify-center p-3 sm:p-6 rounded-2xl bg-gradient-to-r ${specialty.gradient} mb-3 sm:mb-6 shadow-xl`}
              whileHover={{
                scale: 1.1,
                rotate: 5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)"
              }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="text-xl sm:text-2xl md:text-3xl text-white">{specialty.icon}</span>
            </motion.div>
            <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{specialty.title}</h4>
            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">{specialty.description}</p>
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
      {/* Responsive BG Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-6 w-28 h-28 sm:w-40 sm:h-40 bg-blue-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-8 right-6 w-36 h-36 sm:w-48 sm:h-48 bg-purple-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-2/3 left-2/4 w-20 h-20 sm:w-32 sm:h-32 bg-cyan-200/20 rounded-full blur-2xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.4, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-12 h-12 sm:w-24 sm:h-24 bg-pink-200/20 rounded-full blur-xl"
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
          className="text-center mb-8 sm:mb-20"
        >
          <motion.div
            className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 rounded-full mb-3 sm:mb-6"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            <BiTrendingUp className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Technical Expertise</span>
          </motion.div>
          <motion.h2
            className="text-xl sm:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-2 sm:mb-6"
            variants={fadeInUp}
          >
            Skills & Technologies
          </motion.h2>
          <motion.p
            className="text-xs sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            A comprehensive showcase of my technical expertise across mobile development,
            full-stack solutions, and modern software architecture.
          </motion.p>
        </motion.div>
        {/* Responsive Skills Categories */}
        <div className="space-y-8 sm:space-y-12">
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
        {/* Responsive Specialties */}
        <SpecialtyHighlight isInView={isInView} />
      </div>
    </section>
  );
};

export default Skills;
