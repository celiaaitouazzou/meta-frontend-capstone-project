import React from 'react'
import BookingForm from './BookingForm'
import { useState } from 'react';


function BookingPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    date: '',
    time: '',
    guests: 2,
    occasion: '',
  });

  return (
    <div>
      <BookingForm formData={formData} setFormData={setFormData} />
    </div>
  );
}

export default BookingPage