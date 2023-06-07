import React from 'react';
import styles from '@/components/Header/Header.module.scss'
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => (
  <header className={styles.header}>
    <Navbar bg="dark" expand="lg" navbar="dark" >
      <Container>
        <Navbar.Brand  href="/"><Image className='img-fluid' src="/home/vairal-logo.png" width={142} height={26}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white text-white" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto mx-auto mb-2 mb-lg-0">
            <Nav.Link href="#" className="active text-uppercase text-white mt-3 mt-md-3 mt-lg-0">SERVICES</Nav.Link>
            <Nav.Link href="#" className="active text-uppercase text-white">SUBSCRIPTIONS</Nav.Link>
            <Nav.Link href="#" className="active text-uppercase text-white">ABOUT US</Nav.Link>
            <Nav.Link href="#" className="active text-uppercase text-white">CONTACT US</Nav.Link>
            <Nav.Link href="#" className="active text-uppercase text-white">BLOGS</Nav.Link>          
          </Nav>
          <div className="d-flex">
            <button className="btn btn-outline-primary me-2 fw-bold fs-6" type="button">
              SIGIN IN
            </button>
            <button className="btn btn-primary fw-bold fs-6" type="button">
              JOIN
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
);

export default Header;
