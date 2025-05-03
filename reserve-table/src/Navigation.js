import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './logo.jpg'

function Navigation() {
  return (
    <Navbar expand="lg" className="karla-navbar sticky-bar" sticky='top'>
        <Container className="nav-container d-flex custom-flex-nav">
            <div className="d-lg-none mx-auto">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </div>
            <Navbar.Collapse id="basic-navbar-nav">
                <Navbar.Brand href="/">
                    <img src={logo} width="150" height="75%" class="float-lg-left" className="d-inline-block" alt="Little Lemon logo"/>
                </Navbar.Brand>
                <Nav className="ms-auto ">
                    <Nav.Link href="/"  className="text-dark">HOME</Nav.Link>
                    <Nav.Link href="/About" className="text-dark">ABOUT</Nav.Link>
                    <Nav.Link href="/Menu"  className="text-dark">MENU</Nav.Link>
                    <Nav.Link href="/Reservation" className="text-dark">RESERVATION</Nav.Link>
                    <Nav.Link href="/OrderOnline" className="text-dark">ORDER ONLINE</Nav.Link>
                    <Nav.Link href="/Login" className="text-dark">LOGIN</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Navigation