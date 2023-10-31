const inquirer = require("inquirer");
const fs = require("fs");
const express = require('express');
const mysql = require('mysql2');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'departments_db'
  },
  console.log(`Connected to the departments_db database.`)
);

const questions = [{ 
type: "list",
name: "options",
message: "What would you like to do?",
choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role"]
}];

function init() {
    inquirer
        .prompt(questions)
        .then(input => {
            switch (input.options) {
                case "View All Departments": 
                    db.query('SELECT * from departments', function (error, results){
                        console.log(results);
                        init();
                    })
                    break;
                case "View All Roles":
                    db.query('SELECT * from roles', function (error, results){
                        console.log(results);
                        init();
                    })
                    break;
                case "View All Employees":
                    db.query('SELECT * from employees', function (error, results){
                        console.log(results);
                        init();
                    })
                    break;
                case "Add a Department" :
                    inquirer
                        .prompt([
                        {
                            type: 'input',
                            name: 'departmentName',
                            message: 'What is the name of the department?',
                        },
                    ])
                    .then(input => { 
                        const departmentName = input.departmentName;
                        db.query(`INSERT INTO departments (name)
                        VALUES ("${departmentName}")`, function (error, results){
                            console.log(`Added ${departmentName} department to the database`);
                            init();
                        })
                    });
                    break
                case "Add a Role" :
                    inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'roleName',
                                message: 'What is the name of the role?',
                            },
                            {
                                type: 'input',
                                name: 'roleSalary',
                                message: 'What is the Salary of the role?',
                            },
                            {
                                type: 'list',
                                name: 'roleDepartment',
                                message: 'Which department does it belong to?',
                                choices: ["Sales","Engineering","Finance","Legal"]
                            },
                        ])
                        .then(input => { 
                            const roleName = input.roleName;
                            const roleSalary = input.roleSalary;
                            const roleDepartment = input.roleDepartment;
                            db.query(`INSERT INTO roles (title, department, salary)
                            VALUES ("${roleName}","${roleDepartment}","${roleSalary}")`, function (error, results){
                                console.log(`Added ${roleName} department to the database`);
                                init();
                            })
                        });
                        break
            }
        })
}


init();