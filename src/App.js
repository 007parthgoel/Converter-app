import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Layout from './hoc/Layout/Layout';
import DistanceConverter from './Containers/DistanceConverter/DistanceConverter';
import MainMenuScreen from './Containers/MainMenuScreen/MainMenuScreen';

class App extends Component {
  render() {

    let routes = (
      <Switch>
        <Route path="/Dist" component={DistanceConverter} />
        <Route path="/" exact component={MainMenuScreen} />
        <Redirect to="/"/>
      </Switch>

    );

    return (
      <div className="App">
        <Layout />
        {/* <DistanceConverter/>  */}
        {routes}
      </div>
    );
  }
}

export default App;
