import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PaymentFailed = () => {
  return (
    <>
      <Header />
      <main>
        <h2>Payment Failed</h2>
        <p>Oops! Something went wrong. Please try again.</p>
      </main>
      <Footer />
    </>
  );
};

export default PaymentFailed;
