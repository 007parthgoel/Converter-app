import React from 'react';

import classes from './Button.css';

const button = (props) => (
    <div
        disabled={props.disabled}
        className={[classes.Button, classes.btnType].join(' ')}
        onClick={props.clicked}>
        {props.children}
    </div >
);

export default button;
