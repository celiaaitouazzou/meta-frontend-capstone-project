import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import { useState } from 'react';
import slide1 from './about-asset/mario-adrian1.jpg'
import slide2 from './about-asset/mario-adrian2.jpg'
import slide3 from './about-asset/Adrian.jpg'
import slide4 from './about-asset/restaurant.jpg'


function About() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <Container style={{display:'flex',flexDirection:'row',justifyContent:'space-between',margin:"5%"}}>
            <div>
                <h1>About</h1>
                <p>In the sun-drenched hills of Italy, two boys, Adrian and Mario, grew up amidst the aroma of olive groves and the vibrant flavors of the Mediterranean. Adrian, with a passion for the rustic dishes of his Nonna's kitchen, and Mario, captivated by the art of crafting the perfect pasta, shared a dream: to bring the taste of their homeland to the world.</p>
                <p>Drawn by the promise of opportunity, they journeyed to Chicago, a city with a rich history of Italian immigration dating back to the 1850s. They found a community that welcomed them, but missed the authentic flavors of their upbringing. Inspired by the tradition of Italian immigrants who sought to preserve their culture in a new land, they decided to share their heritage through food.</p>
                <p>And so, Little Lemon was born. More than just a restaurant, it was a celebration of their shared history and the diverse tapestry of Mediterranean cuisine. Each dish, from Adrian's hearty stews to Mario's delicate handmade pasta, told a story of sun-drenched Italian landscapes and the warmth of family gatherings. Little Lemon became a place where Chicagoans could experience the true taste of Italy, a testament to Adrian and Mario's journey and their enduring love for their culture.</p>
            </div>
            <div>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
        </Container>
    )
}

export default About