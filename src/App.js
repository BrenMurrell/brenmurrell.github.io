import React, { Component } from 'react';
import './App.css';
//import { CSSTransitionGroup } from 'react-transition-group'; // ES6
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchUser } from "./actions/signIn";


import About from './Components/Pages/about';
import CaseStudies from './Components/Pages/case-studies';
import Employment from './Components/Pages/employment';
import Error404 from './Components/Pages/404';
import Header from './Components/header';
import Hero from './Components/hero';
import Dashboard from './Components/Admin/dashboard';
import SignIn from './Components/Admin/sign-in';

import requireAuth from "./Components/auth/requireAuth";

class App extends Component {

    componentWillMount() {
        this.props.fetchUser();
    }
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <Switch >
                        <Route exact path='/' component={Hero} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/employment' component={Employment} />
                        <Route exact path='/case-studies' component={CaseStudies} />
                        <Route exact path='/admin/sign-in' component={SignIn} />
                        <Route path='/admin' component={requireAuth(Dashboard)} />
                        
                        
                        
                        <Route component={Error404} />
                    </Switch>
                    
                </div>
            </BrowserRouter>
        );
    }
}

export default connect(null, { fetchUser })(App);
