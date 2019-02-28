CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    creator varchar (255),
    eater varchar (255),
    burger_name varchar(255),
    devoured boolean, 
    PRIMARY KEY (id)
)

