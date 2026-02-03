import React from 'react';
import './Content.css';

const Content = ({paragraphTitleOne,paragraphTitleTwo,paragraphTitleThree,paragraphOne,paragraphTwo,paragraphThree,img}) => {
    return (
        <>
            <div className="paragraph"> 
                <h1>{paragraphTitleOne}</h1>
                <p>{paragraphOne}</p>
                <h1>{paragraphTitleTwo}</h1>
                <p>{paragraphTwo}</p>
                <h1>{paragraphTitleThree}</h1>
                <p>{paragraphThree}</p>
            </div>
        </>
    );
};

export default Content;