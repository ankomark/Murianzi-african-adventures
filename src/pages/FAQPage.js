import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openQuestions, setOpenQuestions] = useState({});
  
  const toggleQuestion = (id) => {
    setOpenQuestions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqData = {
    general: [
      {
        id: 'gen1',
        question: "Who are we?",
        answer: "Murianzi African Adventures is a premier travel agency specializing in curated travel experiences and relaxing moments. We combine city exploration with rejuvenating getaways to create unique travel experiences that cater to all types of travelers."
      },
      {
        id: 'gen2',
        question: "How do I contact customer service?",
        answer: "You can reach our customer service team by phone at +254 705530881, by email at murianziafricanadventures@gmail.com, or through our whatsapp line when you click the whatsapp icon chat on our website. Our team is available to assist you with any questions or concerns."
      },
      {
        id: 'gen3',
        question: "What are your operating hours?",
        answer: "Our customer service team is available 24/7. Our physical offices are open Monday through Sunday from 9:00 AM to 6:00 PM local time."
      },
     
    ],
    booking: [
      {
        id: 'book1',
        question: "How do I book a vacation package?",
        answer: "Booking is easy! Simply browse our packages, select your desired destination and dates, choose your accommodations and activities, and proceed to checkout. You can book online or contact our travel specialists for personalized assistance."
      },
      {
        id: 'book2',
        question: "Can I make changes to my booking?",
        answer: "Yes, most bookings can be modified depending on the terms and conditions of your reservation. Changes may be subject to fees. Please contact our customer service team as soon as possible to request modifications."
      },
      {
        id: 'book3',
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers. Payment plans may be available for certain packages."
      },
      {
        id: 'book4',
        question: "When is full payment due?",
        answer: "A deposit is typically required at the time of booking, with the full balance due 60 days before departure. For last-minute bookings (within 30 days of travel), full payment is required at the time of booking."
      }
    ],
    payments: [
      {
        id: 'pay1',
        question: "What is your cancellation policy?",
        answer: "Cancellation policies vary by package and supplier. Generally, cancellations made more than 60 days before departure will receive a full refund minus a processing fee. Cancellations within 60 days may incur penalties. Please refer to your booking confirmation for specific details."
      },
      {
        id: 'pay2',
        question: "Are there any hidden fees?",
        answer: "We pride ourselves on transparent pricing. All mandatory taxes and fees are included in the quoted price. Optional services such  seat selection, or special requests may incur additional charges that will be clearly disclosed during booking."
      },
      {
        id: 'pay3',
        question: "Can I set up a payment plan?",
        answer: "Yes, we offer flexible payment plans for most vacation packages. After paying the initial deposit, you can make payments in installments leading up to the final due date. Contact our customer service team to set up a payment plan."
      },
      {
        id: 'pay4',
        question: "What happens if my payment is declined?",
        answer: "If your payment is declined, we'll notify you immediately and provide instructions to update your payment information. We recommend double-checking your card details and ensuring sufficient funds. Repeated declines may result in booking cancellation."
      }
    ],
    travel: [
      {
        id: 'travel1',
        question: "Do I need a passport or visa?",
        answer: "Passport and visa requirements vary by destination and your country of citizenship. It is the traveler's responsibility to ensure proper documentation. We recommend checking with the embassy of your destination country and ensuring your passport is valid for at least 6 months beyond your travel dates."
      },
      {
        id: 'travel2',
        question: "What health requirements should I know about?",
        answer: "Some destinations require specific vaccinations or health documentation. We recommend consulting with your healthcare provider or a travel medicine clinic at least 6-8 weeks before travel."
      },
      {
        id: 'travel3',
        question: "What should I pack?",
        answer: "Packing recommendations depend on your destination and activities. Generally, we recommend versatile clothing, comfortable shoes, travel documents, medications, chargers, and any destination-specific items. You'll receive a detailed packing list with your travel documents."
      },
      {
        id: 'travel4',
        question: "What happens if my flight is delayed or cancelled?",
        answer: "In case of flight disruptions, contact the airline directly for immediate assistance. Also notify our 24/7 emergency support line so we can assist with any impacts to your itinerary. Travel insurance can provide additional protection for such situations."
      }
    ],
    special: [
      {
        id: 'spec1',
        question: "Do you offer group discounts?",
        answer: "Yes, we offer special pricing for groups of 8 or more people traveling together. Group discounts vary depending on destination, travel dates, and accommodations. Contact our group travel specialists for personalized quotes and assistance with group coordination."
      },
      {
        id: 'spec2',
        question: "Can you accommodate special dietary needs?",
        answer: "Absolutely! We can arrange for special meals on flights and at accommodations. Please notify us of any dietary requirements at the time of booking, and remind your tour director upon arrival. While we make every effort, some destinations may have limitations."
      },
      {
        id: 'spec3',
        question: "Do you offer accessible travel options?",
        answer: "Yes, we are committed to making travel accessible to everyone. Many of our tours and accommodations offer accessible options. Please discuss your specific needs with our travel specialists when booking to ensure appropriate arrangements."
      },
      {
        id: 'spec4',
        question: "Can I request special celebrations?",
        answer: "We'd be delighted to help celebrate special occasions! Whether it's a honeymoon, anniversary, birthday, or other milestone, let us know when booking. We can arrange special touches like room decorations, cakes, or romantic dinners (additional charges may apply)."
      }
    ]
  };

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <section className="faq-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about our travel services</p>
        </div>
      </section>

      {/* FAQ Navigation */}
      <nav className="faq-categories">
        <div className="container">
          <ul>
            <li className={activeCategory === 'general' ? 'active' : ''}>
              <button onClick={() => setActiveCategory('general')}>General Questions</button>
            </li>
            <li className={activeCategory === 'booking' ? 'active' : ''}>
              <button onClick={() => setActiveCategory('booking')}>Booking Process</button>
            </li>
            <li className={activeCategory === 'payments' ? 'active' : ''}>
              <button onClick={() => setActiveCategory('payments')}>Payments & Cancellations</button>
            </li>
            <li className={activeCategory === 'travel' ? 'active' : ''}>
              <button onClick={() => setActiveCategory('travel')}>Travel Preparation</button>
            </li>
            <li className={activeCategory === 'special' ? 'active' : ''}>
              <button onClick={() => setActiveCategory('special')}>Special Requests</button>
            </li>
          </ul>
        </div>
      </nav>

      {/* FAQ Content */}
      <section className="faq-content">
        <div className="container">
          <div className="faq-intro">
            <h2>Your Questions Answered</h2>
            <p>Browse our most frequently asked questions below. If you don't find what you're looking for, our travel experts are ready to assist you.</p>
          </div>

          <div className="faq-items">
            {faqData[activeCategory].map((item) => (
              <div 
                key={item.id} 
                className={`faq-item ${openQuestions[item.id] ? 'open' : ''}`}
              >
                <button 
                  className="faq-question" 
                  onClick={() => toggleQuestion(item.id)}
                >
                  {item.question}
                  <span className="toggle-icon">{openQuestions[item.id] ? '-' : '+'}</span>
                </button>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="contact-cta">
            <div className="cta-content">
              <h3>Still have questions?</h3>
              <p>Our travel experts are available 24/7 to assist you with any inquiries.</p>
              <div className="cta-buttons">
                <Link to='/contact'>
                <button className="btn-primary">Contact Us</button>
                </Link>

                {/* <button className="btn-secondary">Live Chat</button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;