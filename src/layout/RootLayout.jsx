import React from 'react';
import Navbar from '../component/navbar/Navbar';
import Footer from '../component/footer/Footer';
import { Outlet } from 'react-router';
import Header from '../component/header/Header';

const RootLayout = () => {
    return (
        <div className='max-w-11/12 mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;