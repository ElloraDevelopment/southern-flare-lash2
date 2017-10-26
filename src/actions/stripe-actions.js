// import axios from 'axios';
// import Scriptly from 'scriptly';

// function createStripeToken(payment) {
//   return new Promise((res, rej) => {
//     // Stripe.setPublishableKey('pk_test_KrcPjBqVxWedbXNf7N3v0u9b');
//     // Stripe.card.createToken(payment, (status, response) => {
//     //   if(response.error) rej(response.error);
//     //   else res(response.id);
//     // });
//   });
// }
//
// function performCheckout(product, address, token) {
//   console.log(`Using token (${token}) to purchase ${product.name} from $${product.price}.`);
//   //this is where I need to post this to the web server
// }

// export function completeCheckout(product, address, payment) {
//     // const payload = Scriptly.loadJavascript('https://js.stripe.com/v3/')
//     //                         .then(() => (createStripeToken(payment)))
//     //                         .then((token) => (performCheckout(product, address, token)));
//
//     return {
//         type: 'COMPLETE_CHECKOUT',
//         payload
//     }
// }
