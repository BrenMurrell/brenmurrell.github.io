import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom';
import './navigation.css';
import { connect } from "react-redux";

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
    renderAdminLink() {
        const { auth } = this.props;
        console.log('auth', auth);
        if(auth) {
            return(
                <NavLink onClick={ this.toggleNav.bind(this) } to="/admin" className="nav__item">Admin</NavLink>            
            )
        }
    }
    render() {
        return(
            <nav className={"nav nav--main" + (this.state.navOpen ? " nav--open" : "")}>
                <NavLink onClick={ this.toggleNav.bind(this) } to="/about" activeStyle={{color: "white"}} className="nav__item" activeClassName="nav__item--active">About</NavLink>
                <NavLink onClick={ this.toggleNav.bind(this) } to="/case-studies" activeStyle={{color: "white"}} className="nav__item" activeClassName="nav__item--active">Case Studies</NavLink>
                <NavLink onClick={ this.toggleNav.bind(this) } to="/employment" activeStyle={{color: "white"}} className="nav__item" activeClassName="nav__item--active">Employment History</NavLink>
                { this.renderAdminLink() }
                <div className="nav__toggle" onClick={ this.toggleNav.bind(this) }>
                    <div className="nav__bar nav__bar--top"></div>
                    <div className="nav__bar nav__bar--mid"></div>
                    <div className="nav__bar nav__bar--bottom"></div>
                    <div className="nav__bar-label">Menu</div>
                </div>
            </nav>
        )
    }
}
function mapStateToProps({ auth }) {
    return { auth };
  }
  
  export default connect(mapStateToProps)(Navigation);