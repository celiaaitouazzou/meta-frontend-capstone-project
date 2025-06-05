import React from 'react'
import { Container,Button } from 'react-bootstrap'

function ConfirmedBooking(props) {
  return (
    <div data-testid="confirmed-booking"
      style={{padding:"2%",color:'#495E57', display: 'flex', flexDirection: 'column', alignItems: 'center'}}
      label="confirmed-booking"
    >
      <h1 style={{ textAlign:"center"}} name='confirmation-text'>Your reservation has been booked!</h1>
      <h2 style={{ textAlign:"center",padding:"2%"}}>Here are the information you have tranmitted.</h2>
      <ul
        id="confirmed-booking-info"
        style={{
          fontSize:"24px",
          border:"solid",
          borderColor:'#495E57',
          listStyleType:'none',
          padding:"2%",
          margin: "0 auto",
          width: "fit-content",
          textAlign: "left",
        }}
      >
        <li>First Name : {props.submission.firstName}</li>
        <li>Last Name : {props.submission.lastName}</li>
        <li>Date : {props.submission.date}</li>
        <li>Time : {props.submission.time}</li>
        <li>Guests Number : {props.submission.guests}</li>
        <li>Occasion : {props.submission.occasion}</li>
      </ul>
      <Button
        variant="outline-secondary"
        style={{ marginTop: '2rem' }}
        onClick={props.onBack}
      >
        Book another reservation
      </Button>
    </div>
  )
}

export default ConfirmedBooking


