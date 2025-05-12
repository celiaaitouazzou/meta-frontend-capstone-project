import React from 'react'
import Navigation from '../Navigation'
import BookingForm from './Reservation/BookingForm'
import Footer from '../Footer'
import BookingPage from './Reservation/BookingPage.js'


function Reservation() {
  return (
    <div>
      <Navigation />
      <BookingPage/>
      <Footer />
    </div>
  )
}

export default Reservation