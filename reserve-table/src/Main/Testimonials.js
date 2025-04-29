import React from 'react'
import { Container } from 'react-bootstrap'
import ReviewRow from './ReviewRow'
import cardContent from './testimonialContent'

function Testimonials() {
    return (
    <Container className='t-container-style' style={{width:"100%"}}>
        <div style={{paddingTop:'10%',paddingBottom:'10%'}}>
            <h1 style={{fontFamily:'Markazi-Text',padding:"18px",color:"white",fontWeight:'bold'}}>Testimonials</h1>
            <div className="testimonials-scroll-container">
                <div className="testimonial-row-wrapper">
                    <ReviewRow row={cardContent.slice(0,4)}/>
                    <ReviewRow row={cardContent.slice(4)} />
                </div>
            </div>
        </div>
    </Container>
    )
}

export default Testimonials