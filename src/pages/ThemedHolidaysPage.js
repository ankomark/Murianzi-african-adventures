// src/pages/ThemedHolidays.js
import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaStar, FaMapMarkerAlt,  FaCalendarAlt, FaUsers, FaGlassCheers, FaRing, FaBirthdayCake, FaUmbrellaBeach } from 'react-icons/fa';

// Theme categories data
const themeCategories = [
  {
    id: "honeymoons",
    title: "Romantic Honeymoons",
    icon: <FaRing />,
    description: "Celebrate your new life together in paradise",
    destinations: [
      {
        id: 1,
        title: "Maldivian Paradise Escape",
        location: "Maldives",
        desc: "Private overwater bungalows with crystal clear waters and ultimate privacy.",
        img: "https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 4899,
        duration: 10,
        rating: 4.9,
        highlight: "Private sunset dinner on the beach"
      },
      {
        id: 2,
        title: "Santorini Dream",
        location: "Greece",
        desc: "Iconic white-washed buildings with breathtaking caldera views.",
        img: "https://images.pexels.com/photos/1028225/pexels-photo-1028225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 3799,
        duration: 8,
        rating: 4.8,
        highlight: "Private yacht tour to volcanic islands"
      }
    ]
  },
  {
    id: "weddings",
    title: "Destination Weddings",
    icon: <FaGlassCheers />,
    description: "Say 'I do' in a breathtaking location",
    destinations: [
      {
        id: 3,
        title: "Tropical Beach Ceremony",
        location: "Bali, Indonesia",
        desc: "All-inclusive wedding packages on pristine beaches with turquoise waters.",
        img: "https://images.pexels.com/photos/169191/pexels-photo-169191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 12999,
        duration: 14,
        rating: 4.9,
        highlight: "Full wedding planning service included"
      },
      {
        id: 4,
        title: "Italian Villa Celebration",
        location: "Tuscany, Italy",
        desc: "Historic villa with vineyard views for your dream wedding.",
        img: "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 15999,
        duration: 10,
        rating: 5.0,
        highlight: "Personalized wine tasting experience"
      }
    ]
  },
  {
    id: "birthdays",
    title: "Milestone Birthdays",
    icon: <FaBirthdayCake />,
    description: "Celebrate your special year in style",
    destinations: [
      {
        id: 5,
        title: "Luxury Safari Adventure",
        location: "Kenya",
        desc: "Experience the wild in style for your milestone celebration.",
        img: "https://images.pexels.com/photos/45839/antelope-cervidae-africa-safari-45839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 5899,
        duration: 10,
        rating: 4.8,
        highlight: "Private hot air balloon safari"
      },
      {
        id: 6,
        title: "Vegas Extravaganza",
        location: "Las Vegas, USA",
        desc: "VIP treatment for the ultimate birthday celebration.",
        img: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 4299,
        duration: 5,
        rating: 4.7,
        highlight: "Penthouse suite with strip view"
      }
    ]
  },
  {
    id: "vacations",
    title: "Family Vacations",
    icon: <FaUsers />,
    description: "Create unforgettable family memories",
    destinations: [
      {
        id: 7,
        title: "Disney Magical Experience",
        location: "Orlando, Florida",
        desc: "The ultimate family vacation with theme park access and character experiences.",
        img: "https://images.pexels.com/photos/1618269/pexels-photo-1618269.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 5299,
        duration: 7,
        rating: 4.8,
        highlight: "VIP FastPass for all attractions"
      },
      {
        id: 8,
        title: "Greek Island Hopping",
        location: "Greece",
        desc: "Family-friendly exploration of ancient history and beautiful beaches.",
        img: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 6799,
        duration: 12,
        rating: 4.9,
        highlight: "Private sailing lessons for kids"
      }
    ]
  },
  {
    id: "beach",
    title: "Beach Getaways",
    icon: <FaUmbrellaBeach />,
    description: "Relax and unwind on pristine shores",
    destinations: [
      {
        id: 9,
        title: "Caribbean Paradise",
        location: "St. Lucia",
        desc: "Turquoise waters, white sand beaches, and luxurious all-inclusive resorts.",
        img: "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 3599,
        duration: 8,
        rating: 4.8,
        highlight: "Private cabana with butler service"
      },
      {
        id: 10,
        title: "Mauritius Luxury Escape",
        location: "Mauritius",
        desc: "Crystal clear lagoons and coral reefs perfect for snorkeling and relaxation.",
        img: "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 4199,
        duration: 10,
        rating: 4.9,
        highlight: "Underwater sea walk experience"
      }
    ]
  }
];

const ThemedHolidaysPage = () => {
  const [activeTheme, setActiveTheme] = useState("honeymoons");
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const cardsRef = useRef({});

  // Set initial filtered destinations
  useEffect(() => {
    const currentTheme = themeCategories.find(theme => theme.id === activeTheme);
    setFilteredDestinations(currentTheme ? currentTheme.destinations : []);
  }, [activeTheme]);

  // Filter destinations based on search term
  useEffect(() => {
    if (!searchTerm) {
      const currentTheme = themeCategories.find(theme => theme.id === activeTheme);
      setFilteredDestinations(currentTheme ? currentTheme.destinations : []);
      return;
    }
    
    const term = searchTerm.toLowerCase();
    const results = [];
    
    themeCategories.forEach(category => {
      category.destinations.forEach(dest => {
        if (
          dest.title.toLowerCase().includes(term) ||
          dest.location.toLowerCase().includes(term) ||
          dest.desc.toLowerCase().includes(term) ||
          (dest.highlight && dest.highlight.toLowerCase().includes(term))
        ) {
          results.push(dest);
        }
      });
    });
    
    setFilteredDestinations(results);
  }, [searchTerm, activeTheme]);

  // Animation for destination cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(cardsRef.current).forEach(card => {
      if (card) observer.observe(card);
    });
    
    return () => observer.disconnect();
  }, [filteredDestinations]);

  return (
    <div className="themed-holidays-page">
      {/* Hero Section */}
      <section className="themed-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Special Occasion Getaways</h1>
          <p>Tailored experiences for life's most memorable moments</p>
        </div>
      </section>

      {/* Theme Navigation */}
      <section className="theme-navigation">
        <div className="container">
          <div className="theme-tabs">
            {themeCategories.map(theme => (
              <div 
                key={theme.id}
                className={`theme-tab ${activeTheme === theme.id ? 'active' : ''}`}
                onClick={() => setActiveTheme(theme.id)}
              >
                <div className="theme-icon">{theme.icon}</div>
                <h3>{theme.title}</h3>
                <p>{theme.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Results */}
      <section className="themed-results">
        <div className="container">
          <div className="results-header">
            <h2>{themeCategories.find(t => t.id === activeTheme)?.title || "All Themes"}</h2>
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Search themed holidays..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {filteredDestinations.length > 0 ? (
            <div className="destinations-grid">
              {filteredDestinations.map(destination => (
                <div 
                  className="destination-card"
                  key={destination.id}
                  ref={el => cardsRef.current[destination.id] = el}
                  style={{ 
                    opacity: 0,
                    transform: 'translateY(50px)',
                    transition: `opacity 0.5s ease, transform 0.5s ease`
                  }}
                >
                  <div className="card-image">
                    <img src={destination.img} alt={destination.title} loading="lazy" />
                    <div className="card-overlay">
                      <button className="quick-view">View Details</button>
                    </div>
                  </div>
                  <div className="card-content">
                    <h3>{destination.title}</h3>
                    <div className="location">
                      <FaMapMarkerAlt />
                      <span>{destination.location}</span>
                    </div>
                    <p className="description">{destination.desc}</p>
                    <div className="highlight">
                      <FaStar className="highlight-icon" />
                      <span>{destination.highlight}</span>
                    </div>
                    <div className="card-footer">
                      <div className="price">From ${destination.price}</div>
                      <div className="duration">
                        <FaCalendarAlt /> {destination.duration} Days
                      </div>
                      <div className="rating">
                        <FaStar /> {destination.rating}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <div className="no-results-content">
                <h3>No themed holidays match your search</h3>
                <p>Try adjusting your search or browse our other themes</p>
                <button onClick={() => setSearchTerm('')}>
                  Clear Search
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Special Offers Banner */}
      <section className="special-offers-banner">
        <div className="container">
          <div className="banner-content">
            <h2>Customize Your Themed Holiday</h2>
            <p>Our travel experts will tailor your special occasion package to your exact preferences</p>
            <div className="banner-features">
              <div className="feature">
                <div className="feature-icon">1</div>
                <h4>Personal Consultation</h4>
                <p>One-on-one planning session</p>
              </div>
              <div className="feature">
                <div className="feature-icon">2</div>
                <h4>Tailored Itinerary</h4>
                <p>Designed around your preferences</p>
              </div>
              <div className="feature">
                <div className="feature-icon">3</div>
                <h4>Special Touches</h4>
                <p>Custom decorations and surprises</p>
              </div>
            </div>
            <button className="cta-button">Request a Custom Quote</button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="themed-testimonials">
        <div className="container">
          <div className="section-header">
            <h2>Celebration Stories</h2>
            <p>See how we've helped create unforgettable moments</p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">"</div>
                <p>"Our honeymoon in Santorini was beyond perfect. The private sunset dinner arranged by Bonfire was the most romantic experience of our lives."</p>
                <div className="author">
                  <div className="author-info">
                    <h4>Sarah & Michael</h4>
                    <div className="theme">Honeymooners</div>
                  </div>
                  <div className="rating">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">"</div>
                <p>"Bonfire made our destination wedding in Bali absolutely stress-free. They handled every detail so we could just enjoy our special day."</p>
                <div className="author">
                  <div className="author-info">
                    <h4>Jessica & David</h4>
                    <div className="theme">Newlyweds</div>
                  </div>
                  <div className="rating">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">"</div>
                <p>"For my 50th birthday, my family surprised me with a safari in Kenya. The attention to detail and special touches made it unforgettable."</p>
                <div className="author">
                  <div className="author-info">
                    <h4>Robert Johnson</h4>
                    <div className="theme">Birthday Celebration</div>
                  </div>
                  <div className="rating">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThemedHolidaysPage;