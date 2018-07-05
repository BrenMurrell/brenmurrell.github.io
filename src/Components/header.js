import React, { Component } from 'react';
//import { Link, NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <header className="page-header">
                <div className="logo">
                    <Link className="logo__link" to={`/`}>
                        <h1 className="logo__title">Bren Murrell</h1>
                        <h3 className="logo__subtitle">Full Stack Developer</h3>
                    </Link>
                </div>
                {/* 
                <nav className="nav nav--main">
                    <NavLink exact to="/" activeStyle={{color: "white"}} activeClassName="test">Home</NavLink>
                    <NavLink to="/about" activeStyle={{color: "white"}} activeClassName="test">About</NavLink>
                    <NavLink to="/case-studies" activeStyle={{color: "white"}} activeClassName="test">Case Studies</NavLink>
                </nav>
                */ }
            </header>
        )
    }

}

export default Header;
