import React from 'react'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Card , Button , Carousel } from 'react-bootstrap'
import ReviewRow from './ReviewRow'
import cardContent from './testimonialContent'

function Testimonials() {
    
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
    <Container>
        <h1>Testimonials</h1>
        <div tyle={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <ReviewRow row={cardContent.slice(0,4)}/>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <ReviewRow row={cardContent.slice(4)} />
        </div>
    </Container>
    )
}

export default Testimonials