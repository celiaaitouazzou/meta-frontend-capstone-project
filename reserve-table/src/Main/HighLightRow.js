import React from 'react'
import { Row,Card } from 'react-bootstrap'
import delivery from './assets/delivery.png'

function HighlightRow(props) {

  return (
    <Row className='d-flex justify-content-around' style={{margin:"5%"}}>
      {/**/}
      {props.cards.map((item) => {
        return (
        <Card style={{ width: '16rem' , backgroundColor:'#EDEFEE'}}>
        <Row>
          <Card.Img
            variant="top"
            src={item.src}
            className="no-padding p-0 m-0 w-100"
            style={{ height: '150px', objectFit: 'cover' }}
            cap
          />
        </Row>
        <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <Card.Title>{item.title}</Card.Title>
            <Card.Title style={{color:'#EE9972'}}>{item.price}</Card.Title>
          </div>
          <Card.Text style={{textAlign:'left'}}>
            {item.description}
          </Card.Text>
        <Row>
          <Card.Link
            href="/OnlineMenu"
            className='text-start'
            style={{color:'#333333',textDecoration:'none',fontWeight:'bold'}}>
            Order A Delivery
            <img src={delivery} style={{height:"20px", width:"20px"}}></img>
          </Card.Link>
        </Row>
        </Card.Body>
      </Card>)
      })}
    </Row>
  )
}

export default HighlightRow;