import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaWhatsapp } from 'react-icons/fa';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_05a6zxn',
      'template_qwv0g92',
      formRef.current,
      'Z6g9sqcb-sDN2ZkJe'
    )
    .then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
      e.target.reset();
    }, (error) => {
      console.log(error.text);
      alert('Failed to send message. Please try again.');
    });
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '254724579663';
    const message = "Hello Elizabeth! I'm interested in your travel services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSocialClick = (platform) => {
    const urls = {
      facebook: 'https://facebook.com/yourpage',
      instagram: 'https://instagram.com/yourprofile',
      twitter: 'https://twitter.com/yourhandle',
      linkedin: 'https://linkedin.com/in/yourprofile'
    };
    window.open(urls[platform], '_blank');
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>We're here to help you plan your next adventure</p>
        </div>
      </section>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-card">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
            <h3>Visit Us</h3>
            <p>Kasarani<br />Nairobi, Kenya, Opposite Naivas supermarket</p>
          </div>

          <div className="info-card">
            <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
            <h3>Call Us</h3>
            <p>+254 705530881<br />Mon-Sun: 9am - 5pm EAT</p>
          </div>

          <div className="info-card">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <h3>Email Us</h3>
            <p className='ema'>murianziafricanadventures@gmail.com</p>
          </div>

          <div className="info-card whatsapp-card" onClick={handleWhatsAppClick}>
            <FaWhatsapp className="whatsapp-icon" />
            <h3>Chat on WhatsApp</h3>
            <button className='sendemail'>Click here to message us directly</button>
          </div>

          <div className="social-links">
            <button onClick={() => handleSocialClick('facebook')} className="social-button">
              <span className="social-icon">Facebook</span>
            </button>
            <button onClick={() => handleSocialClick('instagram')} className="social-button">
              <span className="social-icon">Instagram</span>
            </button>
            <button onClick={() => handleSocialClick('twitter')} className="social-button">
              <span className="social-icon">Twitter</span>
            </button>
            <button onClick={() => handleSocialClick('linkedin')} className="social-button">
              <span className="social-icon">LinkedIn</span>
            </button>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
          <div className="form-group">
            <input type="text" name="user_name" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <input type="email" name="user_email" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <input type="tel" name="user_phone" placeholder="Your Phone Number" required />
          </div>

          <div className="form-group">
            <input type="text" name="subject" placeholder="Subject" required />
          </div>

          <div className="form-group">
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
          </div>

          <button type="submit" className="submit-btn">
            <FontAwesomeIcon icon={faPaperPlane} /> Send Message
          </button>
        </form>
      </div>

      <div className="map-container">
        <iframe 
          title="office-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.808521231293!2d36.82121431475399!3d-1.292359835979996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d664f5f5e7%3A0x4e0785e8e7a3e4b8!2sNairobi%20City%20Centre%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1629999999999!5m2!1sen!2ske"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;