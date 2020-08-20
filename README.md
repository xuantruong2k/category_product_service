# category_product_service

That repo is used for practice the simple category & product relationships

-----
## Update

----

# DESCRIPTIONS

*CATEGORY:*
+ A category contains 1 or more sub-category
+ A sub-category belongs to 1 or more (parent) category

*PRODUCT:*
+ A product belongs to 1 or more category
+ A product has unlimited attributes...

## Requirements:

*Client:*
+ select a category to show sub-category
+ select a sub-category to show the products in that sub-category
+ select a product to show the detailed information

*Admin user:*
+ add new category
+ edit a category:
   - update its sub-categories / parent-category
+ add a new product
+ edit a product:
   - add / remove / update a attribute
   - change category which that product belongs to


## My notes:
+ parent-category = category = sub-category
+ a category has unlimited sub categories
+ a category has unlimited parent categories
+ a product has unlimited categories which it belongs to
+ a product has unlimited attributes

-----
## DATABASE

### tables:

| category_master |    |    |
|----------|-------------|-------------|
| cat_id   | string(32)  | primary key |
| cat_name | string(64)  |             |
| cat_desc | string(256) |             |

| category |    |    |
|------------|-------------|---------------------------|
| cat_id     | string(32)  | primary key & foreign key |
| sub_cat_id | string (32) | primary key & foreign key |

| product_master |    |    |
|--------------------|-------------|-------------|
| product_id         | string(32)  | primary key |
| product_name       | string(64)  |             |
| product_short_desc | string(256) |             |
| product_long_desc  | string      |             |

| product_attributes |    |    |
|--------------------|------------|--------------------------|
| product_id         | string(32) | primary key & foreign key|
| attribute_key      | string(64) | primary key              |
| attribute_value    | string(64) |                          |

| category_product |    |    |
|------------------|------------|---------------------------|
| cat_id           | string(32) | primary key & foreign key |
| product_id       | string(32) | primary key & foreign key |
