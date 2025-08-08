import { motion } from 'framer-motion';
import { scaleOnHover } from '../../utils/animations';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  disabled = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-500 shadow-lg hover:shadow-xl',
    secondary: 'bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white focus:ring-gray-500',
    outline: 'border-2 border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900 focus:ring-gray-500'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled}
      {...scaleOnHover}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
