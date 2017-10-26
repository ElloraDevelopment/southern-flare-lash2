import React from 'react';
import { connect } from 'react-redux';
import * as stripeActionCreators from "../../../actions/stripe-actions.js";

import Navbar from "../../../navbar.js";
import Footer from "../../../footer.js";
import CheckoutComponent from '../components/checkout-component.js';

class CheckoutContainer extends React.Component {
  // componentDidMount() {
  //   this.props.completeCheckout();
  // }
  render() {
    let total = 300;
    return (
      <div className='checkout-container-wrapper'>
        <div className='wrapper'>
          <Navbar />
          <CheckoutComponent />
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => { return state; };

export default connect(mapStateToProps, stripeActionCreators)(CheckoutContainer);
