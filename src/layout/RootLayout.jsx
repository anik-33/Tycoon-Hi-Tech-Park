import React from 'react';
import Navbar from '../component/navbar/Navbar';
import Footer from '../component/footer/Footer';
import { Outlet } from 'react-router';
import Header from '../component/header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RootLayout = () => {
    return (
        <div className='max-w-11/12 mx-auto'>
            <Header className="sticky top-0 z-50"></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer position="top-right" autoClose={3000} />
        </div>
    );
};

export default RootLayout;