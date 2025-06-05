// src/pages/PackagesPage.js
import React, {  useEffect, useRef } from 'react';
import { FaSearch, FaStar, FaMapMarkerAlt } from 'react-icons/fa';

// Sample destination data
const destinationCategories = [
  {
    id: "popular",
    title: "Popular Destinations",
    subtitle: "Most visited places by our travelers",
    destinations: [
      {
        id: 1,
        title: "Maasai Mara ",
        location: "Kenya",
        desc: "Experience the Great Migration and witness Africa's iconic wildlife in their natural habitat.",
        img: "https://images.pexels.com/photos/16116697/pexels-photo-16116697/free-photo-of-african-buffalos-in-the-savannah.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
        img: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
        img: "https://images.pexels.com/photos/23232512/pexels-photo-23232512/free-photo-of-waterfall-cascade-with-foam-in-a-park.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
        img: "https://images.pexels.com/photos/28708345/pexels-photo-28708345/free-photo-of-zebras-and-wildebeests-grazing-in-african-savanna.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
        img: "https://images.pexels.com/photos/2657973/pexels-photo-2657973.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
        img: "https://images.pexels.com/photos/2516401/pexels-photo-2516401.jpeg?auto=compress&cs=tinysrgb&w=600",
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
        img: "https://images.pexels.com/photos/6943270/pexels-photo-6943270.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
        img: "https://images.pexels.com/photos/1387037/pexels-photo-1387037.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
        img: "https://images.pexels.com/photos/132146/pexels-photo-132146.jpeg?auto=compress&cs=tinysrgb&w=1600",
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
  const cardsRef = useRef({});
  
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
  }, []);

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
        {/* Packages Grid */}
        <main className="packages-grid">
          <div className="grid-header">
            <h2>{allDestinations.length} Packages Available</h2>
            <div className="controls">
              <div className="search-box">
                <FaSearch className="search-icon" />
                <input 
                  type="text" 
                  placeholder="Search destinations..." 
                  disabled
                />
              </div>
            </div>
          </div>
          
          <div className="destinations-grid">
            {allDestinations.map(destination => (
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
                  <div className="card-overlay"></div>
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
                      <FaStar />
                      <span>{destination.rating} Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PackagesPage;