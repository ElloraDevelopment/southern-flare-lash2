import React from "react";

class StylistComponentRedo extends React.Component {

  render() {
    return (
      <div className="product-page-component-wrapper stylist-card">
        <div className="">
          <div className="stylist-pic" style={{backgroundImage: `url(${this.props.stylist.pic})`}}></div>
        </div>
        <div className="stylist-info">
          <h3 className="stylist-title">{this.props.stylist.firstName} {this.props.stylist.lastName}</h3>

          <div className="edit-divider-stylist-page">
            <div className="line-divider-stylist-page"></div>
          </div>
          <div className="services-insta">
            <h4 className="stylist-services2">{this.props.stylist.services}</h4>
            <h4 className="stylist-insta2">{this.props.stylist.instagram}</h4>
          </div>
          <h4 className="stylist-desc">{this.props.stylist.bio}</h4>

        </div>
      </div>
    )
  }
}

export default StylistComponentRedo;
