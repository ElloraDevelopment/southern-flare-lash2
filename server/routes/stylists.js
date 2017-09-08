const express = require('express');
let stylistRouter = express.Router();

//import model
let Stylist = require('../models/stylists.js');

stylistRouter.post('/', (req, res) => {
  let newStylist = new Stylist(req.body);
  newStylist.save((err, data) => {
    if (err) {
      res.status(500).send({"message":"Server Error", err})
    } else {
      res.status(201).send({"message":"Item successfully added", data});
    }
  });
});

stylistRouter.get('/', (req, res) => {
  Stylist.find(req.query, (err, data) => {
    if (err) {
      res.status(500).send({"message":"Server Error", err})
    } else {
      res.status(200).send({"message":"Items successfully returned", data});
    }
  });
});

stylistRouter.get('/:id', (req, res) => {
  Stylist.findOne({'_id': req.params.id}, (err, data) => {
    if (err) {
      res.status(500).send({"message":"Server Error", err})
    } else if(data === null) {
      res.status(404).send({"message":"ERROR, data not found", err});
    } else {
      res.status(200).send({"message":"Item successfully returned", data});
    }
  });
});

stylistRouter.put("/:id", (req,res) => {
  Stylist.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, data) => {
    if(err) {
      res.status(500).send({"message":"ERROR within server", err});
    } else if(data === null) {
      res.status(404).send({"message":"ERROR, data not found", err});
    } else {
      res.status(200).send({"message":"SUCCESS, item updated", data});
    }
  });
});

stylistRouter.delete('/:id', (req, res) => {
  Stylist.findByIdAndRemove({'_id': req.params.id}, (err, data) => {
    if (err) {
      res.status(500).send({"message":"Server Error", err})
    } else if(data === null) {
      res.status(404).send({"message":"ERROR, data not found", err});
    } else {
      res.status(200).send({"message":"Item successfully removed", data});
    }
  });
});

module.exports = stylistRouter;
