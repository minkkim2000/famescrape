CREATE DATABASE famescrape;
USE famescrape;

CREATE TABLE user_info(
id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(60) NOT NULL,
age VARCHAR(40) NOT NULL,
location VARCHAR(60) NOT NULL,
gender VARCHAR(60),
race VARCHAR(50),
PRIMARY KEY (id)
);