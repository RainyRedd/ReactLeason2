import React from 'react';
import './GridContainer.css';

const GridContainer = ({children}) => {
    return (
        <>
            <div className="CardGrid">{children}</div>
        </>
    );
};

export default GridContainer;