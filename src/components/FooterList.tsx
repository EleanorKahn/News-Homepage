import React from 'react';

const FooterList = () => {
    return (
        <div className='footer-articles-container'>
            <ol className='footer-article-list'>
                {/* render dynamically so that you can add new data */}
                <li>
                    <h4 className='footer-article-title'>Reviving Retro PCs</h4>
                    <p className='footer-article-description'>What happens when old PCs are given modern upgrades?</p>
                </li>
                <li>
                    <h4 className='footer-article-title'>Top 10 Laptops of 2022</h4>
                    <p className='footer-article-description'>Our best picks for various needs and budgets.</p>

                </li>
                <li>
                    <h4 className='footer-article-title'>The Growth of Gaming</h4>
                    <p className='footer-article-description'>How the pandemic has sparked fresh opportunities.
                    </p>
                </li>
            </ol>
        </div>
    );
};

export default FooterList;