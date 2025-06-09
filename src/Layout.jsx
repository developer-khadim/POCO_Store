import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Components/Nav';
import Footer from './Components/Footer'    ;

const Layout = () => {
    return (
        <div className="layout">
            <Nav />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;