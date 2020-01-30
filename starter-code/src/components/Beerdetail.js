import React, { Component } from 'react'
import axios from 'axios';

import Beer from './Beer.js';

export default class Beerdetail extends Component {
    constructor(){
        super();
        this.state = {
            beer: []
        }
    }

    componentDidMount() {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${this.props.match.params.id}`)
            .then(responseBeer => {
                console.log( "BEER", responseBeer )
                this.setState({ beer: responseBeer.data });
            })
    }

    render() {
        return (
            <div>
                <Beer beer={this.state.beer} />
                <div className="card" style={{backgroundColor: "lightgray", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 10px"}}>
                    <p style={{fontSize: "small", letterSpacing: "1px"}}>{this.state.beer.first_brewed}</p>
                    <p style={{fontSize: "large"}}>{this.state.beer.attenuation_level}</p>
                </div>
                <div className="card" style={{padding: "10px 10px 30px 10px"}}>
                    <h2>Description</h2>
                    <p>{this.state.beer.description}</p>
                </div>
            </div>
        )
    }
}
