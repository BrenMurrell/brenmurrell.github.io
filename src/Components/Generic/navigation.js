import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navigation.css';
class Navigation extends Component {
    constructor(props) {
        super();
        this.state = [];
    }
    render() {
        return(
            <nav className="nav nav--main">
                <NavLink to="/about" activeStyle={{color: "white"}} className="nav__item" activeClassName="nav__item--active">About</NavLink>
                <NavLink to="/case-studies" activeStyle={{color: "white"}} className="nav__item" activeClassName="nav__item--active">Case Studies</NavLink>
                <NavLink to="/employment" activeStyle={{color: "white"}} className="nav__item" activeClassName="nav__item--active">Employment History</NavLink>
            </nav>
        )
    }
}
export default Navigation;