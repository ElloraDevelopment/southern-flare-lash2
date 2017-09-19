import React from "react";

import StylistComponent from "./stylist-component.js";

class StylistList extends React.Component {
  genStylists() {
    let activeStylists = this.props.stylists.filter((stylist) => {
      return stylist.active;
    });
      return activeStylists.map((stylist, index) => {
        return <StylistComponent key={stylist.firstName + index} stylist={stylist} />
      });
  }
  render() {
    return (
      <div className="stylist-list-wrapper">
        <h2>Stylists:</h2>
        {this.genStylists()}
      </div>
    )
  }
}

export default StylistList;
