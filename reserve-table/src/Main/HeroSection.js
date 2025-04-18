import React from 'react'
import {Row , Col , Image, Container, Button } from 'react-bootstrap';
import hero from './hero.png';

function HeroSection() {
  return (
      <Container className="d-md-flex flex-row flex-wrap flex-2 text-start px-2 text-wrap Hero-col-1" fluid="sm" >
      <Col>
         <h1>Little Lemon</h1>
          <p className='px-2'>
            Tucked into the city’s edge with a breeze of coastal charm, Little Lemon is the brainchild of Italian brothers Adrian and Mario — a modern Mediterranean spot where old-world flavors meet effortlessly cool vibes.
            Think bright citrus, bold herbs, wood-fired everything, and a wine list that knows how to party.
            It’s casual, it’s intimate, it’s where the playlist hits just right and the plates are made to be shared.
            Come for the hummus, stay for the limoncello.
          </p>
          <Button className='Hero-button bg-black' variant="outline-light">Reserve a Table</Button>
      </Col>
      <Col className='Hero-col-2'>
        <Image src={hero} rounded id="hero-image" width={400} height={500}/>
      </Col>
      </Container>
  )
}

export default HeroSection