import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTimes, 
  faSearch, 
  faFilter, 
  faMapMarkerAlt, 
  // faDollarSign, 
  // faCalendarAlt, 
  faStar, 
  faGlobe,
  faChevronRight,
  faHeart
} from '@fortawesome/free-solid-svg-icons';


const destinations = [
  {
    id: 1,
    title: "Maasai Mara Safari",
    location: "Kenya",
    desc: "Experience the Great Migration and witness Africa's iconic wildlife in their natural habitat.",
    img: "https://images.pexels.com/photos/4577147/pexels-photo-4577147.jpeg?auto=compress&cs=tinysrgb&w=600",
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
    img: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
    img: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
    img: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
    img: "https://images.pexels.com/photos/25950513/pexels-photo-25950513/free-photo-of-4x4-car-driving-on-dirt-road-in-africa.jpeg?auto=compress&cs=tinysrgb&w=600",
    theme: "Wildlife",
    price: 1899,
    duration: 6,
    rating: 4.8
  },
  {
    id: 8,
    title: "Amboseli Elephant Safari",
    location: "Kenya",
    desc: "View massive elephant herds with the majestic Mount Kilimanjaro as your backdrop.",
    img: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    theme: "Wildlife",
    price: 1399,
    duration: 4,
    rating: 4.7
  },
  {
    id: 9,
    title: "Lamu Island Cultural Retreat",
    location: "Kenya",
    desc: "Relax in a historic Swahili town with pristine beaches and rich cultural heritage.",
    img: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    theme: "Beach",
    price: 1299,
    duration: 8,
    rating: 4.6
  },
  {
    id: 10,
    title: "Queen Elizabeth National Park",
    location: "Uganda",
    desc: "Enjoy game drives and boat safaris in one of Africa's most biodiverse parks.",
    img: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    theme: "Wildlife",
    price: 1599,
    duration: 6,
    rating: 4.5
  },
  {
    id: 11,
    title: "Tsavo Wilderness Experience",
    location: "Kenya",
    desc: "Discover the vast wilderness and the famous red elephants of Tsavo.",
    img: "https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
    img: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
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
    img: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    theme: "Beach",
    price: 1399,
    duration: 9,
    rating: 4.8
  },
  {
    id: 14,
    title: "Bwindi Gorilla Trekking",
    location: "Uganda",
    desc: "Trek through dense forests for a rare encounter with mountain gorillas.",
    img: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    theme: "Wildlife",
    price: 3299,
    duration: 4,
    rating: 4.9,
    featured: true
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
    img: "https://images.pexels.com/photos/247600/pexels-photo-247600.jpeg?auto=compress&cs=tinysrgb&w=600",
    theme: "Wildlife",
    price: 1499,
    duration: 5,
    rating: 4.7
  }
];

const LocalDestinations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDestinations, setFilteredDestinations] = useState(destinations);
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 5000,
    duration: 'all',
    theme: 'all',
    rating: 0
  });
  const cardsRef = useRef({});

  useEffect(() => {
    let result = destinations;
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(dest => 
        dest.title.toLowerCase().includes(term) ||
        dest.location.toLowerCase().includes(term) ||
        dest.desc.toLowerCase().includes(term) ||
        (dest.theme && dest.theme.toLowerCase().includes(term))
      );
    }
    
    result = result.filter(dest => 
      dest.price >= filters.minPrice && dest.price <= filters.maxPrice
    );
    
    if (filters.duration !== 'all') {
      if (filters.duration === 'short') {
        result = result.filter(dest => dest.duration <= 7);
      } else if (filters.duration === 'medium') {
        result = result.filter(dest => dest.duration > 7 && dest.duration <= 14);
      } else if (filters.duration === 'long') {
        result = result.filter(dest => dest.duration > 14);
      }
    }
    
    if (filters.theme !== 'all') {
      result = result.filter(dest => dest.theme === filters.theme);
    }
    
    if (filters.rating > 0) {
      result = result.filter(dest => dest.rating >= filters.rating);
    }
    
    setFilteredDestinations(result);
  }, [searchTerm, filters]);

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

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetFilters = () => {
    setFilters({
      minPrice: 0,
      maxPrice: 5000,
      duration: 'all',
      theme: 'all',
      rating: 0
    });
  };

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  const themes = [...new Set(destinations.map(dest => dest.theme))];
  const featuredDestinations = destinations.filter(dest => dest.featured);

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
                  {/* <FontAwesomeIcon icon={faHeart} /> */}
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
                    {/* <FontAwesomeIcon icon={faDollarSign} /> */}
                    {/* <span>From ${destination.price}</span> */}
                  </div>
                  <div className="meta-item">
                    {/* <FontAwesomeIcon icon={faCalendarAlt} /> */}
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
          <p>Find your perfect African adventure</p>
        </div>

        <div className="local-container">
          <aside className={`filters-sidebar ${showFilters ? 'mobile-visible' : ''}`}>
            <div className="filters-header">
              <h3>Filter Destinations</h3>
              <button className="close-filters" onClick={() => setShowFilters(false)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            
            <div className="filter-group">
              <h4>Price Range</h4>
              <div className="price-range">
                <span>${filters.minPrice} - ${filters.maxPrice}</span>
                <input 
                  type="range" 
                  min="0" 
                  max="5000" 
                  step="100"
                  name="minPrice"
                  value={filters.minPrice}
                  onChange={handleFilterChange}
                />
                <input 
                  type="range" 
                  min="0" 
                  max="5000" 
                  step="100"
                  name="maxPrice"
                  value={filters.maxPrice}
                  onChange={handleFilterChange}
                />
              </div>
            </div>
            
            <div className="filter-group">
              <h4>Duration</h4>
              <div className="filter-options">
                <label>
                  <input 
                    type="radio" 
                    name="duration" 
                    value="all" 
                    checked={filters.duration === 'all'}
                    onChange={handleFilterChange}
                  />
                  <span>All Durations</span>
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="duration" 
                    value="short" 
                    checked={filters.duration === 'short'}
                    onChange={handleFilterChange}
                  />
                  <span>Short (≤7 days)</span>
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="duration" 
                    value="medium" 
                    checked={filters.duration === 'medium'}
                    onChange={handleFilterChange}
                  />
                  <span>Medium (8-14 days)</span>
                </label>
                <label>
                  <input 
                    type="radio" 
                    name="duration" 
                    value="long" 
                    checked={filters.duration === 'long'}
                    onChange={handleFilterChange}
                  />
                  {/* <span>Long (14 days)</span> */}
                </label>
              </div>
            </div>
            
            <div className="filter-group">
              <h4>Experience Theme</h4>
              <select 
                name="theme" 
                value={filters.theme}
                onChange={handleFilterChange}
              >
                <option value="all">All Themes</option>
                {themes.map(theme => (
                  <option key={theme} value={theme}>{theme}</option>
                ))}
              </select>
            </div>
            
            <div className="filter-group">
              <h4>Minimum Rating</h4>
              <div className="rating-filter">
                {[1, 2, 3, 4, 5].map(rating => (
                  <button
                    key={rating}
                    className={`rating-star ${filters.rating >= rating ? 'active' : ''}`}
                    onClick={() => setFilters(prev => ({
                      ...prev,
                      rating: prev.rating === rating ? 0 : rating
                    }))}
                  >
                    <FontAwesomeIcon icon={faStar} />
                  </button>
                ))}
              </div>
            </div>
            
            <button className="reset-filters" onClick={resetFilters}>
              Reset All Filters
            </button>
          </aside>

          <main className="local-grid">
            <div className="grid-header">
              <h2>{filteredDestinations.length} Destinations Available</h2>
              <div className="controls">
                <div className="search-box">
                  <FontAwesomeIcon icon={faSearch} className="search-icon" />
                  <input 
                    type="text" 
                    placeholder="Search destinations..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <button className="filter-toggle" onClick={() => setShowFilters(true)}>
                  <FontAwesomeIcon icon={faFilter} /> Filters
                </button>
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
                      transition: 'opacity 0.5s ease, transform 0.5s ease'
                    }}
                  >
                    <div className="card-image">
                      <img src={destination.img} alt={destination.title} loading="lazy" />
                      <div className="card-overlay">
                        <button className="quick-view">View Details</button>
                      </div>
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
                          {/* <FontAwesomeIcon icon={faDollarSign} /> */}
                          {/* <span>From ${destination.price}</span> */}
                        </div>
                        <div className="meta-item">
                          {/* <FontAwesomeIcon icon={faCalendarAlt} /> */}
                          <span>{destination.title} </span>
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
            ) : (
              <div className="no-results">
                <FontAwesomeIcon icon={faGlobe} className="globe-icon" />
                <h3>No destinations match your search criteria</h3>
                <p>Try adjusting your filters or search term</p>
                <button onClick={() => {
                  setSearchTerm('');
                  resetFilters();
                }}>
                  Reset Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </section>
    </div>
  );
};

export default LocalDestinations;