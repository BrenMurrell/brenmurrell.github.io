import React, { Component } from 'react';

import Button from './Generic/button';

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
                                <Button title="About Bren" link="/about" />
                                <Button title="Case Studies" link="/case-studies" />
                                
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