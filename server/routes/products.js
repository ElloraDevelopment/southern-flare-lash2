const express = require('express');
let productRouter = express.Router();
// authRouter.use((req, res, next) => {console.log("test"); next ();});

//import user model
let Product = require('../models/products.js');

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
    } else if(data === null) {
      res.status(404).send({"message":"ERROR, data not found", err});
    } else {
      res.status(200).send({"message":"Item successfully returned", data});
    }
  });
});

productRouter.put("/:id", (req,res) => {
  Product.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, data) => {
    if(err) {
      res.status(500).send({"message":"ERROR within server", err});
    } else if(data === null) {
      res.status(404).send({"message":"ERROR, data not found", err});
    } else {
      res.status(200).send({"message":"SUCCESS, item updated", data});
    }
  });
});

productRouter.delete('/:id', (req, res) => {
  Product.findByIdAndRemove({'_id': req.params.id}, (err, data) => {
    if (err) {
      res.status(500).send({"message":"Server Error", err})
    } else if(data === null) {
      res.status(404).send({"message":"ERROR, data not found", err});
    } else {
      res.status(200).send({"message":"Item successfully removed", data});
    }
  });
});

module.exports = productRouter;
