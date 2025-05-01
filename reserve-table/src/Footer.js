import React from 'react'
import { Container,Row,Col,Nav } from 'react-bootstrap'
import footerLogo from './Main/assets/LittleLemonLogo.png'
import facebook from './Main/assets/facebook.png'
import instagram from './Main/assets/instagram.png'
import messenger from './Main/assets/messenger.png'
import pinterest from './Main/assets/pinterest.png'

function Footer() {
  return (
    <Container>
        <Row>
            <Col>
                <img src={footerLogo} alt="Footer Logo"></img>
            </Col>
            <Col>
                <h2>Doormat Navigation</h2>
                <ul>
                    <Nav className="ms-auto ">
                        <Nav.Link href="/"  className="text-dark">HOME</Nav.Link>
                        <Nav.Link href="/About" className="text-dark">ABOUT</Nav.Link>
                        <Nav.Link href="/Menu"  className="text-dark">MENU</Nav.Link>
                        <Nav.Link href="/Reservation" className="text-dark">RESERVATION</Nav.Link>
                        <Nav.Link href="/OrderOnline" className="text-dark">ORDER ONLINE</Nav.Link>
                        <Nav.Link href="/Login" className="text-dark">LOGIN</Nav.Link>
                    </Nav>
                </ul>
            </Col>
            <Col>
                <h2>Contact</h2>
                <ul>
                    <li>1872 N Milwaukee Ave, Chicago, IL 60622</li>
                    <li>(312) 555-1212</li>
                    <li>little.lemon@gmail.com</li>
                </ul>
            </Col>
            <Col>
                <h2>Social Media</h2>
                <ul>
                    <li>Facebook <img src={facebook} alt="facebook logo"></img></li>
                    <li>Instagram<img src={instagram} alt="Instagram logo"></img></li>
                    <li>Messenger <img src={messenger} alt="Messenger logo"></img></li>
                    <li>Pinterest <img src={pinterest} alt="Pinterest Logo"></img></li>
                </ul>
            </Col>
        </Row>
    </Container>
  )
}

export default Footer