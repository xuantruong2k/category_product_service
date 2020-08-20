'use strict';

const db = require('../config/db.js');

module.exports = {
    // list category
    list: (req, res) => {
        let sql = 'SELECT * FROM category_master WHERE cat_id in (SELECT DISTINCT(cat_id) FROM category);';
        db.query(sql, (err, response) => {
            if (err) {
                console.log('' + err);
            } else {
                res.json(response);
            }
        });
    },
    // list sub-category
    listSub: (req, res) => {
        let sql = 'SELECT * FROM category_master WHERE cat_id in (SELECT sub_cat_id FROM category WHERE cat_id = ?)';
        let cat_id = req.params.category_id;
        db.query(sql, [cat_id], (err, response) => {
            if (err) {
                console.log('' + err);
            } else {
                res.json(response);
            }
        });
    },
    // list parent-category
    listParent: (req, res) => {
        let sql = 'SELECT * FROM category_master WHERE cat_id in (SELECT cat_id FROM category WHERE sub_cat_id = ?)';
        let sub_cat_id = req.params.category_id;
        db.query(sql, [sub_cat_id], (err, response) => {
            if (err) {
                console.log('' + err);
            } else {
                res.json(response);
            }
        });
    },
    // create new category master
    create: (req, res) => {
        console.log('create !!!');
        let data = req.body;
        console.dir(data);
        let cat_id = "abc12345678901234567890123456789";
        let cat_name = data.cat_name;
        let cat_desc = data.cat_desc;

        let sql = 'INSERT INTO category_master(cat_id, cat_name, cat_desc) VALUES(?, ?, ?)';
        db.query(sql, [cat_id, cat_name, cat_desc], (err, response) => {
            if (err) {
                console.log("" + err);
            } else {
                let obj = {
                    'cat_id': cat_id,
                    'cat_name': cat_name,
                    'cat_desc': cat_desc
                };
                res.json(obj);
            }
        });
    },

}