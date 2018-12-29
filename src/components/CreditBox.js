import React from 'react';

const CreditBox = (props) => { 
    return (
        <div className="creditBox">
            <p className="creditBoxName">{props.name}</p>
            <img src={props.creditImageURL} alt="person" className="creditBoxHeadshot" />
        </div>
    );
}

export default CreditBox;