import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Link from './Components/Links';

const Layout = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <div className="layout">
            <Nav />
            {!isHomePage && <Link />}
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;