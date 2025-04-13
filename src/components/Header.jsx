import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Add scrolled class when page is scrolled
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = ['hero', 'skills', 'projects', 'testimonials', 'about', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  // Toggle mobile menu with animation
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Smooth scroll to section and close mobile menu
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        {/* Hamburger Icon (mobile view) */}
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Logo / Brand Name */}
        <h1 className="logo" onClick={() => scrollToSection('hero')}>
          <span className="logo-purple">Lakshya</span> Soni
        </h1>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li className={activeSection === 'hero' ? 'active' : ''} style={{'--item-index': 0}}>
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}
              className={activeSection === 'hero' ? 'active-link' : ''}
            >
              Home
            </a>
          </li>
          <li className={activeSection === 'skills' ? 'active' : ''} style={{'--item-index': 1}}>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('skills');
              }}
              className={activeSection === 'skills' ? 'active-link' : ''}
            >
              Technical Expertise
            </a>
          </li>
          <li className={activeSection === 'about' ? 'active' : ''} style={{'--item-index': 3}}>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className={activeSection === 'about' ? 'active-link' : ''}
            >
              About Me
            </a>
          </li>
          <li className={activeSection === 'projects' ? 'active' : ''} style={{'--item-index': 2}}>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('projects');
              }}
              className={activeSection === 'projects' ? 'active-link' : ''}
            >
              Projects
            </a>
          </li>
          <li className={activeSection === 'testimonials' ? 'active' : ''} style={{'--item-index': 4}}>
            <a
              href="#testimonials"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('testimonials');
              }}
              className={activeSection === 'testimonials' ? 'active-link' : ''}
            >
              Testimonials
            </a>
          </li>
          <li className={activeSection === 'contact' ? 'active' : ''} style={{'--item-index': 5}}>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className={activeSection === 'contact' ? 'active-link' : ''}
            >
              Contact
            </a>
          </li>
          {/* Download CV Button */}
          <li className="download-cv">
            <a href="/assets/cv.pdf" download className="cv-button">
              Download CV
            </a>
          </li>
        </ul>
      </nav>

      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div className="menu-overlay" onClick={toggleMenu}></div>
      )}
    </header>
  );
};

export default Header;


