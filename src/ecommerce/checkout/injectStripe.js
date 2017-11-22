//checkoutForm.js
import React from 'react';
import { injectStripe } from 'react-stripe-elements';

// import AddressSection from './addressSection';
import CardSection from './cardSection';

class CheckoutForm extends React.Component {
  handleSubmit = (ev) => {
    //we don't want to let default form submission happen here, which would refresh the page
    ev.preventDefault();

    //within the context of 'Elements', this call to createToken knows which Element to tokenize, since there's only one in this group.
    this.props.stripe.createToken({name: 'Rob Horacek'}).then(({token}) => {
      console.log(token);
    });

    //however, this line of code will do the same thing:
    //this.props.stripe.createToken({type: 'card', name: 'Rob Horacek'});
  }

  render() {
    return (
      <form className="stripe" onSubmit={this.handleSubmit}>
        {/* <AddressSection /> */}
        <CardSection />
        <button className="stripe">Confirm Order</button>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);
