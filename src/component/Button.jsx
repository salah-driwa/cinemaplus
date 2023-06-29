import { motion } from 'framer-motion';
import { useState } from 'react';

const Button = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverStart = () => {
    setIsHovered(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  return (
    <motion.button
      className="bg-primary-button bg-opacity-80 text-white py-4 px-4 rounded flex items-center "
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      whileHover={{ margin:5 }}
    >
      {children}
      <motion.span
        className="w-4 h-4 ml-3"
        animate={{ translateX: isHovered ? 10 : 0 }} // Move the arrow when the button is hovered
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6.707 14.707a1 1 0 01-1.414-1.414L9.586 10l-4.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5z"
            clipRule="evenodd"
          />
        </svg>
      </motion.span>
    </motion.button>
  );
};

export default Button;
