import React from 'react';
import ProfileCard from './ProfileCard';

const Hero = () => {
  return (
    <section id="home" className="hero pt-28 lg:pt-38">
      <div className="container mx-auto px-4 lg:flex lg:items-center lg:justify-between lg:gap-10">
        <div className="lg:w-1/2" data-aos="fade-right">
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg animate-fade-in">
              <img
                src="/images/no-bg.png"
                alt="Akanksha-portrait"
                width={40}
                height={40}
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-white text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-[#ff66b2]">
                <span className="absolute inset-0 rounded-full bg-[#ff66b2] animate-ping"></span>
              </span>
              Excited for New Opportunities!
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10 animate-slide-up">
            Code. Create. Innovate. 🌐 Transforming ideas into digital reality.
          </h2>

          <div className="flex items-center gap-3">
            <a
              href="/documents/Akanksha_Resume.pdf"
              download="Akanksha_Resume.pdf"
              className="btn btn-secondary flex items-center gap-2 animate-glow"
            >
              <span className="material-symbols-rounded">download</span>
              Resume
            </a>

            <a href="#about">
              <button className="btn btn-primary flex items-center gap-2 animate-scale">
                <span className="material-symbols-rounded">info</span>
                More...
              </button>
            </a>
          </div>
        </div>

        <div className="lg:w-1/2 mt-10 lg:mt-0" data-aos="fade-left">
          <ProfileCard />
        </div>
      </div>

      <style>
        {`
          /* Fade-In Animation (Smooth) */
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-fade-in {
            animation: fadeIn 1.5s ease-in-out;
          }

          /* Slide-Up Animation (Continuous) */
          @keyframes slideUp {
            0% { opacity: 0; transform: translateY(20px); }
            50% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(20px); }
          }
          .animate-slide-up {
            animation: slideUp 3s infinite ease-in-out;
          }

          /* Glowing Effect (Continuous) */
          @keyframes glow {
            0% { box-shadow: 0 0 5px rgba(255, 102, 178, 0.5); }
            50% { box-shadow: 0 0 20px rgba(255, 102, 178, 1); }
            100% { box-shadow: 0 0 5px rgba(255, 102, 178, 0.5); }
          }
          .animate-glow {
            animation: glow 3s infinite ease-in-out;
          }

          /* Scale Effect (Continuous) */
          @keyframes scale {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
          .animate-scale {
            animation: scale 2s infinite ease-in-out;
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
