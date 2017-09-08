const express = require('express');
let productRouter = express.Router();
// authRouter.use((req, res, next) => {console.log("test"); next ();});

//import user model
let Product = require('../models/cms.js');

productRouter.post('/', (req, res) => {
  let newProduct = new Product(req.body);
  newProduct.save((err, data) => {
    if (err) {
      res.status(500).send({"message":"Server Error", err})
    } else {
      res.status(201).send({"message":"Item successfully added", data});
    }
  });
});

productRouter.get('/', (req, res) => {
  Product.find(req.query, (err, data) => {
    if (err) {
      res.status(500).send({"message":"Server Error", err})
    } else {
      res.status(200).send({"message":"Items successfully returned", data});
    }
  });
});

productRouter.get('/:id', (req, res) => {
  Product.findOne({'_id': req.params.id}, (err, data) => {
    if (err) {
      res.status(500).send({"message":"Server Error", err})
    } else {
      res.status(200).send({"message":"Item successfully returned", data});
    }
  });
});

productRouter.put(":id", (req, res) => {
  Product.findByIdAndUpdate({'_id':req.params.id}, (err, data) => {
    if (err) {
      res.status(500).send({"message":"Server Error", err})
    } else {
      res.status(200).send({"message":"Item successfully updated", data});
    }
  });
});

productRouter.delete("_id", (req, res) => {
  findByIdAndRemove({'_id': req.params.id}, (err, data) => {
    if (err) {
      res.status(500).send({"message":"Server Error", err})
    } else {
      res.status(200).send({"message":"Item successfully deleted", data});
    }
  });
});

module.exports = productRouter;
