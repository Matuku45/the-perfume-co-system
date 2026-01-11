import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ marginTop: '0.5rem' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link to="/products" style={{ marginRight: '1rem' }}>Products</Link>
      <Link to="/cart" style={{ marginRight: '1rem' }}>Cart</Link>
      <Link to="/dashboard" style={{ marginRight: '1rem' }}>Dashboard</Link>
      <Link to="/login" style={{ marginRight: '1rem' }}>Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
};

export default Navbar;
