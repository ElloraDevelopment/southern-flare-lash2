import React from "react";

class StylistComponent extends React.Component {
  render() {
    return (
      <div className="stylist-component-wrapper flex-item">
        <div className="pic-flex-parent">
          <div className="stylist-pic" style={{backgroundImage: `url(${this.props.stylist.pic})`}}></div>
        </div>
        <h3 className="stylist-name">{this.props.stylist.firstName} {this.props.stylist.lastName}</h3>
        <p className="stylist-bio">{this.props.stylist.bio}</p>
        <div className="services-gallery">
            <h4 className="stylist-services">{this.props.stylist.services}</h4>
            <h4 className="stylist-gallery">{this.props.stylist.instagram}</h4>
        </div>
      </div>
    )
  }
}

export default StylistComponent;
