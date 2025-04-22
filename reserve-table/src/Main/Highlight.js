import React from 'react'
import { Button, Container,Row,Col } from 'react-bootstrap'

function Highlight() {

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
    </Row>
    </Container>
  )
}

export default Highlight