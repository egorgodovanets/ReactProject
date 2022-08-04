import React from 'react';
 
const StarArrayItem = ({id, name, isFilled}) => {
    return (
        <div className='Star-Array-Item'>
            <p>{id}</p>
            <p>{name}</p>
            <div className={isFilled ? 'marker-fill' : 'marker-unfill'}></div>
        </div>
    );
};
 
export default StarArrayItem;
