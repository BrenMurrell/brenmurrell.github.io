import React, { Component } from 'react';
//import { Link, NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navigation from './Generic/navigation';

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
                <Navigation />
            </header>
        )
    }

}

export default Header;
