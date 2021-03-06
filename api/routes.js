'use strict';

module.exports = function(app) {

    let categoryController = require('../controllers/CategoryController.js');
    let productController = require('../controllers/ProductController.js');

    app.route('/v1/category_master')
        .post(categoryController.create); // create a new category master

    app.route('/v1/category_subcategory')
        .post(categoryController.createCatSub) // create the category - sub category relationship

    app.route('/v1/categories/:category_id?:sub_category_id')
        .delete(categoryController.deleteCatSub); // delete the category - sub category relationship

    app.route('/v1/categories')
        .get(categoryController.list); // list all main categories

    app.route('/v1/categories/:category_id')
        .get(categoryController.listSub); // list sub-category of a main category

    app.route('/v1/categories/parent/:category_id')
        .get(categoryController.listParent); // list parent-category of a category

    app.route('/v1/categories/categories/:category_id')
        .get(productController.getProducts); // list products of a category

    app.route('/v1/product_master')
        .post(productController.create); // create a new product master

    app.route('/v1/products/:product_id')
        .get(productController.get) // get a product detailed information
        .put(productController.updateAttribute); // update a attribute of a product

    app.route('/v1/products/attributes')
        .post(productController.addAttribute); // add a new attribute

    app.route('/v1/products/atrributes/:product_id?:attribute_key')
        .delete(productController.deleteAttribute); // delete a attribute

    app.route('/v1/products/category_product')
        .post(productController.addProductToCategory) // add a category - product relationship

    app.route('/v1/products/category_product/:category_id?product_id:product_id')
        .delete(productController.deleteProductFromCategory); // delete a category - product relationship
};