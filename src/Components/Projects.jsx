import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import { SiTailwindcss, SiTensorflow } from 'react-icons/si';

const projectData = [
  {
    id: 1,
    title: 'Personal Portfolio',
    image: '/images/project-1.png',
    description: 'My personal portfolio built with React and Tailwind CSS, providing a clean and modern showcase of my skills and projects.',
    technologies: [
      { icon: faHtml5, color: '#e34c26', name: 'HTML5' },
      { icon: faCss3Alt, color: '#1572b6', name: 'CSS3' },
      { icon: faJs, color: '#f7df1e', name: 'JavaScript' },
      { icon: faReact, color: '#61dafb', name: 'React' },
      { icon: SiTailwindcss, color: '#38b2ac', name: 'Tailwind CSS' },
    ],
    code: 'https://github.com/AkankshaN17/Akanksha-s-Portfolio.git',
    live: 'https://akankshanikamportfolio.netlify.app',
  },
  {
    id: 2,
    title: 'Driver Attention Skewness System',
    image: '/images/project-2.png',
    description: 'Developed a machine learning-based system to analyze driver attention and reduce distractions.',
    technologies: [
      { icon: faPython, color: '#f7df1e', name: 'Python' },
      { icon: <SiTensorflow className="text-2xl" style={{ color: '#FF6F00' }} />, name: 'TensorFlow' },
    ],
    code: 'https://github.com/AkankshaN17/DRIVER-ATTENTION-SKEWNESS-RECOMMENDER-SYSTEM.git',
    live: 'https://github.com/AkankshaN17/DRIVER-ATTENTION-SKEWNESS-RECOMMENDER-SYSTEM.git',
  },
  {
    id: 3,
    title: 'Gym Management System',
    image: '/images/project-3.png',
    description: 'A web-based platform that simplifies customer management, inquiries, equipment tracking, and payments.',
    technologies: [
      { icon: faHtml5, color: '#e34c26', name: 'HTML5' },
      { icon: faCss3Alt, color: '#1572b6', name: 'CSS3' },
      { icon: faJs, color: '#f7df1e', name: 'JavaScript' },
      { icon: faPython, color: '#f7df1e', name: 'Python' },
    ],
    code: 'https://github.com/AkankshaN17/Gym-Management-System.git',
    live: 'https://github.com/AkankshaN17/Gym-Management-System.git',
  },
];

const Projects = () => {
  return (
    <section id="project" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-5xl font-bold mb-8 text-pink-500 font-inter">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map(({ id, image, title, description, technologies, code, live }) => (
            <article
              key={id}
              className="bg-zinc-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 object-contain transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-pink-400">{title}</h3>
              <p className="text-pink-200 mb-4 font-inter">{description}</p>
              <div className="flex flex-wrap gap-4 mb-4">
                {technologies.map(({ icon, color }, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    {typeof icon === "object" ? (
                      <FontAwesomeIcon icon={icon} className="text-2xl" style={{ color }} />
                    ) : (
                      <icon className="text-2xl" style={{ color }} />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-end space-x-4">
                <a
                  href={code}
                  className="flex items-center space-x-2 text-white bg-gradient-to-r from-pink-400 to-pink-600 hover:from-pink-600 hover:to-pink-400 px-4 py-2 rounded-lg transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-rounded">code</span>
                  <span>Code</span>
                </a>
                <a
                  href={live}
                  className="flex items-center space-x-2 text-white bg-gradient-to-r from-pink-400 to-pink-600 hover:from-pink-600 hover:to-pink-400 px-4 py-2 rounded-lg transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-rounded">launch</span>
                  <span>Live</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
