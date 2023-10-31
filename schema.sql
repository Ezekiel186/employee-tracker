DROP DATABASE IF EXISTS departments_db;
CREATE DATABASE departments_db;

USE departments_db;

DROP TABLE IF EXISTS departments;
CREATE TABLE departments(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name TEXT NOT NULL
);

DROP TABLE IF EXISTS roles;
CREATE TABLE roles(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title TEXT NOT NULL,
    department TEXT NOT NULL,
    salary INT NOT NULL
);