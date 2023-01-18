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

--delete user by id, delete line based on mocked value
DELETE FROM users WHERE id = "10";
DELETE FROM products WHERE id="7";





