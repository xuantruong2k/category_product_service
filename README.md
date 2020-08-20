# category_product_service

That repo is used for practice the simple category & product relationships

-----
## Update

**2020/08/20**
+ update api
+ update readme

## To do
+ reponse error

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

> the **category_master** table contains not-frequenly (or no-change) informaion of a category

| category_master |    |    |
|----------|-------------|-------------|
| cat_id   | string(32)  | primary key |
| cat_name | string(64)  |             |
| cat_desc | string(256) |             |

> the **category** table contains many-to-many relationship between category. Such as a (parent) category can contain many sub-categories and a sub-category can belongs to many (parent) category

| category |    |    |
|------------|-------------|---------------------------|
| cat_id     | string(32)  | primary key & foreign key |
| sub_cat_id | string (32) | primary key & foreign key |

> the **product_master** table contains not-frequenly (or no-change) information of a product

| product_master |    |    |
|--------------------|-------------|-------------|
| product_id         | string(32)  | primary key |
| product_name       | string(64)  |             |
| product_short_desc | string(256) |             |
| product_long_desc  | string      |             |

> the **product_attributes** table make the product can have many attributes

| product_attributes |    |    |
|--------------------|------------|--------------------------|
| product_id         | string(32) | primary key & foreign key|
| attribute_key      | string(64) | primary key              |
| attribute_value    | string(64) |                          |

> the **category_product** table contains many-to-many relationship between category and product. Such as a category contains many products, and a product can belongs to many categories

| category_product |    |    |
|------------------|------------|---------------------------|
| cat_id           | string(32) | primary key & foreign key |
| product_id       | string(32) | primary key & foreign key |

-----
## API

### client

| list all main categories | GET |
|-------------------------|-----|
| /v1/categories          ||

| get sub-categories from a main category| GET |
|-----------------------------------------|-----|
| /v1/categories/:category_id             |  |

| get products of a category | GET |
|----------------------------------------|-----|
| /v1/categories/categories/:category_id |  |

| get product detailed information | GET |
|----------------------------------|-----|
| /v1/products/:product_id         |  |


### admin user

| add new category master | POST |
|-------------------------|-----|
| /v1/category_master     | json {"cat_name":string(64), "cat_desc":string(256)} |

| add new product master | POST |
|------------------------|------|
| /v1/product_master     | json {"product_name":string(64), "product_short_desc":string(256), "product_long_desc":string} |

| create a category - sub category relationship | POST |
|-----------------------------------------------|------|
| /v1/category_subcategory                      | json {"cat_id":string(32), "sub_cat_id":string(32)} |

| delete a category - sub category relationship | DELETE |
|-----------------------------------------------|--------|
| /v1/categories/:category_id?sub_cat_id:sub_category_id  |        |

| get all parent categories of a category | GET |
|-----------------------------------------|-----|
| /v1/categories/parent/:category_id |  |

| create a new attribute of a product | POST |
|--------------------------------------|------|
| /v1/products/attributes/             | json {"product_id": string(32), "attribute_key":string(64), "attribute_value":string(64)} |

| delete a attribute of a product | DELETE |
|---------------------------------|--------|
| /v1/products/attributes/:product_id?attribute_key:attribute_key|   |

| update a attribute of a product | PUT |
|---------------------------------|-----|
| /v1/products/:product_id | json {"attribute_key":string(64),"attribute_value":string(64)} |

| add a category - product relationship | POST |
|---------------------------------------|------|
| /v1/products/category_product | json {"cat_id":string(32),"product_id":string(32)} |

| delete a category - prodcut relationship | DELETE |
|------------------------------------------|--------|
| /v1/products/category_product/:category_id?product_id:product_id | |

