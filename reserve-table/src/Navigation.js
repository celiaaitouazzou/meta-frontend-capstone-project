import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
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
                    <Link to={"/"}  className="text-dark">HOME</Link>
                    <Link to={"/About"} className="text-dark">ABOUT</Link>
                    <Link to={"/Menu"}  className="text-dark">MENU</Link>
                    <Link to={"/Reservation"} className="text-dark">RESERVATION</Link>
                    <Link to={"/OrderOnline"} className="text-dark">ORDER ONLINE</Link>
                    <Link to={"/Login"} className="text-dark">LOGIN</Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Navigation