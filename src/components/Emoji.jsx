import React from 'react';

const Emoji = props => (
    <span
        className="emoji"
        role="img"
        // aria-label is a neccessary props read by a user’s screen reader
        // if not present the arial-hidden prop will take over and be set to true
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </span>);
export default Emoji;