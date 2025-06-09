import React from 'react'
import { Row, Card } from 'react-bootstrap'
import delivery from './icons/delivery.png'

function HighlightRow(props) {
  return (
    <Row
      style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '5px' }}
      as="ul"
      role="list"
      aria-label="Highlighted menu items"
    >
      {props.cards.map((item, idx) => {
        return (
          <Card
            style={{ width: '20rem', backgroundColor: '#EDEFEE', marginTop: "2%" }}
            as="li"
            role="listitem"
            tabIndex={0}
            key={item.title + idx}
            aria-label={`${item.title}, ${item.price}. ${item.description}`}
          >
            <Row>
              <Card.Img
                variant="top"
                src={item.src}
                className="no-padding p-0 m-0 w-100"
                style={{ height: '150px', objectFit: 'cover' }}
                alt={item.title}
                role="img"
                aria-label={item.title}
              />
            </Row>
            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Card.Title
                  style={{ fontFamily: 'Markazi Text', fontWeight: 'bold', fontSize: '18pt' }}
                  id={`title-${item.title.replace(/\s/g, '')}`}
                  role="heading"
                  aria-level="2"
                >
                  {item.title}
                </Card.Title>
                <Card.Title style={{ color: '#EE9972' }}>{item.price}</Card.Title>
              </div>
              <Card.Text style={{ textAlign: 'left', lineHeight: '1.5' }}>
                {item.description}
              </Card.Text>
              <Row>
                <Card.Link
                  href="/OnlineMenu"
                  className='text-start'
                  style={{ color: '#333333', textDecoration: 'none', fontWeight: 'bold' }}
                  role="link"
                  aria-label={`Order a delivery of ${item.title}`}
                >
                  Order A Delivery
                  <img
                    src={delivery}
                    style={{ height: "20px", width: "20px" }}
                    alt="delivery icon"
                    aria-hidden="true"
                  />
                </Card.Link>
              </Row>
            </Card.Body>
          </Card>
        )
      })}
    </Row>
  )
}

export default HighlightRow;