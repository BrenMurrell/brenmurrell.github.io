import React, { Component } from 'react';
import { signOut, fetchUser } from '../../actions/signIn';
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import AdminCaseStudies from './case-studies';
import requireAuth from '../auth/requireAuth';


class Dashboard extends Component {

    renderDash() {
        const { auth } = this.props;
        if(auth.email === 'bren@moon.co.nz') {
            return (
                <div>
                    
                        
                    <NavLink exact to="/admin" activeStyle={{color: "white"}} className="nav__item" activeClassName="nav__item--active">Dashboard</NavLink>
                    <NavLink to="/admin/broken" activeStyle={{color: "white"}} className="nav__item" activeClassName="nav__item--active">Broken</NavLink>
                    <NavLink to="/admin/case-studies" activeStyle={{color: "white"}} className="nav__item" activeClassName="nav__item--active">Case Studies</NavLink>
                    <Route exact path='/admin/case-studies' component={requireAuth(AdminCaseStudies)} />
                </div>
                
            )
        }
        return(
            <p>Thanks for dropping by, but you aren't supposed to be here. Please sign out now.</p>
        )
    }


    render() {
        console.log(this.props.auth)
        const { auth } = this.props;
        return(
            <div className="module">
                <div class="module__copy">
                    <h1 className="module__title">Admin Dashboard</h1>
                    <p>Welcome, { auth.displayName }</p>
                    <img src={auth.photoURL} width="50" />
                    <p>Not {auth.displayName}? <a href="#" onClick={this.props.signOut}>Sign out now</a></p>
                    { this.renderDash() }
                </div>
            </div>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth };
  }
  
  export default connect(mapStateToProps, { signOut, fetchUser })(Dashboard);
