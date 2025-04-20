import React from 'react'
import {Row , Col , Image, Container, Button } from 'react-bootstrap';
import hero from './hero.png';

function HeroSection() {
  return (
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
        <Col
        xs={12}
        md={6}
        style={{
          position: 'relative',
          '@media (max-width: 767.98px)': { // Styles for screens smaller than md
            position: 'static', // Revert to normal static positioning
          },
        }}>
          <div style={{
            position: 'absolute',
            top: '-20px',
            left: '-15px',
            right: '-15px',
            bottom: '-20px',
            '@media (max-width: 767.98px)': { // Styles for screens smaller than md
              position: 'static', // Revert to normal static positioning
              top: 'auto',
              left: 'auto',
              right: 'auto',
              bottom: 'auto',
            },
          }}>
            <Image src={hero} fluid rounded style={{ height: '500px', width: 'auto', objectFit: 'cover' }} />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default HeroSection