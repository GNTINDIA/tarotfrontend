import React from "react";
import LoveImages from "../../../assets/relationship.webp";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
const LoveAndRelationship = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h3 className="text-teal-600 text-lg mb-2">Tarot With Deepa</h3>
          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            <span className="text-gray-800">Simplify Love &</span><br />
            <span className="text-gray-800">Relationship </span>
            <span className="text-green-600">with</span><br />
            <span className="text-green-600">Tarot</span>
          </h1>
          <p className="text-gray-600 mb-8">
          Don’t let your emotions get the best of you. I will help you find the clarity to navigate through the ups and downs of relationships, assess prospects, and deal with difficult matters of the heart using relationship tarot.
          </p>
          <div className="flex space-x-4">
            <button className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition duration-300">
              Book a Session
            </button>
            <button className="bg-white text-teal-600 px-6 py-2 rounded-full border border-teal-600 hover:bg-teal-50 transition duration-300">
              <Link to='/pricing/india'>Explore Services</Link>
            </button>
          </div>
        </div>
        
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden md:block w-1/2"
        >
          <div className="relative w-90 h-90 mx-auto perspective-1000">
            <motion.div
              className="w-full h-full"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateY(-20deg) rotateX(10deg)',
              }}
              whileHover={{
                rotateY: 0,
                rotateX: 0,
                transition: { duration: 0.5 },
              }}
            >
              <img
                src={LoveImages}
                alt="Tarot cards"
                className="w-full h-full object-contain"
               
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoveAndRelationship;
