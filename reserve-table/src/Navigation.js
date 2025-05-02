import React from 'react';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.jpg';
import AppRoutes from './AppRoutes'; // Import the new component

function Navigation() {
  return (
    <Router> {/* Wrap the entire Navigation component with Router */}
      <Navbar expand="lg" className="karla-navbar sticky-bar" sticky='top'>
        <Container className="nav-container d-flex custom-flex-nav">
          <div className="d-lg-none mx-auto">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Brand as={Link} to="/">
              <img src={logo} width="150" height="75%" className="float-lg-left d-inline-block" alt="Little Lemon logo" />
            </Navbar.Brand>
            <Nav className="ms-auto">
              <Link to="/" className="nav-link text-dark">HOME</Link>
              <Link to="/about" className="nav-link text-dark">ABOUT</Link>
              <Link to="/menu" className="nav-link text-dark">MENU</Link>
              <Link to="/reservation" className="nav-link text-dark">RESERVATION</Link>
              <Link to="/order-online" className="nav-link text-dark">ORDER ONLINE</Link>
              <Link to="/login" className="nav-link text-dark">LOGIN</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <AppRoutes /> {/* Render the separate component for routes */}
    </Router>
  );
}

export default Navigation;