import React from "react";
import { motion } from "framer-motion";

const ContactMe = () => {
  return (
    <section id="contact" className="contact py-16 bg-zinc-900">
      <motion.div
        className="container mx-auto px-6 flex flex-col items-center text-center"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="w-full max-w-2xl mb-10">
          <motion.h2
            className="text-5xl font-bold mb-8 component-headings text-white"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
          >
            Have an idea? Let’s code it into reality!
          </motion.h2>

          <motion.p
            className="text-lg text-white font-medium mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          >
            From imagination to execution. <br />
            I’m here to code, create, and collaborate. <br />
            Let’s work together to build software that solves real-world
            problems and shapes the future!
          </motion.p>

          <motion.div
            className="text-white text-lg font-semibold tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          >
            <p>
              Email:{" "}
              <a
                href="mailto:akankshadeshmukh383@gmail.com"
                className="text-pink-500 hover:text-pink-400 transition-colors font-bold"
              >
                Akankshadeshmukh383@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+919130153721"
                className="text-pink-500 hover:text-pink-400 transition-colors font-bold"
              >
                +91 91301 53721
              </a>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactMe;