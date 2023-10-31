const inquirer = require("inquirer");
const fs = require("fs");

const questions = [{ 
type: "list",
name: "options",
message: "What would you like to do?",
choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role"]
}];

function appendToFile(data) {
    return new Promise((resolve, reject) => {
        fs.appendFile('./queries.sql',data,err => {
            if (err) {
                reject(err);
                return;
            } resolve({
                ok: true,
                message: console.log("Completed")
            }) 
        })
    })
}

function init() {
    inquirer
        .prompt(questions)
        .then(input => {
            appendToFile(addToFile(input))
        })
}

function addToFile(data) {
    return `yes`;
  }

init();