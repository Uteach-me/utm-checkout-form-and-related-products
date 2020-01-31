/* eslint-disable no-console */
const db = require('../database/db.js');

module.exports = {
  getProducts: (req, res) => {
    db.readAll((err, products) => {
      if (err) {
        console.log('Controller error: getProducts');
        res.status(500).end();
      } else {
        console.log('Controller success: getProducts');
        res.send(products);
      }
    });
  },
};
