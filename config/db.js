'use strict';

const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'test_user',
    password: 'test_password',
    database: 'category_product_service',
    multipleStatements: true
});

db.connect(function(err) {
    if (err) throw err;
});

module.exports = db;