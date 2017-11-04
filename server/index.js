const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const pug = require('pug');

const settings = require('./config/settings.js');

//*******************************
//********IMPORT ROUTES**********
//*******************************
let authRouter = require('./routes/auth.js');
let productRouter = require('./routes/products.js');
let stylistRouter = require('./routes/stylists.js');
// let stripeRouter = require('./routes/stripe.js');


let PORT = process.env.PORT || settings.port;

mongoose.connect(`mongodb://localhost:27017/${settings.db}`);

const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//*******************************
//*******APP.USE ROUTERS*********
//*******************************
app.use('/auth', authRouter);
app.use('/products', productRouter);
app.use('/stylists', stylistRouter);
// app.use('/checkout', stripeRouter);

//*******************************
//*******STRIPE******************
//*******************************
const keyPublishable = process.env.pk_test_KrcPjBqVxWedbXNf7N3v0u9b;
const keySecret = process.env.sk_test_BtCc2OhT0RqdqYPv4vtL9dGr;
const stripe = require('stripe')(keySecret);
//pug is for stripe to work
app.set('view engine', 'pug');
app.get('/', (req, res) =>
  res.render('index.pug', {keyPublishable}));

app.post('/charge', (req, res) => {
  console.log('called');
  //deliver amount in cents
  let amount = 500;

  stripe.customers.create({
    email: req.body.stripeEmail,
    source: req.body.stripeToken
  })
  .then(customer =>
    stripe.charges.create({
      amount,
      description: 'one time charge',
      currency: 'usd',
      customer: customer.id
    }))
    .then(charge => res.render('charge.pug'));
});


app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
