import React from 'react';

import classes from './TextScreen.css';

const textScreen=(props)=>(
    <div className={classes.textScreen}>
        <input type='number' value={props.value} onChange={(e)=>props.changed(e)} placeholder="0"/>
    </div>
);

export default textScreen;