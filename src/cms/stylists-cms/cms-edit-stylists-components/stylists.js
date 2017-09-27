//RENDER OUT PRODUCT
import React from "react";


class Stylists extends React.Component {
  render() {
    return (
      <div className="stylists-wrapper col-sm-6 col-md-3">
          <div className="stylist-pic" style={{backgroundImage: `url(${this.props.stylist.pic})`}}></div>
          <h2>{this.props.stylist.firstName} {this.props.stylist.lastName}</h2>
          <textarea type="text" rows="6">{this.props.stylist.bio}</textarea>
          <h4>{this.props.stylist.services.join(",")}</h4>
          <h4>{this.props.stylist.instagram}</h4>
          <h4>Current Status: {this.props.stylist.active ? "active" : "inactive"}</h4>

          <div className="edit-divider">
            <div className="line-left"></div>
            <i className="fa fa-star" aria-hidden="true"></i>
            <div className="line-right"></div>
          </div>

          <div className="edit-inputs">
            <h4>Change Picture: </h4>
            <input className="img-input" onChange={(event) => {this.props.handleUpdate("pic", event)}} placeholder="change picture" />
            <h4>First Name: </h4>
            <input onChange={(event) => {this.props.handleUpdate("firstName", event)}} placeholder="change first name" type="text" value={this.props.stylist.firstName} />
            <h4>Last Name: </h4>
            <input onChange={(event) => {this.props.handleUpdate("lastName", event)}} placeholder="change last name" value={this.props.inputs.lastName} />
            <h4>Bio: </h4>
            <textarea rows="8" type="text" onChange={(event) => {this.props.handleUpdate("bio", event)}} placeholder="change bio" value={this.props.inputs.bio}></textarea>
            <h4>Services: </h4>
            <input onChange={(event) => {this.props.handleUpdate("services", event);}} placeholder="change services" value={this.props.inputs.services} />
            <h4>Instagram Link: </h4>
            <input onChange={(event) => {this.props.handleUpdate("instagram", event);}} placeholder="change instagram" value={this.props.inputs.instagram} />
            <label className="edit-checkbox">Check if active (will show on page): </label>
            <input className="edit-checkbox" type="checkbox" checked={this.props.inputs.active} onChange={(event) => this.props.handleUpdate("active", event)} />
          </div>

          <button className="cms-button" onClick={() => {this.props.handleEdit(this.props.stylist._id, this.props.inputs)}}>Update</button>
          <button className="cms-button" onClick={() => {this.props.handleDelete(this.props.stylist._id);}}>Delete</button>

      </div>
    )
  }
}

export default Stylists;
