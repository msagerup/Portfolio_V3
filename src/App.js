import React, { Component } from 'react';
import { Row, Col, CardPanel, Card, Button } from 'react-materialize';
import NavBar from './Components/Layout/Header/NavBar';
import PortfolioLoader from './Components/Layout/Portfolio/PortfolioLoader';
import Info from './Components/Layout/Info/Info';
import EndFooter from './Components/Layout/Footer/EndFooter';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Info />
        <PortfolioLoader />
        <EndFooter />
      </div>
    );
  }
}

export default App;
