import React from 'react'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import icon1 from './Ticon/icon1.png'
import icon2 from './Ticon/icon2.png'
import icon3 from './Ticon/icon3.png'
import icon4 from './Ticon/icon4.png'
import icon5 from './Ticon/icon5.jpg'
import icon6 from './Ticon/icon6.jpg'
import icon7 from './Ticon/icon7.jpg'
import icon8 from './Ticon/icon8.jpg'
import { Card , Button , Carousel } from 'react-bootstrap'
import ReviewRow from './ReviewRow'

function Testimonials() {

    const cardContent = [
        {
            rating: 4.5,
            src: icon1,
            name : 'Devon Jackson',
            comment :'A charming neighborhood spot with consistently tasty Mediterranean dishes.'
        },
        {
            rating: 4.0,
            src : icon2,
            name: 'Maria Rodriguez',
            comment:"The service was friendly and efficient, making for a pleasant dining experience."
        },
        {
            rating: 4.0,
            src : icon3,
            name:'Aisha Khan',
            comment : "I enjoyed the fresh flavors and cozy atmosphere at Little Lemon."
        },
        {
            rating: 4.0,
            src : icon4,
            name:'Kevin O\'Malley',
            comment : "A great place for a casual meal with friends or family."
        },
        {
            rating: 3.5,
            src : icon5,
            name:'Sofia Kowalski',
            comment : "The prices are reasonable for the quality of food offered."
        },
        {
            rating: 4.5,
            src: icon6,
            name: 'Jada Williams',
            comment : "Little Lemon is my new go-to for a quick and delicious bite."
        },
        {
            rating : 3.0,
            src : icon7,
            name: 'Imani Jones',
            comment : "The menu has a good variety of options to choose from."
        },
        {
            rating: 4.0,
            src : icon8,
            name: '    Raj Patel',
            comment : "I appreciated the attention to detail in both the food and the service."
        }
    ]

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
    <Container>
    <h1>Testimonials</h1>
    <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <ReviewRow row={cardContent.slice(0,4)} className="review-row-container" />
        </Carousel.Item>
        <Carousel.Item style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <ReviewRow row={cardContent.slice(4)} className="review-row-container"/>
        </Carousel.Item>
    </Carousel>
    </Container>
    )
}

export default Testimonials