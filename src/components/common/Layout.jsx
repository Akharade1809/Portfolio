import { motion } from 'framer-motion';

const Layout = ({ children }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50"
    >
      {children}
    </motion.div>
  );
};

export default Layout;
