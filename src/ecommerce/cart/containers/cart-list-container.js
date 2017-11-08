//CONNECT TO REDUX AND PASS DOWN DATA
import React from "react";
import autoBind from "react-autobind";

import CartList from "../components/cart-list.js";
import Navbar from "../../../navbar.js";
import Footer from "../../../footer.js";

import { connect } from "react-redux";
import * as cmsActionCreators from "../../../actions/cms-actions.js";
import * as ecomActionCreators from "../../../actions/ecom-actions.js";

class CartListContainer extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
  componentDidUpdate() {
    // console.log(this.props.cartQuantity);
    sessionStorage.setItem('cart', JSON.stringify(this.props.cart));
    // sessionStorage.setItem('quant', JSON.stringify(this.props.cartQuantity));
  }
  componentDidMount() {

    let currentCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    // let currentQuantity = JSON.parse(sessionStorage.getItem('quant')) || [];
    this.props.setCartData(currentCart);
    // this.props.setCartQuantity(currentQuantity);
    // console.log(currentQuantity);
  }
  render() {
    return (
      <div className="cart-wrapper">
        <div className='wrapper'>
          <Navbar />
          <CartList cart={this.props.cart} handleRemove={this.props.removeCartItem} />
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => { return state; };

export default connect(mapStateToProps, {...cmsActionCreators, ...ecomActionCreators})(CartListContainer);
