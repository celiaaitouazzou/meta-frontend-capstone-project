import React from 'react'
import BookingForm from './BookingForm'


function BookingPage() {
  const formData = {
    firstName: '',
    lastName: '',
    date: '',
    time: '',
    guests: 2,
    occasion: '',
  };

  return (
    <div>
      <BookingForm formData={formData} />
    </div>
  );
}

export default BookingPage