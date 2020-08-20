'use strict';

module.exports = function(app) {

    let categoryController = require('../controllers/CategoryController.js');
    let productController = require('../controllers/ProductController.js');

    // list all main categories
    app.route('/v1/categories')
        .get(categoryController.list)
        .post(categoryController.create);

    // list sub-category of a main category
    app.route('/v1/categories/:category_id')
        .get(categoryController.listSub);

    // list parent-category of a category
    app.route('/v1/categories/parent/:category_id')
        .get(categoryController.listParent);

    // list products of a category
    app.route('/v1/categories/categories/:category_id')
        .get(productController.getProducts);

    // get a product detailed information
    app.route('/v1/products/:product_id')
        .get(productController.get);
};