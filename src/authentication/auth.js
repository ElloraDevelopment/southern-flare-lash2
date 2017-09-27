import React from "react";
// import autoBind from "react-autobind";

import { connect } from "react-redux";
import * as actionCreators from "../actions";
import Modal from "react-modal";
import * as authActionCreators from "../actions/auth-actions.js";

import LoginContainer from "./containers/login-container.js";
import SignupContainer from "./containers/signup-container.js";
import UserQueContainer from "./containers/userque-container.js";
import UsersContainer from "./containers/users-container.js";
import CmsComponent from "../cms/cms.js";
import Footer from "../footer.js";
import Navbar from "../navbar.js";

const customStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 126, 245, 0.75)',
    // backgroundColor   : '#007EF5',
    zIndex            : 0
  },
  content : {
    // position                   : 'absolute',
    zIndex                     : '150 !important',
    top                        : '30%',
    left                       : '50%',
    right                      : 'auto',
    bottom                     : 'auto',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px',
    transform                  : "translate(-50%, -50%)"
  }
};


class AuthComponent extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     isShowingLogin: false,
  //     isShowingSignup: false
  //   }
  //   autoBind(this);
  // }
  // toggleModal(key) {
  //   this.setState({
  //     [key]: !this.state[key]
  //   });
  // }
  componentWillMount() {
    //saying no token in reducer, but there is a token in localStorage
    if(this.props.token === "" && localStorage.getItem("token") && this.props.priv === "" && localStorage.getItem("priv")) {
      this.props.setTokenAndPrivLocalStorage(localStorage.getItem("token"), localStorage.getItem("priv"));
    }
  }
  setMenuCSSToDefault() {
    // document.querySelector('.bm-overlay').style.display = 'inherit';
    // document.querySelector('.bm-menu-wrap').style.display = 'inherit';
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <Navbar />
          <div id="login-signup" className="auth-component">
            {/* <button style={{display: this.props.token ? "none" : "inherit"}} onClick={() => {this.toggleModal("isShowingLogin")}}>Admin Login</button> */}
            {/* <Modal style={customStyles} isOpen={this.props.isShowingLogin} onRequestClose={() => {this.props.toggleLogin(); this.setMenuCSSToDefault();}} contentLabel="Login"> */}
              <LoginContainer />
              {/* <LoginContainer toggleModal={this.props.toggleLogin} /> */}
            {/* </Modal> */}
            {/* <button style={{display: this.props.token ? "none" : "inherit"}} onClick = {() => {this.toggleModal("isShowingSignup")}}>Signup for More Information</button> */}
            {/* <Modal style={customStyles} isOpen={this.props.isShowingSignup} onRequestClose={() => {this.props.toggleSignup(); this.setMenuCSSToDefault();}} contentLabel="Signup"> */}
              <SignupContainer />
              {/* <SignupContainer toggleModal={this.props.toggleSignup} /> */}
            {/* </Modal> */}

          </div>
            <CmsComponent handleLogout={this.props.logout}/>
            <div id="user-que"><UserQueContainer /></div>
            <UsersContainer />


        </div>
        <Footer />
      </div>


    )
  }
}

const mapStateToProps = (state) => {
  return state;
}



export default connect(mapStateToProps, {...actionCreators, ...authActionCreators}) (AuthComponent);
