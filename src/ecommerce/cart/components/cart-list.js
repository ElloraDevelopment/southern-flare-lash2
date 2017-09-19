//DATA FROM REDUX FOR EACH ITEM IN THE ARRAY MAP
import React from "react";

import CartComponent from "./cart-component.js";

class CartList extends React.Component {
  genCart() {
    return this.props.cart.map((product, index) => {
      return <CartComponent key={product.title + index} product={product} handleChange={this.props.handleChange} />
    })
  }
  render() {
    return (
      <div className="cart-list-wrapper">
        <h2>Basket</h2>
        {this.genCart()}
      </div>
    )
  }
}

export default CartList;
