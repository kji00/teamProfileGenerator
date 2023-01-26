const inquirer = require('inquirer');
const fs = require('fs');
const { inherits } = require('util');

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
            name: "phoneNumber",
            message: "What is your manager's phone number?"
        }
    ])
    .then(console.log(managerPrompt))
}

function init(){
    managerPrompt();
}

init()



