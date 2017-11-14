const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const pug = require('pug');
const morgan = require("morgan");

const settings = require('./config/settings.js');

app.use(morgan("dev"));

//Import path at the top of your server for deployment
let  path = require('path');


//*******************************
//********IMPORT ROUTES**********
//*******************************
let authRouter = require('./routes/auth.js');
let productRouter = require('./routes/products.js');
let stylistRouter = require('./routes/stylists.js');
// let stripeRouter = require('./routes/stripe.js');


let PORT = process.env.PORT || settings.port;

//changed this from mongoose.connect(`mongodb://localhost:27017/${settings.db}`);

// Fixes warnings about promises in mongoose
mongoose.Promise = global.Promise;
mongoose.connect(
  settings.db,// Removes the deprecation warnings
  { useMongoClient: true },
  err => {
    if (err) throw err;
    console.log("Connected to the database");
  }
);

const app = express();

//setup static files for deployment
app.use(express.static(path.resolve(__dirname, "..", "build")));

//Setup your root / to be direct to your index.html for deployment
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

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

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
