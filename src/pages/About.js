// About.js
import React from 'react';
import judith from '../images/judith.jpeg'
import murianzi from '../images/murianzi.jpeg'


const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay">
          <h1>Our Story of Adventure</h1>
          <p>Connecting Wanderers to the World's Wonders Since 2015</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p className="mission-statement">
            At TravelBuddy, we believe every journey should be extraordinary. 
            We're dedicated to crafting unforgettable adventures that connect 
            travelers with the soul of each destination.
          </p>
          <div className="mission-stats">
            <div className="stat-item">
              <h3>250k+</h3>
              <p>Happy Travelers</p>
            </div>
            <div className="stat-item">
              <h3>85+</h3>
              <p>Countries Covered</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Positive Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h2 className='ha'>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <i className="fas fa-globe-asia"></i>
            <h3>Sustainable Travel</h3>
            <p>We prioritize eco-friendly tours and support local communities</p>
          </div>
          <div className="value-card">
            <i className="fas fa-shield-alt"></i>
            <h3>Safety First</h3>
            <p>24/7 support and vetted travel partners worldwide</p>
          </div>
          <div className="value-card">
            <i className="fas fa-heart"></i>
            <h3>Authentic Experiences</h3>
            <p>Curated adventures that go beyond tourist trails</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet the Adventurers</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src={judith} alt='anko mark' />
            <h3>Elizabeth Omollo</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src={murianzi} alt='anko mark' />
            <h3>Judith Omogi</h3>
            <p>Co-Founder</p>
          </div>
          {/* Add more team members */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <h2>Ready to Write Your Story?</h2>
        <button className="cta-button">Start Your Journey</button>
      </section>
    </div>
  );
};

export default About;