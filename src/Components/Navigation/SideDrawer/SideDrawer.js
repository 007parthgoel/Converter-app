import React from 'react';

import classes from './SideDrawer.css';
import BackDrop from '../../UI/Backdrop/Backdrop';
import ReactAux from '../../../hoc/ReactAux';
import Logo from '../../Logo/Logo';

const SideDrawer = (props) => {

    let attachClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <ReactAux>
            <BackDrop show={props.open} clicked={props.closed} />
            <div className={attachClasses.join(' ')} onClick={props.closed}>
                <div className={classes.Logo}>
                    <Logo />
                    <h1>vsdvsdvbfsb</h1>
                </div>
            </div>
        </ReactAux>
    );
};

export default SideDrawer;