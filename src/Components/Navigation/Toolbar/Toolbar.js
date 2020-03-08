import React from 'react';

import Logo from '../../Logo/Logo';
import classes from './Toolbar.css';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.DrawerToggleClicked}/>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <h1>MainMenu</h1>
    </header>
);

export default Toolbar;

