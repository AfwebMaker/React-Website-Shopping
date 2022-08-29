import React from 'react';
//react router dom
import { Route, Routes, useLocation } from 'react-router-dom';
//components
import Home from '../pages/Home';
import SignIn from '../pages/authentication/SignIn';
import SignUp from '../pages/authentication/SignUp';

const Routers = () => {
    const location = useLocation().pathname
    return (
        <div className={location === "/signIn" || location === "/signUp" ? "" : "pt-20"}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<h1>چیزی اینجا نیست!</h1>} />
                <Route path='/signIn' element={<SignIn />} />
                <Route path='/signUp' element={<SignUp />} />
            </Routes>
        </div>
    );
};

export default Routers;