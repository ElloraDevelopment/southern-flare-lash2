import React from 'react';
import axios from 'axios';
import { reduxForm } from 'redux-form';
import autoBind from 'react-autobind';

class CheckoutComponent extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         loading: true,
    //         stripeLoading: true,
    //     };
    //     autoBind(this);
    // }
    //
    // loadStripe(onload) {
    //     if(! window.StripeCheckout) {
    //         const script = document.createElement('script');
    //         script.onload = function () {
    //             console.info("Stripe script loaded");
    //             onload();
    //         };
    //         script.src = 'https://checkout.stripe.com/checkout.js';
    //         document.head.appendChild(script);
    //     } else {
    //         onload();
    //     }
    // }
    //
    // componentDidMount() {
    //
    //     this.loadStripe(() => {
    //         this.stripeHandler = window.StripeCheckout.configure({
    //             key: 'pk_test_KrcPjBqVxWedbXNf7N3v0u9b',
    //             amount: "999",
    //             zip: "true",
    //             currency: "usd",
    //             image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
    //             locale: 'auto',
    //             token: (token) => {
    //                 this.setState({ loading: true });
    //                 // use fetch or some other AJAX library here if you dont want to use axios
    //                 console.log(token.id);
    //                 axios.post('http://localhost:8080/charge', {
    //                     stripeToken: token.id
    //                 });
    //             }
    //         });
    //
    //         this.setState({
    //             stripeLoading: false,
    //             // loading needs to be explicitly set false so component will render in 'loaded' state.
    //             loading: false,
    //         });
    //     });
    // }
    //
    // componentWillUnmount() {
    //     if(this.stripeHandler) {
    //         this.stripeHandler.close();
    //     }
    // }
    //
    // onStripeUpdate(e) {
    //     this.stripeHandler.open({
    //         name: 'Southern Flare Lash',
    //         description: 'Lash + Beauty Bar',
    //         panelLabel: 'Charge Credit Card',
    //         allowRememberMe: false,
    //     });
    //     e.preventDefault();
    // }

  render() {
  // const { stripeLoading, loading } = this.state;
    return (
  //     <div className='checkout-component-wrapper container'>
  //       <h1>Checkout</h1>
  //       {(loading || stripeLoading)
  //                  ? <p>loading..</p>
  //                  : <button onClick={this.onStripeUpdate}>Charge CC</button>
  //              }
        <form action="http://localhost:3000/charge" method="POST">
          <script
            src="https://checkout.stripe.com/checkout.js" class="stripe-button"
            data-key="pk_test_KrcPjBqVxWedbXNf7N3v0u9b"
            data-amount="999"
            data-name="Southern Flare Lash"
            data-description="One time payment of ${data-amount}"
            data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
            data-locale="auto"
            data-zip-code="true"
            data-currency="usd">
          </script>
        </form>
        /* <form onSubmit={this.onSubmit}>
          <div className='panel panel-default'>
            <div className='panel-heading'>Shipping Address</div>
            <div className='panel-body'>
              <div className='form-group'>
                <label htmlFor='streetAddressInput'>Street Address</label>
                <input type='text' className='form-control' id='streetAddressInput' placeholder='1 way' onChange='' />
              </div>
              <div className='form-group'>
                <label htmlFor='cityInput'>City</label>
                <input type='text' className='form-control' id='cityInput' placeholder='tahoe' onChange='' />
              </div>
              <div className='form-group'>
                <label htmlFor='stateInput'>State</label>
                <input type='text' className='form-control' id='stateInput' placeholder='CA' onChange='' />
              </div>
              <div className='form-group'>
                <label htmlFor='postalCode'>Postal Code</label>
                <input type='text' className='form-control' id='postalCode' placeholder='94011' onChange='' />
              </div>
            </div>
          </div>

          <div className='panel panel-default'>
            <div className='panel-heading'>Email Address</div>
            <div className='panel-body'>
              <div className='form-group'>
                <label htmlFor='emailAddressInput'>Email Address</label>
                <input type='text' className='form-control' id='emailAddressInput' placeholder='1 way' onChange='' />
              </div>
            </div>
          </div>

          <div className='panel panel-default'>
            <div className='panel-heading'>Payment</div>
            <div className='panel-body'>
              <div className='form-group'>
                <label htmlFor='cardNumberInput'>Card Number</label>
                <input type='text' className='form-control' id='cardNumberInput' placeholder='4242 4242 4242 4242' onChange='' />
              </div>
              <div className='form-group'>
                <label htmlFor='expInput'>Expiration Date</label>
                <input type='date' className='form-control' id='expInput' placeholder='12/2017' onChange='' />
              </div>
              <div className="form-group">
                <label htmlFor="cvcInput">CVC</label>
                <input type="number" className="form-control" id="cvcInput" placeholder="123" onChange=''/>
              </div>
              <div className="form-group">
                <label htmlFor="zipInput">Billing Zip Code</label>
                <input type="number" className="form-control" id="zipInput" placeholder="123" onChange=''/>
              </div>
            </div>
          </div>
          <button type='submit' className='btn btn-default'>Checkout</button>
        </form> */
      // </div>
    )
  }
}

export default CheckoutComponent;
