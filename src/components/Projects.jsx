import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: "Jewellery Retail Platform",
    description: "A fully responsive Jewellery Retail platform with services section functionality and available on order",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/jewellery.png",
  },
  {
    title: "Web Scraping Tool",
    description: "A customizable portfolio template for creative professionals with smooth animations.",
    tech: ["HTML/CSS", "JavaScript", "GSAP"],
    image: "/images/scraper.png",
  },
  {
    title: "Md5 & Sha256 Decryter",
    description: "A Md5 & Sha256 code decryption tools which is created using bruteforce attacks.",
    tech: ["Python"],
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
  {
    title: "Fitness Tracker",
    description: "A fitness tracking application with workout plans and progress visualization.",
    tech: ["React Native", "TypeScript", "Firebase"],
    image: "/images/fitness.png",
  },
];

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2 className="section-title">My Projects</h2>
    <p className="section-subtext">
      Here are some of my recent projects that showcase my skills and expertise
      in full stack development, Python programming, and UI/UX design.
    </p>

    <div className="projects-grid">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={project.image} alt={project.title} className="project-image" />
          <div className="project-content">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
