import React from "react";

import StylistComponentRedo from "./stylist-component-redo.js";

class StylistList extends React.Component {
  genStylists() {
    let activeStylists = this.props.stylists.filter((stylist) => {
      return stylist.active;
    });
      return activeStylists.map((stylist, index) => {
        return <StylistComponentRedo key={stylist.firstName + index} stylist={stylist} />
      });
  }
  render() {
    return (
      <div className="stylist-list-wrapper">
        <div className='text-center section-header'>
          <h1>Southern Flare Lash Staff</h1>
          {/* <h2>Our staff Street art poke 8-bit, fam truffaut selvage godard vaporware deep v bitters listicle wolf. Irony vinyl authentic green juice. Blog art party hella drinking vinegar small batch pitchfork.</h2> */}
        </div>
        <section className="flexbox-stylists">
          {this.genStylists()}
        </section>
      </div>
    )
  }
}

export default StylistList;
