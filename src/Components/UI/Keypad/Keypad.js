import React from 'react';

// import Button from '../Button/Button';
import ReactAux from '../../../hoc/ReactAux';
import classes from './Keypad.css';

// class Keypad extends Component {
//     render() {
//         return (
//             <ReactAux>
//                 <div className={classes.Keypad}>
//                     {/* <Button id="8" clicked={(e)=>this.KeySelectHandler(e.target.id)}>8</Button> */}
//                     <button id="7" onClick={(e) => this.props.keySelected(e.target.id)}>7</button>
//                     <button id="8" onClick={(e) => this.props.keySelected(e.target.id)}>8</button>
//                     <button id="9" onClick={(e) => this.props.keySelected(e.target.id)}>9</button>
//                 </div>
//                 <div className={classes.Keypad}>
//                     <button id="4" onClick={(e) => this.props.keySelected(e.target.id)}>4</button>
//                     <button id="5" onClick={(e) => this.props.keySelected(e.target.id)}>5</button>
//                     <button id="6" onClick={(e) => this.props.keySelected(e.target.id)}>6</button>
//                 </div>
//                 <div className={classes.Keypad}>
//                     <button id="1" onClick={(e) => this.props.keySelected(e.target.id)}>1</button>
//                     <button id="2" onClick={(e) => this.props.keySelected(e.target.id)}>2</button>
//                     <button id="3" onClick={(e) => this.props.keySelected(e.target.id)}>3</button>
//                 </div>
//                 <div className={classes.Keypad}>
//                     <button id="." onClick={(e) => this.props.keySelected(e.target.id)}>.</button>
//                     <button id="0" onClick={(e) => this.props.keySelected(e.target.id)}>0</button>
//                     <button id="C" onClick={(e) => this.props.keySelected(e.target.id)}>C</button>
//                 </div>               
//             </ReactAux>
//         );
//     }
// }

const Keypad = (props) => (
    <ReactAux className={classes.Keyset}>
        <div className={classes.Keypad}>
            <button id="7" onClick={(e) => props.keySelected(e.target.id)}>7</button>
            <button id="8" onClick={(e) => props.keySelected(e.target.id)}>8</button>
            <button id="9" onClick={(e) => props.keySelected(e.target.id)}>9</button>
        </div>
        <div className={classes.Keypad}>
            <button id="4" onClick={(e) => props.keySelected(e.target.id)}>4</button>
            <button id="5" onClick={(e) => props.keySelected(e.target.id)}>5</button>
            <button id="6" onClick={(e) => props.keySelected(e.target.id)}>6</button>
        </div>
        <div className={classes.Keypad}>
            <button id="1" onClick={(e) => props.keySelected(e.target.id)}>1</button>
            <button id="2" onClick={(e) => props.keySelected(e.target.id)}>2</button>
            <button id="3" onClick={(e) => props.keySelected(e.target.id)}>3</button>
        </div>
        <div className={classes.Keypad}>
            <button id="." onClick={(e) => props.keySelected(e.target.id)}>.</button>
            <button id="0" onClick={(e) => props.keySelected(e.target.id)}>0</button>
            <button id="C" onClick={(e) => props.keySelected(e.target.id)}>C</button>
        </div>
    </ReactAux>
)

export default Keypad;