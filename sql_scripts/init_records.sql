-- insert some sample data

INSERT INTO 'category_master' VALUES('catdt100000000000000000000000001', 'điện tử', 'ngành hàng điện tử');
INSERT INTO 'category_master' VALUES('catdt200000000000000000000000001', 'điện thoại', 'ngành hàng điện thoại');
INSERT INTO 'category_master' VALUES('catcnc00000000000000000000000001', 'công nghệ cao', 'ngành hàng công nghệ cao');
INSERT INTO 'category_master' VALUES('catmt100000000000000000000000001', 'máy tính', 'ngành hàng máy tính');
INSERT INTO 'category_master' VALUES('catmtdb1000000000000000000000001', 'máy tính để bàn', 'ngành hàng máy tính để bàn');
INSERT INTO 'category_master' VALUES('catmtxt1000000000000000000000001', 'máy tính xách tay', 'ngành hàng máy tính xách tay');

INSERT INTO 'product_master' VALUES('prodtiphone120000000000000000001', 'iphone 12', 'điện thoại iphone chính hãng', 'iphone 12 chính hãng, cấu hình siêu cao, siêu khủng...');
INSERT INTO 'product_master' VALUES('prodtiphone12max0000000000000001', 'iphone 12 max', 'điện thoại iphone chính hãng', 'iphone 12 max chính hãng, cấu hình siêu cao, siêu khủng...');
INSERT INTO 'product_master' VALUES('prodtiphone12pro0000000000000001', 'iphone 12 pro', 'điện thoại iphone chính hãng', 'iphone 12 pro chính hãng, cấu hình siêu cao, siêu khủng...');
INSERT INTO 'product_master' VALUES('prodtiphone12promax0000000000001', 'iphone 12 pro max', 'điện thoại iphone chính hãng', 'iphone 12 pro max chính hãng, cấu hình siêu cao, siêu khủng...');
INSERT INTO 'product_master' VALUES('prodmacbookair100000000000000001', 'mac book air 2020', 'mac book air 2020 chính hãng', 'siêu máy tính mac book air cấu hình siêu cao, siêu khủng...');
INSERT INTO 'product_master' VALUES('prodmacbookpro100000000000000001', 'mac book pro 2020', 'mac book pro 2020 chính hãng', 'siêu máy tính mac book pro cấu hình siêu cao, siêu khủng...');

INSERT INTO 'category' VALUES('catdt100000000000000000000000001', 'catdt200000000000000000000000001');
INSERT INTO 'category' VALUES('catdt100000000000000000000000001', 'catmt100000000000000000000000001');
INSERT INTO 'category' VALUES('catcnc00000000000000000000000001', 'catdt100000000000000000000000001');
INSERT INTO 'category' VALUES('catcnc00000000000000000000000001', 'catdt200000000000000000000000001');
INSERT INTO 'category' VALUES('catdt100000000000000000000000001', 'catmtdb1000000000000000000000001');
INSERT INTO 'category' VALUES('catdt100000000000000000000000001', 'catmtxt1000000000000000000000001');

INSERT INTO 'category_product' VALUES('catdt200000000000000000000000001', 'prodtiphone120000000000000000001');
INSERT INTO 'category_product' VALUES('catdt200000000000000000000000001', 'prodtiphone12max0000000000000001');
INSERT INTO 'category_product' VALUES('catdt200000000000000000000000001', 'prodtiphone12pro0000000000000001');
INSERT INTO 'category_product' VALUES('catdt200000000000000000000000001', 'prodtiphone12promax0000000000001');

INSERT INTO 'category_product' VALUES('catcnc00000000000000000000000001', 'prodtiphone120000000000000000001');
INSERT INTO 'category_product' VALUES('catcnc00000000000000000000000001', 'prodtiphone12max0000000000000001');
INSERT INTO 'category_product' VALUES('catcnc00000000000000000000000001', 'prodtiphone12pro0000000000000001');
INSERT INTO 'category_product' VALUES('catcnc00000000000000000000000001', 'prodtiphone12promax0000000000001');
INSERT INTO 'category_product' VALUES('catcnc00000000000000000000000001', 'prodmacbookair100000000000000001');
INSERT INTO 'category_product' VALUES('catcnc00000000000000000000000001', 'prodmacbookpro100000000000000001');

INSERT INTO 'product_attributes' VALUES('prodtiphone120000000000000000001', 'color', 'trắng');
INSERT INTO 'product_attributes' VALUES('prodtiphone120000000000000000001', 'capacity', '128 gb');
