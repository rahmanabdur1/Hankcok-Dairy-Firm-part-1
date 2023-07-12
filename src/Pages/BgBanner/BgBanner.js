import React from 'react';
import './BgBanner.css';
import logo from '../../image/banner.png'
const BgBanner = () => {
    return (
        <div className="container" style={{ backgroundImage: `url(${logo})` }} >
            <div className='banner-text'>
                <h1>Milk And Fresh Products</h1>
                <p>For 40% of consumers, health is a key motivation for turning to dairy products, in which they associate dairy with ingredients that are rich in nutrition. T</p>
                <button className='btn'>View All Products</button>
            </div>
        </div>
    );
};

export default BgBanner;