import React from 'react'
import { Container,Row,Col,Nav } from 'react-bootstrap'
import footerLogo from './Main/assets/LittleLemonLogo.png'
import facebook from './Main/assets/facebook.png'
import instagram from './Main/assets/instagram.png'
import pinterest from './Main/assets/pinterest.png'

function Footer() {
  return (
    <Container className='footer-container-style' as="footer" role="contentinfo" aria-label="Footer">
        <Row style={{display:'flex',flexDirection:'row',alignItems:'start'}}>
            <Col>
                <img src={footerLogo} alt="Footer Logo" width={150} aria-label="Little Lemon Restaurant Logo"></img>
            </Col>
            <Col className='bottom-nav-link'>
                <h2 style={{fontFamily:"Markazi Text"}}  id="footer-nav-title">Doormat Navigation</h2>
                <ul>
                    <Nav className="ms-auto doormat-nav-link text-light" style={{display:'flex',flexDirection:'column',textAlign:'justify'}} role="navigation" aria-labelledby="footer-nav-title">
                        <Nav.Link href="/"  className="text-light" role="link" aria-label="Home" >Home</Nav.Link>
                        <Nav.Link href="/About" className="text-light" role="link" aria-label="About">About</Nav.Link>
                        <Nav.Link href="/Menu"  className="text-light" role="link" aria-label="Menu">Menu</Nav.Link>
                        <Nav.Link href="/Reservation" className="text-light" role="link" aria-label="Reservation">Reservation</Nav.Link>
                        <Nav.Link href="/OrderOnline" className="text-light" role="link" aria-label="Order Online">Order Online</Nav.Link>
                        <Nav.Link href="/Login" className="text-light" role="link" aria-label="Login">Login</Nav.Link>
                    </Nav>
                </ul>
            </Col>
            <Col className='bottom-nav-link'>
                <h2 id="footer-contact-title">Contact</h2>
                <ul style={{listStyleType:'none', textAlign:'justify',color:'white'}}>
                    <li aria-labelledby="little-lemon-address">1872 N Milwaukee Ave, Chicago, IL 60622</li>
                    <li> <a href="tel:3125551212" aria-label="Phone number">(312) 555-1212</a></li>
                    <li><a href="mailto:little.lemon@gmail.com" aria-label="Email">little.lemon@gmail.com</a></li>
                </ul>
            </Col>
            <Col className='bottom-nav-link'>
                <h2 style={{textAlign:'left'}} id="footer-social-title">Social Media</h2>
                <ul style={{display:'flex',flexDirection:'column',listStyleType:'none',color:'white'}}>
                    <li><a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">Facebook </a><img src={facebook} alt="facebook logo" aria-hidden="true"></img></li>
                    <li><a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">Instagram </a><img src={instagram} alt="Instagram logo" aria-hidden="true"></img></li>
                    <li><a href="https://pinterest.com" aria-label="Pinterest" target="_blank" rel="noopener noreferrer">Pinterest</a><img src={pinterest} alt="Pinterest Logo" aria-hidden="true"></img></li>
                </ul>
            </Col>
        </Row>
    </Container>
  )
}

export default Footer