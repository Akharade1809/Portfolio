import { motion } from 'framer-motion';
import { 
  HiExternalLink, HiCode, HiStar, HiEye,
  HiDeviceMobile, HiServer, HiDatabase, HiShieldCheck,
  HiSparkles, HiTrendingUp, HiLightBulb
} from 'react-icons/hi';
import { 
  SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiExpress,SiAndroid, SiFirebase, SiMysql, SiHtml5, SiCss3,
  SiBootstrap, SiGithub
} from 'react-icons/si';
import { fadeInUp, fadeInLeft, staggerContainer } from '../../utils/animations';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import Button from '../common/Button';
import { FaJava } from 'react-icons/fa';

const projectsData = [
    {
    id: 1,
    title: "Health Buddy",
    description: "Personal health management application that helps users track their health metrics, schedule appointments, medication reminders, and maintain health records digitally.",
    image: "/api/placeholder/600/400",
    technologies: [
      { name: "React", icon: <SiReact className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
      { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <SiCss3 className="text-blue-600" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> }
    ],
    category: "Flutter App",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50/80 to-pink-50/80",
    features: [
      "Health Tracking",
      "Appointment Scheduling",
      "Medication Reminders",
      "Digital Health Records",
      "Progress Analytics"
    ],
    githubUrl: "https://github.com/Akharade1809/Health-Buddy",
    liveUrl: null,
    status: "Completed"
  },
  {
    id: 2,
    title: "Wallet Mobile App",
    description: "A comprehensive mobile wallet application enabling secure peer-to-peer money transfers, balance management, and transaction history. Features real-time balance updates and modern UI design.",
    image: "/api/placeholder/600/400",
    technologies: [
      { name: "React Native", icon: <SiReact className="text-blue-500" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
      { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-600" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> }
    ],
    category: "React-Native App",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50/80 to-cyan-50/80",
    features: [
      "Secure P2P Transfers",
      "Real-time Balance Updates", 
      "Transaction History",
      "Multi-currency Support",
      "Biometric Authentication"
    ],
    githubUrl: "https://github.com/Akharade1809/wallet-mobile",
    liveUrl: null,
    status: "Completed"
  },
   {
    id: 3,
    title: "Aapda Seva - Disaster Management",
    description: "Emergency response and disaster management application designed to provide quick access to emergency services, real-time alerts, and community support during natural disasters.",
    image: "/api/placeholder/600/400",
    technologies: [
      { name: "Java", icon: <FaJava className="text-red-600" /> },
      { name: "Android SDK", icon: <SiAndroid className="text-green-500" /> },
      { name: "Firebase", icon: <SiFirebase className="text-orange-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> }
    ],
    category: "Android App",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50/80 to-red-50/80",
    features: [
      "Emergency Alerts",
      "Location Services",
      "Community Support",
      "Real-time Updates",
      "Offline Functionality"
    ],
    githubUrl: "https://github.com/Akharade1809/Aapda_Seva",
    liveUrl: null,
    status: "Completed"
  },
  {
    id: 4,
    title: "Wallet Backend Service",
    description: "Robust backend service powering the wallet mobile app. Handles user authentication, transaction processing, account management, and secure API endpoints with comprehensive error handling.",
    image: "/api/placeholder/600/400",
    technologies: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-600" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "JWT", icon: <HiShieldCheck className="text-red-500" /> }
    ],
    category: "Backend API",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50/80 to-emerald-50/80",
    features: [
      "RESTful API Design",
      "JWT Authentication",
      "Transaction Processing",
      "Data Validation",
      "Error Handling"
    ],
    githubUrl: "https://github.com/Akharade1809/wallet-backend",
    liveUrl: null,
    status: "Completed"
  },
  
];

const ProjectCard = ({ project, index, isInView }) => {
  const statusColors = {
    "Completed": "bg-green-100/80 text-green-800",
    "In Progress": "bg-yellow-100/80 text-yellow-800",
    "Planning": "bg-blue-100/80 text-blue-800"
  };

  return (
    <motion.div
      className={`relative bg-gradient-to-br ${project.bgGradient} backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden group`}
      variants={fadeInUp}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      transition={{ delay: index * 0.2 }}
      whileHover={{ 
        scale: 1.03,
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-xl"></div>
      
      {/* Enhanced Project Image */}
      <div className="relative overflow-hidden">
        <motion.div 
          className="h-56 bg-gradient-to-br from-gray-100/50 to-gray-200/50 backdrop-blur-sm flex items-center justify-center relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-20">
            <motion.div 
              className={`w-full h-full bg-gradient-to-br ${project.gradient}`}
              animate={{ 
                background: [
                  `linear-gradient(45deg, ${project.gradient})`,
                  `linear-gradient(135deg, ${project.gradient})`,
                  `linear-gradient(45deg, ${project.gradient})`
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
          
          <motion.div
            className="relative z-10"
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <HiCode className="w-20 h-20 text-gray-500" />
          </motion.div>
        </motion.div>
        
        {/* Enhanced Category Badge */}
        <motion.div 
          className="absolute top-4 left-4"
          whileHover={{ scale: 1.1 }}
        >
          <span className={`px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${project.gradient} shadow-lg backdrop-blur-sm border border-white/20`}>
            {project.category}
          </span>
        </motion.div>

        {/* Enhanced Status Badge */}
        <motion.div 
          className="absolute top-4 right-4"
          whileHover={{ scale: 1.1 }}
        >
          <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-white/30 ${statusColors[project.status]}`}>
            {project.status}
          </span>
        </motion.div>

        {/* Project number indicator */}
        <motion.div 
          className="absolute bottom-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-sm border border-white/30"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: (index * 0.2) + 0.5, type: "spring", stiffness: 200 }}
        >
          {index + 1}
        </motion.div>
      </div>

      {/* Enhanced Project Content */}
        <div className="relative p-4 sm:p-6 lg:p-8">
        {/* Title and Description */}
        <div className="mb-6">
          <motion.h3 
            className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3 group-hover:from-blue-900 group-hover:to-purple-900 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            {project.title}
          </motion.h3>
          <p className="text-gray-600 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Enhanced Technologies */}
        <div className="mb-6">
          <h4 className="flex items-center text-sm font-semibold text-gray-800 mb-3">
            <HiLightBulb className="w-4 h-4 mr-1 text-orange-500" />
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {project.technologies.map((tech, idx) => (
              <motion.div
                key={tech.name}
                className="flex items-center space-x-2 px-3 py-2 bg-white/70 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 border border-white/30 shadow-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: (index * 0.2) + (idx * 0.1) }}
                whileHover={{ scale: 1.08, y: -2 }}
              >
                <span className="text-sm">{tech.icon}</span>
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced Features */}
        <div className="mb-8">
          <h4 className="flex items-center text-sm font-semibold text-gray-800 mb-3">
            <HiStar className="w-4 h-4 mr-1 text-yellow-500" />
            Key Features
          </h4>
          <div className="grid grid-cols-1 gap-2">
            {project.features.slice(0, 3).map((feature, idx) => (
              <motion.div 
                key={idx} 
                className="flex items-center text-sm text-gray-700"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (index * 0.2) + 0.3 + (idx * 0.1) }}
              >
                <motion.span 
                  className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"
                  whileHover={{ scale: 1.5 }}
                />
                {feature}
              </motion.div>
            ))}
            {project.features.length > 3 && (
              <div className="text-sm text-gray-500 font-medium">
                +{project.features.length - 3} more features
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 backdrop-blur-sm border border-white/10"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <SiGithub className="w-4 h-4 mr-2" />
            View Code
          </motion.a>
          
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center px-6 py-3 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 backdrop-blur-sm border border-white/20`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <HiExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </motion.a>
          )}
        </div>

        {/* Progress indicator */}
        <motion.div 
          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${project.gradient} rounded-full`}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ delay: (index * 0.2) + 0.8, duration: 1 }}
        />
      </div>
    </motion.div>
  );
};

const TechStackOverview = ({ isInView }) => {
  const techCategories = [
    {
      title: "Mobile",
      icon: <SiAndroid className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50/80 to-red-50/80",
      technologies: ["Android SDK","Flutter","React Native", "Cross-platform"]
    },
    {
      title: "Frontend",
      icon: <HiDeviceMobile className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50/80 to-cyan-50/80",
      technologies: ["Jetpack","React", "React Native", "HTML5", "Tailwind"]
    },
    {
      title: "Backend",
      icon: <HiServer className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50/80 to-emerald-50/80",
      technologies: ["Node.js", "Express.js", "Java", "JavaScript", "RESTful APIs"]
    },
    {
      title: "Database",
      icon: <HiDatabase className="w-6 h-6" />,
      gradient: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-50/80 to-violet-50/80",
      technologies: ["MongoDB", "MySQL", "Firebase","PostgreSQL"]
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
          <HiLightBulb className="w-4 h-4 mr-2 text-orange-500" />
          <span className="text-sm font-medium text-gray-700">Technology Stack</span>
        </motion.div>
        
        <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">
          Technologies Used Across Projects
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Comprehensive tech stack powering innovative solutions
        </p>
      </motion.div>
      
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {techCategories.map((category, index) => (
          <motion.div
            key={category.title}
            className={`relative bg-gradient-to-br ${category.bgGradient} backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/20 text-center overflow-hidden`}
            variants={fadeInUp}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
            }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl"></div>
            
            <motion.div 
              className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.gradient} text-white mb-4 shadow-xl`}
              whileHover={{ 
                scale: 1.1, 
                rotate: 5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)"
              }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {category.icon}
            </motion.div>
            
            <h4 className="text-lg font-bold text-gray-900 mb-3">
              {category.title}
            </h4>
            <div className="space-y-2">
              {category.technologies.map((tech, idx) => (
                <motion.div 
                  key={idx} 
                  className="text-sm text-gray-600 font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (index * 0.1) + (idx * 0.05) }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { ref, isInView } = useIntersectionObserver();

  return (
    <section id="projects" ref={ref} className="section-padding bg-gradient-to-br from-gray-50 via-white to-purple-50/30 relative overflow-hidden">
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
            <HiTrendingUp className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Portfolio Showcase</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6"
            variants={fadeInUp}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            A showcase of my recent work spanning mobile applications, backend services, 
            and web development. Each project demonstrates expertise in modern development practices.
          </motion.p>
        </motion.div>

        {/* Enhanced Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mb-16">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Enhanced Tech Stack Overview */}
        <TechStackOverview isInView={isInView} />

        {/* Enhanced GitHub Profile CTA */}
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
          
          <motion.div
            className="relative text-center"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="inline-flex p-6 bg-white/10 backdrop-blur-sm rounded-3xl mb-6 border border-white/20"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <SiGithub className="w-16 h-16 text-gray-300" />
            </motion.div>
            
            <h3 className="text-3xl font-bold mb-4">
              Explore More on GitHub
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Discover additional projects, contributions, and open-source work on my GitHub profile. 
              Each repository includes detailed documentation and setup instructions.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => window.open('https://github.com/Akharade1809', '_blank')}
                className="bg-white/90 text-gray-900 hover:bg-white shadow-xl hover:shadow-2xl backdrop-blur-sm border border-white/20"
              >
                <SiGithub className="w-5 h-5 mr-2" />
                Visit GitHub Profile
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <HiExternalLink className="w-4 h-4" />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
