import React from "react";
import autoBind from 'react-autobind';

import { connect } from "react-redux";
import * as actionCreators from "../../actions/auth-actions.js";

import UserQue from "../components/user-que.js";

class UserQueContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      didReq: false
    }
    autoBind(this);
  }
  componentDidUpdate() {
    if(this.props.userQue.length <=0 && this.props.priv === "admin" && !this.state.didReq) {
      this.props.loadUserQue(this.props.token);
      this.setState({
        didReq: !this.state.didReq
      });
    }
  }
  render() {
    console.log(this.props.userQue);
    return (
      <div className="que-containers" style={{display: this.props.priv === "admin" ? "inherit" : "none"}}>
        <UserQue handleDeleteQue={this.props.deleteUserQue} handleAdd={this.props.addUser} users={this.props.userQue} priv={this.props.priv} token={this.props.token} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, actionCreators) (UserQueContainer);
