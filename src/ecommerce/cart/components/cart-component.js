//RENDER CART
import React from "react";

class CartComponent extends React.Component {
  render() {
    return (
      <div className="cart-component-wrapper">
        <div className="cart-pic" style={{backgroundImage: `url(${this.props.product.pic})`}}></div>
        <h3>{this.props.product.title}</h3>
        <h4>{this.props.product.desc}</h4>
        <h4>${this.props.product.price}</h4>
        <h4>Quantity ordered: {this.props.product.quantity}</h4>
        <h4>Subtotal: { Number(this.props.product.price * this.props.product.quantity).toFixed(2) }</h4>
      </div>
    )
  }
}

export default CartComponent;
