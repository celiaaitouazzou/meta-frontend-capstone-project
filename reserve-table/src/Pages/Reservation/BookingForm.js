import React from 'react'
import Form from 'react-bootstrap/Form';
import {Button, Row, Col , Container} from 'react-bootstrap';
import { useState } from 'react';
import greekSalad from './GreekSalad.jpg'

function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    date: '',
    time: '',
    guests: 2,
    occasion: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'Required';
    if (!formData.lastName) newErrors.lastName = 'Required';
    if (!formData.date) newErrors.date = 'Required';
    if (!formData.time) newErrors.time = 'Required';
    if (!formData.guests) newErrors.guests = 'Required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert(JSON.stringify(formData, null, 2));
    }
  };

  return (
    <Container>
      <Row style={{ backgroundColor: '#F4CE14', padding: '5%' }}>
        <Col style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'baseline' }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicFN">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {touched.firstName && errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLN">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                isInvalid={!!errors.lastName}
              />
              <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="dateInput">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                isInvalid={!!errors.date}
              />
              <Form.Control.Feedback type="invalid">{errors.date}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="timeInput">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                isInvalid={!!errors.time}
              />
              <Form.Text muted>We are open from 8:00 AM to 10 PM.</Form.Text>
              <Form.Control.Feedback type="invalid">{errors.time}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="noGuest">
              <Form.Label>Number of Guests: {formData.guests}</Form.Label>
              <Form.Control
                type="range"
                min={1}
                max={12}
                step={1}
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                isInvalid={!!errors.guests}
              />
              <Form.Text muted>We can accommodate up to 12 people parties.</Form.Text>
              <Form.Control.Feedback type="invalid">{errors.guests}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Select
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
              >
                <option value="">Occasion</option>
                <option value="Birthday">Birthday</option>
                <option value="Engagement">Engagement</option>
                <option value="Anniversary">Anniversary</option>
              </Form.Select>
            </Form.Group>

            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col>
          <img src={greekSalad} width={800} height={600} alt="greek-salad" />
        </Col>
      </Row>
    </Container>
  );
}

export default BookingForm