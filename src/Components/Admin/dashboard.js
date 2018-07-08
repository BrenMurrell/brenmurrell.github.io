import React, { Component } from 'react';
import { signOut, fetchUser } from '../../actions/signIn';
import { connect } from "react-redux";
import { Route, NavLink } from 'react-router-dom';
import AdminCaseStudies from './case-studies';
import AdminJobs from './jobs';
import AdminJob from './job';
import AdminCaseStudy from './case-study';
import requireAuth from '../auth/requireAuth';


class Dashboard extends Component {

    renderDash() {
        const { auth } = this.props;
        if(auth.email === 'bren@moon.co.nz') {
            return (
                <div>
                    <NavLink exact to="/admin" activeStyle={{color: "white"}} className="nav__item" activeClassName="nav__item--active">Dashboard</NavLink>
                    <NavLink to="/admin/employment" activeStyle={{color: "white"}} className="nav__item" activeClassName="nav__item--active">Employment History</NavLink>
                    <NavLink to="/admin/case-studies" activeStyle={{color: "white"}} className="nav__item" activeClassName="nav__item--active">Case Studies</NavLink>
                    <Route exact path='/admin/case-studies' component={requireAuth(AdminCaseStudies)} />
                    <Route path='/admin/case-studies/:caseStudyId' component={requireAuth(AdminCaseStudy)} />
                    <Route exact path='/admin/employment' component={requireAuth(AdminJobs)} />
                    <Route path='/admin/employment/:jobId' component={requireAuth(AdminJob)} />

                </div>
                
            )
        }
        return(
            <p>Thanks for dropping by, but you aren't supposed to be here. Please sign out now.</p>
        )
    }


    render() {
        const { auth } = this.props;
        return(
            <div className="module module--admin">
                <div className="module__copy">
                    <p>Welcome, { auth.displayName }</p>
                    <img src={auth.photoURL} width="50" alt={auth.displayName} />
                    <p>Not {auth.displayName}? <button onClick={this.props.signOut}>Sign out now</button></p>
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
