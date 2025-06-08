import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import slide1 from './about-asset/mario-adrian1.jpg';
import slide2 from './about-asset/mario-adrian2.jpg';
import slide3 from './about-asset/Adrian.jpg';
import slide4 from './about-asset/restaurant.jpg';

function About() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Container className="py-5">
            <Row className="align-items-center justify-content-around">
                <Col md={6} className="text-column">
                    <div className="text-content">
                        <h1 className="about-title" style={{fontFamily:'Markazi Text',fontSize:'40px',fontWeight:'bold'}} id="about-title">Little Lemon</h1>
                        <h2 className="mb-4 about-subtitle" style={{fontFamily:'Markazi Text'}} id="about-location">Chicago</h2>
                        <p className="mb-4">In the sun-drenched hills of Italy, two boys, Adrian and Mario, grew up amidst the aroma of olive groves and the vibrant flavors of the Mediterranean. Adrian, with a passion for the rustic dishes of his Nonna's kitchen, and Mario, captivated by the art of crafting the perfect pasta, shared a dream: to bring the taste of their homeland to the world.</p>
                        <p className="mb-4">Drawn by the promise of opportunity, they journeyed to Chicago, a city with a rich history of Italian immigration dating back to the 1850s. They found a community that welcomed them, but missed the authentic flavors of their upbringing. Inspired by the tradition of Italian immigrants who sought to preserve their culture in a new land, they decided to share their heritage through food.</p>
                        <p className="mb-4">And so, Little Lemon was born - a Chicago restaurant celebrating Adrian and Mario's Italian heritage through the diverse and delicious flavors of Mediterranean cuisine, a true reflection of their journey and cultural pride.</p>
                    </div>
                </Col>
                <Col md={5} className="image-column">
                    <Carousel
                        data-bs-theme="dark"
                        activeIndex={index}
                        onSelect={handleSelect}
                        className="h-100"
                        role="region"
                        aria-label="Photo gallery of Mario, Adrian, and the restaurant"
                        aria-live="polite"
                    >
                        <Carousel.Item className="h-100">
                            <div className="carousel-image-container">
                                <img
                                    src={slide1}
                                    alt="Mario and Adrian smiling together in the restaurant"
                                    className="d-block w-100 h-100 object-fit-cover"
                                    aria-label="Mario and Adrian smiling together in the restaurant"
                                />
                            </div>
                            <Carousel.Caption>
                                <h5 id="carousel-caption-1">Mario and Adrian</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="h-100">
                            <div className="carousel-image-container">
                                <img
                                    src={slide2}
                                    alt="Mario and Adrian preparing food"
                                    className="d-block w-100 h-100 object-fit-cover"
                                    aria-label="Mario and Adrian preparing food"
                                />
                            </div>
                            <Carousel.Caption>
                                <h5 id="carousel-caption-2">Mario and Adrian</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="h-100">
                            <div className="carousel-image-container">
                                <img
                                    src={slide3}
                                    alt="Adrian in the kitchen"
                                    className="d-block w-100 h-100 object-fit-cover"
                                    aria-label="Adrian in the kitchen"
                                />
                            </div>
                            <Carousel.Caption>
                                <h5 id="carousel-caption-3">Adrian</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className="h-100">
                            <div className="carousel-image-container">
                                <img
                                    src={slide4}
                                    alt="Restaurant interior with Mediterranean decor"
                                    className="d-block w-100 h-100 object-fit-cover"
                                    aria-label="Restaurant interior with Mediterranean decor"
                                />
                            </div>
                            <Carousel.Caption>
                                <h5 id="carousel-caption-4">Restaurant Interior</h5>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
}

export default About;