USE departments_db;

INSERT INTO departments (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");
       
INSERT INTO roles (title, department, salary)
VALUES ("Sales Lead","Sales",100000),
       ("Salesperson","Sales",80000),
       ("Lead Engineer","Engineering",150000),
       ("Software Engineer","Engineering",120000),
       ("Account Manager","Finance",160000),
       ("Accountant","Finance",125000),
       ("Legal Team Lead","Legal",250000),
       ("Lawyer","Legal",190000);

INSERT INTO employees (first_name, last_name, title, department, salary, manager)
VALUES ("John","Doe","Sales Lead","Sales",100000,null),
       ("Mike","Chan","Salesperson","Sales",80000,"John Doe"),
       ("Asheley","Rodriguez","Lead Engineer","Engineering",150000,null),
       ("Kevin","Tupik","Software Engineer","Engineering",120000,"Asheley Rodriguez"),
       ("Kunal","Singh","Account Manager","Finance",160000,null),
       ("Malia","Brown","Accountant","Finance",125000,"Kunal Singh"),
       ("Sarah","Lourd","Legal Team Lead","Legal",250000,null),
       ("Tom","Allen","Lawyer","Legal",190000,"Sarah Lourd");