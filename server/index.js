const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');

const settings = require('./config/settings.js');


//*******************************
//********IMPORT ROUTES**********
//*******************************
let authRouter = require('./routes/auth.js');
let productRouter = require('./routes/products.js');
let stylistRouter = require('./routes/stylists.js');


let PORT = process.env.PORT || settings.port;

mongoose.connect(`mongodb://localhost:27017/${settings.db}`);

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({encoded:false}));
app.use(bodyParser.json());


//*******************************
//*******APP.USE ROUTERS*********
//*******************************
app.use('/auth', authRouter);
app.use('/products', productRouter);
app.use('/stylists', stylistRouter);


app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
