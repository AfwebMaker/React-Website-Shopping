import React from 'react';
//components
import Navbar from '../Navbar';
import Routers from '../../routers/Routers';
import Footer from '../Footer';

const Layout = () => {
    return (
        <div className="max-w-[1536px] m-auto">
            <Navbar/>
            <Routers/>
            <Footer/>
        </div>
    );
};

export default Layout;