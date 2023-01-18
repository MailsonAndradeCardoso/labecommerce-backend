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
(1, "mailson@mailson.com", "mailson123"),
(2, "mailson2@mailson.com", "mailson456"),
(3, "mailson3@mailson.com", "mailson789");

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
(1, "God of War", 99.95, "games"),
(2, "FIFA 23", 299.95, "games"),
(3, "WreckFest", 59.95, "games"),
(4, "Far Cry 5", 199.90, "games"),
(5, "Mortal Kombat", 149.65, "games")
(6, "The Last of Us", 269.65, "games")
(7, "Gran Turismo", 69.65, "games")
(8, "Red Dead", 349.65, "games")
(9, " Elden Ring", 259.65, "games")
(10, "Hades", 149.65, "games")
(11, "Forza Horizon", 319.65, "games")
(12, "Lost Ark", 179.65, "games")
(13, "Hitman", 49.65, "games")
(14, "Rainbow Six", 239.65, "games")
(15, "Grand Theft Auto", 289.65, "games")
(16, "Sonic", 289.65, "games")
(17, "Call of Duty", 259.65, "games")
(18, "F1 2023", 149.65, "games")
(19, "Resident Evil", 299.65, "games")
(20, "Horizon Zero Dawn", 279.65, "games")
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
VALUES(4, "mailson4@mailson.com", "134679");
SELECT * FROM users;

--create new product

INSERT INTO products(id, name , price, category)
VALUES(21, "Game code", 109.90, "games");
SELECT * FROM products;

--ex 2
-- refactor the queries of the ex 1
SELECT * FROM products
WHERE id = "11";

--delete user by id
DELETE FROM users WHERE id = "10";

--delete products by id
DELETE FROM products WHERE id="7";

--edit user by id
UPDATE users SET email= "mailson@editado.com", password="1212" WHERE id ="25";

--edit products by id
UPDATE products SET price= 99.90 WHERE id= "15";

--ex 3
--get all products versão 1
--returns the result sorted by the price column in ascending order
--limit the result to 20 starting with the first item

SELECT*FROM products
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
    delivered_at TEXT,
    FOREIGN KEY (buyer_id) REFERENCES users(id)
);
-- ex2
--create two orders for each registered user
INSERT INTO purchases(id, total_price, paid, buyer_id, delivered_at)
VALUES
("1", 99.95, 1, "1", "NULL"),
("2", 149.65, 1, "2", "NULL"),
("3", 299.95, 1, "3", "NULL"),
("4", 69.95, 1, "4", "NULL");

--edit an order's due date status
UPDATE purchases
set delivered_at = DATETIME()
WHERE id = "1";

SELECT * FROM purchases;

DROP TABLE purchases;

-- ex 3
-- Create the query using join to simulate a purchase history endpoint of a given user
-- Mock up a value for the buyer's id, it must be one of those used in exercise 2

SELECT * FROM purchases
INNER JOIN users ON users.id = buyer_id;