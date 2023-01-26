// requires npm inquirer and nodeJS filesystem
const inquirer = require('inquirer');
const fs = require('fs');

// team classes
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// html creator
const generateHTML = require("./src/generateHTML");


const managerPrompt =  () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of your manager?",
        },
        {
            type: "input",
            name: "id",
            message: "What is your manager's ID number?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your manager's email address?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your manager's phone number?"
        }
    ])
    .then(value => {
        const manager = new Manager(
            value.name,
            value.id,
            value.email,
            value.officeNumber,
        );
        
        console.log(manager)
    }) 
}

function init(){
    managerPrompt();
}

init()



