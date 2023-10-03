import React from 'react';
import { Link } from 'react-router-dom'; 

const Brand = () => {
  return (
    <Link to="/" className="navbar-brand">
      <img src="https://i.postimg.cc/nc0HwSrn/logo.jpg" alt="Logo" width="100" />
    </Link>
  );
};

export default Brand;

