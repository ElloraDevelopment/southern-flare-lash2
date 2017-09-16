//CONNECT TO REDUX AND PASS DOWN DATA
import React from "react";

import CartList from "../components/cart-list.js";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../../actions/ecommerce-actions.js";

class CartListContainer extends React.Component {
  render() {
    return (
      <div className="cart-wrapper">
        <CartList />
      </div>
    )
  }
}

const mapStateToProps = (state) => { return state; };

export default connect(mapStateToProps, actionCreators)(CartListContainer);
