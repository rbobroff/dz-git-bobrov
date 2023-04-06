# hw03_sql

CREATE DATABASE chocolate_db;


CREATE TYPE Color_Type AS ENUM ('белый', 'черный');


CREATE TABLE manufacturer(
id SERIAL PRIMARY KEY NOT NULL ,
manufacturer_name VARCHAR(50) NOT NULL UNIQUE
);


CREATE TABLE color(
id SERIAL PRIMARY KEY  NOT NULL,
color Color_Type NOT NULL UNIQUE
);


CREATE TABLE marka(
id SERIAL PRIMARY KEY NOT NULL,
marka_name VARCHAR(50) NOT NULL UNIQUE
);

# далее создается таблица с ограничениями

CREATE TABLE chocolate_product(
	product_id SERIAL PRIMARY KEY  NOT NULL,
	type_chocolate VARCHAR(50) NOT NULL,
	price NUMERIC NOT NULL,
	weight REAL NOT NULL,
	manufacturer_id INTEGER NOT NULL DEFAULT 1,
	color_id INTEGER NOT NULL DEFAULT 1,
	marka_id INTEGER NOT NULL DEFAULT 1,
	FOREIGN KEY (manufacturer_id) REFERENCES manufacturer(id),
	FOREIGN KEY (color_id) REFERENCES color(id),
	FOREIGN KEY (marka_id) REFERENCES marka(id)
);



