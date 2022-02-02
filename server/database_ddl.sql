CREATE DATABASE twitter;

/*TABLES*/
CREATE TABLE post (post_id SERIAL PRIMARY KEY, postDescription VARCHAR(255));
CREATE TABLE comments (comment_id SERIAL PRIMARY KEY, commentDescription VARCHAR(255), post_id INT, CONSTRAINT fk_post FOREIGN KEY(post_id) REFERENCES post(post_id));
