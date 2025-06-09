import React from 'react'
import Navigation from '../Navigation'
import Footer from '../Footer'
import BookingForm from './Reservation/BookingForm.js';


function Reservation() {
  const formData = {
    firstName: '',
    lastName: '',
    date: '',
    time: '',
    guests: 2,
    occasion: '',
  };

  return (
    <>
    <Navigation />
    <div
      role="main"
      aria-label="Booking Page"
      tabIndex={-1}
    >
      <BookingForm formData={formData} />
    </div>
    <Footer />
    </>
  );
}

export default Reservation