import React, { Component } from 'react';

import ReactAux from '../ReactAux';
import classes from './Layout.css';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    drawerToggleHandler = () => {
        this.setState((prevState) => {
            return ({ showSideDrawer: !prevState.showSideDrawer });
        });
    }

    drawerCloseHandler=()=>{
        this.setState({showSideDrawer:false})
    }

    render() {
        return (
            <ReactAux>
                <Toolbar
                    DrawerToggleClicked={this.drawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.drawerCloseHandler} />                
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </ReactAux>
        );
    }
}

export default Layout;

