import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, Row, Col, Container } from 'react-bootstrap'; // Still using Container, Row, Col for layout
import greekSalad from './GreekSalad.jpg';

function BookingForm(props) {
  return (
    <Container>
      <Row style={{ backgroundColor: '#F4CE14', padding: '5%' }}>
        <Col style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'baseline' }}>
          <Formik
            initialValues={props.formData || {
              firstName: '',
              lastName: '',
              date: '',
              time: '',
              guests: '1',
              occasion: 'Occasion',
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
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
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
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.date}
                  />
                  {touched.date && errors.date && (
                    <div className="invalid-feedback">{errors.date}</div>
                  )}
                </div>

                <div className="mb-3">
                  <label htmlFor="time" className="form-label">
                    Time
                  </label>
                  <input
                    type="time"
                    className={`form-control ${touched.time && errors.time ? 'is-invalid' : ''}`}
                    id="time"
                    name="time"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.time}
                  />
                  <div className="form-text">We are open from 8:00 AM to 10 PM.</div>
                  {touched.time && errors.time && (
                    <div className="invalid-feedback">{errors.time}</div>
                  )}
                </div>

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
        <Col>
          <img src={greekSalad} width={800} height={600} alt="greek-salad" />
        </Col>
      </Row>
    </Container>
  );
}

export default BookingForm;