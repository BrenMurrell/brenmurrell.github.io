import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom';
import './navigation.css';
class Navigation extends Component {
    constructor(props) {
        super();
        this.state = {
            navOpen: false
        };
    }

    
    getNavClass() {
        if(this.state.navOpen) {
            return 'nav nav--main nav--open';
        } else {
            return 'nav nav--main';
        }
    }
    toggleNav() {
        this.setState( {
            navOpen: !this.state.navOpen
        })
    }
    render() {
        return(
            <nav className={"nav nav--main" + (this.state.navOpen ? " nav--open" : "")}>
                <NavLink onClick={ this.toggleNav.bind(this) } to="/about" activeStyle={{color: "white"}} className="nav__item" activeClassName="nav__item--active">About</NavLink>
                <NavLink onClick={ this.toggleNav.bind(this) } to="/case-studies" activeStyle={{color: "white"}} className="nav__item" activeClassName="nav__item--active">Case Studies</NavLink>
                <NavLink onClick={ this.toggleNav.bind(this) } to="/employment" activeStyle={{color: "white"}} className="nav__item" activeClassName="nav__item--active">Employment History</NavLink>
                <div className="nav__toggle" onClick={ this.toggleNav.bind(this) }>
                    <div class="nav__bar nav__bar--top"></div>
                    <div class="nav__bar nav__bar--mid"></div>
                    <div class="nav__bar nav__bar--bottom"></div>
                    <div class="nav__bar-label">Menu</div>
                </div>
            </nav>
        )
    }
}
export default Navigation;