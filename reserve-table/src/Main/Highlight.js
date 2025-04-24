import React from 'react'
import { Button, Container,Row,Col,Card } from 'react-bootstrap'
import greeksalad from './assets/greeksalad.jpg'
import bruschetta from './assets/bruschetta.png'
import lemondessert from './assets/lemondessert.jpg'

function Highlight() {

  const hightLightCard = [
    {
      src : greeksalad,
      title : 'Greek Salad',
      price : '$12.00',
      description : 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    },
    {
      src : bruschetta,
      title : 'Bruschetta',
      price : '$5.99',
      description : 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ',
    },
    {
      src: lemondessert,
      title : 'Lemon Dessert',
      price : '$5.00',
      description : 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
    }
  ]

  return (
    <Container className='container-style'>
      <Row className="d-flex justify-content-between align-items-center mb-4">
      <Col xs="auto">
        <h1 className="mb-0">Specials</h1>
      </Col>
      <Col xs="auto">
      <Button
        className="px-5 py-3 fw-bolder text-black border-0 rounded-3 fs-5 shadow-none"
        style={{
          backgroundColor: '#F4CE14',
          'font-weight': '900',
          'font-family': "'Karla', sans-serif",
          fontSize: '1.0rem', // slightly smaller than fs-5
          letterSpacing: '-0.75px', // tighter spacing adds weight visually
        }}>
        Online Menu
      </Button>
      </Col>
    </Row>
    <Row>
      {hightLightCard.map((item) => {
        return (
        <Card style={{ width: '16rem' }}>
        <Row>
          <Card.Img
            variant="top" src={item.src}
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
          <Card.Link href="/OnlineMenu" className='text-start' style={{color:'#333333',textDecoration:'none',fontWeight:'bold'}}>Order A Delivery</Card.Link>
        </Row>
        </Card.Body>
      </Card>)
      })}
    </Row>
    </Container>
  )
}

export default Highlight