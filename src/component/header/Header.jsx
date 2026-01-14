import React from 'react';
import Navbar from '../navbar/Navbar';
import SubNavbar from '../SubNavbar/SubNavbar';

const Header = () => {
    return (
        <div className="sticky top-0 z-50 bg-white">
            <Navbar></Navbar>
            <SubNavbar></SubNavbar>
        </div>
    );
};

export default Header;