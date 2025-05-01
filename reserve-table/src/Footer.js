import React from 'react'
import { Container,Row,Col,Nav } from 'react-bootstrap'
import footerLogo from './Main/assets/LittleLemonLogo.png'
import facebook from './Main/assets/facebook.png'
import instagram from './Main/assets/instagram.png'
import pinterest from './Main/assets/pinterest.png'

function Footer() {
  return (
    <Container className='footer-container-style'>
        <Row style={{display:'flex',flexDirection:'row',alignItems:'start'}}>
            <Col>
                <img src={footerLogo} alt="Footer Logo" width={150}></img>
            </Col>
            <Col className='bottom-nav-link'>
                <h2 style={{fontFamily:"Markazi Text"}}>Doormat Navigation</h2>
                <ul>
                    <Nav className="ms-auto doormat-nav-link text-light" style={{display:'flex',flexDirection:'column',textAlign:'justify'}}>
                        <Nav.Link href="/"  className="text-light">Home</Nav.Link>
                        <Nav.Link href="/About" className="text-light">About</Nav.Link>
                        <Nav.Link href="/Menu"  className="text-light">Menu</Nav.Link>
                        <Nav.Link href="/Reservation" className="text-light">Reservation</Nav.Link>
                        <Nav.Link href="/OrderOnline" className="text-light">Order Online</Nav.Link>
                        <Nav.Link href="/Login" className="text-light">Login</Nav.Link>
                    </Nav>
                </ul>
            </Col>
            <Col className='bottom-nav-link'>
                <h2>Contact</h2>
                <ul style={{listStyleType:'none', textAlign:'justify',color:'white'}}>
                    <li>1872 N Milwaukee Ave, Chicago, IL 60622</li>
                    <li>(312) 555-1212</li>
                    <li>little.lemon@gmail.com</li>
                </ul>
            </Col>
            <Col className='bottom-nav-link'>
                <h2 style={{textAlign:'left'}}>Social Media</h2>
                <ul style={{display:'flex',flexDirection:'column',listStyleType:'none',color:'white'}}>
                    <li>Facebook <img src={facebook} alt="facebook logo"></img></li>
                    <li>Instagram <img src={instagram} alt="Instagram logo"></img></li>
                    <li>Pinterest <img src={pinterest} alt="Pinterest Logo"></img></li>
                </ul>
            </Col>
        </Row>
    </Container>
  )
}

export default Footer