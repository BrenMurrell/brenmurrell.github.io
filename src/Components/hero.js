import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Transition } from 'react-transition-group';

import MetaTags from 'react-meta-tags';

class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = { 'moduleClass': '' };
    }
    componentDidMount() {
            this.loadTimeout = setTimeout(function () {
                this.setState({'moduleClass': 'module--loaded'});
            }.bind(this), 0);
    }
    
    render() {
        
        return (
            <div className={`module module--hero ${this.state.moduleClass}`}>
                <div className="hero">
                        <div className={`hero__content hero-content`}>
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
                    <meta name="description" content="Full stack nerd, React lover, user experience activist, coffee addict, gadget geek." />
                    <meta property="og:title" content="Bren Murrell | Full Stack Developer" />
                    <meta property="og:image" content="https://brenmurrell.github.io/img/og-bren-murrell.png" />
                </MetaTags>
            
            </div>
        )
    }
}

export default Hero;