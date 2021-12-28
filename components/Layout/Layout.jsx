import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

function Layout({ children }) {
  return (
    <div style={{ position: 'relative' }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
