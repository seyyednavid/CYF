CREATE TABLE cyf_group (
    id serial primary key, 
    title varchar(255), 
    full_name varchar(50), 
    email varchar(255), 
    question varchar(255)
);

INSERT INTO cyf_group(title,full_name,email,question) 
VALUES ('Mr','Andrius','isin.andrius@gmail.com','How can I join?');