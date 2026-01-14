import React from 'react';
import Navbar from '../navbar/Navbar';
import SubNavbar from '../SubNavbar/SubNavbar';

const Header = () => {
    return (
        <div className=" bg-white">
            <Navbar></Navbar>
            <SubNavbar></SubNavbar>
        </div>
    );
};

export default Header;