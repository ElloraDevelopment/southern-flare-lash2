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
        <label>Check if Active:</label>
        <input type="checkbox" checked={this.props.input.active} onChange={(event) => this.props.handleChange("active", event)} />
        <button className="add-item" onClick={() => {this.props.handleClick(this.props.input); this.props.clearInputs();}}>Add Item</button>
      </div>
    )
  }
}

export default StylistsForm;
