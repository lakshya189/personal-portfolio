import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: "Personal Portfolio",
    description: "A Personal Portfolio which is created for the best user experience.",
    tech: ["React.js", "Node.js", "CSS"],
    image: "/images/fitness.png",
  },
  {
    title: "Jewellery Retail Platform",
    description: "A fully responsive Jewellery Retail platform with services section functionality and available on order",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/jewellery.png",
  },
  {
    title: "Web Scraping Tool",
    description: "A customizable portfolio template for creative professionals with smooth animations.",
    tech: ["Python", "Flask"],
    image: "/images/scraper.png",
  },
  {
    title: "Md5 & Sha256 Decryter",
    description: "A Md5 & Sha256 code decryption tools which is created using bruteforce attacks.",
    tech: ["Python", "Flask"],
    image: "/images/task.png",
  },
  {
    title: "Veronica A.I.",
    description: "Veronica A.I. is an personal assistant tool based on A.I. .",
    tech: ["Python", "API Integration", "NLP" ,"Kivy"],
    image: "/images/weather.png",
  },
  {
    title: "Whatsapp Automation Tool",
    description: "A complete Whatsapp automating tools that performs multiple tasks and professional tasks",
    tech: ["Python", "Flask", "Whatsapp business API Integration"],
    image: "/images/recipe.png",
  },

];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Featured Projects</h2>
      <p>
        Here are some of my recent projects that showcase my skills and
        expertise in full stack development, Python programming, and UI/UX design.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tech.map((tech, idx) => (
                  <span
                    className="tag"
                    key={idx}
                    style={{ animationDelay: `${(index * 0.15) + (idx * 0.05) + 0.3}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating particles for decoration */}
      {[...Array(5)].map((_, i) => {
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
    </section>
  );

};

export default Projects;
