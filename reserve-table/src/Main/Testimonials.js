import React from 'react'
import { Container } from 'react-bootstrap'
import cardContent from './testimonialContent'
import { Card, Row , Col } from 'react-bootstrap';
import RatingStar from './RatingStar';

function Testimonials() {
    return (
        <Container
            className='t-container-style'
            style={{ width: "100%" }}
            as="section"
            aria-label="Customer Testimonials"
            role="region"
        >
            <div style={{ paddingTop: '5%', paddingBottom: '5%' }}>
                <h1
                    style={{
                        fontFamily: 'Markazi-Text',
                        padding: "18px",
                        color: "white",
                        fontWeight: 'bold'
                    }}
                    id="testimonials-title"
                    aria-level="1"
                >
                    Testimonials
                </h1>
                <Row
                    className="gx-4 gy-4 row-cols-1 row-cols-md-2 row-cols-lg-4 overflow-auto flex-nowrap"
                    as="ul"
                    role="list"
                    aria-label="List of customer testimonials"
                >
                    {cardContent.map((item, index) => (
                        <Col
                            key={index}
                            className="d-flex justify-content-center"
                            style={{ width: '350px' }}
                            as="li"
                            role="listitem"
                            aria-label={`Testimonial from ${item.name}, ${item.rating} stars`}
                            tabIndex={0}
                        >
                            <Card style={{ width: '100%' }}>
                                <Card.Body className="review-card-body text-center">
                                    <div className="rating-container">
                                        <RatingStar stars={item.rating} />
                                    </div>
                                    <div className="user-info">
                                        <Card.Img
                                            variant="top"
                                            src={item.src}
                                            className="user-icon rounded-circle"
                                            style={{
                                                width: '80px',
                                                height: '80px',
                                                objectFit: 'cover',
                                                marginBottom: '0.5rem'
                                            }}
                                            alt={`Photo of ${item.name}`}
                                            role="img"
                                            aria-label={`Photo of ${item.name}`}
                                        />
                                        <Card.Title
                                            className="user-name"
                                            style={{ padding: "5px", fontSize: "18px" }}
                                            id={`testimonial-user-${index}`}
                                            role="heading"
                                            aria-level="2"
                                        >
                                            {item.name}
                                        </Card.Title>
                                    </div>
                                    <Card.Text
                                        className="comment-text"
                                        style={{ fontSize: "18px" }}
                                        aria-label={`Testimonial comment: ${item.comment}`}
                                    >
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