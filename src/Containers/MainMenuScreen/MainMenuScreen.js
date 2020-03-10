import React from 'react';
import { Link } from 'react-router-dom';

// import classes from './MainMenuScreen.css';
import NavigationItems from '../../Components/Navigation/NavigationItems/NavigationItems';


const MainMenuScreen = () => {
    return (
        <div>
            <Link to="/Dist">Distance Converter</Link>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
};

export default MainMenuScreen;