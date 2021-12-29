import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { PAGEHEADING } from '../utils/Constants/Constants';

function Layout({ children, router: { route }, ...props }) {
  return (
    <div style={{ position: 'relative' }}>
      <Header pageHeading={PAGEHEADING[route]} {...props} />
      {children}
      {/* <Footer /> */}
    </div>
  );
}

export default Layout;
