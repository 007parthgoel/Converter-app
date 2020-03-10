import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css'

const NavigationItems=(props)=>(
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/Dist">Distance Converter</NavigationItem>
        <NavigationItem link="#">Time Converter</NavigationItem>
        <NavigationItem link="#">Weight Converter</NavigationItem>        
    </ul>
);

export default NavigationItems;