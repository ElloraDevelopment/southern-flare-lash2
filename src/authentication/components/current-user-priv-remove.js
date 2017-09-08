import React from "react";
import autoBind from "react-autobind";

class CurrentUserPrivRemove extends React.Component {
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
    return (
      <div className="user-wrapper">
        <p className="user-name priv-level">{this.props.user.username} : {this.props.user.priv}</p>
        <select className="priv-drop-down" value={this.state.selected} onChange={this.handleChange}>
          <option value="">Select Priviledge</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <button className="btn btn-default btn-success" onClick={() => {this.props.handleStatus(this.props.user._id, this.state.selected, this.props.token);}}>Change Status</button>
        <button className="btn btn-default btn-success" onClick={() => {this.props.handleDeleteList(this.props.user.username, this.props.user._id, this.props.token)}}>Remove User</button>
      </div>
    )
  }
}

export default CurrentUserPrivRemove;
