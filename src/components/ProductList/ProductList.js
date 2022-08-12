import React from 'react';
import ProductItem from '../ProductItem/ProductItem';

const ProductList = ({products, addLike, like, addInBacket, inBacket}) => {

    return (
        <div>
            <h2 style={{textAlign: 'center', margin: '20px'}}>Product list</h2>
            <div className='product-list'>
                {products.map(product => <ProductItem like={like} addLike={addLike} inBacket={inBacket} addInBacket={addInBacket} product={product} key={product.id}/>)}
            </div>
        </div>
    );
};

export default ProductList;