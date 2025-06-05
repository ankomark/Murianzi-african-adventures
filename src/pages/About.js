// About.js
import React from 'react';
import judith from '../images/judith.jpeg'
import murianzi from '../images/murianzi.jpeg'
import { Link } from 'react-router-dom';


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
           To provide extra ordinary trips, tailor-made unforgatable
            adventures that connect 
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
            <p> CEO & Co-Founder </p> <hr/>
            <p> With over  2 decades of experiencein tourism and deep love for East African region, Culture,and nature, Elizabeth brings a vision of sustainable and personalized travel to every tour. Before starting Murianzi African Adventures, she worked as an Operations Manager for over a decade, exploring several destinations in East Africa, Middle East and Asia.</p><hr/>
            <p>“Travel should not just be about seeing a place — it should be about feeling connected to it.”</p>
          </div>
          <div className="team-member">
            <img src={murianzi} alt='anko mark' />
            <h3>Judith Omogi</h3>
            <p>Co-Founder & Operations Director</p><hr/>
            <p>
            She is the logistical mastermind behind the scenes, ensuring every journey runs smoothly. With a background in logistics, events, travel she has  helped craft seamless adventures for travelers from all over the world.</p><hr/>
            <p>“Every adventure begins with a plan — we craft journeys that let you explore the world with ease and wonder.”</p>
          </div>
          {/* Add more team members */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <h2 className='abt'>Ready to Write Your Story?</h2>
        <Link to='/Contact'>
        <button className="cta-button">Start Your Journey</button>
        </Link>
      </section>
    </div>
  );
};

export default About;