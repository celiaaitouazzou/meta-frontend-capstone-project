import React from 'react'
import { Container } from 'react-bootstrap'
import ReviewRow from './ReviewRow'
import cardContent from './testimonialContent'
import { Card, Row , Col} from 'react-bootstrap';
import RatingStar from './RatingStar';


function Testimonials() {
    return (
        <Container className='t-container-style' style={{ width: "100%" }}>
            <div style={{ paddingTop: '5%', paddingBottom: '5%' }}>
                <h1 style={{ fontFamily: 'Markazi-Text', padding: "18px", color: "white", fontWeight: 'bold' }}>Testimonials</h1>
                <Row className="gx-4 gy-4 row-cols-1 row-cols-md-2 row-cols-lg-4 overflow-auto flex-nowrap">
                    {cardContent.map((item, index) => (
                        <Col key={index} className="d-flex justify-content-center" style={{ width: '350px' }}> {/* Set a fixed width for the columns on larger screens */}
                            <Card style={{ width: '100%' }}>
                                <Card.Body className="review-card-body text-center">
                                    <div className="rating-container">
                                        <RatingStar stars={item.rating} />
                                    </div>
                                    <div className="user-info">
                                        <Card.Img variant="top" src={item.src} className="user-icon rounded-circle" style={{ width: '80px', height: '80px', objectFit: 'cover', marginBottom: '0.5rem' }} />
                                        <Card.Title className="user-name" style={{ padding: "5px", fontSize: "18px" }}>{item.name}</Card.Title>
                                    </div>
                                    <Card.Text className="comment-text" style={{ fontSize: "18px" }}>
                                        {item.comment}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    );
}

export default Testimonials