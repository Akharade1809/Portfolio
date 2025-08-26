import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  HiMail, HiPhone, HiLocationMarker, HiUser, 
  HiChatAlt, HiPaperAirplane, HiCheckCircle, HiExclamationCircle,
  HiSparkles, HiTrendingUp, HiLightBulb, HiHeart
} from 'react-icons/hi';
import { 
  SiLinkedin, SiGithub, SiTwitter, SiInstagram 
} from 'react-icons/si';
import { fadeInUp, fadeInLeft, staggerContainer } from '../../utils/animations';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { PERSONAL_INFO } from '../../utils/constants';
import Button from '../common/Button';

const Contact = () => {
  const { ref, isInView } = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // EmailJS configuration
  const EMAIL_SERVICE_ID = 'service_3m7sy9k';
  const EMAIL_TEMPLATE_ID = 'template_30lv5df';
  const EMAIL_PUBLIC_KEY = 'UGv7DD-3V5nQsGtAu';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'arjunkharade1643@gmail.com'
        },
        EMAIL_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <HiMail className="w-6 h-6" />,
      label: "Email",
      value: "arjunkharade1643@gmail.com",
      href: "mailto:arjunkharade1643@gmail.com",
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-50/80 to-pink-50/80"
    },
    {
      icon: <HiPhone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 8217425856",
      href: "tel:+918217425856",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50/80 to-emerald-50/80"
    },
    {
      icon: <HiLocationMarker className="w-6 h-6" />,
      label: "Location",
      value: "Bangalore, Karnataka, India",
      href: null,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50/80 to-cyan-50/80"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <SiLinkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/arjun-amit-kharade-308b82303/",
      gradient: "from-blue-600 to-blue-700",
      hoverColor: "hover:text-white"
    },
    {
      name: "GitHub",
      icon: <SiGithub className="w-5 h-5" />,
      url: "https://github.com/Akharade1809",
      gradient: "from-gray-700 to-gray-900",
      hoverColor: "hover:text-white"
    },
    {
      name: "Twitter",
      icon: <SiTwitter className="w-5 h-5" />,
      url: "https://x.com/ArjunKharade7",
      gradient: "from-blue-400 to-blue-600",
      hoverColor: "hover:text-white"
    },
    {
      name: "Instagram",
      icon: <SiInstagram className="w-5 h-5" />,
      url: "https://www.instagram.com/your-instagram-profile/",
      gradient: "from-pink-500 to-purple-600",
      hoverColor: "hover:text-white"
    }
  ];

  return (
    <section id="contact" ref={ref} className="section-padding bg-gradient-to-br from-gray-50 via-white to-purple-50/30 relative overflow-hidden">
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
          className="absolute top-1/2 left-1/3 w-32 h-32 bg-pink-200/20 rounded-full blur-2xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.4, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-1/4 right-1/4 w-24 h-24 bg-cyan-200/20 rounded-full blur-xl"
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
            <HiHeart className="w-4 h-4 mr-2 text-pink-500" />
            <span className="text-sm font-medium text-gray-700">Let's Connect</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-6"
            variants={fadeInUp}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Send me a message and I'll get back to you as soon as possible.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Information */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="relative">
              <motion.div className="text-center mb-8" variants={fadeInUp}>
                <motion.div
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 rounded-full mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <HiSparkles className="w-4 h-4 mr-2 text-blue-500" />
                  <span className="text-sm font-medium text-gray-700">Contact Information</span>
                </motion.div>
                
              </motion.div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    className={`relative bg-gradient-to-br ${info.bgGradient} backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/20 overflow-hidden`}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.03, 
                      y: -5,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                    }}
                  >
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl"></div>
                    
                    <div className="flex items-center space-x-4 relative">
                      <motion.div 
                        className={`p-4 rounded-2xl bg-gradient-to-r ${info.gradient} text-white shadow-xl`}
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 5,
                          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)"
                        }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {info.icon}
                      </motion.div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-gray-900 font-semibold hover:text-blue-600 transition-colors duration-200 text-lg"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-900 font-semibold text-lg">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className="relative">
              <motion.h4 
                className="text-xl font-bold text-gray-900 mb-6 text-center"
                variants={fadeInUp}
              >
                Connect on Social Media
              </motion.h4>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 bg-white/70 backdrop-blur-sm rounded-2xl text-gray-600 ${social.hoverColor} transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20`}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.15, 
                      y: -5,
                      background: `linear-gradient(to right, ${social.gradient.split(' ')[1]}, ${social.gradient.split(' ')[3]})`
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Enhanced Additional Info */}
            <motion.div
              className="relative bg-gradient-to-br from-gray-50/80 to-blue-50/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl overflow-hidden"
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full blur-xl"></div>
              
              <div className="relative">
                <motion.div
                  className="inline-flex p-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl mb-4 shadow-xl"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <HiLightBulb className="w-6 h-6" />
                </motion.div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  Let's Work Together
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you're a company looking for a developer or an individual 
                  with a great idea, let's connect and see how we can create something amazing together.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ delay: 0.2 }}
          >
            <div className="relative bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 overflow-hidden">
              {/* Background decorations */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-200/20 to-transparent rounded-full blur-xl"></div>
              
              <div className="relative">
                <motion.div className="text-center mb-8" variants={fadeInUp}>
                  <motion.div
                    className="inline-flex p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl mb-4 shadow-xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <HiPaperAirplane className="w-6 h-6" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Send Message
                  </h3>
                </motion.div>

                {/* Enhanced Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    className="mb-6 p-4 bg-green-50/80 backdrop-blur-sm border border-green-200/50 rounded-xl flex items-center text-green-800 shadow-lg"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <HiCheckCircle className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    className="mb-6 p-4 bg-red-50/80 backdrop-blur-sm border border-red-200/50 rounded-xl flex items-center text-red-800 shadow-lg"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <HiExclamationCircle className="w-5 h-5 mr-2" />
                    <span className="text-sm font-medium">Failed to send message. Please try again or contact me directly.</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Enhanced Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <HiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white/70 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
                          placeholder="Your name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <HiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white/70 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/70 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
                      placeholder="What's this about?"
                    />
                  </div>

                  {/* Enhanced Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <HiChatAlt className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full pl-10 pr-4 py-3 bg-white/70 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none shadow-sm"
                        placeholder="Tell me about your project or just say hello..."
                      />
                    </div>
                  </div>

                  {/* Enhanced Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-semibold rounded-xl transition-all duration-200 shadow-xl hover:shadow-2xl backdrop-blur-sm border border-white/10 ${
                      isSubmitting 
                        ? 'opacity-50 cursor-not-allowed' 
                        : 'hover:from-gray-800 hover:to-gray-700'
                    }`}
                    whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <HiPaperAirplane className="w-5 h-5 mr-2" />
                        Send Message
                        <motion.div
                          className="ml-2"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          ✨
                        </motion.div>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Call to Action */}
        <motion.div
          className="mt-20 text-center"
          variants={fadeInUp}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ delay: 0.8 }}
        >
          <div className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl shadow-2xl p-10 text-white overflow-hidden">
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
                <HiMail className="w-8 h-8 text-blue-300" />
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-4">
                Prefer Direct Communication?
              </h3>
              <p className="text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                Skip the form and reach out to me directly via email. 
                I'm always excited to discuss new opportunities and collaborations.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open('mailto:arjunkharade1643@gmail.com', '_blank')}
                  className="bg-white/90 text-gray-900 hover:bg-white shadow-xl hover:shadow-2xl backdrop-blur-sm border border-white/20"
                >
                  <HiMail className="w-5 h-5 mr-2" />
                  Email Me Directly
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
