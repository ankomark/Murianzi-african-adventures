// src/pages/PackagesPage.js
import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaStar, FaMapMarkerAlt, FaFilter, FaTimes,  FaGlobe } from 'react-icons/fa';

// Sample destination data
const destinationCategories = [
  {
    id: "popular",
    title: "Popular Destinations",
    subtitle: "Most visited places by our travelers",
    destinations: [
      {
        id: 1,
        title: "Maasai Mara Safari",
        location: "Kenya",
        desc: "Experience the Great Migration and witness Africa's iconic wildlife in their natural habitat.",
        img: "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=600",
        theme: "Wildlife",
        price: 1299,
        duration: 7,
        rating: 4.9
      },
      {
        id: 2,
        title: "Zanzibar Beach Escape",
        location: "Tanzania",
        desc: "Pristine beaches, turquoise waters, and rich cultural heritage in Stone Town.",
        img: "https://images.pexels.com/photos/1802268/pexels-photo-1802268.jpeg?auto=compress&cs=tinysrgb&w=600",
        theme: "Beach",
        price: 1499,
        duration: 10,
        rating: 4.8
      },
      {
        id: 3,
        title: "Victoria Falls Adventure",
        location: "Zambia/Zimbabwe",
        desc: "Witness the mighty Victoria Falls and enjoy thrilling activities like bungee jumping.",
        img: "https://images.pexels.com/photos/1058759/pexels-photo-1058759.jpeg?auto=compress&cs=tinysrgb&w=600",
        theme: "Adventure",
        price: 1799,
        duration: 8,
        rating: 4.7
      },
      {
        id: 4,
        title: "Serengeti Migration",
        location: "Tanzania",
        desc: "Witness the spectacular Great Migration across the vast Serengeti plains.",
        img: "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=600",
        theme: "Wildlife",
        price: 2199,
        duration: 10,
        rating: 4.9
      },
      {
        id: 5,
        title: "Cape Town Explorer",
        location: "South Africa",
        desc: "Discover the vibrant city, Table Mountain, and the Cape Winelands.",
        img: "https://images.pexels.com/photos/1239162/pexels-photo-1239162.jpeg?auto=compress&cs=tinysrgb&w=600",
        theme: "Cultural",
        price: 1899,
        duration: 9,
        rating: 4.8
      },
      {
        id: 6,
        title: "Gorilla Trekking",
        location: "Rwanda",
        desc: "An unforgettable encounter with mountain gorillas in their natural habitat.",
        img: "https://images.pexels.com/photos/382177/pexels-photo-382177.jpeg?auto=compress&cs=tinysrgb&w=600",
        theme: "Wildlife",
        price: 3499,
        duration: 5,
        rating: 5.0
      }
    ]
  },
  {
    id: "international",
    title: "International Destinations",
    subtitle: "Explore beyond Africa",
    destinations: [
      {
        id: 7,
        title: "Patagonia Expedition",
        location: "Chile/Argentina",
        desc: "Dramatic landscapes, glaciers, and hiking adventures at the end of the world.",
        img: "https://images.pexels.com/photos/161401/fitzroy-patagonia-mountain-glacier-161401.jpeg?auto=compress&cs=tinysrgb&w=600",
        theme: "Adventure",
        price: 2899,
        duration: 14,
        rating: 4.7
      },
      {
        id: 8,
        title: "Bali Cultural Journey",
        location: "Indonesia",
        desc: "Immerse yourself in Balinese culture, temples, and stunning landscapes.",
        img: "https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=600",
        theme: "Cultural",
        price: 1599,
        duration: 12,
        rating: 4.8
      },
      {
        id: 9,
        title: "Amazon Rainforest",
        location: "Brazil",
        desc: "Explore the world's largest rainforest and its incredible biodiversity.",
        img: "https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=600",
        theme: "Wildlife",
        price: 1999,
        duration: 10,
        rating: 4.6
      }
    ]
  },
  {
    id: "themed",
    title: "Themed Experiences",
    subtitle: "Specialized adventure packages",
    destinations: [
      {
        id: 10,
        title: "Luxury Safari",
        location: "Kenya & Tanzania",
        desc: "Premium safari experience with luxury lodges and exclusive game drives.",
        img: "https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&w=600",
        theme: "Luxury",
        price: 4999,
        duration: 10,
        rating: 4.9
      },
      {
        id: 11,
        title: "Family Safari Adventure",
        location: "South Africa",
        desc: "Kid-friendly safari with educational activities and comfortable accommodations.",
        img: "https://images.pexels.com/photos/1647120/pexels-photo-1647120.jpeg?auto=compress&cs=tinysrgb&w=600",
        theme: "Family",
        price: 3999,
        duration: 12,
        rating: 4.8
      },
      {
        id: 12,
        title: "Photography Safari",
        location: "Botswana",
        desc: "Designed for photographers with expert guides and prime locations.",
        img: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=600",
        theme: "Photography",
        price: 3499,
        duration: 9,
        rating: 4.9
      }
    ]
  }
];

const allDestinations = destinationCategories.flatMap(cat => cat.destinations);

const PackagesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDestinations, setFilteredDestinations] = useState(allDestinations);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 5000,
    duration: 'all',
    theme: 'all',
    rating: 0
  });
  const cardsRef = useRef({});

  // Filter destinations based on search and filters
  useEffect(() => {
    let result = allDestinations;
    
    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(dest => 
        dest.title.toLowerCase().includes(term) ||
        dest.location.toLowerCase().includes(term) ||
        dest.desc.toLowerCase().includes(term) ||
        (dest.theme && dest.theme.toLowerCase().includes(term))
      );
    }
    
    // Apply price filter
    result = result.filter(dest => 
      dest.price >= filters.minPrice && dest.price <= filters.maxPrice
    );
    
    // Apply duration filter
    if (filters.duration !== 'all') {
      if (filters.duration === 'short') {
        result = result.filter(dest => dest.duration <= 7);
      } else if (filters.duration === 'medium') {
        result = result.filter(dest => dest.duration > 7 && dest.duration <= 14);
      } else if (filters.duration === 'long') {
        result = result.filter(dest => dest.duration > 14);
      }
    }
    
    // Apply theme filter
    if (filters.theme !== 'all') {
      result = result.filter(dest => dest.theme === filters.theme);
    }
    
    // Apply rating filter
    if (filters.rating > 0) {
      result = result.filter(dest => dest.rating >= filters.rating);
    }
    
    setFilteredDestinations(result);
  }, [searchTerm, filters]);

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

    // Observe all cards
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

  // Get unique themes for filter dropdown
  const themes = [...new Set(allDestinations.map(dest => dest.theme))];

  return (
    <div className="packages-page">
      {/* Hero Section */}
      <section className="packages-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Discover Our Adventures</h1>
          <p>Explore our handpicked collection of unforgettable travel experiences</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="packages-container">
        {/* Filters Sidebar */}
        <aside className={`filters-sidebar ${showFilters ? 'mobile-visible' : ''}`}>
          <div className="filters-header">
            <h3>Filter Packages</h3>
            <button className="close-filters" onClick={() => setShowFilters(false)}>
              <FaTimes />
            </button>
          </div>
          
          <div className="filter-group">
            {/* <h4>Price Range</h4>
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
                <span>Long (4 days)</span>
              </label>
            </div> */}
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
                  <FaStar />
                </button>
              ))}
            </div>
          </div>
          
          <button className="reset-filters" onClick={resetFilters}>
            Reset All Filters
          </button>
        </aside>

        {/* Packages Grid */}
        <main className="packages-grid">
          <div className="grid-header">
            <h2>{filteredDestinations.length} Packages Available</h2>
            <div className="controls">
              <div className="search-box">
                <FaSearch className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search destinations..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button className="filter-toggle" onClick={() => setShowFilters(true)}>
                <FaFilter /> Filters
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
                    transition: `opacity 0.5s ease, transform 0.5s ease`
                  }}
                >
                  <div className="card-image">
                    <img src={destination.img} alt={destination.title} loading="lazy" />
                    <div className="card-overlay">
                      {/* <button className="quick-view">View Details</button> */}
                    </div>
                    {destination.theme && <div className="theme-badge">{destination.theme}</div>}
                  </div>
                  <div className="card-content">
                    <h3>{destination.title}</h3>
                    <div className="location">
                      <FaMapMarkerAlt />
                      <span>{destination.location}</span>
                    </div>
                    <p className="description">{destination.desc}</p>
                    <div className="card-meta">
                      <div className="meta-item">
                        {/* <FaDollarSign /> */}
                        {/* <span>From ${destination.price}</span> */}
                      </div>
                      <div className="meta-item">
                        {/* <FaCalendarAlt /> */}
                        {/* <span>{destination.duration} Days</span> */}
                      </div>
                      <div className="meta-item">
                        <FaStar />
                        <span>{destination.rating} Rating</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <FaGlobe className="globe-icon" />
              <h3>No packages match your search criteria</h3>
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
    </div>
  );
};

export default PackagesPage;