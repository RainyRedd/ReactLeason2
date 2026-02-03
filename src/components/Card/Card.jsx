import React from 'react';
import './Card.css'

const Card = ({title, image, pris, description, knap}) => {
    return (
        <>
            <div className="card-grid">
                <h1>{title}</h1>
                <div className="image-container">
                    <img src={image}/>
                </div>

                <h2>{pris}</h2>
                <p>{description}</p>
                <button>{knap}</button>
            </div>

        </>
    );
};

export default Card;