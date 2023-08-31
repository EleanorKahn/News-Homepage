import React from 'react';

const Header = () => {
    return (
        <div className='header'>
            <h1 className='nav-title'>W.</h1>
            <ul className='nav-list'>
                <li className='nav-item'>Home</li>
                <li className='nav-item'>New</li>
                <li className='nav-item'>Popular</li>
                <li className='nav-item'>Trending</li>
                <li className='nav-item'>Categories</li>
            </ul>
        </div>
    );
};

export default Header;