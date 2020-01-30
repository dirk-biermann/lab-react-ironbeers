import React, { Component } from 'react'

export default class Beers extends Component {
    constructor(){
        super();
        this.state = {
        }
    }

    render() {
        return (
            <div className="card" style={{display: "flex", justifyContent: "flex-start"}}>
                <div style={{width:"100px", margin: "5px 0"}}>
                    <img className="beerimg" src={this.props.beer.image_url} alt={this.props.beer.name} /> 
                </div>
                <div style={{display: "flex", flexDirection: "column", justifyContent: "space-around", alignItem: "flex-start"}}>
                    <h2>{this.props.beer.name}</h2>
                    <span>{this.props.beer.tagline}</span>
                    <p style={{fontSize: "x-small"}}><b>Created By:</b> {this.props.beer.contributed_by}</p>
                </div>  
            </div>
        )
    }
}
