import React from 'react'
import { Container } from 'react-bootstrap'
import Navigation from '../../Navigation.js'
import Footer from '../../Footer.js'

function ConfirmedBooking(props) {
  return (
    <>
     <Navigation />
    <Container>
      <h1>Your reservation has been booked! </h1>
      <h2>Here are the information you have tranmitted.</h2>
      <ul>
        <li>First Name : {props.submission.firstName}</li>
        <li>Last Name : {props.submission.lastName}</li>
        <li>Date : {props.submission.date}</li>
        <li>Time : {props.submission.time}</li>
        <li>Guests Number : {props.submission.guests}</li>
        <li>Occasion : {props.submission.occasion}</li>
      </ul>
    </Container>`
    <Footer />
    </>
  )
}

export default ConfirmedBooking