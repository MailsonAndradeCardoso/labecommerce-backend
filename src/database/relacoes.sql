-- Active: 1673978214023@@127.0.0.1@3306

--ex 2 template
--create users table
CREATE Table users(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password Text NOT NULL
);

--delete table
DROP TABLE users;

--read tabela
SELECT * FROM users;

--insert datas into tables
INSERT INTO users(id, email , password)
VALUES
("u01", "mailson@mailson.com", "mailson123"),
("u02", "mailson2@mailson.com", "mailson456"),
("u03", "mailson3@mailson.com", "mailson789");

--ex 3 template
-- create product tables
CREATE TABLE products(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    category TEXT NOT NULL
);

DROP TABLE products;

-- insert products into tables
INSERT INTO products(id, name , price , category)
VALUES
("p01", "God of War", 99.95, "games"),
("p02", "FIFA 23", 299.95, "games"),
("p03", "WreckFest", 59.95, "games"),
("p04", "Far Cry 5", 199.90, "games"),
("p05", "Mortal Kombat", 149.65, "games"),
("p06", "The Last of Us", 269.65, "games"),
("p07", "Gran Turismo", 69.65, "games"),
("p08", "Red Dead", 349.65, "games"),
("p09", " Elden Ring", 259.65, "games"),
("p10", "Hades", 149.65, "games"),
("p11", "Forza Horizon", 319.65, "games"),
("p12", "Lost Ark", 179.65, "games"),
("p13", "Hitman", 49.65, "games"),
("p14", "Rainbow Six", 239.65, "games"),
("p15", "Grand Theft Auto", 289.65, "games"),
("p16", "Sonic", 289.65, "games"),
("p17", "Call of Duty", 259.65, "games"),
("p18", "F1 2023", 149.65, "games"),
("p19", "Resident Evil", 299.65, "games"),
("p20", "Horizon Zero Dawn", 279.65, "games")
;

-- read tables
SELECT * FROM products;

-- ex 17/01
--ex1
--return all users
SELECT * FROM users;

--return all products
SELECT * FROM products;

--search products by name
SELECT * FROM products
WHERE name = "WreckFest";

-- create new user
INSERT INTO users(id, email , password)
VALUES("u04", "mailson4@mailson.com", "134679");
SELECT * FROM users;

--create new product

INSERT INTO products(id, name , price, category)
VALUES("p21", "Game code", 109.90, "games");
SELECT * FROM products;

--ex 2
-- refactor the queries of the ex 1
SELECT * FROM products
WHERE id = "p11";

--delete user by id
DELETE FROM users WHERE id = "u20";

--delete products by id
DELETE FROM products WHERE id="u20";

--edit user by id
UPDATE users SET email= "mailson@mailson.com", password="1212" WHERE id ="u20";

--edit products by id
UPDATE products SET price= 99.90 WHERE id= "u15";

--ex 3
--get all products versão 1
--returns the result sorted by the price column in ascending order
--limit the result to 20 starting with the first item

SELECT * FROM products
ORDER BY price ASC
LIMIT 20;

--get all products versão 2
--mock a price range, for example between 100.00 and 300.00
--returns products with prices within the mocked range in ascending order

SELECT * FROM products
WHERE price >="100" AND price <="300"
ORDER BY price ASC;

--18/01
--ex 1 
-- create order table

CREATE TABLE purchases(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    total_price REAL UNIQUE NOT NULL,
    paid INTEGER NOT NULL,
    buyer_id TEXT NOT NULL, 
    FOREIGN KEY(buyer_id) REFERENCES users(id)
);
-- ex2
--create two orders for each registered user
INSERT INTO purchases
VALUES
("pur01", 99.95, 1, "u01"),
("pur02", 149.65, 1, "u02"),
("pur03", 299.95, 1, "u03");


--edit an order's due date status
UPDATE purchases
set delivered_at = DATETIME()
WHERE user.id = "u01";

SELECT * FROM purchases;

DROP TABLE purchases;

-- ex 3
-- Create the query using join to simulate a purchase history endpoint of a given user
-- Mock up a value for the buyer's id, it must be one of those used in exercise 2

SELECT * FROM purchases
INNER JOIN users ON users.id = buyer_id;

--19/01
--ex 1
--create the relationship table

CREATE TABLE purchases_products(
    purchase_id TEXT NOT NULL,
    product_id TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (purchase_id) REFERENCES purchases(id)
    FOREIGN key (product_id) REFERENCES products(id)
);

INSERT INTO purchases_products(purchase_id, product_id, quantity)
VALUES
("pur01", "pro01", 5),
("pur02", "pro02", 3),
("pur03", "pro03", 2);

SELECT * FROM purchases_products;
DROP TABLE purchases_products;

--ex 2
--Show in a query all columns from related tables (purchases_products, purchases and products).
SELECT
purchases.id AS purchaseId,
purchases.total_price AS totalPrice,
purchases.paid,
purchases.delivered_at as dateD,
purchases.buyer_id as buyerId,
products.id as productId,
products.name as productName,
products.price,
products.category
FROM purchases
LEFT JOIN purchases_products
ON purchases_products.purchase_id = purchases.id
INNER JOIN products
ON purchases_products.product_id = products.id;


--23/01





