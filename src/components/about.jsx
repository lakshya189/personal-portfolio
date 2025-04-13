import React from "react";
import "../styles/about.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <section id="about" className="about-section">
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

      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          {/* Image Section */}
          <div className="about-image">
            <img src="/assets/profile-pic.jpg" alt="Profile" width="300px" height="300px" />
          </div>

          {/* Text Content */}
          <div className="about-text">
            <h3>Full Stack Developer, Python Programmer & UI/UX Designer</h3>
            <p>
              With over +2 years of Freelancing experience in web development, I specialize in creating responsive, user-friendly interfaces and robust backend systems. My expertise in Python programming allows me to build efficient, scalable solutions, while my passion for UI/UX design ensures applications that are both beautiful and intuitive.
            </p>
            <p>
              I'm constantly exploring new technologies and methodologies to enhance my skills and deliver cutting-edge solutions. When I'm not coding, you can find me working on open-source projects, exploring data visualization techniques, and creating innovative design systems.
            </p>

            <div className="info-grid">
              <div className="info-column">
                <h4>Personal Info</h4>
                <ul className="personal-info-list">
                  <li>
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="fa-icon" /> Nawalgarh, Rajasthan, India
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} className="fa-icon" /> lakshya@example.com
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPhone} className="fa-icon" /> (+91) 773-775-0331
                  </li>
                </ul>
              </div>

              <div className="info-column">
                <h4>My Interests</h4>
                <div className="interests-container">
                  <span className="interest-tag">UI/UX Design</span>
                  <span className="interest-tag">Python</span>
                  <span className="interest-tag">Full Stack Developer</span>
                  <span className="interest-tag">Open Source</span>
                  <span className="interest-tag">Gaming</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://www.youtube.com"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              <a href="https://www.youtube.com"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="https://www.youtube.com"><FontAwesomeIcon icon={faInstagram} /></a>
              {/* <a href="https://www.youtube.com"><FontAwesomeIcon icon={faBehance} /></a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;




