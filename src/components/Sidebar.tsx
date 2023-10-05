import React from 'react';
import SidebarArticles from './SidebarArticles';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <h3 className='sidebar-title'>New</h3>

            <SidebarArticles />
            <SidebarArticles />
            <SidebarArticles />
        </div>
    );
};

export default Sidebar;

{/* <h4 className='sidebar-article-title'>Hydrogen VS Electric Cars</h4>
            <p className='article-description'>Will hydrogen-fueled cars ever catch up to EVs?</p>
            <h4 className='sidebar-article-title'>The Downsides of AI Artistry</h4>
            <p className='article-description'>What are the possible adverse effects of on-demand AI image generation?</p>

            <h4 className='sidebar-article-title'>Is VC Funding Drying Up?</h4>
            <p className='article-description'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p> */}