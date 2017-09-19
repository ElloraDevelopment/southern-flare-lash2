import React from "react";

class StylistComponent extends React.Component {
  render() {
    return (
      <div className="stylist-component-wrapper">
        <div className="stylist-pic" style={{backgroundImage: `url(${this.props.stylist.pic})`}}></div>
        <h3>{this.props.stylist.firstName} {this.props.stylist.lastName}</h3>
        <h4>{this.props.stylist.bio}</h4>
        <h4>{this.props.stylist.services}</h4>
        <h4>{this.props.stylist.instagram}</h4>
      </div>
    )
  }
}

export default StylistComponent;
