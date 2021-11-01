'use strict';
// catRoute
const express = require('express');
const { cat_list_get } = require('../controllers/catController');
const router = express.Router();

router.get('/', cat_list_get);

router.get('/:id', (req, res) => {
  res.send('You reqested a cat whose id is ' + req.params.id);
});

router.post('/', (req, res) => {
  res.send('From this endpoint you can add cats.');
});

router.put('/', (req, res) => {
  res.send('From this endpoint you can modify cats.');
});

router.delete('/', (req, res) => {
  res.send('From this endpoint you can delete cats.');
});

module.exports = router;
