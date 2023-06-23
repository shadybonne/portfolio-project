import React, { useState } from 'react';


const useBookingForm = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('0');

  const handleBookNow = (e) => {
    e.preventDefault();
    setShowBookingForm(true);

  };


  const handleFormSubmit = (e) => {
    e.preventDefault();

    setName('');
    setPhone('');
    setDate('');
    setGuests('');
    alert('Booking submitted successfully!');
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
      <img src={venue.image} alt={venue.name} />
      <h3>{venue.name}</h3>
      <p>Location: {venue.location}</p>
      <p>Capacity: {venue.capacity} people</p>
      <p>Amenities: {venue.amenities}</p>
      <p>Price: #{venue.price}</p>
      <button type="button" onClick={handleBookNow}>Book Now</button>

      <div class='form'>
        <ul>
      {showBookingForm && (
        <form className="booking-form" onSubmit={handleFormSubmit}>
          <li>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
          </li>

          <li>
          <label htmlFor="phone">Phone Number:</label>
          <input type="number" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
          </li>

          <li>
          <label htmlFor="date">Date of Event:</label>
          <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} min={new Date().toISOString().split('T')[0]}/>
          </li>

          <li>
          <label htmlFor="guests">Number of Guests:</label>
          <input type="number" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} min="100" max="1000"/>
          </li>

          <button type="submit">Submit</button>
        

        </form>
      
      )}
        </ul>
      </div>
    </div>
  );
};

export default Booking;
