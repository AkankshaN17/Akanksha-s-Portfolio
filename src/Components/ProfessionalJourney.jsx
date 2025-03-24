import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProfessionalJourney = () => {
    const [showMore, setShowMore] = useState(false);
    const toggleContent = () => setShowMore(!showMore);

    return (
        <motion.div
            className="bg-zinc-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.h3
                className="text-2xl font-semibold mb-4 text-pink-400"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            >
                Professional Journey
            </motion.h3>

            <motion.ul
                className="list-disc pl-5 text-pink-200 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            >
                <li>Excelled academically with 73% in BTech, 80% in HSC, and 84% in SSC.</li>
                <li>Self-learned HTML, CSS, and JavaScript, gaining strong frontend development skills.</li>
                {showMore && (
                    <>
                        <motion.li
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
                        >
                            Led a mini project in second & third year and served as a frontend developer in final year major projects.
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                        >
                            Pursuing an extra certification course in JAVA FULL-STACK at Hyderabad.
                        </motion.li>
                    </>
                )}
            </motion.ul>

            <motion.button
                onClick={toggleContent}
                className="mt-4 px-4 py-2 text-white rounded-lg bg-gradient-to-r from-pink-500 to-pink-700 backdrop-blur-md 
                        transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:opacity-90"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
            >
                {showMore ? 'Show Less' : 'Read More'}
            </motion.button>

        </motion.div>
    );
};

export default ProfessionalJourney;
