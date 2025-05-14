CREATE DATABASE pessoas;
USE pessoas;

CREATE TABLE users(
	user_id INT PRIMARY KEY AUTO_INCREMENT,
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
    user_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP,
    deleted_at TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);