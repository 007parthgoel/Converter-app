import React from 'react';
// import {Link} from 'react-router-dom';

import Logo from '../../Logo/Logo';
import classes from './Toolbar.css';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
// import NavigationItem from '../../Navigation/NavigationItems/NavigationItem/NavigationItem';

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.DrawerToggleClicked}/>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <a 
            href="/"
            activeClassName={classes.active}>MainMenu</a>
        </nav>
        {/* <NavigationItem link={"/"} exact>MainMenu</NavigationItem>         */}
    </header>
);

export default Toolbar;

