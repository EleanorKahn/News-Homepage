import React from 'react';

const Header = () => {
    return (
        <div className='header'>
            <h1 className='nav-header'>W.</h1>
            <ul className='nav-list'>
                <li className='nav-itm'>Home</li>
                <li className='nav-itm'>New</li>
                <li className='nav-itm'>Popular</li>
                <li className='nav-itm'>Trending</li>
                <li className='nav-itm'>Categories</li>
            </ul>
        </div>
    );
};

export default Header;