import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Link from './Components/Links';

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isRegisterPage = location.pathname === '/register';
  const isLoginPage = location.pathname === '/login';

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const shouldHideFooter = windowWidth <= 768 && (isRegisterPage || isLoginPage);

  return (
    <div className="layout">
      <Nav />
      {!isHomePage && <Link />}
      <main className="main-content">
        <Outlet />
      </main>
      {!shouldHideFooter && <Footer />}
    </div>
  );
};

export default Layout;