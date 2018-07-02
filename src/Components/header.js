import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="page-header">
                <div className="logo">
                    <a className="logo__link" href="/">
                        <h1 className="logo__title">Bren Murrell</h1>
                        <h3 className="logo__subtitle">Full Stack Developer</h3>
                    </a>
                </div>
                <ul className="nav nav--main">

                </ul>
            </header>
        )
    }

}

export default Header;
