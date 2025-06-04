import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { Button, Row, Col, Container } from 'react-bootstrap'; // Still using Container, Row, Col for layout
import { submitAPI ,fetchAPI } from './api';
import ConfirmedBooking from './ConfirmedBooking';
import { db } from '../../firebase.js'; // Adjust path if your firebase.js is elsewhere
import { submitFirestoreReservation } from '../../firestoreHelpers';
import { collection, addDoc } from 'firebase/firestore';


function BookingForm(props) {


  /// Helper to get today's date in YYYY-MM-DD format
  const getTodayString = () => {
    const today = new Date();
    // Adjust for timezone offset to ensure the date is correct regardless of local time
    const userTimezoneOffset = today.getTimezoneOffset() * 60000;
    const todayLocal = new Date(today.getTime() - userTimezoneOffset);
    return todayLocal.toISOString().split('T')[0];
  };

  const initialDateString = props.formData?.date || getTodayString();
  const initialDateObject = new Date(initialDateString + 'T00:00:00');

  const [availableTimes, setAvailableTimes] = useState(() => fetchAPI(initialDateObject));

  const [submittedData, setSubmittedData] = useState(null); // <-- NEW STATE

  // If submittedData exists, show confirmation instead of form
  if (submittedData) {
    return <ConfirmedBooking submission={submittedData} onBack={() => setSubmittedData(null)}/>;
  }

  // Function to generate all possible time slots from 8 AM to 10 PM in 30-minute intervals
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 17; hour <= 23; hour++) { // 8 AM to 10 PM (22:00)
      for (let minute = 0; minute < 60; minute += 30) {
        const h = hour < 10 ? `0${hour}` : `${hour}`;
        const m = minute === 0 ? '00' : '30';
        slots.push(`${h}:${m}`);
      }
    }
    return slots;
  };

  const allPossibleTimeSlots = generateTimeSlots();

  return (

    <Container>
      <Row style={{ padding: '5%' , display:'block',width:'auto',height:'auto'}}>
        <Col style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'baseline' }}>
          <Formik
            initialValues={{
              firstName: props.formData?.firstName || '',
              lastName: props.formData?.lastName || '',
              date: props.formData?.date || '',
              time: props.formData?.time || '',
              guests: props.formData?.guests || '2',
              occasion: props.formData?.occasion || 'occasion',
            }}
            validate={values => {
              const errors = {};
              if (!values.firstName) {
                errors.firstName = 'Required';
              }
              if (!values.lastName) {
                errors.lastName = 'Required';
              }
              if (!values.date) {
                errors.date = 'Required';
              }
              if (!values.time) {
                errors.time = 'Required';
              }
              if (!values.guests) {
                errors.guests = 'Required';
              }
              return errors;
            }}
            onSubmit={async (values, { setSubmitting }) => {
              setSubmitting(true);

              // Add to Firestore
              try {
                await addDoc(collection(db, "bookings"), values);
              } catch (error) {
                console.error("Error adding to Firestore:", error);
              }

              // Your existing logic
              setTimeout(() => {
                submitAPI(values);
                setSubmittedData(values);
                setSubmitting(false);
              }, 400);
          }}
          >
            {({ isSubmitting, values, touched, errors, handleChange, handleBlur }) => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${touched.firstName && errors.firstName ? 'is-invalid' : ''}`}
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                  />
                  {touched.firstName && errors.firstName && (
                    <div className="invalid-feedback">{errors.firstName}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${touched.lastName && errors.lastName ? 'is-invalid' : ''}`}
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                  />
                  {touched.lastName && errors.lastName && (
                    <div className="invalid-feedback">{errors.lastName}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="date" className="form-label">
                    Date
                  </label>
                  <input
                    type="date"
                    className={`form-control ${touched.date && errors.date ? 'is-invalid' : ''}`}
                    id="date"
                    name="date"
                    onChange= {e => {
                      handleChange(e);
                      setAvailableTimes(fetchAPI(new Date(e.target.value + 'T00:00:00')));
                    }}
                    onBlur={handleBlur}
                    value={values.date}
                  />
                  {touched.date && errors.date && (
                    <div className="invalid-feedback">{errors.date}</div>
                  )}
                </div>

                {/* === START OF TIME SELECTION CHANGE === */}
                <div className="mb-3">
                  <label htmlFor="time" className="form-label">
                    Time
                  </label>
                  <select
                    className={`form-select ${touched.time && errors.time ? 'is-invalid' : ''}`}
                    id="time"
                    name="time"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.time}
                  >
                    <option value="">Select a time slot</option> {/* Placeholder/default option */}
                    {allPossibleTimeSlots.map(timeSlot => (
                      <option
                        key={timeSlot}
                        value={timeSlot}
                        disabled={!availableTimes.includes(timeSlot)}
                      >
                        {timeSlot}
                      </option>
                    ))}
                  </select>
                  <div className="form-text">We are open from 5:00 PM to 11 PM.</div>
                  {touched.time && errors.time && (
                    <div className="invalid-feedback">{errors.time}</div>
                  )}
                </div>
                {/* === END OF TIME SELECTION CHANGE === */}

                <div className="mb-3">
                  <label htmlFor="guests" className="form-label">
                    Selected Number of Guests: {values.guests}
                  </label>
                  <input
                    type="range"
                    className={`form-range ${touched.guests && errors.guests ? 'is-invalid' : ''}`}
                    id="guests"
                    name="guests"
                    min="1"
                    max="12"
                    step="1"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.guests}
                  />
                  <div className="form-text">We can accommodate up to 12 people parties.</div>
                  {touched.guests && errors.guests && (
                    <div className="invalid-feedback">{errors.guests}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="occasion" className="form-label">
                    Select an Occasion
                  </label>
                  <select
                    className="form-select"
                    id="occasion"
                    name="occasion"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.occasion}
                  >
                    <option value="Occasion">Select an Occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Anniversary">Anniversary</option>
                  </select>
                </div>

                <Button variant="dark" type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
}

export default BookingForm;