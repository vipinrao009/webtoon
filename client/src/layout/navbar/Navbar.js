import React, { useState } from 'react';
import './Navbar.css';
import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the navbar when the hamburger icon is clicked
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Toaster/>
        <Link to={'/'} className='logo'><h2>WebToon</h2></Link>
      </div>

      {/* Hamburger icon for mobile view */}
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation links */}
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
       <li><a href="/create-webtoon">Create Webtoon</a></li>
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
