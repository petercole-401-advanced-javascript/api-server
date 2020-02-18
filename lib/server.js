'use strict';

// Set up express server and app

const express = require('express');
const app = express();

// Set up blank categories to send new into

let categories = [];

// Local in memory Testing Data from Lab 6 data/db.json

const memObj = { 
  categories: [
    { '_id': 1, 
      'name': 'climbing', 
      'display_name': 'Climbing_Gear', 
      'description': 'products for climbing rock and ice',
    },
  ],
  products: [
    { '_id': 1, 
      'category': 'climbing', 
      'name': 'axe',
      'display_name': 'Ice_Axe', 
      'description': 'spike shaft adze and pick tool designed for steep snow and ice' },
  ],
};

// Day 7 In Class paths
app.use(express.json());

app.get('/categories', (req, res) => {
  res.status(200).json(categories);
});

app.post('/categories', (req, res) => {
  categories.push(req.body);
  res.status(201).json(req.body);
});

// Start of Lab 7 paths

app.get('/products', (req, res) => {});
app.post('/products', (req, res) => {});
app.put('/products', (req, res) => {});
app.delete('/products', (req, res) => {});

app.get('/categories', (req, res) => {});
app.post('/categories', (req, res) => {});
app.put('/categories', (req, res) => {});
app.delete('/categories', (req, res) => {});


// Export all that good suff

module.exports = {
  server: app,
  start: function(port){
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
  },
};
