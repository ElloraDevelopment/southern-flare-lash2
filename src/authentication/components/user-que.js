import React from "react";
import AddRemoveUser from "./add-remove-user.js";

class UserQue extends React.Component {
  genUsers() {
    console.log(this.props.users);
    return this.props.users.map((item, index) => {
      return (
        <div className="row">
          <div className="col-md-12">
            <AddRemoveUser handleDeleteQue={this.props.handleDeleteQue} token={this.props.token} handleAdd={this.props.handleAdd} key={item.username + index} user={item} />
          </div>
        </div>
      )
    });
  }
  render() {
    return (
      <div className="users-wrapper">
        <h1 className="admin-header">Site Administration</h1>
        <h1>Signups Awaiting Authorization:</h1>
        {this.genUsers()}
      </div>
    )
  }
}

export default UserQue;
