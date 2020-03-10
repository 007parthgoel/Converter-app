import React, { Component } from 'react';

import classes from './DistanceConverter.css';
import ReactAux from '../../hoc/ReactAux';
import Keypad from '../../Components/UI/Keypad/Keypad';
import TextScreen from '../../Components/UI/TextScreen/TextScreen';
import DropDown from '../../Components/UI/DropDown/DropDown';

const menu = ['km', 'm', 'dm', 'cm'];

class DistanceConverter extends Component {

    state = {
        Displaynumber: '',
        distFrom: 'km',
        distTo: 'km',
        km: 1000,
        m: 1,
        dm: 0.1,
        cm: 0.01
    }

    keyPadClick = (num) => {
        if (num === "C") {
            // console.log(this.state.Displaynumber.slice(0, -1));
            this.setState({
                Displaynumber: this.state.Displaynumber.slice(0, -1),                
            });
        }
        else {
            this.setState({
                Displaynumber: this.state.Displaynumber + num,                
            });
        }

    };

    inputChangeHandler = (event) => {
        this.setState({
            Displaynumber: event.target.value,
        });
    }

    // dropDownChangeHandler = (value, num) => {
    //     num === '1' ? this.setState({
    //         distFrom: value,
    //         Displaynumber: 0
    //     }) : this.setState({ distTo: value });       
    // };

    render() {
        const result = (this.state[this.state.distFrom] === this.state[this.state.distTo]) ?
            this.state.Displaynumber : (parseInt(this.state.Displaynumber, 10) * (this.state[this.state.distFrom]) / (this.state[this.state.distTo])).toFixed(3);

        return (
            <ReactAux >
                <div className={classes.DistanceConverter}>
                    <DropDown
                        menu={menu}
                        // handleChange={(val) => this.dropDownChangeHandler(val, '1')} />
                        handleChange={(val => this.setState({ distFrom: val }))} />
                    <TextScreen
                        value={this.state.Displaynumber}
                        changed={(e) => this.inputChangeHandler(e)} />
                </div>

                <div className={classes.DistanceConverter}>
                    <DropDown
                        menu={menu}
                        // handleChange={(val) => this.dropDownChangeHandler(val, '2')} />
                        handleChange={(val => this.setState({ distTo: val }))} />
                    <TextScreen value={result} />
                </div>

                <Keypad keySelected={(num) => this.keyPadClick(num)} />
            </ReactAux>
        );
    }
}

export default DistanceConverter;