import React, { Component } from 'react';

import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';
import Nav from './components/nav/Nav';

class App extends Component {
  render() {
    return (
     <Router>
       <div>
       <Nav/>
       {Routes}
       </div>
     </Router>
    );
  }
}

export default App;
