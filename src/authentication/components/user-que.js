import React from "react";
import AddRemoveUser from "./add-remove-user.js";

class UserQue extends React.Component {
  genUsers() {
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
      <div className="user-wrapper" style={{display: this.props.priv === "admin" ? "inherit" : "none"}}>
        <h5>New User Que</h5>
        {this.genUsers()}
      </div>
    )
  }
}

export default UserQue;
