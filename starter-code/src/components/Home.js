import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
    constructor(){
        super();
        this.state = {
        }
    }
    click = () => {
        this.props.showNavbar(true);
    }

    render() {
        return (
            <div className="card_list">
                <Link to='/beers' onClick={this.click}>
                <div className="card">
                    <img src="/images/beers.png" alt="" /> 
                    <div className="box">
                        <h1>All Beers</h1>
                        <p>Ipsum Lorem</p>
                    </div>  
                </div>
                </Link>
                <Link to='/randombeer'>
                <div className="card">
                    <img src="/images/random-beer.png" alt="" />   
                    <div className="box">
                        <h1>Random Beer</h1>  
                        <p>Ipsum Lorem</p>
                    </div>  
                </div>
                </Link>
                <Link to='/newbeer'>
                <div className="card">
                    <img src="/images/new-beer.png" alt="" />   
                    <div className="box">
                        <h1>New Beer</h1>  
                        <p>Ipsum Lorem</p>
                    </div>  
                </div>
                </Link>
            </div>
        )
    }
}
