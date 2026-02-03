import React from "react";
import './Image.css';

const Image = ({ src, alt }) => {
    return (
        <>
        <img
            src={src}
            alt={alt}
            style={{ width: "200px", borderRadius: "10px" }}
        />
        </>
    );
};

export default Image;
