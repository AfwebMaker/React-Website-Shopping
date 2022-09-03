import React from 'react';
//components 
import Navbar from './header/Navbar';
import Routers from '../routes/Routes';
import Footer from './footer/Footer';
//react router dom
import { useLocation } from 'react-router-dom';

const Layout = () => {

    const location = useLocation().pathname
    return (
        <div className="max-w-[1536px] m-auto">
            {location === "/signin" || location === "/signup" ? "" : <Navbar />}
                <Routers />
            {location === "/signin" || location === "/signup" ? "" : <Footer />}
        </div>
    );
};

export default Layout;