import React, { useState } from 'react';

function TableBooking() {
  const [name, setName] = useState('');
  const [partySize, setPartySize] = useState(1);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePartySizeChange = (event) => {
    setPartySize(parseInt(event.target.value));
  };

  const handleBookingSubmit = (event) => {
    event.preventDefault();
    // Here you could implement the logic to send the booking details to the server
    setBookingConfirmed(true);
  };

  return (
    <div>
      {bookingConfirmed ? (
        <div>
          <h2>Thank you, {name}, your table for {partySize} is booked!</h2>
          <p>We look forward to seeing you at Little Lemon!</p>
        </div>
      ) : (
        <form onSubmit={handleBookingSubmit}>
          <label>
            Your Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
          <label>
            Party Size:
            <input type="number" value={partySize} onChange={handlePartySizeChange} />
          </label>
          <button type="submit">Book Table</button>
        </form>
      )}
    </div>
  );
}

export default TableBooking;
