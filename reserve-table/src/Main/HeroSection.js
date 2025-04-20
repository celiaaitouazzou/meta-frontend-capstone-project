import React from 'react'
import {Row , Col , Image, Container, Button } from 'react-bootstrap';
import hero from './hero.png';

function HeroSection() {
  return (
    <div>
      <Container className="py-5" style={{backgroundColor: '#495E57'}}>
      <Row className="align-items-center" >
        <Col xs={12} md={6} className="mb-4 mb-md-0 text-start">
          <div style={{ textAlign: 'justify', maxWidth: '600px', color: '#F4CE14'}}>
            <h1 className="display-4 text-start h2 text-start" style={{ fontFamily: "'Markazi Text', serif", color: '#F4CE14'}}>Little Lemon</h1>
            <p className="lead fs-6" style={{ textAlign: 'justify' }}>
              Tucked into the city’s edge with a breeze of coastal charm, Little Lemon is the brainchild of Italian brothers Adrian and Mario — a modern Mediterranean spot where old-world flavors meet effortlessly cool vibes.
              Think bright citrus, bold herbs, wood-fired everything, and a wine list that knows how to party.
              It’s casual, it’s intimate, it’s where the playlist hits just right and the plates are made to be shared.
              Come for the hummus, stay for the limoncello.
            </p>
            <Button className="Hero-button text-white bg-dark border-light shadow-none mt-3">
              Reserve A Table
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
    <div className="d-none d-lg-block position-absolute top-0 end-0 pt-5" style={{ transform: 'translateX(-50%)' }}>
      <Image src={hero} width={300} height={500} rounded />
    </div>
    <div className="d-block d-lg-none text-center mt-3">
      <Image src={hero} width={300} height={500} rounded />
    </div>
    </div>
  )
}

export default HeroSection