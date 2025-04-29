import React from 'react'
import RatingStar from './RatingStar';
import { Card } from 'react-bootstrap';

function ReviewRow(props) {
    return (
        <div className="review-row">
            {props.row.map((item, index) => (
                <Card key={index} className="review-card">
                    <Card.Body className="review-card-body">
                        <div className="rating-container">
                            <RatingStar stars={item.rating} />
                        </div>
                        <div className="user-info">
                            <Card.Img variant="top" src={item.src} className="user-icon" />
                            <Card.Title className="user-name" style={{padding:"5x",fontSize:"18px"}}>{item.name}</Card.Title>
                        </div>
                        <Card.Text className="comment-text" style={{fontSize:"18px"}}>
                            {item.comment}
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default ReviewRow;