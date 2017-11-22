//MyStoreCheckout.js

import React from 'react';
import { Elements } from 'react-stripe-elements';

import CheckoutForm from './injectStripe';

class MyStoreCheckout extends React.Component {
  render() {
    return (
      <Elements>
        <CheckoutForm />
      </Elements>
    );
  }
}

export default MyStoreCheckout;
