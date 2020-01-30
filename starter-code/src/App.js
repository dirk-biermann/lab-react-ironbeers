import React, { Component } from 'react';
import './App.css';

import Home from './components/Home';
import Beers from './components/Beers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {
      showNavbar: false
    }
  }

  setNavbarState = (showNavbarState) => {
    this.setState( { showNavbar: showNavbarState } );
  }

  render() {
    return (
      <div>
        { this.state.showNavbar ? <Navbar />:null }
        <Switch>
          <Route exact path='/' render = { (props) => <Home {...props} showNavbar={this.setNavbarState}/> }/>
          <Route exact path='/beers' render = { (props) => <Beers {...props} showNavbar={this.setNavbarState}/> }/>
          <Route exact path='/randombeer' render = { (props) => <RandomBeer {...props} showNavbar={this.setNavbarState}/> }/>
          <Route exact path='/newbeer' render = { (props) => <NewBeer {...props} showNavbar={this.setNavbarState}/> }/>
        </Switch>
      </div>
    );
  }
}

export default App;
