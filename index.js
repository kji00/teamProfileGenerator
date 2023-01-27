// requires npm inquirer and nodeJS filesystem
const inquirer = require('inquirer');
const fs = require('fs');

// team classes
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// html creator
const generateHTML = require("./src/generateHTML");

// add all employees into an empty array
const team = [];

const managerPrompt = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter manager's name:",
        },
        {
            type: "input",
            name: "id",
            message: "Enter manager's ID number:",
        },
        {
            type: "input",
            name: "email",
            message: "Enter manager's email address:",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter manager's office phone number:"
        }
    ])
        .then(value => {
            const manager = new Manager(
                value.name,
                value.id,
                value.email,
                value.officeNumber,
            );

            team.push(manager);
        })
}

const employeePrompt = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "position",
            message: "What is the employee's position:",
            choices: ["Engineer", "Intern"],
        },
        {
            type: "input",
            name: "name",
            message: "Enter employee's name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter employee's ID number:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter employee's email address:",
        },
        {
            type: "input",
            name: "github",
            message: "Enter employee's github username:",
            when: input => input.position === 'Engineer',
        },
        {
            type: "input",
            name: "school",
            message: "Enter intern's school name:",
            when: input => input.position === 'Intern',
        },
        {
            type: "confirm",
            name: "addEmployee",
            message: "Add more employees: Y/N",
            default: false
        }
    ])
        .then(value => {
            if (position === 'Engineer') {
                const employee = new Engineer(
                    value.name,
                    value.id,
                    value.email,
                    value.github,
                );
            } else if (position === 'Intern') {
                const employee = new Intern(
                    value.name,
                    value.id,
                    value.email,
                    value.school,
                )
            }
            console.log(employee)

            team.push(employee);

            if (addEmployee) {
                return employeePrompt()
            } else {
                return team;
            }
        })
}

function init() {
    managerPrompt();
}

init()



