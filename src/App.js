import React, { Component } from 'react';
import './App.css';
//import { CSSTransitionGroup } from 'react-transition-group'; // ES6
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import About from './Components/about';
import Employment from './Components/employment';
import Error404 from './Components/404';
import Header from './Components/header';
import Hero from './Components/hero';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Switch >
                    <Route exact path='/' component={Hero} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/employment' component={Employment} />
                    
                    <Route component={Error404} />
                </Switch>
                
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
