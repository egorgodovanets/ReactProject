import React from "react";
import './star.css';

export const Star = ({id, name, isFilled}) => {
    return (
        <div className="star-head">
            <p>{id}</p>
            <p>{name}</p>
            <div className={isFilled ? 'starFill' : 'starUnfill'}></div>
        </div>
    )
}