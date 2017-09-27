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
        <h1 className="staff-header">Southern Flare Lash Staff</h1>
        <h2 className="staff-pitch">Our staff Street art poke 8-bit, fam truffaut selvage godard vaporware deep v bitters listicle wolf. Irony vinyl authentic green juice. Blog art party hella drinking vinegar small batch pitchfork.</h2>
        <div className="flexbox-stylists">
          {this.genStylists()}
        </div>
      </div>
    )
  }
}

export default StylistList;
