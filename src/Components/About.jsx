import React from 'react';
import Introduction from './Introduction';
import ProfessionalJourney from './ProfessionalJourney';
import Achievements from './Achievements';
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="container mx-auto py-20 lg:py-28"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-center text-5xl font-bold mb-8 component-headings">
        About Me
      </h2>
      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        >
          <Introduction />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <ProfessionalJourney />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          <Achievements />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;

