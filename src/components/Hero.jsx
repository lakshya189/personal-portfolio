import React, { useEffect, useState, useRef } from "react";
import { useInView } from 'react-intersection-observer';
import "../styles/Hero.css";
import Spline from '@splinetool/react-spline';
import * as THREE from 'three';
const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true });
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [shouldLoadSpline, setShouldLoadSpline] = useState(true); // Always load Spline
  const [textAnimationStarted, setTextAnimationStarted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile (for optimizations)
  useEffect(() => {
    const checkDevice = () => {
      // Only use this for optimizations, not to disable Spline
      const isMobileDevice = window.innerWidth <= 768;
      setIsMobile(isMobileDevice);

      // Always load Spline regardless of device
      setShouldLoadSpline(true);
    };

    // Check initially
    checkDevice();

    // Add resize listener
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Delay loading Spline until page is ready
  useEffect(() => {
    if (document.readyState === 'complete') {
      setShouldLoadSpline(true);
    } else {
      window.addEventListener('load', () => setShouldLoadSpline(true));
      return () => window.removeEventListener('load', () => setShouldLoadSpline(true));
    }
  }, []);

  // Optimized mouse movement tracking
  useEffect(() => {
    if (isMobile) return () => {};

    let rafId = null;

    const handleMouseMove = (e) => {
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          // Calculate position with reduced sensitivity (only move 1/5 as much)
          const x = (e.clientX / window.innerWidth) * 0.4 - 0.2;
          const y = (e.clientY / window.innerHeight) * 0.4 - 0.2;

          // Only update if movement is significant to reduce renders
          if (Math.abs(x - mousePosition.x) > 0.01 || Math.abs(y - mousePosition.y) > 0.01) {
            setMousePosition({ x, y });
          }
          rafId = null;
        });
      }
    };

    // Use passive event listener for better performance
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };
  }, [isMobile, mousePosition]);

  const onSplineLoad = (spline) => {
    console.log("🔄 Spline object received:", spline);

    // Use a short delay to ensure runtime is initialized
    setTimeout(() => {
      if (!spline || !spline.runtime) {
        console.warn("Spline or runtime missing");
        setSplineLoaded(true);
        return;
      }

      try {
        const renderer = spline.runtime.renderer;
        const scene = spline.runtime.scene;
        // ⚙️ Optimizations
        renderer.antialias = false; // Turn off antialias for performance
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Lower pixel ratio
        renderer.toneMapping = THREE.NoToneMapping; // Disable tone mapping
        renderer.shadowMap.enabled = false; // Turn off shadows

        // 🔁 Disable auto rendering and trigger manually on user interaction
        spline.runtime.setAutoRender(false);

        const triggerRender = () => spline.runtime.render();
        ['mousemove', 'click', 'scroll'].forEach(event =>
          window.addEventListener(event, triggerRender)
        );
        scene.traverse((child) => {
          if (child.isMesh && child.material) {
            child.castShadow = false;
            child.receiveShadow = false;
            child.material.precision = 'lowp';
            child.material.dithering = false;
          }
        });

        setSplineLoaded(true);
        console.log("Spline optimized and loaded");
      } catch (e) {
        console.error("Spline optimization error", e);
        setSplineLoaded(true);
      }
    }, 300);
  };


  // Simplified animation sequence
  useEffect(() => {
    // Start animations immediately
    setTextAnimationStarted(true);

    // Set everything as loaded with minimal delay
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
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
        {/* Enhanced cosmic background - always visible */}
        <div className="simple-background">
          {/* Stars container with perspective */}
          <div className="stars-container">
            {/* Nebula effects */}
            {[...Array(3)].map((_, i) => {
              const size = Math.random() * 300 + 200;
              const top = Math.random() * 100;
              const left = Math.random() * 100;
              const opacity = Math.random() * 0.2 + 0.1;
              const blur = Math.random() * 50 + 30;
              const duration = Math.random() * 10 + 15;
              const rotation = Math.random() * 360;
              const colors = [
                ['rgba(147, 51, 234, 0.7)', 'rgba(79, 70, 229, 0.1)'],  // Purple
                ['rgba(79, 70, 229, 0.7)', 'rgba(147, 51, 234, 0.1)'],  // Blue
                ['rgba(236, 72, 153, 0.5)', 'rgba(147, 51, 234, 0.1)']   // Pink
              ];
              const colorIndex = i % colors.length;

              return (
                <div
                  key={`nebula-${i}`}
                  className="nebula"
                  style={{
                    top: `${top}%`,
                    left: `${left}%`,
                    '--nebula-size': `${size}px`,
                    '--nebula-opacity': opacity,
                    '--nebula-blur': `${blur}px`,
                    '--nebula-duration': `${duration}s`,
                    '--nebula-rotation': `${rotation}deg`,
                    '--nebula-color-inner': colors[colorIndex][0],
                    '--nebula-color-outer': colors[colorIndex][1]
                  }}
                />
              );
            })}

            {/* Multiple star layers for parallax effect */}
            {[...Array(3)].map((_, layerIndex) => {
              const depth = (layerIndex + 1) * -100;
              const starsCount = 50 - layerIndex * 10; // Fewer stars in deeper layers

              return (
                <div
                  key={`layer-${layerIndex}`}
                  className="stars-layer"
                  style={{ '--layer-depth': `${depth}px` }}
                >
                  {/* Generate stars for this layer */}
                  {[...Array(starsCount)].map((_, i) => {
                    const size = Math.random() * (4 - layerIndex) + 1;
                    const top = Math.random() * 100;
                    const left = Math.random() * 100;
                    const delay = Math.random() * 5;
                    const duration = Math.random() * 3 + 2;
                    const opacity = Math.random() * 0.5 + 0.3;
                    const blur = Math.random() * 0.5;
                    const glowSize = size * (Math.random() * 3 + 2);

                    // Randomly create colored stars
                    const isColored = Math.random() > 0.7;
                    const starColors = [
                      'rgba(147, 51, 234, 0.9)',  // Purple
                      'rgba(79, 70, 229, 0.9)',   // Blue
                      'rgba(236, 72, 153, 0.9)',  // Pink
                      'rgba(234, 179, 8, 0.9)'    // Yellow
                    ];
                    const starColor = starColors[Math.floor(Math.random() * starColors.length)];

                    return (
                      <div
                        key={`star-${layerIndex}-${i}`}
                        className={`stars ${isColored ? 'colored' : ''}`}
                        style={{
                          top: `${top}%`,
                          left: `${left}%`,
                          '--star-size': `${size}px`,
                          '--twinkle-duration': `${duration}s`,
                          '--star-opacity': opacity,
                          '--blur-amount': `${blur}px`,
                          '--glow-size': `${glowSize}px`,
                          '--glow-color': isColored ? starColor : 'rgba(255, 255, 255, 0.8)',
                          '--star-color': starColor,
                          animationDelay: `${delay}s`
                        }}
                      />
                    );
                  })}
                </div>
              );
            })}

            {/* Cosmic dust particles */}
            {[...Array(30)].map((_, i) => {
              const size = Math.random() * 2 + 0.5;
              const top = Math.random() * 100;
              const left = Math.random() * 100;
              const opacity = Math.random() * 0.3 + 0.1;
              const blur = Math.random() * 2 + 1;
              const duration = Math.random() * 20 + 10;
              const depth = Math.random() * -200;
              const xMove = (Math.random() - 0.5) * 100;
              const yMove = (Math.random() - 0.5) * 100;

              return (
                <div
                  key={`dust-${i}`}
                  className="cosmic-dust"
                  style={{
                    top: `${top}%`,
                    left: `${left}%`,
                    '--dust-size': `${size}px`,
                    '--dust-opacity': opacity,
                    '--dust-blur': `${blur}px`,
                    '--dust-duration': `${duration}s`,
                    '--dust-depth': `${depth}px`,
                    '--dust-x': `${xMove}px`,
                    '--dust-y': `${yMove}px`,
                    animationDelay: `${Math.random() * duration}s`
                  }}
                />
              );
            })}

            {/* Generate 8 shooting stars */}
            {[...Array(8)].map((_, i) => {
              const top = Math.random() * 60;
              const left = Math.random() * 30;
              const rotation = Math.random() * 45 - 22.5;
              const delay = Math.random() * 15;
              const distance = 300 + Math.random() * 200;
              const width = Math.random() * 2 + 1;
              const length = Math.random() * 100 + 50;
              const duration = Math.random() * 4 + 2;

              return (
                <div
                  key={`shooting-${i}`}
                  className="shooting-star"
                  style={{
                    '--top': `${top}%`,
                    '--left': `${left}%`,
                    '--rotation': `${rotation}deg`,
                    '--delay': `${delay}s`,
                    '--distance': `${distance}px`,
                    '--shooting-width': `${width}px`,
                    '--shooting-length': `${length}px`,
                    '--shooting-duration': `${duration}s`
                  }}
                />
              );
            })}
          </div>
        </div>
        {/* Loading indicator */}
        {!splineLoaded && shouldLoadSpline && (
          <div className="spline-loading">
            <div className="spline-loading-spinner"></div>
            <p>Loading 3D Scene...</p>
          </div>
        )}

        {/* Always render Spline, but with different optimizations for mobile */}
        {shouldLoadSpline && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              transform: isMobile ? 'none' : `translate(${mousePosition.x * -5}px, ${mousePosition.y * -5}px)`,
              opacity: splineLoaded ? 1 : 0,
              transition: 'opacity 0.5s ease-in'
            }}
            className="spline-container"
          >
            <Spline
              scene="https://prod.spline.design/4OFhTGnFW93BPBFI/scene.splinecode"
              onLoad={onSplineLoad}
              style={{
                width: '140%',
                height: '100%',
                transform: isMobile ? 'scale(0.8)' : 'none', // Scale down on mobile for better performance
              }}
              className="spline-scene"
            />
          </div>
        )}

        {/* Dark Gradient Overlay */}
        <div className="overlay"></div>
      </div>

      {/* Main Content */}
      <div className="hero-content-container">
        <div className="hero-grid">
          {/* Left Text Block */}
          <div className={`text-container ${textAnimationStarted ? "text-animation-started" : ""} ${isLoaded ? "loaded" : ""}`}>
            <h1 className="hero-title">
              <span className="greeting animate-item" style={{"--item-delay": "0.1s"}}>Hi, I'm</span>
              <a href="#about" onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}>
                <span className="text-purple animate-item" style={{"--item-delay": "0.2s"}}>Lakshya Soni</span>
              </a>
              <div className="title-separator animate-item" style={{"--item-delay": "0.3s"}}></div>
              <span className="gradient-text animate-item" style={{"--item-delay": "0.4s"}}>Full Stack Developer <br /> Python Programmer</span>
            </h1><br /><br />
            <p className="hero-paragraph animate-item" style={{"--item-delay": "0.5s"}}>
              I create engaging digital experiences with clean code, Python
              programming, and UI/UX design. Let's build something amazing
              together.
            </p>
            <div className="hero-buttons">
              <button
                className="btn-primary animate-item"
                style={{"--item-delay": "0.6s"}}
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </button>
              <button
                className="btn-outline animate-item"
                style={{"--item-delay": "0.7s"}}
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </button>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;