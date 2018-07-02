import React, { Component } from 'react';
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
                <ul className="nav nav--main">

                </ul>
            </header>
        )
    }

}

export default Header;
