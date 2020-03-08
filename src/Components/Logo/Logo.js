import React from 'react';

import convertLogo from '../../Assets/Images/convertimage.png';
import classes from './Logo.css';

const Logo=(props)=>(
    <div className={classes.Logo} style={{height:props.height}}>
        <img src={convertLogo} alt="My Converter"/>
    </div>
);

export default Logo;