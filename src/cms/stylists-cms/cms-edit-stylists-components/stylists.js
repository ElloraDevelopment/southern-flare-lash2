//RENDER OUT PRODUCT
import React from "react";


class Stylists extends React.Component {
  render() {
    console.log(this.props.stylist.firstName);
    return (
      <div className="stylists-wrapper">
          <div className="stylist-pic" style={{backgroundImage: `url(${this.props.stylist.pic})`}}>
            <input className="img-input" onChange={(event) => {this.props.handleUpdate("pic", event)}} placeholder="change picture" />
          </div>

          <h3>{this.props.stylist.firstName} {this.props.stylist.lastName}</h3>
          <h4>{this.props.stylist.bio}</h4>
          <h5>{this.props.stylist.services.join(",")}</h5>
          <h5>{this.props.stylist.instagram}</h5>
          <h5>Current Status: {this.props.stylist.active ? "active" : "inactive"}</h5>

          <span>
            <p>First Name: </p>
            <input onChange={(event) => {this.props.handleUpdate("firstName", event)}} placeholder="change first name" type="text" value={this.props.stylist.firstName} />
            <p>Last Name: </p>
            <input onChange={(event) => {this.props.handleUpdate("lastName", event)}} placeholder="change last name" value={this.props.inputs.lastName} />
            <p>Bio: </p>
            <input onChange={(event) => {this.props.handleUpdate("bio", event)}} placeholder="change bio" value={this.props.inputs.bio} />
          </span>
          <span>
            <p>Services: </p>
            <input onChange={(event) => {this.props.handleUpdate("services", event);}} placeholder="change services" value={this.props.inputs.services} />
          </span>
          <span>
            <p>Instagram Link: </p>
            <input onChange={(event) => {this.props.handleUpdate("instagram", event);}} placeholder="change instagram" value={this.props.inputs.instagram} />
          </span>
          <span>
            <label>Check if Active:</label>
            <input type="checkbox" checked={this.props.inputs.active} onChange={(event) => this.props.handleUpdate("active", event)} />
          </span>

          <button onClick={() => {this.props.handleEdit(this.props.stylist._id, this.props.inputs)}}>Update</button>
          <button onClick={() => {this.props.handleDelete(this.props.stylist._id);}}>Delete</button>

      </div>
    )
  }
}

export default Stylists;
