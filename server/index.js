const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const settings = require('./config/settings.js');

//*******************************
//********IMPORT ROUTES**********
//*******************************
let authRouter = require('./routes/auth.js');
let productRouter = require('./routes/products.js');
let stylistRouter = require('./routes/stylists.js');
let stripeRouter = require('./routes/stripe.js');


let PORT = process.env.PORT || settings.port;

mongoose.connect(`mongodb://localhost:27017/${settings.db}`);

const app = express();
//pug is for stripe to work
// app.set('view engine', 'pug');

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//*******************************
//*******APP.USE ROUTERS*********
//*******************************
app.use('/auth', authRouter);
app.use('/products', productRouter);
app.use('/stylists', stylistRouter);
app.use('/checkout', stripeRouter);


app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
