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
+ add new category master
+ edit a category & sub-category relationship:
   - add new category & sub-category relationship
   - delete new category & sub-category relationship
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

> the *category_master* table contains not-frequenly (or no-change) informaion of a category

| category_master |    |    |
|----------|-------------|-------------|
| cat_id   | string(32)  | primary key |
| cat_name | string(64)  |             |
| cat_desc | string(256) |             |

> the *category* table contains many-to-many relationship between category. Such as a (parent) category can contain many sub-categories and a sub-category can belongs to many (parent) category

| category |    |    |
|------------|-------------|---------------------------|
| cat_id     | string(32)  | primary key & foreign key |
| sub_cat_id | string (32) | primary key & foreign key |

> the *product_master* table contains not-frequenly (or no-change) information of a product

| product_master |    |    |
|--------------------|-------------|-------------|
| product_id         | string(32)  | primary key |
| product_name       | string(64)  |             |
| product_short_desc | string(256) |             |
| product_long_desc  | string      |             |

> the *product_attributes* table make the product can have many attributes

| product_attributes |    |    |
|--------------------|------------|--------------------------|
| product_id         | string(32) | primary key & foreign key|
| attribute_key      | string(64) | primary key              |
| attribute_value    | string(64) |                          |

> the *category_product* table contains many-to-many relationship between category and product. Such as a category contains many products, and a product can belongs to many categories

| category_product |    |    |
|------------------|------------|---------------------------|
| cat_id           | string(32) | primary key & foreign key |
| product_id       | string(32) | primary key & foreign key |