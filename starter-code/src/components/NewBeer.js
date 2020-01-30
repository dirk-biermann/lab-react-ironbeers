import React, { Component } from 'react'
import axios from 'axios';

export default class NewBeer extends Component {
    constructor(){
        super();
        this.state = {
        }
    }

    handleSubmit = (event) => {
        console.log( "SUBMIT", this.state );
        event.preventDefault();
        axios.post('https://ih-beers-api2.herokuapp.com/beers/new', this.state)
            .then(response => {
                console.log( "New beer successful created" )
            })
    }

    handleOnChange = (event) => {
        this.setState( { [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="form_column">
                    <div className="form_row">
                        <label>Name:</label>
                        <input type="text" name="name" onChange={this.handleOnChange}/>
                    </div>

                    <div className="form_row">
                        <label>Tagline:</label>
                        <input type="text" name="tagline" onChange={this.handleOnChange} />
                    </div>

                    <div className="form_row">
                        <label>Description:</label>
                        <input type="text" name="description" onChange={this.handleOnChange} />
                    </div>

                    <div className="form_row">
                        <label>First Brewed:</label>
                        <input type="text" name="first_brewed" onChange={this.handleOnChange} />
                    </div>

                    <div className="form_row">
                        <label>Brewers Tips:</label>
                        <input type="text" name="brewers_tips" onChange={this.handleOnChange} />
                    </div>

                    <div className="form_row">
                        <label>Attenuation Level:</label>
                        <input type="text" name="attenuation_level" onChange={this.handleOnChange} />
                    </div>

                    <div className="form_row">
                        <label>Contributed By:</label>
                        <input type="text" name="contributed_by" onChange={this.handleOnChange} />
                    </div>

                    <div className="form_row">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}
