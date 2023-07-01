import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { motion } from 'framer-motion';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-11/12 sm:w-2/3 m-auto my-3">
      <button
        className="flex items-center text-2xl justify-between w-full py-5 px-4 bg-gray-200 bg-opacity-25 text-white rounded-md focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="accordion-question">{question}</span>
        <span className="accordion-icon">
          {isOpen ? (
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: 45 }}
              transition={{ duration: 0.3 }}
            >
              <FiMinus />
            </motion.span>
          ) : (
            <FiPlus />
          )}
        </span>
      </button>
      {isOpen && (
        <motion.div
          className="accordion-content py-5 px-4 bg-gray-200 bg-opacity-25 text-white text-opacity-80 rounded-md mt-2"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: -10, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 13, duration: 1 }}
        >
          <motion.p>{answer}</motion.p>
        </motion.div>
      )}
    </div>
  );
};

export default AccordionItem;
