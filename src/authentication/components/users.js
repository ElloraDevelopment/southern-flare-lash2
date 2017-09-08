import React from "react";
import CurrentUserPrivRemove from "./current-user-priv-remove.js";

class Users extends React.Component {
  genCurrentUsers() {
    // console.log(this.props.currentUsers);
    return this.props.currentUsers.map((item, index) => {
      return (
        <CurrentUserPrivRemove handleStatus={this.props.handleStatus} handleDeleteList={this.props.handleDeleteList} token={this.props.token} key={item.username + index} user={item}/>
      )
    })
  }
  render() {
    return (
      <div className="users-wrapper">
        <h5>Current Users:</h5>
        {this.genCurrentUsers()}
        <button className="btn btn-default btn-success logout-button" onClick={() => this.props.handleLogout()}>Log Out</button>
      </div>
    )
  }
}

export default Users;
