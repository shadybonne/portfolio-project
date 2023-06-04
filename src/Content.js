import React, { useState, useEffect } from 'react';

const Content = () => {
    const [location, setLocation] = useState('');
  const [venueType, setVenueType] = useState('all');
  const [venues, setVenues] = useState([]);

  const fetchVenues = (location, venueType) => {
    const venuesData = [
      { name: 'Venue 1', location: 'City 1', capacity: 200, amenities: 'Wi-Fi, Parking', price: 1000 },
      { name: 'Venue 2', location: 'City 2', capacity: 150, amenities: 'Catering, Audio System', price: 800 },
      // Add more venue data as per your requirements
    ];

    const filteredVenues = venuesData.filter((venue) => {
      return (
        (venue.location.toLowerCase() === location.toLowerCase() || location === '') &&
        (venueType === 'all' || venueType.toLowerCase() === venue.name.toLowerCase())
      );
    });

    return filteredVenues;
  };

  const createVenueCard = (venue) => {
    return (
      <div className="venue-card" key={venue.name}>
        <img src="../public/image/image1.jpg" alt={venue.name} />
        <h3>{venue.name}</h3>
        <p>Location: {venue.location}</p>
        <p>Capacity: {venue.capacity} people</p>
        <p>Amenities: {venue.amenities}</p>
        <p>Price: #{venue.price}</p>
        <a href="#">Book Now</a>
      </div>
    );
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleVenueTypeChange = (e) => {
    setVenueType(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const filteredVenues = fetchVenues(location, venueType);
    setVenues(filteredVenues);
  };

    return (
    <main>
        <section class="search-section">
            <h1>Find and Book the Perfect Event Venues from over 5,100 Halls in Nigeria</h1>
            <form className="search-form" onSubmit={handleFormSubmit}>
                <label for="location">Location:</label>
                <input type="text" value={location} onChange={handleLocationChange} placeholder="Enter Location"></input>
                    <select value={venueType} onChange={handleVenueTypeChange}>
                        <option value="all">Event Type</option>
                        <option value="wedding">Wedding</option>
                        <option value="conference">Conference</option>
                        <option value="party">Pool Party</option>
                        <option value='Birthday'>Birthday Party</option>
                        
                    </select>
                        <button type="submit">Search</button>
                        </form>
        </section>
                        
        <section className="venue-results" id="venueResults">
            <h2>Search Results</h2> 
            {venues.length > 0 ? (
                <div>
                  
                    {venues.map((venue) => createVenueCard(venue))}
                </div>
                
            ) : (
                <h4>Venues Loading...</h4>

            )}

        </section>
    </main>
    )

}

export default Content;