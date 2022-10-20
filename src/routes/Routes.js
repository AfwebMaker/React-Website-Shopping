import React from 'react';
//react router dom
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
//components
import Home from '../pages/Home';
import SignIn from '../pages/authentication/SignIn';
import SignUp from '../pages/authentication/SignUp';
//components --> Profile
import Profile from '../pages/profile/Profile';
import WorkSubMenue from '../pages/profile/WorkSubMenue';
import LikeSubMenu from '../pages/profile/LikeSubMenu';
import CollectionSubMenu from '../pages/profile/CollectionSubMenu';
import AboutSubMenu from '../pages/profile/AboutSubMenu';
//components --> Account
import Account from '../pages/Account/Account'
import Applications from '../pages/Account/Applications'
import DestroyConfirm from '../pages/Account/DestroyConfirm'
import Export from '../pages/Account/Export'
import General from '../pages/Account/General'
import Notifications from '../pages/Account/Notifications'
import Password from '../pages/Account/Password'
import AccountProfile from '../pages/Account/AccountProfile'
import Sessions from '../pages/Account/Sessions'
import SocialProfiles from '../pages/Account/SocialProfiles'

const Routers = () => {
    const location = useLocation().pathname
    return (
        <div className={location === "/signin" || location === "/signup" ? "" : "pt-20"}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/profile' element={<Profile />}>
                    <Route path='/profile' element={<Navigate to='/profile/shots' />} />
                    <Route path='/profile/shots' element={<WorkSubMenue />}></Route>
                    <Route path='/profile/likes' element={<LikeSubMenu />}></Route>
                    <Route path='/profile/collections' element={<CollectionSubMenu />}></Route>
                    <Route path='/profile/about' element={<AboutSubMenu />}></Route>
                </Route>
                <Route path='/account' element={<Account />}>
                    <Route path='/account' element={<Navigate to='/account/general' />} />
                    <Route path='/account/general' element={<General />}></Route>
                    <Route path='/account/profile' element={<AccountProfile />}></Route>
                    <Route path='/account/password' element={<Password />}></Route>
                    <Route path='/account/social_profiles' element={<SocialProfiles />}></Route>
                    <Route path='/account/notifications' element={<Notifications />}></Route>
                    <Route path='/account/sessions' element={<Sessions />}></Route>
                    <Route path='/account/applications' element={<Applications />}></Route>
                    <Route path='/account/export' element={<Export />}></Route>
                </Route>
                <Route path='/account/destroy_confirm' element={<DestroyConfirm />}></Route>
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='*' element={<h1>چیزی اینجا نیست!</h1>} />
            </Routes>
        </div>
    );
};

export default Routers;