import React from 'react';
import StarArrayItem from '../StarArrayItem/StarArrayItem';
 
const StarArray = ({array}) => {
 
    return (
        <div className='Star-Array'>
            {array.map(product => <StarArrayItem id={product.id} name={product.name} isFilled={product.isFilled}/>)}
        </div>
    );
};
 
export default StarArray;
