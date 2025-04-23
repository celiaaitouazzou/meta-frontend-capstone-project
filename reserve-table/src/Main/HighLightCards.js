import React from 'react'


function HighlightCards(props) {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Title>{props.price}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Card.Link href="/OnlineMenu">Order A Delivery</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default HighlightCards;