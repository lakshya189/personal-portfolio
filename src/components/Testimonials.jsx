import React from "react";
import '../styles/Testimonials.css';

const Testimonials = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechCorp",
      image:
        "https://public.readdy.ai/ai/img_res/af90de124cfe67ec9902773517f21a8d.jpg",
      quote:
        "Alex delivered our website redesign project on time and exceeded our expectations. His attention to detail and creative solutions made all the difference.",
    },
    {
      name: "Michael Chen",
      position: "Founder & CEO",
      company: "Startup Innovations",
      image:
        "https://public.readdy.ai/ai/img_res/0db35f4e7ee8b0bca56431f7a74a8600.jpg",
      quote:
        "Working with Alex was a game-changer for our startup. He understood our vision and translated it into a beautiful, functional website that our users love.",
    },
    {
      name: "Emily Rodriguez",
      position: "Product Manager",
      company: "Digital Solutions",
      image:
        "https://public.readdy.ai/ai/img_res/2a1d62957c304f3549440e5b92483d8c.jpg",
      quote:
        "Alex's technical expertise and creative approach helped us solve complex UI challenges. He's a reliable partner who delivers quality work consistently.",
    },
  ];

  return (
    <section className="testimonials-section">
      {/* Heading */}
      <div className="testimonials-heading">
        <h2>Client Testimonials</h2>
        <div className="heading-underline"></div>
        <p>Here's what some of my clients have to say about working with me.</p>
      </div>

      {/* Testimonial Cards */}
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="quote-icon">
              <i className="fas fa-quote-left"></i>
            </div>
            <p>"{testimonial.quote}"</p>
            <div className="testimonial-footer">
              <img src={testimonial.image} alt={testimonial.name} />
              <div>
                <h4 className="name">{testimonial.name}</h4>
                <p className="position">
                  {testimonial.position}, {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-grid">
          <div className="cta-content">
            <h3>Ready to start your project?</h3>
            <p>
              Let's collaborate to bring your ideas to life with creative
              solutions and cutting-edge technology.
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="cta-button"
            >
              Get in Touch <i className="fas fa-arrow-right"></i>
            </button>
          </div>
          <div className="cta-image">
            <img
              src="https://public.readdy.ai/ai/img_res/4fbb92e939ede36cb76bf0e3c9527b17.jpg"
              alt="Workspace"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
