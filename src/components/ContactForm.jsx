import React from 'react';
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhone, 
  FaGlobe, 
  FaPaperPlane, 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaGithub 
} from 'react-icons/fa';
import '../styles/ContactForm.css'; // सही path पर अपनी CSS फाइल import करें

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // यहाँ पर आप फ़ॉर्म submission की logic डाल सकते हैं
    alert("Form submitted!");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Heading */}
        <div className="contact-heading">
          <h2>Get In Touch</h2>
          <p>
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
        </div>

        {/* Main Content: Form + Info Card */}
        <div className="contact-content">
          {/* Left: Contact Form */}
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input id="subject" type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="send-btn">
                Send Message <FaPaperPlane style={{ marginLeft: '0.5rem' }} />
              </button>
            </form>
          </div>

          {/* Right: Contact Info Card */}
          <div className="contact-info-card">
            <h3>Contact Information</h3>
            <ul>
              <li>
                <FaMapMarkerAlt className="icon" />
                <div>
                  <strong>Location</strong>
                  <p>San Francisco, California, USA</p>
                </div>
              </li>
              <li>
                <FaEnvelope className="icon" />
                <div>
                  <strong>Email</strong>
                  <p>alex@example.com</p>
                </div>
              </li>
              <li>
                <FaPhone className="icon" />
                <div>
                  <strong>Phone</strong>
                  <p>(123) 456-7890</p>
                </div>
              </li>
              <li>
                <FaGlobe className="icon" />
                <div>
                  <strong>Website</strong>
                  <p>www.alexjohnson.com</p>
                </div>
              </li>
            </ul>

            <h4>Follow Me</h4>
            <div className="social-icons">
              <a href="https://www.google.com"><FaFacebookF /></a>
              <a href="https://www.google.com"><FaTwitter /></a>
              <a href="https://www.google.com"><FaLinkedinIn /></a>
              <a href="https://www.google.com"><FaGithub /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
