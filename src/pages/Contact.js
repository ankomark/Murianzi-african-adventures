// Contact.js
import React from 'react';


const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Message sent successfully!');
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>We're here to help you plan your next adventure</p>
        </div>
      </section>

      {/* Contact Content */}
      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-card">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Visit Us</h3>
            <p>123 Adventure Lane<br />Travel City, TC 12345</p>
          </div>
          
          <div className="info-card">
            <i className="fas fa-phone-alt"></i>
            <h3>Call Us</h3>
            <p>+1 (555) 123-4567<br />Mon-Fri: 9am - 5pm EST</p>
          </div>
          
          <div className="info-card">
            <i className="fas fa-envelope"></i>
            <h3>Email Us</h3>
            <p>hello@travelbuddy.com<br />support@travelbuddy.com</p>
          </div>
          
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          
          <div className="form-group">
            <input type="text" placeholder="Subject" required />
          </div>
          
          <div className="form-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>

      {/* Map Section */}
      <div className="map-container">
        <iframe 
          title="office-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-0.12345678901234567!3d51.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDA3JzI0LjQiTiAwwrAwNyczOC40Ilc!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;