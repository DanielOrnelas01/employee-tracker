DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db; 

CREATE TABLE department (
    id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL, 
    salary DECIMAL NOT NULL,
    department_id INTEGER, 
     FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    role_id INTEGER, 
    manager_id INTEGER,
   FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);