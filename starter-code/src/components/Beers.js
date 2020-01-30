import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

import Beer from './Beer.js';

export default class Beers extends Component {
    constructor(){
        super();
        this.state = {
            beers: []
        }
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(responseBeers => {
                console.log( "BEERS", responseBeers )
                this.setState({ beers: responseBeers.data });
            })
    }

    render() {
        return (
            <div className="obj_list">
                { this.state.beers.map( (beer) => {
                        return(
                            <Link key={beer._id} to={`/beerdetail/${beer._id}`}>
                              <Beer beer={beer} />
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}
