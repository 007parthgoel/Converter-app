import React from 'react';

import classes from './DropDown.css';
// const menu=[
// {type:'km'},
// {type:'m'},
// {type:'cm'}
// ]
const DropDown = (props) => (
    <div className={classes.DropDown}>
        <select 
            defaultValue={props.menu[0]}
            onChange={(e)=>props.handleChange(e.target.value)}>
            {props.menu.map(val => (
                <option
                    key={val}
                    value={val}>{val}</option>
            ))}            
            {/* <option value="0">0</option>
            <option value="1">1</option> */}
        </select>
    </div>
);

export default DropDown;