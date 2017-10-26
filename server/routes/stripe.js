const express = require('express');
const pug = require('pug');
const stripeRouter = express.Router();

const keyPublishable = process.env.pk_test_KrcPjBqVxWedbXNf7N3v0u9b;
const keySecret = process.env.sk_test_BtCc2OhT0RqdqYPv4vtL9dGr;
const stripe = require('stripe')(keySecret);

//not sure if this pug file is supposed to be here or in app
stripeRouter.set('view engine', 'pug');

stripeRouter.get('/', (req, res) =>
  res.render('index.pug', {keyPublishable}));

stripeRouter.post('/checkout', (req, res) => {
  console.log('called');
  //deliver amount in cents
  // let amount = 500;

  stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  .then(customer =>
    stripe.charges.create({
      amount,
      // description: 'one time charge',
      currency: 'usd',
      customer: customer.id
    }))
    .then(charge => res.render('charge.pug'));
});

module.exports = stripeRouter;
