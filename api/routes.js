'use strict';

module.exports = function(app) {

    let categoryController = require('../controllers/CategoryController.js');
    let productController = require('../controllers/ProductController.js');

    app.route('/v1/category_master')
        .post(categoryController.create); // create a new category master

    app.route('/v1/category_subcategory')
        .post(categoryController.createCatSub) // create the category - sub category relationship
        .post(categoryController.deleteCatSub); // delete the category - sub category relationship

    app.route('/v1/categories')
        .get(categoryController.list); // list all main categories

    app.route('/v1/categories/:category_id')
        .get(categoryController.listSub); // list sub-category of a main category

    app.route('/v1/categories/parent/:category_id')
        .get(categoryController.listParent); // list parent-category of a category

    app.route('/v1/categories/categories/:category_id')
        .get(productController.getProducts); // list products of a category

    // get a product detailed information
    app.route('/v1/products/:product_id')
        .get(productController.get);
};