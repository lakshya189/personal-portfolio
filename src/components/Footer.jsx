import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaHeart,
  FaArrowUp,
  FaInstagram
} from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        {/* Floating particles for decoration */}
        {[...Array(8)].map((_, i) => {
          const size = Math.random() * 6 + 2;
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const duration = Math.random() * 20 + 10;
          const delay = Math.random() * 5;

          return (
            <div
              key={`particle-${i}`}
              className="floating-particle"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${top}%`,
                left: `${left}%`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`
              }}
            />
          );
        })}

        <div className="footer-top">
          {/* Left Column */}
          <div className="footer-section footer-left">
            <h2>Lakshya Soni</h2>
            <p>
              Creating exceptional digital experiences through innovative design and development.
            </p>
            <div className="social-icons">
              <a href="https://www.google.com"><FaGithub /></a>
              <a href="https://www.google.com"><FaLinkedin /></a>
              <a href="https://www.google.com"><FaTwitter /></a>
              <a href="https://www.google.com"><FaInstagram /></a>
            </div>
          </div>

          {/* Center Column */}
          <div className="footer-section footer-center">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="footer-section footer-right">
            <h3>Newsletter</h3>
            <p>Subscribe to receive updates on new projects and articles.</p>
            <div className="newsletter">
              <input type="email" placeholder="Your Email" />
              <button type="button"><FaArrowUp /></button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Lakshya Soni. All rights reserved.</p>
          <p>
            Designed & Developed with <FaHeart className="heart" />
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
