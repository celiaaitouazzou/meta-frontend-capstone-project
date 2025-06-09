import React from 'react'
import { Button } from 'react-bootstrap'

function ConfirmedBooking(props) {
  const handleBookAnother = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top smoothly
    props.onBack(); // Go back to the form
  };
  return (
    <div
      data-testid="confirmed-booking"
      style={{
        padding: "2%",
        color: '#495E57',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
      aria-label="Booking confirmation"
      role="region"
      tabIndex={-1}
    >
      <h1
        style={{ textAlign: "center" }}
        name='confirmation-text'
        id="booking-confirm-title"
        aria-label="Booked reservation heading"
        aria-level="1"
      >
        Your reservation has been booked!
      </h1>
      <h2
        style={{ textAlign: "center", padding: "2%" }}
        id="booking-confirm-info"
        aria-label="Transmitted-information-subheading"
        aria-level="2"
      >
        Here is the information you have transmitted.
      </h2>
      <ul
        id="confirmed-booking-info"
        style={{
          fontSize: "24px",
          border: "solid",
          borderColor: '#495E57',
          listStyleType: 'none',
          padding: "2%",
          margin: "0 auto",
          width: "fit-content",
          textAlign: "left",
        }}
        aria-labelledby="booking-confirm-title booking-confirm-info"
        aria-label="Confirmed reservation details"
      >
        <li aria-label="First Name:">First Name : {props.submission.firstName}</li>
        <li aria-label="Last Name:">Last Name : {props.submission.lastName}</li>
        <li aria-label="Date:">Date : {props.submission.date}</li>
        <li aria-label="Time:">Time : {props.submission.time}</li>
        <li aria-label="Guests Number:">Guests Number : {props.submission.guests}</li>
        <li aria-label="Occasion:">Occasion : {props.submission.occasion}</li>
      </ul>
      <Button
        variant="outline-secondary"
        style={{ marginTop: '2rem' }}
        onClick={handleBookAnother}
        aria-label="Book another reservation"
        role="button"
      >
        Book another reservation
      </Button>
    </div>
  )
}

export default ConfirmedBooking