//CONNECT TO REDUX AND PASS DOWN DATA
import React from "react";
import autoBind from "react-autobind";

import CartList from "../components/cart-list.js";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../../actions/cms-actions.js";

class CartListContainer extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        quantity: 0
      }
    autoBind(this);
  }
  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    })
  }
  componentWillMount() {
    this.props.loadCartData();
  }
  render() {
    return (
      <div className="cart-wrapper">
        <CartList cart={this.props.cart} handleChange={this.props.handleChange} />
      </div>
    )
  }
}

const mapStateToProps = (state) => { return state; };

export default connect(mapStateToProps, actionCreators)(CartListContainer);
