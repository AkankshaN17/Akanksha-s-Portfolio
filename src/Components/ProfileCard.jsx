import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ProfileCard = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="rounded-2xl shadow-lg p-8 bg-white max-w-sm transition-transform duration-300 hover:scale-105">
        <img
          src="/images/profile.png"
          alt="profile"
          className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-[#ff66b2]"
        />

        <h2 className="text-center text-2xl font-bold text-gray-800 mb-2 font-['Inter']">
          Akanksha Nikam
        </h2>
        <p className="text-center text-gray-600 mb-6 font-['Inter']">Full Stack Developer</p>

        <h3 className="text-xl text-[#ff66b2] font-semibold text-center mb-6 font-['Inter']">
          Code with passion, build with purpose!
        </h3>

        <div className="flex justify-center space-x-6">
          <a href="https://github.com/AkankshaN17" target="_blank" rel="noreferrer">
            <FaGithub className="w-8 h-8 text-black transition-transform duration-300 hover:scale-110" />
          </a>
          <a href="https://www.linkedin.com/in/akanksha-nikam-72a293244/" target="_blank" rel="noreferrer">
            <FaLinkedin className="w-8 h-8 text-blue-600 transition-transform duration-300 hover:scale-110" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
