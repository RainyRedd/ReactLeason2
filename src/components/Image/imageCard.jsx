import React from "react";

const ImageCard = ({ title, description, children }) => {
    return (
        <div
            style={{
                border: "2px solid white",
                padding: "20px",
                width: "300px",
                textAlign: "center",
                borderRadius: "10px"
            }}
        >
            <h2>{title}</h2>
            <p>{description}</p>

            {children}
        </div>
    );
};

export default ImageCard;
