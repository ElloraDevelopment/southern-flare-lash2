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

//import path is for going live
let path = require('path');


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
//import model
let Charge = require('./models/stripe.js');

const keyPublishable = process.env.PUBLISHABLE_KEY;
const keySecret = process.env.SECRET_KEY;
console.log("publishable key: ", keyPublishable)
console.log("secret key: ", keySecret)

const stripe = require('stripe')(keySecret);
// pug is for stripe to work
app.set('view engine', 'pug');
app.get('/', (req, res) =>
  res.render('index.pug', {keyPublishable}));

app.post('/charge', (req, res) => {
  // let newCharge = new Charge(req.body.amount);
  console.log('called');
  //deliver amount in cents
  let amount = req.body.amount / 100.0;
  console.log(amount);

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
// app.post('/', (req, res) => {
//   let newCharge = new Charge(req.body);
//   newCharge.save((err, data) => {
//     if (err) {
//       res.status(500).send({"message":"Server Error", err})
//     } else {
//       res.status(201).send({"message":"Item successfully added", data});
//     }
//   });
// });

//for going live
//setup static files
//__dirname shows you the path from root to where you are
//build will minify your javascript
app.use(express.static(path.resolve(__dirname, "..", "build")));


//for going live
//send index.html file when someone comes to /
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
