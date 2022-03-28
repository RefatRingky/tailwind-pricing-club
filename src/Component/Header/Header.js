import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 className='text-4xl'>Save Your Money</h1>
            <p>By giving  your money to me</p>
        </div>
    );
};

export default Header;