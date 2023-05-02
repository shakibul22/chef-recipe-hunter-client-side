import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

const LoginLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;