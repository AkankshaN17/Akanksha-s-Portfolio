import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initActiveBox = () => {
    activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
  };

  useEffect(() => {
    initActiveBox();
    window.addEventListener('resize', initActiveBox);
    return () => {
      window.removeEventListener('resize', initActiveBox);
    };
  }, []);

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove('active');
    event.target.closest('a').classList.add('active');
    lastActiveLink.current = event.target.closest('a');

    activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
  };

  const navItems = [
    { label: 'Home', link: '#home', icon: 'home', className: 'nav-link active', ref: lastActiveLink },
    { label: 'About', link: '#about', icon: 'info', className: 'nav-link' },
    { label: 'Skills', link: '#skills', icon: 'school', className: 'nav-link' },
    { label: 'Projects', link: '#project', icon: 'work', className: 'nav-link' },
    { label: 'Contact', link: '#contact', icon: 'mail', className: 'nav-link md:hidden' },
  ];

  return (
    <motion.nav
      className={'navbar ' + (navOpen ? 'active' : '') + ' font-inter'}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {navItems.map(({ label, link, icon, className, ref }, key) => (
        <motion.a
          href={link}
          key={key}
          ref={ref}
          className={`${className} text-[#ff66b2] hover:text-white transition-colors duration-300`}
          onClick={activeCurrentLink}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: key * 0.1 }}
        >
          <span className="material-symbols-rounded">{icon}</span>
          {label}
        </motion.a>
      ))}
      <motion.div
        className="active-box bg-[#ff66b2]"
        ref={activeBox}
        layout
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      ></motion.div>
    </motion.nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
