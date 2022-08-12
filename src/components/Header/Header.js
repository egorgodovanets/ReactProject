import React from 'react';
import heart from './heart.png';
import backet from './backet.png';

const Header = ({like, inBacket}) => {
    return (
        <div className='header'>
            <div className='home'>HOME</div>
            <div className='product'>PRODUCT</div>
            <div className='heart-count'>
                <img className='heart-icon' src={heart} alt='...'/>
                <p className='like-count'>{like}</p>
            </div>
            <div className='backet-inBacket'>
                <img className='backet-icon' src={backet} alt='...'/>
                <p className='backet-count'>{inBacket}</p>
            </div>
        </div>
    );
};

export default Header;