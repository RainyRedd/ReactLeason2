import React from 'react';
import './Footer.css';

const Footer = ({mail,phoneNumber,address}) => {
    return (
        <>
            <ul>
                <li>{mail}</li>
                <li>{phoneNumber}</li>
                <li>{address}</li>
            </ul>
        </>
    );
};

export default Footer;