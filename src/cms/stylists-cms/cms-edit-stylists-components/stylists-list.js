//DATA FROM REDUX FOR EACH ITEM IN THE ARRAY MAP
import React from "react";

import StylistsContainer from "../cms-edit-stylists-containers/stylist-container.js";

class StylistsList extends React.Component {
  genStylists() {
    return this.props.stylists.map((stylist, index) => {
      return <StylistsContainer handleDelete={this.props.handleDelete} handleEdit={this.props.handleEdit} key={stylist.firstName + index} stylist={stylist} />
    });
  }
  render() {
    return (
      <div className="stylists-list-wrapper">
        <h2>Edit Stylists:</h2>
        {this.genStylists()}
      </div>
    )
  }
}

export default StylistsList;
