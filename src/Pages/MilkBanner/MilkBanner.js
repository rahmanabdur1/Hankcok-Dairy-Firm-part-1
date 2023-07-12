import React from 'react';
import './MilkBanner.css'
import  banner from '../../image/image-1-1.jpg'
const MilkBanner = () => {
    return (
        <div className='MHBanner-container' style={{ backgroundImage: `url(${banner})` }} >
            <div className='MHBanner-section'>
                 <h1>Milking Land of Milk & Honey</h1>
                 <p>Dairy producers worldwide face similar challenges around animal welfare, farm profitability, food safety and work efficiency. Discover how our customers are solving these challenges. Also known as the land of milk and honey for its rich and vibrant farming tradition.</p>
            </div>
        </div>
    );
};

export default MilkBanner;