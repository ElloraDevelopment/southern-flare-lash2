//DATA FROM REDUX FOR EACH ITEM IN THE ARRAY MAP
import React from "react";
import { Link } from 'react-router-dom';

import CartComponentContainer from "../containers/cart-component-container.js";
import CheckoutContainer from '../../checkout/containers/checkout-container.js';

class CartList extends React.Component {
  genCart() {
    return this.props.cart.map((id, index) => {
      return <CartComponentContainer key={id + index} id={id} index={index} handleRemove={this.props.handleRemove} />
    })
  }
  render() {
    // console.log(this.props)
    return (
      <div className="cart-list-wrapper">
        <h2>Cart</h2>
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
              <td className='cart-total'>Total: $</td>
            </tr>
            <tr>
              <td><Link to='/checkout'><button className="cms-button">Checkout</button></Link></td>
            </tr>
          </tfoot>
        </table>

      </div>
    )
  }
}

export default CartList;
