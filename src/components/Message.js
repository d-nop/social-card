import React from 'react';

const Message = (props) => {
    return(
    <section className="message">
        <h4 className="messageHeadline">
            {props.title}
        </h4>
        <p className="messageBody"> 
            {props.message}
        </p>
        <a href={props.url} className="messageUrl">
            {props.urlDisplayName}
        </a>
    </section>
    )
};

export default Message;