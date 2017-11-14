import React from "react";
import autoBind from "react-autobind";

class AddRemoveUser extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: ""
    }
    autoBind(this);
  }
  handleChange(event) {
    this.setState({
      selected: event.target.value
    });
  }
  render() {
    console.log(this.props.user.username);
    return (
      <div className="users-wrapper">
        <h4 className="user-name">{this.props.user.username}</h4>
        <select className="select-style"  value={this.state.selected} onChange={this.handleChange}>
          <option value="">Select Priviledge</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <button className="admin-button" onClick={() => {this.props.handleAdd(this.props.user.username, this.state.selected, this.props.token);}}>Add User</button>
        <button className="admin-button" onClick={() => {this.props.handleDeleteQue(this.props.user.username, this.props.user._id, this.props.token)}}>Remove User</button>
      </div>
    )
  }
}

export default AddRemoveUser;
