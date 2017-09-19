const express = require('express');
let cartRouter = express.Router();
// authRouter.use((req, res, next) => {console.log("test"); next ();});

//import user model
let Cart = require('../models/cart.js');

cartRouter.post('/', (req, res) => {
  let newCart = new Cart(req.body);
  newCart.save((err, data) => {
    if (err) {
      res.status(500).send({"message":"Server Error", err})
    } else {
      res.status(201).send({"message":"Item successfully added to cart", data});
    }
  });
});

cartRouter.get('/', (req, res) => {
  Cart.find(req.query, (err, data) => {
    if (err) {
      res.status(500).send({"message":"Server Error", err})
    } else {
      res.status(200).send({"message":"Items successfully returned", data});
    }
  });
});

cartRouter.get('/:id', (req, res) => {
  Cart.findOne({'_id': req.params.id}, (err, data) => {
    if (err) {
      res.status(500).send({"message":"Server Error", err})
    } else if(data === null) {
      res.status(404).send({"message":"ERROR, data not found", err});
    } else {
      res.status(200).send({"message":"Item successfully returned", data});
    }
  });
});

cartRouter.put("/:id", (req,res) => {
  Cart.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, data) => {
    if(err) {
      res.status(500).send({"message":"ERROR within server", err});
    } else if(data === null) {
      res.status(404).send({"message":"ERROR, data not found", err});
    } else {
      res.status(200).send({"message":"SUCCESS, item updated", data});
    }
  });
});

cartRouter.delete('/:id', (req, res) => {
  Cart.findByIdAndRemove({'_id': req.params.id}, (err, data) => {
    if (err) {
      res.status(500).send({"message":"Server Error", err})
    } else if(data === null) {
      res.status(404).send({"message":"ERROR, data not found", err});
    } else {
      res.status(200).send({"message":"Item successfully removed", data});
    }
  });
});

module.exports = cartRouter;
