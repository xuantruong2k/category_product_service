'use strict';

const db = require('../config/db.js');
const utils = require('../utils/utils.js');
const define = require('../config/define.js');

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
    },
    // create new product master
    create: (req, res) => {
        let data = req.body;
        let product_id = utils.random(define.UUID_LENGTH);
        let product_name = data.product_name;
        let product_short_desc = data.product_short_desc;
        let product_long_desc = data.product_long_desc;

        // validate input
        if (utils.isEmpty(product_name)) {
            console.log('Product name is empty!');
            return;
        }

        let sql = 'INSERT INTO product_master(product_id, product_name, product_short_desc, product_long_desc) VALUES(?, ?, ?, ?)';
        db.query(sql, [product_id, product_name, product_short_desc, product_long_desc], (err, response) => {
            if (err) {
                console.log("" + err);
            } else {
                let obj = {
                    'product_id': product_id,
                    'product_name': product_name,
                    'product_short_desc': product_short_desc,
                    'product_long_desc': product_long_desc
                };
                res.json(obj);
            }
        });
    },
    // add a attribute
    addAttribute: (req, res) => {
        let data = req.body;
        let product_id = data.product_id;
        let attribute_key = data.attribute_key;
        let attribute_value = data.attribute_value;
        if (utils.isEmpty(product_id) || utils.isEmpty(attribute_key)) {
            console.log('Product id or attribute key is empty!');
            return;
        }
        let sql = 'INSERT INTO product_attributes(product_id, attribute_key, attribute_value) VALUES(?, ?, ?)';
        db.query(sql, [product_id, attribute_key, attribute_value], (err, response) => {
            if (err) {
                console.log("" + err);
            } else {
                let obj = {
                    'product_id': product_id,
                    'attribute_key': attribute_key,
                    'attribute_value': attribute_value
                };
                res.json(obj);
            }
        });
    },
    // delete a attribute
    deleteAttribute: (req, res) => {
        let product_id = req.params.product_id;
        let attribute_key = req.params.attribute_key;
        if (utils.isEmpty(product_id) || utils.isEmpty(attribute_key)) {
            console.log('Product id or attribute key is empty!');
            return;
        }
        let sql = 'DELETE FROM product_attributes WHERE product_id = ? AND attribute_key = ?';
        db.query(sql, [product_id, attribute_key], (err, response) => {
            if (err) {
                console.log("" + err);
            } else {
                res.status(200).end();
            }
        });
    },
    // update a attribute
    updateAttribute: (req, res) => {
        let product_id = req.params.product_id;
        let data = req.body;
        let attribute_key = data.attribute_key;
        let attribute_value = data.attribute_value;
        if (utils.isEmpty(product_id) || utils.isEmpty(attribute_key)) {
            console.log('Product id or attribute key is empty!');
            return;
        }
        let sql = 'UPDATE product_attributes SET attribute_value = ? WHERE product_id = ? AND attribute_key = ?';
        db.query(sql, [attribute_value, product_id, attribute_key], (err, response) => {
            if (err) {
                console.log("" + err);
            } else {
                let obj = {
                  'product_id': product_id,
                  'attribute_key': attribute_key,
                  'attribute_value': attribute_value
                };
                res.json(obj);
            }
        });
    },
    // add category & product relationship
    addProductToCategory: (req, res) => {
        let data = req.body;
        let cat_id = data.cat_id;
        let product_id = data.product_id;
        // validate input
        if (utils.isEmpty(cat_id) || utils.isEmpty(product_id)) {
            console.log('Category id or product id is empty!');
            return;
        }
        let sql = 'INSERT INTO category_product(cat_id, product_id) VALUES(?, ?)';
        db.query(sql, [cat_id, product_id], (err, response) => {
            if (err) {
                console.log("" + err);
            } else {
                let obj = {
                    'cat_id': cat_id,
                    'product_id': product_id
                };
                res.json(obj);
            }
        });
    },
    // delete category & product relationship
    deleteProductFromCategory: (req, res) => {
        let cat_id = req.params.category_id;
        let product_id = req.params.product_id;
        // validate input
        if (utils.isEmpty(cat_id) || utils.isEmpty(product_id)) {
            console.log('Product id or attribute key is empty!');
            return;
        }

        let sql = 'DELETE FROM category_product WHERE cat_id = ? AND product_id = ?';
        db.query(sql, [cat_id, product_id], (err, response) => {
            if (err) {
                console.log("" + err);
            } else {
                res.status(200).end();
            }
        });
    },
}
