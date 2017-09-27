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
      <div className="users-wrapper" >
        <h1>Current System Users:</h1>
        {this.genCurrentUsers()}
      </div>
    )
  }
}

export default Users;
