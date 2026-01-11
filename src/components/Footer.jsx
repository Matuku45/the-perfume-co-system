import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '1rem', marginTop: '2rem', backgroundColor: '#f5f5f5', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} The Perfume Co. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
