//DATA FROM REDUX FOR EACH ITEM IN THE ARRAY MAP
import React from "react";
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import CartComponentContainer from "../containers/cart-component-container.js";
import CheckoutContainer from '../../checkout/containers/checkout-container.js';

class CartList extends React.Component {
  genCart() {
    return this.props.cart.map((id, index) => {
      return <CartComponentContainer key={id + index} id={id} index={index} setCartSubtotal={this.props.setCartSubtotal} setCartQuantity={this.props.setCartQuantity} cartQuantity={this.props.cartQuantity[index]} handleRemove={this.props.handleRemove} />
    })
  }
  genCartTotal() {
    let subtotals = this.props.cartSubtotal;
    // console.log(typeOf (subtotals));
    let total = 0;
    for (let i = 0; i < subtotals.length; i++) {
      total += subtotals[i];
    }
    let decimalTotal = total.toFixed(2);
    return decimalTotal;
  }
  render() {
    return (
      <div className="cart-list-wrapper">
        <div className='text-center section-header'>
          <h1>Shopping Cart</h1>
          <h2 style={{color: 'red'}}>We apologize, our shopping cart and checkout are under construction. Please email your order to southernFlareLash@hotmail.com</h2>
        </div>
        <div className='cart-list-bottom-wrapper'>
          <div className='cart-width'>
          <table>
            <thead>
              <tr>
                <th className='table-img'></th>
                <th className='table-title'>Product Name</th>
                <th className='table-price'>Unit Price</th>
                <th className='table-quant'>Qty</th>
                <th className='table-subtotal'>Subtotal</th>
                <th className='table-remove-btn'></th>
              </tr>
            </thead>
          </table>

            <div className="cart-separator-line"></div>
            {this.genCart()}
            <table className='checkout'>
              <tfoot>
                <tr>
                  <td className='cart-total'>Total: ${this.genCartTotal()}</td>
                </tr>
                <tr>
                  <td><Link to='/charge'><button className="cms-button">Checkout</button></Link></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default CartList;
