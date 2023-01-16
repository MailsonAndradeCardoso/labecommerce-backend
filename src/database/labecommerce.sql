-- Active: 1673885846449@@127.0.0.1@3306

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

-- insert products into tables
INSERT INTO products(id, name , price , category)
VALUES
(1, "God of War", 99.95, "games"),
(2, "FIFA 23", 299.95, "games"),
(3, "WreckFest", 59.95, "games"),
(4, "Far Cry 5", 199.90, "games"),
(5, "The Last of Us", 249.65, "games")

-- read tables
SELECT * FROM products;