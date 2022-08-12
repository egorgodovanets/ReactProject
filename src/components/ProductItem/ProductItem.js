import React from 'react';
import heart from '../Header/heart.png';
import backet from '../Header/backet.png';

const ProductItem = ({product, addLike, like, addInBacket, inBacket}) => {
    const idElem = product.id;
    return (
        <div className='product-item'>
            <strong>{product.id}. {product.name.toUpperCase()}</strong>
            <p className='description'>
                {product.description}
            </p>
            <div>
                <img className='likes' src={heart} alt='...' onClick={() => addLike(like, idElem)}/>
                <img className='in-backet' src={backet} alt='...' onClick={() => addInBacket(inBacket, idElem)}/>
            </div>
        </div>
    );
};

export default ProductItem;