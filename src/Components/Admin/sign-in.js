import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions/signIn";
import { Link } from 'react-router-dom';

class SignIn extends Component {
    renderButton() {
        if(this.props.auth) {
            return (
                <div>
                    <h1>Welcome, {this.props.auth.displayName}!</h1>
                    <p><Link to="/admin">Go to the Dashboard</Link></p>
                    <button className="social-signin" onClick={this.props.signOut}>
                        Sign out
                    </button>

                </div>
            )
        } 
        return(
            <div>
                <h1>Sign in</h1>            
                <button className="social-signin" onClick={this.props.signIn}>
                    Sign In With Google
                </button>
            </div>
        )
    }
    
    render() {
        return(
            <div className="module">
                <div className="module__copy">
                    { this.renderButton() }                
                </div>
          </div>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth };
  }
  
  export default connect(mapStateToProps, { signIn, signOut })(SignIn);
