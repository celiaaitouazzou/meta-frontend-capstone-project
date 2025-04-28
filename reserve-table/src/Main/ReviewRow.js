import React from 'react'
import RatingStar from './RatingStar';
import { Card } from 'react-bootstrap';

function ReviewRow(props) {
  return (
    <div style={{display:'flex',flexDirection:'row',justifyContent: 'center'}}>
        {props.row.map((item, index) => (
            <Card style={{ width: '24em' }}>
                <Card.Body>
                    <div key={index} className="rating-spacing">
                        <RatingStar stars={item.rating} />
                    </div>
                    <div>
                        <Card.Img variant="top" src={item.src} style={{ maxHeight: '150px', objectFit: 'contain', marginBottom: '0.5rem' }} />
                        <Card.Title>{item.name}</Card.Title>
                    </div>
                    <Card.Text>
                    {item.comment}
                    </Card.Text>
                </Card.Body>
            </Card>
        ))}
    </div>
  )
}

export default ReviewRow;