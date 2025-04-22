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
        className="px-5 py-3 fw-bol text-black border-0 font-weight-bold rounded-3 fs-5"
        style={{
          backgroundColor: '#F4CE14',
          fontWeight: 900,
          fontFamily: "'Karla', sans-serif"
        }}>
        Online Menu
      </Button>
      </Col>
    </Row>
    </Container>
  )
}

export default Highlight