import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJava, faHtml5, faCss3Alt, faJsSquare,
  faReact, faGitAlt
} from '@fortawesome/free-brands-svg-icons';
import {
  SiC, SiMysql, SiOracle,
  SiPostman, SiSpring, SiSpringboot, SiHibernate, SiEclipseide, SiApachemaven, SiXml
} from 'react-icons/si';
import { BiLogoVisualStudio } from "react-icons/bi";
import { VscJson } from "react-icons/vsc";
import { motion } from "framer-motion";


const skillsCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', icon: faJava, color: '#f89820' },
      { name: 'JavaScript', icon: faJsSquare, color: '#f7df1e' },
      { name: 'C', icon: SiC, color: '#00599C' },
    ],
  },
  {
    title: 'Web Technologies',
    skills: [
      { name: 'HTML5', icon: faHtml5, color: '#e34c26' },
      { name: 'CSS3', icon: faCss3Alt, color: '#1572b6' },
      { name: 'JSON', icon: VscJson, color: '#f7b93e' },
      { name: 'JSP', icon: faJava, color: '#007ACC' },
      { name: 'Servlet', icon: faJava, color: '#F89820' },
      { name: 'XML', icon: SiXml, color: '#ff6600' },
      { name: 'RESTful APIs', icon: SiSpring, color: '#ffffff' },
      { name: 'React.js', icon: faReact, color: '#61dbfb' },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'Spring', icon: SiSpring, color: '#6db33f' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6db33f' },
      { name: 'Hibernate', icon: SiHibernate, color: '#59666C' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#00758f' },
      { name: 'Oracle', icon: SiOracle, color: '#f80000' },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      { name: 'Maven', icon: SiApachemaven, color: '#c71a36' },
      { name: 'Git', icon: faGitAlt, color: '#f34f29' },
      { name: 'Eclipse IDE', icon: SiEclipseide, color: '#2c2255' },
      { name: 'Visual Studio Code', icon: BiLogoVisualStudio, color: '#007ACC' },
      { name: 'Postman', icon: SiPostman, color: '#ff6c37' },
    ],
  },
];


const getIconComponent = (icon, color) => {
  if (typeof icon === 'object') {
    return <FontAwesomeIcon icon={icon} size="2x" className="text-white" style={{ color }} />;
  } else if (typeof icon === 'function') {
    return React.createElement(icon, { size: 32, color });
  }
};

const Skills = () => {
  return (
    <section id='skills' className="py-16 bg-zinc-900">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-5xl font-bold mb-8 text-[#ff66b2]">My Skills</h2>

        {skillsCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h3 className="text-2xl font-semibold text-[#ff66b2] mb-6">{category.title}</h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-white p-6 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition transform hover:scale-105 shadow-lg"
                  data-aos="flip-up"
                  initial={{ opacity: 0, y: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-center mb-4 p-4 rounded-full bg-zinc-900">
                    {skill.icon && getIconComponent(skill.icon, skill.color)}
                  </div>
                  <p className="text-lg font-semibold text-white text-center">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
