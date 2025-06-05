import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  // faTimes, 
  // faSearch, 
  // faFilter, 
  faMapMarkerAlt, 
  // faDollarSign, 
  // faCalendarAlt, 
  faStar, 
  // faGlobe,
  faChevronRight,
  faHeart
} from '@fortawesome/free-solid-svg-icons';


const destinations = [
  {
    id: 1,
    title: "Maasai Mara ",
    location: "Kenya",
    desc: "witness Africa's iconic wildlife in their natural habitat.",
    img: "https://images.pexels.com/photos/5044026/pexels-photo-5044026.jpeg?auto=compress&cs=tinysrgb&w=1600",
    theme: "Wildlife",
    price: 1299,
    duration: 7,
    rating: 4.9,
    featured: true
  },
  {
    id: 2,
    title: "Serengeti Migration",
    location: "Tanzania",
    desc: "Witness the spectacular Great Migration across the vast plains of Serengeti.",
    img: "https://images.pexels.com/photos/15815060/pexels-photo-15815060/free-photo-of-aerial-view-of-herds-of-zebras-and-wildebeests.jpeg?auto=compress&cs=tinysrgb&w=1600",
    theme: "Wildlife",
    price: 2199,
    duration: 10,
    rating: 4.9,
    featured: true
  },
  {
    id: 3,
    title: "Zanzibar Beach Escape",
    location: "Tanzania",
    desc: "Pristine white sand beaches and rich cultural heritage in historic Stone Town.",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    theme: "Beach",
    price: 1499,
    duration: 10,
    rating: 4.8
  },
  {
    id: 4,
    title: "Gorilla Trekking Adventure",
    location: "Rwanda",
    desc: "An unforgettable encounter with endangered mountain gorillas in their natural habitat.",
    img: "https://images.pexels.com/photos/15047897/pexels-photo-15047897/free-photo-of-photo-of-gorilla-on-the-grass.jpeg?auto=compress&cs=tinysrgb&w=1600",
    theme: "Wildlife",
    price: 3499,
    duration: 5,
    rating: 5.0,
    featured: true
  },
  {
    id: 5,
    title: "Mount Kilimanjaro Expedition",
    location: "Tanzania",
    desc: "Conquer Africa's highest peak in this epic adventure of a lifetime.",
    img: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    theme: "Adventure",
    price: 2999,
    duration: 7,
    rating: 4.7
  },
  {
    id: 6,
    title: "Lake Nakuru Flamingo Safari",
    location: "Kenya",
    desc: "See millions of flamingos and endangered rhinos in this stunning national park.",
    img: "https://images.pexels.com/photos/31402187/pexels-photo-31402187/free-photo-of-flock-of-terns-and-pelicans-on-a-lake.jpeg?auto=compress&cs=tinysrgb&w=1600",
    theme: "Wildlife",
    price: 999,
    duration: 3,
    rating: 4.6
  },
  {
    id: 7,
    title: "Ngorongoro Crater Experience",
    location: "Tanzania",
    desc: "Explore the world's largest inactive volcanic caldera teeming with wildlife.",
    img: "https://images.pexels.com/photos/5272972/pexels-photo-5272972.jpeg?auto=compress&cs=tinysrgb&w=600",
    theme: "Wildlife",
    price: 1899,
    duration: 6,
    rating: 4.8
  },
  {
    id: 8,
    title: "Amboseli Elephant ",
    location: "Kenya",
    desc: "View massive animals with the majestic Mount Kilimanjaro as your backdrop.",
    img: "https://images.pexels.com/photos/50579/africa-elephant-words-animal-50579.jpeg?auto=compress&cs=tinysrgb&w=1600",
    theme: "Wildlife",
    price: 1399,
    duration: 4,
    rating: 4.7
  },
 
  {
    id: 11,
    title: "Tsavo Wilderness Experience",
    location: "Kenya",
    desc: "Discover the vast wilderness and the famous red elephants of Tsavo.",
    img: "https://images.pexels.com/photos/19320975/pexels-photo-19320975/free-photo-of-elephants-in-nature.jpeg?auto=compress&cs=tinysrgb&w=1600",
    theme: "Wildlife",
    price: 1199,
    duration: 5,
    rating: 4.6
  },
  {
    id: 12,
    title: "Lake Victoria Sunset Cruise",
    location: "Uganda/Kenya/Tanzania",
    desc: "Cruise the largest lake in Africa while enjoying stunning sunset views.",
    img: "https://images.pexels.com/photos/2749481/pexels-photo-2749481.jpeg?auto=compress&cs=tinysrgb&w=1600",
    theme: "Adventure",
    price: 1699,
    duration: 7,
    rating: 4.5
  },
  {
    id: 13,
    title: "Diani Beach Luxury Getaway",
    location: "Kenya",
    desc: "Relax on white sandy beaches with crystal-clear turquoise waters.",
    img: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1600",
    theme: "Beach",
    price: 1399,
    duration: 9,
    rating: 4.8
  },

  {
    id: 15,
    title: "Nairobi National Park Safari",
    location: "Kenya",
    desc: "Unique safari experience near the capital with a city skyline backdrop.",
    img: "https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    theme: "Wildlife",
    price: 899,
    duration: 2,
    rating: 4.5
  },
  {
    id: 16,
    title: "Lake Manyara Tree-Climbing Lions",
    location: "Tanzania",
    desc: "See the famous tree-climbing lions and vast flamingo flocks.",
    img: "https://images.pexels.com/photos/31020850/pexels-photo-31020850/free-photo-of-lionesses-relaxing-on-tree-in-samburu-kenya.jpeg?auto=compress&cs=tinysrgb&w=1600",
    theme: "Wildlife",
    price: 1499,
    duration: 5,
    rating: 4.7
  }
];

const LocalDestinations = () => {
  const [favorites, setFavorites] = useState([]);
  const cardsRef = useRef({});
  
  const featuredDestinations = destinations.filter(dest => dest.featured);

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
  }, []);

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  return (
    <div className="local-destinations-page">
      {/* Hero Section */}
      <section className="local-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Discover Africa</h1>
          <p>Unforgettable adventures in the heart of Africa's most spectacular landscapes</p>
          <button className="explore-btn">
            Explore Tours <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="featured-destinations">
        <div className="section-header">
          <h2>Featured Experiences</h2>
          <p>Our most popular and highly-rated adventures</p>
        </div>
        <div className="featured-grid">
          {featuredDestinations.map(destination => (
            <div className="featured-card" key={`featured-${destination.id}`}>
              <div className="featured-image">
                <img src={destination.img} alt={destination.title} />
                <div className="featured-badge">Featured</div>
                <button 
                  className={`favorite-btn ${favorites.includes(destination.id) ? 'active' : ''}`}
                  onClick={() => toggleFavorite(destination.id)}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
              <div className="featured-content">
                <h3>{destination.title}</h3>
                <div className="location">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span>{destination.location}</span>
                </div>
                <div className="featured-meta">
                  <div className="meta-item">
                    {/* <span>${destination.price}</span> */}
                  </div>
                  <div className="meta-item">
                    {/* <span>{destination.duration} Days</span> */}
                  </div>
                  <div className="meta-item">
                    <FontAwesomeIcon icon={faStar} />
                    <span>{destination.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Destinations */}
      <section className="all-destinations">
        <div className="section-header">
          <h2>All Destinations</h2>
          <p>Explore our full collection of African adventures</p>
        </div>

        <div className="destinations-grid">
          {destinations.map(destination => (
            <div 
              className="destination-card"
              key={destination.id}
              ref={el => cardsRef.current[destination.id] = el}
              style={{ 
                opacity: 0,
                transform: 'translateY(50px)',
                transition: 'opacity 0.5s ease, transform 0.5s ease'
              }}
            >
              <div className="card-image">
                <img src={destination.img} alt={destination.title} loading="lazy" />
                {destination.theme && <div className="theme-badge">{destination.theme}</div>}
                <button 
                  className={`favorite-btn ${favorites.includes(destination.id) ? 'active' : ''}`}
                  onClick={() => toggleFavorite(destination.id)}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
              <div className="card-content">
                <h3>{destination.title}</h3>
                <div className="location">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span>{destination.location}</span>
                </div>
                <p className="description">{destination.desc}</p>
                <div className="card-meta">
                  <div className="meta-item">
                    {/* <span>${destination.price}</span> */}
                  </div>
                  <div className="meta-item">
                    {/* <span>{destination.duration} Days</span> */}
                  </div>
                  <div className="meta-item">
                    <FontAwesomeIcon icon={faStar} />
                    <span>{destination.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LocalDestinations;