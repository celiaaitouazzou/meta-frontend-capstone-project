import React from 'react'
import { Button, Container,Row } from 'react-bootstrap'

function Highlight() {
  return (
    <Container className='container-style'>
      <Row className='d-flex'>
        <h1>Specials</h1>
        <Button className='button-online-menu'>Online Menu</Button>
      </Row>
      <Row>
      </Row>
    </Container>
  )
}

export default Highlight