import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="page-header">
          <div className="logo">
              <a className="logo__link" href="/">
                  <h1 className="logo__title">Bren Murrell</h1>
                  <h3 className="logo__subtitle">Full Stack Developer</h3>
              </a>
          </div>      <ul className="nav nav--main">
          </ul>
        </header>
        <div className="module module--hero">
            <div className="hero"> {/* <!--  style="background-image: url('img/covers/coffee.jpg')"> */}
                <div className="hero__content">
                    <h1 className="hero__title">Bren Murrell</h1><h3 className="hero__subtitle">Full Stack Web Developer</h3>
                    <div className="hero__buttons">
                        {/* 
                        <button className="c-btn c-btn--pri">
                            <a className="c-btn__link" href="portfolio.html">Portfolio</a>
                        </button> 
                        <button className="c-btn c-btn--pri">
                            <a className="c-btn__link" href="styleguide.html">Styleguide</a>
                        </button> 
                        */ }
                        <h2>Coming soon...</h2>
                        
                    </div>
                </div>
            </div>
        </div>

      </div>
    );
  }
}

export default App;
