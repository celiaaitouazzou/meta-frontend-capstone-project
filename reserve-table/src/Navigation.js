import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import logo from './logo.jpg';

function Navigation() {
  return (
    <Navbar expand="lg" className="sticky-bar" sticky="top">
      <Container className="nav-container d-flex justify-content-between">
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="150"
            className="d-inline-block align-top"
            alt="Little Lemon logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link text-dark">HOME</Link>
            <Link to="/About" className="nav-link text-dark">ABOUT</Link>
            <Link to="/Menu" className="nav-link text-dark">MENU</Link>
            <Link to="/Reservation" className="nav-link text-dark">RESERVATION</Link>
            <Link to="/OrderOnline" className="nav-link text-dark button-online-menu">ORDER ONLINE</Link>
            <Link to="/Login" className="nav-link text-dark">LOGIN</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;