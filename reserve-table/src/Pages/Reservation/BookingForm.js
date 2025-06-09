import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { submitAPI, fetchAPI } from './api';
import ConfirmedBooking from './ConfirmedBooking';
import { db } from '../../firebase.js';
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
  const [submittedData, setSubmittedData] = useState(null);

  // If submittedData exists, show confirmation instead of form
  if (submittedData) {
    return <ConfirmedBooking submission={submittedData} onBack={() => setSubmittedData(null)} />;
  }

  // Function to generate all possible time slots from 5 PM to 11 PM in 30-minute intervals
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 17; hour <= 23; hour++) {
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
    <Container
      as="section"
      aria-label="Booking Form"
      role="form"
      tabIndex={-1}
    >
      <Row style={{ padding: '5%', display: 'block', width: 'auto', height: 'auto' }}>
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
              <Form aria-labelledby="booking-form-title" aria-describedby="booking-form-desc">
                <h2
                  id="booking-form-title"
                  style={{ fontFamily: 'Markazi Text', fontWeight: 'bold', fontSize: '2rem' }}
                  aria-level="1"
                >
                  Reserve a Table
                </h2>
                <p id="booking-form-desc" className="mb-4">
                  Fill out the form below to book your reservation at Little Lemon.
                </p>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label" aria-label="First Name">
                    First Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${touched.firstName && errors.firstName ? 'is-invalid' : ''}`}
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    aria-required="true"
                    aria-invalid={!!(touched.firstName && errors.firstName)}
                    aria-describedby={touched.firstName && errors.firstName ? "firstName-error" : undefined}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                  />
                  {touched.firstName && errors.firstName && (
                    <div className="invalid-feedback" id="firstName-error" aria-live="polite">{errors.firstName}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label" aria-label="Last Name">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${touched.lastName && errors.lastName ? 'is-invalid' : ''}`}
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    aria-required="true"
                    aria-invalid={!!(touched.lastName && errors.lastName)}
                    aria-describedby={touched.lastName && errors.lastName ? "lastName-error" : undefined}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                  />
                  {touched.lastName && errors.lastName && (
                    <div className="invalid-feedback" id="lastName-error" aria-live="polite">{errors.lastName}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="date" className="form-label" aria-label="Date">
                    Date
                  </label>
                  <input
                    type="date"
                    className={`form-control ${touched.date && errors.date ? 'is-invalid' : ''}`}
                    id="date"
                    name="date"
                    aria-required="true"
                    aria-invalid={!!(touched.date && errors.date)}
                    aria-describedby={touched.date && errors.date ? "date-error" : undefined}
                    onChange={e => {
                      handleChange(e);
                      setAvailableTimes(fetchAPI(new Date(e.target.value + 'T00:00:00')));
                    }}
                    onBlur={handleBlur}
                    value={values.date}
                  />
                  {touched.date && errors.date && (
                    <div className="invalid-feedback" id="date-error" aria-live="polite">{errors.date}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="time" className="form-label" aria-label="Time">
                    Time
                  </label>
                  <select
                    className={`form-select ${touched.time && errors.time ? 'is-invalid' : ''}`}
                    id="time"
                    name="time"
                    aria-required="true"
                    aria-invalid={!!(touched.time && errors.time)}
                    aria-describedby={touched.time && errors.time ? "time-error" : undefined}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.time}
                  >
                    <option value="">Select a time slot</option>
                    {allPossibleTimeSlots.map(timeSlot => (
                      <option
                        key={timeSlot}
                        value={timeSlot}
                        disabled={!availableTimes.includes(timeSlot)}
                        aria-disabled={!availableTimes.includes(timeSlot)}
                      >
                        {timeSlot}
                      </option>
                    ))}
                  </select>
                  <div className="form-text" id="time-help">We are open from 5:00 PM to 11 PM.</div>
                  {touched.time && errors.time && (
                    <div className="invalid-feedback" id="time-error" aria-live="polite">{errors.time}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="guests" className="form-label" aria-label={`Selected number of guests: ${values.guests}`}>
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
                    aria-valuenow={values.guests}
                    aria-valuemin="1"
                    aria-valuemax="12"
                    aria-invalid={!!(touched.guests && errors.guests)}
                    aria-describedby={touched.guests && errors.guests ? "guests-error" : undefined}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.guests}
                  />
                  <div className="form-text" id="guests-help">We can accommodate up to 12 people parties.</div>
                  {touched.guests && errors.guests && (
                    <div className="invalid-feedback" id="guests-error" aria-live="polite">{errors.guests}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="occasion" className="form-label" aria-label="Select an Occasion">
                    Select an Occasion
                  </label>
                  <select
                    className="form-select"
                    id="occasion"
                    name="occasion"
                    aria-required="false"
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

                <Button
                  variant="dark"
                  type="submit"
                  disabled={isSubmitting}
                  aria-label="Submit reservation"
                  aria-busy={isSubmitting}
                  role="button"
                >
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