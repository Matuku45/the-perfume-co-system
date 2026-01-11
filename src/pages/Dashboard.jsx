import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <>
      <Header />
      <main>
        <h2>User Dashboard</h2>
        <p>Welcome back! Manage your account here.</p>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
