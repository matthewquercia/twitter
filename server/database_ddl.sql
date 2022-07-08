CREATE DATABASE twitter;

/*TABLES*/
CREATE TABLE post (post_id SERIAL PRIMARY KEY, postDescription VARCHAR(255));
CREATE TABLE comments (comment_id SERIAL PRIMARY KEY, commentDescription VARCHAR(255), post_id INT, CONSTRAINT fk_post FOREIGN KEY(post_id) REFERENCES post(post_id));
CREATE TABLE users (user_id SERIAL PRIMARY KEY, username VARCHAR(10), password VARCHAR(10));


/*DML*/
ALTER TABLE users ALTER COLUMN password TYPE varchar(100);

/*
Notes
---------
login to postgres: psql -U postgres
This will show you columns and data types for a table: \d table_name
Lists all DBs: \l
connect to a db: \c db_name 
*/
