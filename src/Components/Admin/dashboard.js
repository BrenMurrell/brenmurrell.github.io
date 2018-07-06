import React, { Component } from 'react';
import { signOut, fetchUser } from '../../actions/signIn';
import { connect } from "react-redux";

class Dashboard extends Component {
    componentWillMount() {
        // const { fetchUser } = this.props;
        // fetchUser()
    }
    render() {
        console.log(this.props.auth)
        const { auth } = this.props;
        return(
            <div className="module">
                <div class="module__copy">
                    <h1>Admin Dashboard</h1>
                    <p>Welcome, { auth.displayName }</p>
                    <p>Not {auth.displayName}? <a href="#" onClick={this.props.signOut}>Sign out now</a></p>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth };
  }
  
  export default connect(mapStateToProps, { signOut, fetchUser })(Dashboard);
