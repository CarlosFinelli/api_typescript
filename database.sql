CREATE DATABASE pessoas;
USE pessoas;

CREATE TABLE users(
	id_user INT PRIMARY KEY AUTO_INCREMENT,
    name TEXT,
    email TEXT,
    password TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP
);

CREATE TABLE task(
	id_task INT PRIMARY KEY AUTO_INCREMENT,
    name TEXT,
    finished BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP
);