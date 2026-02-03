import React from 'react';

const Content = ({paragraphTitleOne,paragraphTitleTwo,paragraphTitleThree,paragraphOne,paragraphTwo,paragraphThree,img}) => {
    return (
        <>
            <h1>{paragraphTitleOne}</h1>
            <p>{paragraphOne}</p>
            <h1>{paragraphTitleTwo}</h1>
            <p>{paragraphTwo}</p>
            <h1>{paragraphTitleThree}</h1>
            <p>{paragraphThree}</p>
            <img 
            src={img} 
            alt="Racoon Thumbs" 
            style={{ width: '250px', height: 'auto' }}
            />
        </>
    );
};

export default Content;