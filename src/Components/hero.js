import React, { Component } from 'react';
import { Link } from "react-router-dom";

import MetaTags from 'react-meta-tags';

class Hero extends Component {

    render() {

        return (
            <div className="module module--hero">
                <div className="hero">
                    <div className="hero__content">
                        <h1 className="hero__title">Bren Murrell</h1>
                        <h3 className="hero__subtitle">Full Stack Web Developer</h3>
                        <div className="hero__buttons">
                            <button className="c-btn c-btn--pri">
                                <Link className="c-btn__link" to={`/about`}>About Bren</Link>
                            </button> 
                            <button className="c-btn c-btn--pri">
                                <Link className="c-btn__link" to={`/case-studies`}>Case Studies</Link>
                            </button>
                                
                            {/* 
                                <button className="c-btn c-btn--pri">
                                    <a className="c-btn__link" href="styleguide.html">Styleguide</a>
                                </button> 
                                
                            */ }
                        </div>
                    </div>
                </div>
                <MetaTags>
                    <title>Bren Murrell | Full Stack Developer</title>
                    <meta name="description" content="Full stack nerd, React lover, user evangelist, coffee addict, gadget geek." />
                    <meta property="og:title" content="Bren Murrell | Full Stack Developer" />
                    <meta property="og:image" content="/img/covers/coffee.jpg" />
                </MetaTags>
            
            </div>
        )
    }
}

export default Hero;