
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaSearch, FaGlobeAfrica, FaShieldAlt, FaWallet, FaStar, FaQuoteLeft, FaCalendarAlt, FaUsers } from 'react-icons/fa';

// Categorized destination data
const destinationCategories = [
  {
    id: "popular",
    title: "Popular Destinations",
    subtitle: "Discover the magic of Africa & most visited places",
    destinations: [
      {
        title: "Maasai Mara Safari",
        location: "Kenya",
        desc: "Experience the great wildebeest migration and witness the Big Five",
        img: "https://images.pexels.com/photos/1049500/pexels-photo-1049500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        title: "Victoria Falls Adventure",
        location: "Zambia/Zimbabwe",
        desc: "Discover 'The Smoke That Thunders', one of the world's largest waterfalls",
        img: "https://images.pexels.com/photos/757142/pexels-photo-757142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        title: "Serengeti National Park",
        location: "Tanzania",
        desc: "Vast plains teeming with wildlife and the annual migration",
        img: "https://images.pexels.com/photos/13098896/pexels-photo-13098896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },


      {
        title: "Zanzibar Island Retreat",
        location: "Tanzania",
        desc: "White-sand beaches, turquoise waters, and Swahili culture",
        img: "https://images.pexels.com/photos/18870088/pexels-photo-18870088/free-photo-of-exploring-yoho-s-lake-mcarthur.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        title: "Table Mountain Experience",
        location: "Cape Town, South Africa",
        desc: "Panoramic views of Cape Town and the Atlantic Ocean",
        img: "https://images.pexels.com/photos/32264032/pexels-photo-32264032/free-photo-of-dramatic-mountain-range-under-moody-skies.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        title: "Sossusvlei Dunes",
        location: "Namib Desert, Namibia",
        desc: "Towering red sand dunes in the world's oldest desert",
        img: "https://images.pexels.com/photos/9989648/pexels-photo-9989648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    ]
  },
  {
    id: "international",
    title: "International Destinations",
    subtitle: "Explore breathtaking destinations beyond Africa",
    destinations: [
      {
        title: "Dubai",
        location: "Middle-East",
        desc: "Marvel at layered bands of red rock revealing millions of years of geological history",
        img: "https://images.pexels.com/photos/2115367/pexels-photo-2115367.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        title: "Mauritius",
        location: "Mauritius",
        desc: "Pristine white-sand beaches (e.g., Trou aux Biches, Belle Mare, Le Morne)",
        img: "https://images.pexels.com/photos/32332180/pexels-photo-32332180/free-photo-of-scenic-view-of-west-nusa-tenggara-coastline.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        title: "Seychelles",
        location: "Republic of Seychelles",
        desc: "Anse Source d’Argent – Famous for unique granite boulders and turquoise water",
        img: "https://tour.epesicloud.com/app/storage/uploads/37/1675922078_94_woman-with-hat-sitting-chairs-beach-beautiful-tropical-beach-woman-relaxing-tropical-beach-koh-nangyuan-island_335224-1111.jpg"
      },
      {
        title: "South Africa",
        location: "South Africa",
        desc: "Coral reefs, tropical fish, sea turtles, and sometimes whale sharks",
        img: "https://images.pexels.com/photos/12516856/pexels-photo-12516856.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        title: "Zhangjiajie",
        location: "China",
        desc: "Otherworldly quartz-sandstone pillars inspiring Avatar's floating mountains",
        img: "https://images.pexels.com/photos/678725/pexels-photo-678725.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        title: "Angkor Wat",
        location: "Cambodia",
        desc: "Largest religious monument in the world surrounded by jungle",
        img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1382&q=80"
      }
    ]
  },
  {
    id: "local",
    title: "Local Destnations",
    subtitle: "Curated experiences for unique travel preferences",
    destinations: [
      {
        title: "Lake Nakuru ",
        location: "Kenya",
        desc: "Birdwatcher’s paradise with thousands of pink flamingos and diverse wildlife around a scenic Rift Valley lake.",
        img: "https://images.pexels.com/photos/8341090/pexels-photo-8341090.jpeg?auto=compress&cs=tinysrgb&w=600",
        theme: "Beach Getaway"
      },
      {
        title: "Samburu National Reserve",
        location: "Kenya",
        desc: "Home to unique wildlife like the Grevy’s zebra and Somali ostrich, set in a rugged, semi-arid landscape.",
        img: "https://images.pexels.com/photos/30705287/pexels-photo-30705287/free-photo-of-majestic-male-lion-roaming-kenyan-grasslands.jpeg?auto=compress&cs=tinysrgb&w=600",
        theme: "Cultural Exploration"
      },
      {
        title: "Amboseli National Park",
        location: "Kenya",
        desc: "Famous for large herds of elephants with Mount Kilimanjaro as a breathtaking backdrop.",
        img: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=600",
        theme: "Adventure Travel"
      },
      {
        title: "Lake Naivasha",
        location: "Kenya",
        desc: "Freshwater lake offering boat rides among hippos, birdwatching, and scenic views of the Great Rift Valley.",
        img: "https://images.pexels.com/photos/31656852/pexels-photo-31656852/free-photo-of-scenic-scottish-highlands-mountains-and-lake.jpeg?auto=compress&cs=tinysrgb&w=600",
        theme: "Luxury Escape"
      },
      {
        title: "Ruenzori Mountains",
        location: "Uganda",
        desc: "Also known as the 'Mountains of the Moon', home to glaciers",
        img: "https://images.pexels.com/photos/15250189/pexels-photo-15250189/free-photo-of-although-yoho-is-huge-in-winter-i-feel-like-it-s-a-hidden-gem.jpeg?auto=compress&cs=tinysrgb&w=600",
        theme: "Hiking Adventure"
      },
      {
        title: "Mount Kenya",
        location: "Kenya",
        desc: "Africa’s second-highest peak, offering alpine trekking, unique ecosystems, and breathtaking landscapes.",
        img: "https://images.pexels.com/photos/17845104/pexels-photo-17845104/free-photo-of-kanchanjunga-mountain-sunrise.jpeg?auto=compress&cs=tinysrgb&w=600",
        theme: "Wildlife Safari"
      }
    ]
  }
];

const heroImages = [
  "https://www.urbannvacations.com/img/slides/mombasa.jpg",
  "https://images.pexels.com/photos/3629227/pexels-photo-3629227.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://www.urbannvacations.com/img/slides/ROME.jpg",
  "https://www.urbannvacations.com/img/slides/uae.jpg",
  'https://images.pexels.com/photos/219692/pexels-photo-219692.jpeg?auto=compress&cs=tinysrgb&w=600',
  "https://www.urbannvacations.com/img/slides/MALDIVES.jpg",
  "https://www.urbannvacations.com/img/slides/mtkenya.jpg",
  "https://www.urbannvacations.com/img/LEOPARD.jpg",
  "https://images.pexels.com/photos/1472612/pexels-photo-1472612.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://www.urbannvacations.com/img/PARIS.jpg",
  "https://www.urbannvacations.com/img/MAURITIUS.jpg",
  "https://www.urbannvacations.com/img/SINGAPORE2.jpg",
  "https://www.urbannvacations.com/img/CRUISE1.jpg",

  'https://images.pexels.com/photos/2115367/pexels-photo-2115367.jpeg?auto=compress&cs=tinysrgb&w=600',
  "https://images.pexels.com/photos/17845104/pexels-photo-17845104/free-photo-of-kanchanjunga-mountain-sunrise.jpeg?auto=compress&cs=tinysrgb&w=600",
  
  "https://www.urbannvacations.com/img/slides/MALDIVES.jpg",

   "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/8341090/pexels-photo-8341090.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/1589237/pexels-photo-1589237.jpeg?auto=compress&cs=tinysrgb&w=600",
  
  "https://images.pexels.com/photos/12516856/pexels-photo-12516856.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/757142/pexels-photo-757142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

];

const Home = () => {
  const cardsRef = useRef({});
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(destinationCategories);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef(null);

  // Hero image rotation
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % heroImages.length);
    }, 5500);
    
    return () => clearInterval(intervalRef.current);
  }, []);
  
  // Filter destinations based on search term
  useEffect(() => {
    if (!searchTerm) {
      setFilteredCategories(destinationCategories);
      return;
    }
    
    const filtered = destinationCategories.map(category => {
      const filteredDests = category.destinations.filter(dest => 
        dest.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dest.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (dest.theme && dest.theme.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      
      return {...category, destinations: filteredDests};
    }).filter(category => category.destinations.length > 0);
    
    setFilteredCategories(filtered);
  }, [searchTerm]);

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

    // Observe all cards in all categories
    Object.values(cardsRef.current).forEach(cardArray => {
      cardArray.forEach(card => card && observer.observe(card));
    });
    
    return () => observer.disconnect();
  }, [filteredCategories]);

  return (
    <div className="home-page">
      {/* Hero Section with rotating background */}
      <section className="hero-section" style={{ 
        backgroundImage: ` url(${heroImages[currentImageIndex]})`
      }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Experience Soul Adventure</h1>
          <p>Journey with us to discover the World's most breathtaking landscapes and vibrant cultures</p>
          
          <div className="search-container">
            <div className="search-bar">
              <FaSearch className="search-icon" />
              <input 
                type="text" 
                placeholder="Search destinations, experiences..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="search-button">Find Adventure</button>
            </div>
          </div>
          
          <div className="popular-tags">
            <span>Popular:</span>
            <a href="#popular">Safaris</a>
            <a href="#international">Beach Getaways</a>
            <a href="#themed">Cultural Tours</a>
            <a href="#themed">Adventure Travel</a>
          </div>
          
          {/* Hero image indicators */}
          <div className="hero-indicators">
            {heroImages.map((_, index) => (
              <div 
                key={index}
                className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                onClick={() => {
                  clearInterval(intervalRef.current);
                  setCurrentImageIndex(index);
                  intervalRef.current = setInterval(() => {
                    setCurrentImageIndex(prev => (prev + 1) % heroImages.length);
                  }, 4000);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Destination Categories */}
      {filteredCategories.map((category, catIndex) => (
        <section 
          key={category.id} 
          id={category.id} 
          className={`destination-category ${catIndex % 2 === 0 ? 'bg-light' : ''}`}
        >
          <div className="section-header">
            <h2>{category.title}</h2>
            <p>{category.subtitle}</p>
          </div>
          
          <div className="destinations-grid">
            {category.destinations.map((dest, index) => (
              <div 
                className="destination-card"
                key={`${category.id}-${index}`}
                ref={el => {
                  if (!cardsRef.current[category.id]) cardsRef.current[category.id] = [];
                  cardsRef.current[category.id][index] = el;
                }}
                style={{ 
                  opacity: 0,
                  transform: 'translateY(50px)',
                  transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`
                }}
              >
                <div className="card-image">
                  <img src={dest.img} alt={dest.title} loading="lazy" />
                  <div className="card-overlay">
                    {/* <button className="quick-view">view details</button> */}
                  </div>
                  {dest.theme && <div className="theme-badge">{dest.theme}</div>}
                </div>
                <div className="card-content">
                  <h3>{dest.title}</h3>
                  <div className="location">
                    <FaMapMarkerAlt />
                    <span>{dest.location}</span>
                  </div>
                  <p className="description">{dest.desc}</p>
                  <div className="card-footer">
                    <span className="price"></span>
                    <span className="duration"></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="section-header">
          <h2>Why Choose Murianzi African Adventures</h2>
          <p>Your journey with us is more than just a vacation</p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <FaGlobeAfrica />
            </div>
            <h3>Authentic African Experiences</h3>
            <p>We connect you with local cultures and communities for genuine experiences</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <FaShieldAlt />
            </div>
            <h3>Safe & Responsible Travel</h3>
            <p>Our guides and partners prioritize your safety and sustainable tourism</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <FaWallet />
            </div>
            <h3>Best Value Guarantee</h3>
            <p>Premium experiences at competitive prices with no hidden fees</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <FaStar />
            </div>
            <h3>Expert Local Guides</h3>
            <p>Knowledgeable guides passionate about sharing Africa's wonders</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="section-header">
          <h2>What Our Travelers Say</h2>
          <p>Real experiences from our adventurous community</p>
        </div>
        
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <p>"The Maasai Mara safari exceeded all expectations. Our guide's knowledge of animal behavior made every game drive an unforgettable experience."</p>
            <div className="testimonial-author">
              <div className="author-info">
                <h4>Sarah Johnson</h4>
                <div className="rating">
                  {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                </div>
              </div>
              <div className="trip-info">
                <FaCalendarAlt /> <span>Kenya Safari, July 2023</span>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <p>"Zanzibar was paradise! Murianzi arranged everything perfectly from the Stone Town tour to our beach resort. The attention to detail was impressive."</p>
            <div className="testimonial-author">
              <div className="author-info">
                <h4>Michael Rodriguez</h4>
                <div className="rating">
                  {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                </div>
              </div>
              <div className="trip-info">
                <FaCalendarAlt /> <span>Zanzibar Escape, May 2023</span>
              </div>
            </div>
          </div>
          
          <div className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <p>"Our family's Victoria Falls adventure was perfectly tailored to our needs. The kids loved the activities, and we appreciated the safety measures."</p>
            <div className="testimonial-author">
              <div className="author-info">
                <h4>The Williams Family</h4>
                <div className="rating">
                  {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                </div>
              </div>
              <div className="trip-info">
                <FaUsers /> <span>Family Adventure, December 2022</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="special-offers">
        <div className="section-header">
          <h2>Special Offers & Packages</h2>
          <p>Unbeatable deals for your African adventure</p>
        </div>
        
        <div className="offers-container">
          <div className="offer-card premium">
            <div className="offer-content">
              <span className="offer-tag">PREMIUM</span>
              <h3>Luxury Safari Experience</h3>
              <p> All-Inclusive Safari in Kenya & Tanzania</p>
              <ul>
                <li>Private game drives</li>
                <li>Luxury lodge accommodation</li>
                <li>Hot air balloon safari</li>
                <li>Gourmet dining experiences</li>
              </ul>
              <div className="price-info">
                <span className="old-price"></span>
                <span className="new-price"></span>
                <span className="save">Save </span>
              </div>
              <button className="offer-button">Book Now</button>
            </div>
          </div>
          
          <div className="offer-card family">
            <div className="offer-content">
              <span className="offer-tag">FAMILY</span>
              <h3>Family Adventure Package</h3>
              <p> South Africa Explorer</p>
              <ul>
                <li>Cape Town & Garden Route</li>
                <li>Family-friendly safari</li>
                <li>Penguin colony visit</li>
                <li>All activities included</li>
              </ul>
              <div className="price-info">
                <span className="old-price"></span>
                <span className="new-price"></span>
                <span className="save"></span>
              </div>
              <button className="offer-button">Book Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className='footerh'>Ready for Your Adventure?</h2>
          <p>Join thousands of travelers who have experienced the wonders of the world with us</p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-button primary">Plan Your Trip</Link>
            <Link to="/PackagesPage" className="cta-button secondary">Browse Destinations</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;