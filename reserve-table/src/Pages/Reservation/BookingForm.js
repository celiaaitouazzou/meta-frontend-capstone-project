import React from 'react'
import { useState } from 'react';

function BookingForm() {
const [formData, setFormData] = useState({
    email: '',
    password: ''
    });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Do something with formData
    };
  return (
    <div>

    <h1>Any place in your app!</h1>
    <div>
      <h1>Reservation Form</h1>
      
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />

      <button type="submit">Submit</button>
    </form>
    </div>

    </div>
  )
}

export default BookingForm