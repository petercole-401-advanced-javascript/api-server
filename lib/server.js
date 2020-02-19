// Set up express server and app

const express = require('express');
const app = express();

// Local in memory Testing Data from Lab 6 data/db.json

const stor = { 
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

app.use(express.json());

// Start of Lab 7 paths

// ---- POSSIBLE MODULARIZER FOR LATER
//
// let object = Object.keys(req.body).toString;
// switch (object) {
// case 'products':
//   object = stor.products;
//   break;
// case 'categories':
//   object = stor.categories;
//   break;
// default:
//   object = stor.products;
//   break;
// }

// Products

app.get('/products', (req, res) => {  // print whats in prod
  res.status(200).json(stor.products).send(stor);
});

app.post('/products', (req, res) => { // write new prod
  stor.categories.push(req.body);
  res.status(201).json(stor.products);
});

app.put('/products', (req, res) => { // replace prod by id
  stor.categories.forEach((element) => {
    let pile = [];
    if (req.body.id === element.id){
      element = req.body;
      pile.push(element);
    } // just in case id is not unique
    res.status(301).json(pile);
  });
});

app.delete('/products', (req, res) => { // delete prod by id
  stor.products.filter(elements => elements.id !== req.body.id);
  res.status(202);
});

// Categories

app.get('/categories', (req, res) => { // print whats in categories
  res.status(200).json(stor.categories);
});

app.post('/categories', (req, res) => { // write new categories

});

app.put('/categories', (req, res) => { // replace categories by id
  
});

app.delete('/categories', (req, res) => { // delete categories by id
  stor.categories.filter(elements => elements.id !== req.body.id);
});


// Export all that good suff

module.exports = {
  server: app,
  start: function(port){
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
  },
};
