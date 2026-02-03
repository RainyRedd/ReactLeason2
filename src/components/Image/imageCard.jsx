import React from "react";
import './ImageCard.css';

const ImageCard = ({ title, description, children }) => {
    return (
        <div className="test">
            <div className="image-card">
                <h2>{title}</h2>
                <p>{description}</p>
                {children}
            </div>
        </div>
    );
};

export default ImageCard;
