import React, { useState } from 'react';
import Navbar from './Navbar';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900/0" data-aos="fade-down">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">

        <h1>
          <a href="#home" className="logo" data-aos="zoom-in">
            <img
              src="/images/AN_LOGO.png"
              width={100}
              height={50}
              alt="Akanksha Logo"
              className="animate-bounce-once"
            />
          </a>
        </h1>

        <div className="relative md:justify-self-center" data-aos="fade-down">
          <button className="menu-btn md:hidden" onClick={() => setNavOpen((prev) => !prev)}>
            <span className="material-symbols-rounded">{navOpen ? 'close' : 'menu'}</span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>

        <a
          href="#contact"
          className="bg-white max-w-max h-9 flex items-center gap-2 px-4 rounded-xl font-medium text-sm ring-1 hover:bg-gray-100 text-gray-900 shadow-lg shadow-white-800 max-md:hidden md:justify-self-end animate-glow"
          data-aos="fade-up"
        >
          Contact Me
        </a>
      </div>

      <style>
        {`
          @keyframes bounceOnce {
            0% { transform: translateY(-10px); opacity: 0; }
            50% { transform: translateY(5px); opacity: 0.7; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .animate-bounce-once {
            animation: bounceOnce 1s ease-in-out;
          }

          @keyframes glow {
            0% { box-shadow: 0 0 5px rgba(255, 102, 178, 0.5); }
            50% { box-shadow: 0 0 15px rgba(255, 102, 178, 1); }
            100% { box-shadow: 0 0 5px rgba(255, 102, 178, 0.5); }
          }
          .animate-glow {
            animation: glow 2.5s infinite alternate ease-in-out;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
