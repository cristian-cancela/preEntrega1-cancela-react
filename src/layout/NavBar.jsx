import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartWidget from '../components/cartComponent/CartWidget';
import Brand from '../components/Brand';
import Menubutton from '../components/MenuButton';

const NavBar = () => {
  return (
    <Navbar bg="body-secondary" expand="lg">
      <div className="container">
        <Brand />
        <Menubutton />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mx-auto">
            <Nav.Item>
              <Link to="/" className="nav-link">INICIO</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/productos" className="nav-link">PRODUCTOS</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/productos/hombres" className="nav-link">HOMBRES</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/productos/mujeres" className="nav-link">MUJERES</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/productos/sale" className="nav-link">SALE!</Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        <CartWidget /> 
      </div>
    </Navbar>
  );
}

export default NavBar;
