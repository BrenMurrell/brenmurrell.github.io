import React, { Component } from 'react';

class Employment extends Component {
    
    render() {

        return (
            <section className="module module--employment">
                    <div className="module__copy">
                    <h1 className="module__title">Employment history</h1>
                
                    <div className="cards">
                        <div className="card">
                            <header className="card__header">
                                <h2 className="card__title">NV Interactive</h2>
                                <h3 className="card__subtitle">Front End Developer</h3>
                            </header>
                            <div className="card__body">
                                <ul>
                                    <li>Front end development using HTML, SASS, CSS and Javascript</li>
                                    <li>Front end site maintenance</li>
                                    <li>Knockout and Angular front end development</li>
                                    <li>Umbraco development - C# / Razor front end and CMS development</li>
                                    <li>Microsoft Hololens research and development</li>
                                    <li>Continuous integration and deployment using Git and Teamcity</li>
                                    <li>Workflow analysis and improvement</li>
                                </ul>
                            </div>
                            <footer className="card__footer">
                                <h4 className="card__meta">October 2013 – present</h4>
                            </footer>
                        </div>
                        <div className="card">
                            <header className="card__header">
                                <h2 className="card__title">Mogul Limited</h2>
                                <h3 className="card__subtitle">Web Developer</h3>
                            </header>
                            <div className="card__body">
                                <ul>
                                    <li>PHP development specialising in Codeigniter, CakePHP, Wordpress CMS and various e-commerce platforms</li>
                                    <li>Custom front end development – jQuery, jQueryUI</li>
                                    <li>Server side development - PHP &amp; MySQL</li>
                                    <li>Unix based server administration – CLI, WHM, cPanel &amp; Parallels</li>
                                    <li>Social media integration</li>
                                    <li>Client technical support</li>
                                </ul>
                            </div>
                            <footer className="card__footer">
                                <h4 className="card__meta">Sept 2009 – October 2013</h4>            
                            </footer>        
                            
                        </div>
                        <div className="card">
                            <header className="card__header">
                                <h2 className="card__title">Farmlands Trading Society Ltd.</h2>
                                <h3 className="card__subtitle">IT Systems Coordinator</h3>
                            </header>
                            <div className="card__body">
                                <ul>
                                <li>1st level Remote IT support for 400+ users using both Windows based and Linux/COBOL command line software</li>
                                <li>Intranet development &amp; administration using Microsoft Sharepoint Services</li>
                                <li>Software development utilising PHP/MySQL</li>
                            </ul>
                            </div>
                            <footer className="card__footer">
                                <h4 className="card__meta">Jan 2008 – Sept 2009</h4>            
                            </footer>   
                            
                        </div>
                        <div className="card">
                            <header className="card__header">
                                <h2 className="card__title">Smart Power Wellington</h2>
                                <h3 className="card__subtitle">Database Developer</h3> 
                            </header>
                            <div className="card__body">
                                <ul>
                                    <li>Access database development &amp; VBA programming</li>
                                    <li>SQL Server setup and administration</li>
                                    <li>Technical troubleshooting &amp; user support (Windows XP)</li>
                                    <li>User training</li>
                                    <li>Network &amp; server support (Windows Server 2003)</li>
                                </ul>
                            </div>
                            <footer className="card__footer">        
                                <h4 className="card__meta">May 2006 – Dec 2007</h4>
                            </footer>
                        </div>
                        <div className="card">
                            <header className="card__header">
                                <h2 className="card__title">Desktop Imaging Ltd.</h2>
                                <h3 className="card__subtitle">Digital Scanning Team Leader</h3> 
                            </header>
                            <div className="card__body">
                                <ul>
                                    <li>Scanning of paper reports into a digital format.</li>
                                    <li>Supervision of small team</li>
                                    <li>Liaising with clients on a regular basis to manage workload</li>
                                    <li>Training of all new staff within team</li>
                                    <li>Scanning of multiple media including paper, photographic slides and negatives. Media sizes varied from 35mm negatives through to 40m logs.</li>
                                    <li>Utilising and training staff in use of scanning and image editing software</li>
                                    <li>Use of scanning hardware including flatbed scanners, rotary and large format scanner.</li>
                                </ul>
                            </div>
                            <footer className="card__footer">
                                <h4 className="card__meta">June 2001 – June 2002</h4>
                            </footer>
                        </div>
                        <div className="card">
                            <header className="card__header">
                                <h2 className="card__title">Access Management Ltd.</h2>
                                <h3 className="card__subtitle">IT Administrator</h3> 
                            </header>
                            <div className="card__body">
                                <ul>
                                    <li>Access 97 Database Administration for medical database holding records for over 4000 clients - including Visual Basic for Applications coding.</li>
                                    <li>Streamlining IT and Administration workflows</li>
                                    <li>Data analysis &amp; reporting on $18.5million Residential Care budget</li>
                                    <li>Help desk type support for administration staff</li>
                                    <li>Maintaining small LAN (MS Networks)</li>
                                    <li>Setting up and maintaining Internet connectivity</li>
                                    <li>Providing manuals and other printed material for staff on IT processes</li>
                                </ul>
                            </div>
                            <footer className="card__footer">
                                <h4 className="card__meta">April 1999 – April 2001</h4>
                            </footer>
                        </div>  
                    </div>
                </div>
                </section>
            )
        }
    }

    export default Employment;