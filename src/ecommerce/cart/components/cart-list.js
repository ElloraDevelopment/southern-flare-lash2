//DATA FROM REDUX FOR EACH ITEM IN THE ARRAY MAP
import React from "react";

import CartComponent from "./cart-component.js";

class CartList extends React.Component {
  render() {
    return (
      <div className="cart-list-wrapper">
        <CartComponent />
      </div>
    )
  }
}

export default CartList;
