import React, { useState, useEffect } from 'react';

const Content = () => {
  const [location, setLocation] = useState('');
  const [venueType, setVenueType] = useState('all');
  const [venues, setVenues] = useState([]);
  


  const fetchVenues = (location, venueType) => {
    const venuesData = [
      { name: 'Wedding', location: 'Abuja', capacity: 200, amenities: 'Wi-Fi, Parking', price: 1000, Image: 'img'},
      { name: 'Pool Party', location: 'Lagos', capacity: 150, amenities: 'Catering, Audio System', price: 800, Image: 'img' },
      { name: 'Wedding', location: 'Lagos', capacity: 150, amenities: 'Waiters, Dancers', price: 800, Image: 'img3.jpg' },
      { name: 'Conference', location: 'Lagos', capacity: 150, amenities: 'Free Catering, live Band', price: 800, Image: 'img4.jpg' },
      { name: 'Birthday', location: 'Abuja', capacity: 150, amenities: 'Light, Free DJ', price: 800, Image: 'img5.jpg' },
    ];

    const filteredVenues = venuesData.filter((venue) => {
      return (
        (venue.location.toLowerCase() === location.toLowerCase() || location === '') &&
        (venueType === 'all' || venueType.toLowerCase() === venue.name.toLowerCase())
      );
    });

    return filteredVenues;
  };

 // const createVenueCard = (venue) => {
 //   const handleBookNow = (e) => {
 //     e.preventDefault();
 //   };
    
 //   return (
//      <div className="venue-card" key={venue.name}>
//        <img src='/img.jpg' alt={venue.name} className='venue-image'/>
//        <h3>{venue.name}</h3>
 //       <p>Location: {venue.location} </p>
//        <p>Capacity: {venue.capacity} people</p>
//        <p>Amenities: {venue.amenities}</p>
//        <p>Price: #{venue.price}</p>
//        <a href="#">Book Now</a>
 //     </div>
//    );
//  };

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
      <section className="search-section">
        <h1>Find and Book the Perfect Event Venues in Nigeria</h1>
        <form className="search-form" onSubmit={handleFormSubmit}>
          <label htmlFor="location">Location:</label>
          <input type="text" value={location} onChange={handleLocationChange} placeholder="Enter Location" />
          <select value={venueType} onChange={handleVenueTypeChange}>
            <option value="all">Event Type</option>
            <option value="wedding">Wedding</option>
            <option value="conference">Conference</option>
            <option value="party">Pool Party</option>
            <option value="birthday">Birthday</option>
          </select>
          <button type="submit">Search</button>
        </form>
      </section>

      <section className="venue-results" id="venueResults">
        <h2>Search Results</h2>
        {venues.length > 0 ? (
          <div className="venue-card-container">
            {venues.map((venue) => (
              <div className="venue-card" key={venue.name}>
                <img src={venue.Image} alt={venue.name} />
                <h3>{venue.name}</h3>
                <p>Location: {venue.location}</p>
                <p>Capacity: {venue.capacity} people</p>
                <p>Amenities: {venue.amenities} Free Food</p>
                <p>Price: #{venue.price}</p>
                <a href="#">Book Now</a>
              </div>
            ))}
          </div>

        ) : (
          <h4>No Venues Found.</h4>
        )}


      </section>
    </main>
  );
};

export default Content;
