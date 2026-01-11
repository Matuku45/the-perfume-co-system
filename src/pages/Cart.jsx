import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Cart = () => {
  return (
    <>
      <Header />
      <main>
        <h2>Your Cart</h2>
        <p>Items you have added to your cart.</p>
      </main>
      <Footer />
    </>
  );
};

export default Cart;
