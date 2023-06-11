import React, { useState } from 'react';


const useBookingForm = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('');

  const handleBookNow = (e) => {
    e.preventDefault();
    setShowBookingForm(true);

  };


  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Process the form submission (e.g., send data to server, perform actions)
    // Reset the form
    setName('');
    setPhone('');
    setDate('');
    setGuests('');
  };

  return {
    showBookingForm,
    handleBookNow,
    handleFormSubmit,
    name,
    setName,
    phone,
    setPhone,
    date,
    setDate,
    guests,
    setGuests,
  };
};

const Booking = (venue) => {
  const {
    showBookingForm,
    handleBookNow,
    handleFormSubmit,
    name,
    setName,
    phone,
    setPhone,
    date,
    setDate,
    guests,
    setGuests,
  } = useBookingForm();

  return (
    <div className="venue-card" key={venue.name}>
      <img src="img3.jpg" alt={venue.name} />
      <h3>{venue.name}</h3>
      <p>Location: {venue.location}</p>
      <p>Capacity: {venue.capacity} people</p>
      <p>Amenities: {venue.amenities}</p>
      <p>Price: #{venue.price}</p>
      <a href="#" onClick={handleBookNow}>Book Now</a>

      {/* Booking Form */}
      {showBookingForm && (
        <form className="booking-form" onSubmit={handleFormSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />

          <label htmlFor="date">Date of Event:</label>
          <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />

          <label htmlFor="guests">Expected Number of Guests:</label>
          <input type="number" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} />

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Booking;
