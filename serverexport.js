const express = require('express');
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
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

function choices(input) {
    switch (input) {
        case "View All Departments": app.get("/api/departments", (req, res) => {
            db.query('SELECT * from departments', function (error, results){
                res.json(results);
            })
        });
            break;
        case "View All Roles":
            console.log("test")
            break;
        case "View All Employees":
            console.log("test2")
            break;
    }
}

app.listen(PORT, () => {
    console.log(`example app listening at http://localhost:${PORT}`);
});