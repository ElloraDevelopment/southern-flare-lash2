import React from "react";
import autoBind from "react-autobind";

import { connect } from "react-redux";
import * as actionCreators from "../../actions/auth-actions.js";

import Users from "../components/users.js";

class UsersContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      didReq: false
    }
    autoBind(this);
  }
componentDidUpdate() {
  if(!this.state.didReq && this.props.currentUsers.length <=0 && this.props.priv === "admin"){
    this.props.loadUsers(this.props.token);
    this.setState({
      didReq: !this.state.didReq
    });
  }
}

  render() {
    return (
      <div className="users-container-wrapper" style={{display: this.props.token ? 'inherit' :' none'}}>
        <Users token={this.props.token} handleLogout={this.props.logout} handleStatus={this.props.changeStatus} currentUsers={this.props.currentUsers} handleDeleteList={this.props.deleteUserList} handleDeleteQue={this.props.deleteUserQue} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, actionCreators) (UsersContainer);
