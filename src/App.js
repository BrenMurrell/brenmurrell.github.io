import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header class="page-header">
          <div class="logo">
              <a class="logo__link" href="/">
                  <h1 class="logo__title">Bren Murrell</h1>
                  <h3 class="logo__subtitle">Full Stack Developer</h3>
              </a>
          </div>      <ul class="nav nav--main">
          </ul>
        </header>
        <div class="module module--hero">
            <div class="hero"> {/* <!--  style="background-image: url('img/covers/coffee.jpg')"> */}
                <div class="hero__content">
                    <h1 class="hero__title">Bren Murrell</h1><h3 class="hero__subtitle">Full Stack Web Developer</h3>
                    <div class="hero__buttons">
                        {/* 
                        <button class="c-btn c-btn--pri">
                            <a class="c-btn__link" href="portfolio.html">Portfolio</a>
                        </button> 
                        <button class="c-btn c-btn--pri">
                            <a class="c-btn__link" href="styleguide.html">Styleguide</a>
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
