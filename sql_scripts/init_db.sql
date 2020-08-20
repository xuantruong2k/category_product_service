-- create database
CREATE DATABASE category_product_service;

USE category_product_service;

-- create and grant permision to user in order to connect to db
CREATE USER 'test_user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'test_password';
GRANT ALL PRIVILEGES ON category_product_service.* TO 'test_user'@'localhost';
FLUSH PRIVILEGES;

-- create table

--- table: category master
CREATE TABLE 'category_master' (
    'cat_id' varchar(32) not null,
    'cat_name' varchar(64) not null,
    'cat_desc' varchar(256),
    PRIMARY KEY('cat_id')
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--- table: product master
CREATE TABLE 'product_master' (
    'product_id' varchar(32) not null,
    'product_name' varchar(128) not null,
    'product_short_desc' varchar(256),
    'product_long_desc' text,
    PRIMARY KEY('product_id')
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--- table: category
CREATE TABLE 'category' (
    'cat_id' varchar(32) not null,
    'sub_cat_id' varchar(32) not null,
    PRIMARY KEY('cat_id', 'sub_cat_id'),
    FOREIGN KEY('cat_id') REFERENCES category_master('cat_id')
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--- table: category_product
CREATE TABLE 'category_product' (
    'cat_id' varchar(32) not null,
    'product_id' varchar(32) not null,
    PRIMARY KEY('cat_id', 'product_id'),
    FOREIGN KEY('cat_id') REFERENCES category_master('cat_id'),
    FOREIGN KEY('product_id') REFERENCES product_master('product_id')
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--- table: product attributes
CREATE TABLE 'product_attributes' (
    'product_id' varchar(32) not null,
    'attr_key' varchar(64) not null,
    'attr_value' varchar(256),
    PRIMARY KEY('product_id', 'attr_key'),
    FOREIGN KEY('product_id') REFERENCES product_master('product_id')
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
