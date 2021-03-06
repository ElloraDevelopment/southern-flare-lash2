//RENDER CART
import React from "react";

class CartComponent extends React.Component {

  render() {
    // console.log(this.props)
    return (
      <div className="cart-component-wrapper">
        <table>
          <tbody>
            <tr>
              <td><img className='table-img' src={this.props.product.pic} /></td>
              <td className='table-title'>{this.props.product.title}</td>
              <td className='table-price'>${this.props.product.price}</td>
              <td className='table-quant'><input type='text' value={this.props.cartQuantity} onChange={(event) => {this.props.setCartQuantity(this.props.index, Number(event.target.value));}} size='3 !important' maxLength='3 !important' pattern='/[0-9/g]'></input></td>
              <td className='table-subtotal'>$ {this.props.handleSubtotal()}</td>
              <td><button className='table-remove-btn' onClick={(event) => {this.props.handleRemove(event);}}>Remove Item</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default CartComponent;
