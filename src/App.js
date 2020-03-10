import React, { Component } from 'react';

import './App.css';
import Layout from './hoc/Layout/Layout';
import DistanceConverter from './Containers/DistanceConverter';

class App extends Component {
  render() {
    return (
      <div className="App">    
        <Layout/>
        <DistanceConverter/>
      </div>
    );
  }
}

export default App;
