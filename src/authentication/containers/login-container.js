import React from "react";
import autoBind from "react-autobind";
import { connect } from "react-redux";
import * as actionCreators from "../../actions/auth-actions.js";


import Login from "../components/login.js";

class LoginContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
    autoBind(this);
  }
  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }
  handleSubmit(username, password) {
    this.props.login(username, password);
    // this.props.toggleModal("isShowingLogin");
    this.setState({
      username: "",
      password: ""
    });
    // document.querySelector('.bm-overlay').style.display = 'inherit';
    // document.querySelector('.bm-menu-wrap').style.display = 'inherit';
  }
  render() {
    return (
      <div style={{display: this.props.token ? 'none' : 'inherit'}} className="login-wrapper">
        <h4>Login or sign-up for an account if you do not already have a login</h4>
        <Login input={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, actionCreators) (LoginContainer);
