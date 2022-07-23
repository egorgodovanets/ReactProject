import React from "react";

export const Header = ({length}) => {
    return (
        <div className="header">
            <p>Products: {length}</p>
            <label>Enter numbers of product you want to starred:</label>
            <input type='text' placeholder="Input number of product"/>
        </div>
    )
}