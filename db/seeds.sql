INSERT INTO department (name)
VALUES 
('IT'),
('Finance & Accounting'),
('Sales & Marketing'),
('Operations');

INSERT INTO role (title, salary, department_id)
VALUES
('Full Stack Developer', 80000, 1),
('Software Engineer', 120000, 1),
('Accountant', 10000, 2), 
('Finanical Analyst', 150000, 2),
('Marketing Coordindator', 70000, 3), 
('Sales Lead', 90000, 3),
('Project Manager', 100000, 4),
('Operations Manager', 90000, 4);


INSERT INTO employee (first_name, last_name, salary, role_id, manager_id)
VALUES 
('Mark', 'Miller', 120000, 2, null),
('Devin', 'Anderson', 80000, 1, 1),
('Mary', 'Brown', 150000, 4, null),
('Ashley', 'Jones', 10000, 3, 3),
('Tyler', 'Moore', 90000, 6, null),
('Ana', 'Sanchez', 70000, 5, 5),
('Lewis', 'Allen', 100000, 7, null),
('Katherine', 'Green', 90000, 8, 7);