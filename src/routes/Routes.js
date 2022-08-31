import React from 'react';
//react router dom
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
//components
import Home from '../pages/Home';
import SignIn from '../pages/authentication/SignIn';
import SignUp from '../pages/authentication/SignUp';
import Profile from '../pages/profile/Profile';

const Routers = () => {
    const location = useLocation().pathname
    return (
        <div className={location === "/signIn" || location === "/signUp" ? "" : "pt-20"}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/profile' element={<Profile />}>
                    <Route path='/profile' element={<Navigate to='/profile/shots' />} />
                    <Route path='/profile/shots' element={<h1>shot</h1>}></Route>
                    <Route path='/profile/likes' element={<h1>likes</h1>}></Route>
                    <Route path='/profile/collections' element={<h1>collections</h1>}></Route>
                    <Route path='/profile/about' element={<h1>about</h1>}></Route>
                </Route>
                <Route path='/signIn' element={<SignIn />} />
                <Route path='/signUp' element={<SignUp />} />
                <Route path='*' element={<h1>چیزی اینجا نیست!</h1>} />
            </Routes>
        </div>
    );
};

export default Routers;