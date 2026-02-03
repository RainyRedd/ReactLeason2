import React from 'react';
import './Header.css';

const Header = ({headerText}) => {
    return (
        <>
            <h1>{headerText}</h1>  
        </>
    );
};

export default Header;