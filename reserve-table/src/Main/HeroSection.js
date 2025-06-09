import React from 'react'
import { Row, Col, Image, Container, Button } from 'react-bootstrap';
import hero from './assets/hero.png';
import Nav from 'react-bootstrap/Nav';
import { Link} from 'react-router-dom';

function HeroSection() {
  return (
    <Container
      className="py-5"
      style={{ backgroundColor: '#495E57' }}
      as="section"
      aria-label="Introduction to Little Lemon Restaurant"
      role="region"
    >
      <Row className="align-items-center" role="presentation">
        <Col
          xs={12}
          md={6}
          className="mb-4 mb-md-0 text-start flex-start"
          role="presentation"
        >
          <div
            style={{ textAlign: 'justify', maxWidth: '600px', color: '#F4CE14' }}
            role="document"
          >
            <h1
              className="display-4 text-start h2 text-start"
              style={{ fontFamily: "'Markazi Text', serif", color: '#F4CE14' }}
              tabIndex={-1}
              id="hero-title"
              aria-level="1"
            >
              Little Lemon
            </h1>
            <p className="lead fs-6" style={{ textAlign: 'justify' }} role="article">
              Tucked into the city’s edge with a breeze of coastal charm, Little Lemon is the brainchild of Italian brothers Adrian and Mario — a modern Mediterranean spot where old-world flavors meet effortlessly cool vibes.
              Think bright citrus, bold herbs, wood-fired everything, and a wine list that knows how to party.
              It’s casual, it’s intimate, it’s where the playlist hits just right and the plates are made to be shared.
              Come for the hummus, stay for the limoncello.
            </p>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/Reservation"
                className="nav-link text-dark"
              >
                <Button
                  className="Hero-button text-white bg-dark border-light shadow-none mt-3"
                  aria-label="Reserve a table at Little Lemon"
                  role="button"
                >
                  Reserve A Table
                </Button>
              </Nav.Link>
            </Nav.Item>
          </div>
        </Col>
        {/* Desktop image */}
        <div
          className="d-none d-lg-block position-absolute pt-5"
          style={{ transform: 'translate( -50%, 7.5% )', marginLeft: "60%" }}
          aria-hidden="true"
          role="presentation"
        >
          <Image
            src={hero}
            width={300}
            height={450}
            rounded
            alt="Restaurant owners Adrian and Mario smiling at Little Lemon"
            role="img"
          />
        </div>
        {/* Mobile image */}
        <div className="d-block d-lg-none text-center mt-3" role="presentation">
          <Image
            src={hero}
            width={300}
            height={450}
            rounded
            alt="Restaurant owners Adrian and Mario smiling at Little Lemon"
            role="img"
          />
        </div>
      </Row>
    </Container>
  );
}

export default HeroSection