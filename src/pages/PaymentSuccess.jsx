import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PaymentSuccess = () => {
  return (
    <>
      <Header />
      <main>
        <h2>Payment Successful</h2>
        <p>Thank you! Your order has been placed successfully.</p>
      </main>
      <Footer />
    </>
  );
};

export default PaymentSuccess;
