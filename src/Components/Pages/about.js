import React, { Component } from 'react';

import MetaTags from 'react-meta-tags';


class About extends Component {
    
    render() {

        return (
            <section className="module module--summary module--alt module--centered module--narrow">
                <div className="module__copy">
                    <h1 className="module__title">About me</h1>
                    <p>Hi! I'm Bren Murrell. I am an accomplished  IT practitioner with over 15 years of experience working in web 
                        development, IT support and database development &amp; management. I have considerable 
                        experience building clean, responsive web solutions; from content management 
                        interfaces through to end user web pages for a wide range of clients. I am passionate 
                        about producing beautifully crafted, highly structured &amp; performant user interfaces 
                        and excel at applying creative solutions to stubborn development problems. 
                        I enjoy initiating regular workflow analysis and improvement reviews in order to tighten 
                        efficiencies in my daily work.</p>
                </div>
                <MetaTags>
                    <title>About Bren | Bren Murrell</title>
                    <meta name="description" content="I am an accomplished IT practitioner with over 15 years experience working in web development, IT support and database development &amp; management." />
                </MetaTags>
            </section> 
        )
    }
}

export default About;