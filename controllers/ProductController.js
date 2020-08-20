'use strict';

const db = require('../config/db.js');

module.exports = {

    // list all product belongs to a category
    getProducts: (req, res) => {
        let sql = 'SELECT product_id, product_name FROM product_master WHERE product_id IN (SELECT product_id FROM category_product WHERE cat_id = ?);';
        let cat_id = req.params.category_id;
        db.query(sql, [cat_id], (err, response) => {
            if (err) {
                console.log('' + err);
            } else {
                res.json(response);
            }
        });
    },
    // get a product's detailed information
    get: (req, res) => {
        let sql = 'SELECT * FROM product_master WHERE product_id = ?;';
        let product_id = req.params.product_id;
        db.query(sql, [product_id], (err, response) => {
            if (err) {
                console.log('' + err);
            } else {
                res.json(response);
            }
        });
    }
}
