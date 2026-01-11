import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#f5f5f5' }}>
      <h1>The Perfume Co</h1>
      <Navbar />
    </header>
  );
};

export default Header;
