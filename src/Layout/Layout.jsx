import React from 'react';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
    const location = useLocation();
    const noNavbar = location.pathname.includes('login') || location.pathname.includes('registration')
    return (
        <div>
            {noNavbar || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noNavbar || <Footer></Footer>}
        </div>
    );
};

export default Layout;