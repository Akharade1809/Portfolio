import React from 'react';
import logo from '../assets/logo.jpeg';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="mx-2 flex flex-shrink-0 items-center">
        <img className='mx-2 w-30' src={logo} alt='logo' />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/arjun-amit-kharade-308b82303/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Akharade1809" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://twitter.com/your-twitter-profile" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter />
        </a>
        <a href="https://www.instagram.com/your-instagram-profile/" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
