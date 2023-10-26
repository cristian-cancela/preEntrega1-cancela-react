import React from 'react';
import { Link } from 'react-router-dom'; 
import CartWidget from './CartWidget';
import Brand from './brand';
import Menubutton from './menuButton';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary">
      <div className="container-fluid">
        <Brand />
        <Menubutton />
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">INICIO</Link>
            </li>
            <li className="nav-item">
              <Link to="/productos" className="nav-link">PRODUCTOS</Link>
            </li>
            <li className="nav-item">
              <Link to="/productos/hombres" className="nav-link">HOMBRES</Link>
            </li>
            <li className="nav-item">
              <Link to="/productos/mujeres" className="nav-link">MUJERES</Link>
            </li>
            <li className="nav-item">
              <Link to="/productos/sale" className="nav-link">SALE!</Link>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
