import React from "react";

class StylistsForm extends React.Component {
  render() {
    return (
      <div className="stylists-form">
        <form>
          <ul className="flex-outer">
            <li>
              <label for="picture">Picture</label>
              <input type="text" id="picture" placeholder="add stylist picture" value={this.props.input.pic} onChange={(event) => {this.props.handleChange("pic", event)}} />
            </li>
            <li>
              <label for="first-name">First Name</label>
              <input type="text" id="first-name" placeholder="first name" value={this.props.input.firstName} onChange={(event) => {this.props.handleChange("firstName", event)}} />
            </li>
            <li>
              <label for="last-name">Last Name</label>
              <input type="text" id="last-name" placeholder="last name" value={this.props.input.lastName} onChange={(event) => {this.props.handleChange("lastName", event)}} />
            </li>
            <li>
              <label for="bio">Bio</label>
              <textarea rows="6" type="text" id="bio" placeholder="stylist bio" maxLength='477' value={this.props.input.bio} onChange={(event) => {this.props.handleChange("bio", event)}}></textarea>
            </li>
            <li>
              <label for="services">Services</label>
              <input type="text" id="services" placeholder="stylist services" value={this.props.input.services} onChange={(event) => {this.props.handleChange("services", event)}} />
            </li>
            <li>
              <label for="gallery">Gallery Link</label>
              <input type="text" id="gallery" placeholder="external gallery link" value={this.props.input.instagram} onChange={(event) => {this.props.handleChange("instagram", event)}} />
            </li>
            <li>
              <p>Status</p>
              <ul className="flex-inner">
                <li>
                  <input type="checkbox" checked={this.props.input.active} onChange={(event) => this.props.handleChange("active", event)} />
                  <label>Check if Active</label>
                </li>
              </ul>
            </li>
            <li>
              <button className="add-item" onClick={() => {this.props.handleClick(this.props.input); this.props.clearInputs();}}>Add Stylist</button>
            </li>
          </ul>
        </form>
      </div>
    )
  }
}

export default StylistsForm;
