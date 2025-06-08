import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import logo from './logo.jpg';

function Navigation() {
  const location = useLocation();

  // Helper to set aria-current and active if the route matches
  const isActive = (path) => location.pathname === path;

  return (
    <Navbar expand="lg" className="sticky-bar" sticky="top" as="nav" aria-label="Main navigation">
      <Container className="nav-container d-flex justify-content-between">
        <Navbar.Brand as={Link} to="/" aria-label="Little Lemon Home">
          <img
            src={logo}
            width="150"
            className="d-inline-block align-top"
            alt="Little Lemon restaurant home"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" aria-label="Toggle navigation menu" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" as="ul">
            <Nav.Item as="li">
              <Nav.Link
                as={Link}
                to="/"
                className="nav-link text-dark"
                aria-current={isActive("/") ? "page" : undefined}
                active={isActive("/")}
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                as={Link}
                to="/About"
                className="nav-link text-dark"
                aria-current={isActive("/About") ? "page" : undefined}
                active={isActive("/About")}
              >
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                as={Link}
                to="/Menu"
                className="nav-link text-dark"
                aria-current={isActive("/Menu") ? "page" : undefined}
                active={isActive("/Menu")}
              >
                Menu
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                as={Link}
                to="/Reservation"
                className="nav-link text-dark"
                aria-current={isActive("/Reservation") ? "page" : undefined}
                active={isActive("/Reservation")}
              >
                Reservation
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                as={Link}
                to="/OrderOnline"
                className="nav-link text-dark button-online-menu"
                aria-current={isActive("/OrderOnline") ? "page" : undefined}
                active={isActive("/OrderOnline")}
              >
                Order Online
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                as={Link}
                to="/Login"
                className="nav-link text-dark"
                aria-current={isActive("/Login") ? "page" : undefined}
                active={isActive("/Login")}
              >
                Login
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;