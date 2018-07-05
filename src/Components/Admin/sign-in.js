import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../actions/signIn";
import PropTypes from "prop-types";

class SignIn extends Component {

    render() {
        return(
            <div class="module">
                <h1>Sign in</h1>
                <a href="#" className="social-signin" onClick={this.props.signIn}>
                    <i className="fa fa-google social-signin-icon" />
                    Sign In With Google
                </a>
          </div>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth };
  }
  
  export default connect(mapStateToProps, { signIn })(SignIn);
