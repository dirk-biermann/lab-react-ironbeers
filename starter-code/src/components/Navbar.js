import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    constructor(){
        super();
        this.state = {
        }
    }

    render() {
        return (
            <div className="navbar">
                <Link to='/'>
                    <i className="fas fa-home fa-4x"></i>
                </Link>
            </div>
        )
    }
}
