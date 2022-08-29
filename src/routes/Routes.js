import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

const Routers = () => {
    return (
        <div className='pt-20'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<h1>چیزی اینجا نیست!</h1>} />
            </Routes>
        </div>
    );
};

export default Routers;