import React from 'react';
//components 
import Navbar from './header/Navbar';
import Routers from '../routes/Routes';
import Footer from './footer/Footer';

const Layout = () => {
    return (
        <div className="max-w-[1536px] m-auto">
            <Navbar />
            <Routers />
            <Footer />
        </div>
    );
};

export default Layout;