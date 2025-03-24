import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 py-8 -mt-6 text-center">
      <div className="container mx-auto px-6 flex flex-col items-center">

        <div className="mb-8">
          <h3 className="text-3xl font-semibold text-pink-500 mb-6">Let's Connect</h3>
          <div className="flex space-x-6 justify-center">
            <a href="https://github.com/AkankshaN17" target="_blank" rel="noopener noreferrer" className="group">
              <FontAwesomeIcon
                icon={faGithub}
                size="2x"
                className="text-white group-hover:text-zinc-300 transition duration-300 transform group-hover:scale-110"
              />
            </a>
            <a href="https://www.linkedin.com/in/akanksha-nikam-72a293244/" target="_blank" rel="noopener noreferrer" className="group">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="text-white group-hover:text-pink-500 transition duration-300 transform group-hover:scale-110"
              />
            </a>
          </div>
        </div>

        <div className="text-white">
          <p className="mb-2 font-semibold text-lg">Email: akankshadeshmukh383@gmail.com</p>
          <p className="mb-2 font-semibold text-lg">Phone: +91 91301 53721</p>

          <div className="flex justify-center mt-4">
            <div className="rounded-full bg-pink-500 w-24 h-24 flex items-center justify-center text-white text-xl font-semibold tracking-wide 
                        animate-float shadow-lg shadow-pink-500/50">
              Thanks
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-zinc-700 pt-4">
        <p className="text-center text-zinc-500">&copy; {new Date().getFullYear()} Akanksha Nikam. All Rights Reserved.</p>
      </div>

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
