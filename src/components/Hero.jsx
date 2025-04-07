import React, { useEffect, useState } from "react";
import "../styles/Hero.css"; // <-- अपना सही path लगाएं
import profilePic from "../assets/profile-pic.jpg"; // ध्यान दें कि path सही हो

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // थोड़ासा delay देकर "fade-up" animation दिखाने के लिए
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section" id="hero">
      {/* Background Container */}
      <div className="hero-bg-container">
        {/* Background Image */}
        <img
          src="https://static.readdy.ai/image/d6029ba88234f5dbaa775d0fc9170a74/1ca75dc8ee166f1324f019ec54de5c94.jpeg"
          alt="Background"
        />
        {/* Dark Gradient Overlay */}
        <div className="overlay"></div>
      </div>

      {/* Main Content */}
      <div className="hero-content-container">
        <div className="hero-grid">
          {/* Left Text Block */}
          <div className={`fade-up ${isLoaded ? "loaded" : ""}`}>
            <h1 className="hero-title">
              Hi, I'm <span className="text-purple">Lakshya Soni</span>
              <br />
              <span className="gradient-text">Full Stack Developer</span>
            </h1>
            <p className="hero-paragraph">
              I create engaging digital experiences with clean code, Python
              programming, and UI/UX design. Let's build something amazing
              together.
            </p>
            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </button>
              <button
                className="btn-outline"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Image Block */}
          <div className={`fade-up delay-300 ${isLoaded ? "loaded" : ""}`}>
            <div style={{ position: "relative" }}>
              {/* Floating circles */}
              <div
                className="floating-circle"
                style={{
                  top: "-1.5rem",
                  left: "-1.5rem",
                  width: "8rem",
                  height: "8rem",
                  backgroundColor: "rgba(147,51,234,0.3)", // purple-500, ~30% opacity
                }}
              ></div>
              <div
                className="floating-circle"
                style={{
                  bottom: "-2rem",
                  right: "-2rem",
                  width: "10rem",
                  height: "10rem",
                  backgroundColor: "rgba(99,102,241,0.3)", // indigo-500, ~30% opacity
                  animationDelay: "1s",
                }}
              ></div>

              {/* Profile Image */}
              <img
                src={profilePic}
                alt="Lakshya Soni"
                className="profile-pic"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bouncing Arrow at bottom */}
      <div className="bounce-arrow">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about");
          }}
        >
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
