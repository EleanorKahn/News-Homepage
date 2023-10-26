import React from 'react';

const MainArticle = () => {
    return (
        <div>
            <img className='main-article-image' src='./assets/images/image-web-3-desktop.jpg' alt='a colorful block puzzle'/>
        <div className='main-article'>
            
            <h2 className='article-title'>The Bright Future of Web 3.0?</h2>
            <div>
                <p className='article-description'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
                </p>
                <button className='read-more'>READ MORE</button>
            </div>

            
        </div>
        </div>
    );
};

export default MainArticle;