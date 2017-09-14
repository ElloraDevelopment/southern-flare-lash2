import React from "react";

class StylistsForm extends React.Component {
  render() {
    return (
      <div className="stylists-form">
        <input type="" placeholder="stylist picture" value={this.props.input.pic} onChange={(event) => {this.props.handleChange("pic", event)}} />
        <input type="text" placeholder="firstName" value={this.props.input.firstName} onChange={(event) => {this.props.handleChange("firstName", event)}} />
        <input type="text" placeholder="lastName" value={this.props.input.lastName} onChange={(event) => {this.props.handleChange("lastName", event)}} />
        <input type="text" placeholder="desc" value={this.props.input.bio} onChange={(event) => {this.props.handleChange("bio", event)}} />
        <input type="text" placeholder="services" value={this.props.input.services} onChange={(event) => {this.props.handleChange("services", event)}} />
        <input type="text" placeholder="instagram" value={this.props.input.instagram} onChange={(event) => {this.props.handleChange("instagram", event)}} />
        <select value={this.props.input.active} onChange={(event) => {this.props.handleChange("active", event)}} >
          <option value="select">Select One</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <button className="add-item" onClick={() => {this.props.handleClick(this.props.input)}}>Add Item</button>
        <button className="edit-item">Edit Item</button>
        <button className="remove-item">Remove Item</button>
      </div>
    )
  }
}

export default StylistsForm;
