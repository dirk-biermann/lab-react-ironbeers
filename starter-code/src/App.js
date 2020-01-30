import React, { Component } from 'react';
import './App.css';

import Home from './components/Home';
import Beers from './components/Beers';
import BeerDetail from './components/Beerdetail';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import Navbar from './components/Navbar';

import '@fortawesome/fontawesome-free/css/all.css';

import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(){
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Route path={["/beers", "/randombeer", "/newbeer", "/beerdetail"]} component={Navbar}/>  
        <Switch>
          <Route exact path='/' render = { (props) => <Home {...props}/> }/>
          <Route exact path='/beers' render = { (props) => <Beers {...props}/> }/>
          <Route exact path='/randombeer' render = { (props) => <RandomBeer {...props}/> }/>
          <Route exact path='/newbeer' render = { (props) => <NewBeer {...props}/> }/>
          <Route exact path='/beerdetail/:id' render = { (props) => <BeerDetail {...props}/> }/>
        </Switch>
      </div>
    );
  }
}

export default App;
