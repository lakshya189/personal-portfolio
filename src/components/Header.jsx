import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Font Awesome Icons (optional)
import '../styles/Header.css'; // अपनी CSS फ़ाइल का सही path दें

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // मोबाइल पर हैम्बर्गर मेनू टॉगल करने के लिए
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        {/* Logo / Brand Name */}
        <h1 className="logo">
          {/* "Lakshya" को पर्पल रंग, "Soni" को डार्क/ब्लैक */}
          <span className="logo-purple">Lakshya</span> Soni
        </h1>

        {/* Hamburger Icon (mobile) */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero");
              }}
            >
              Home
            </a>
          </li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About Me</a></li>
          {/* Download CV Button */}
          <li>
            <a 
              href="/LakshyaSoniCV.pdf" 
              download 
              className="cv-button"
            >
              Download CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
