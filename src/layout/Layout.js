import React from 'react';
//components 
import Navbar from './header/Navbar';
import Routers from '../routes/Routes';
import Footer from './footer/Footer';
//react router dom
import { useLocation } from 'react-router-dom';

const Layout = () => {

    const location = useLocation().pathname
    console.log(location)
    return (
        <div className="max-w-[1536px] m-auto">
            {location === "/signIn" || location === "/signUp" ? "" : <Navbar />}
                <Routers />
            {location === "/signIn" || location === "/signUp" ? "" : <Footer />}
        </div>
    );
};

export default Layout;