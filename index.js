// requires npm inquirer and nodeJS filesystem
const inquirer = require('inquirer');
const fs = require('fs');

// team classes
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// html creator
// const generateHTML = require("./src/generateHTML");

// add all employees into an empty array
const team = [];

// manager questions using inquirer.prompt
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
        // creates Manager object with the inquirer data
        .then(value => {
            const manager = new Manager(
                value.name,
                value.id,
                value.email,
                value.officeNumber,
            );

            team.push(manager);
            employeePrompt();
        })
};

// adding engineer or intern using inquirer.prompt
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
            // github question only gets asked 'when' the choice is Engineer 
            type: "input",
            name: "github",
            message: "Enter employee's github username:",
            when: input => input.position === 'Engineer',
        },
        {
            // school question only gets asked 'when' the choice is Intern
            type: "input",
            name: "school",
            message: "Enter intern's school name:",
            when: input => input.position === 'Intern',
        },
        {
            // choose whether or not you want to continue to add more employee's or not
            type: "confirm",
            name: "addEmployee",
            message: "Add more employees:",
            default: false,
        }
    ])
        .then(value => {

            // needs undeclared variable to create employee object
            let employee;

            // creates Engineer or Intern object with the inquirer data depending on the 'choice' that was made
            if (value.position === 'Engineer') {
                employee = new Engineer(
                    value.name,
                    value.id,
                    value.email,
                    value.github,
                );
            } else if (value.position === 'Intern') {
                employee = new Intern(
                    value.name,
                    value.id,
                    value.email,
                    value.school,
                )
            }

            team.push(employee);

            // checks if the last question to add more users is either true or false. default state is set to false. If no is selected move ont to create index.html page
            if (value.addEmployee) {
                return employeePrompt(team)
            } else {
                console.log(team)
                // createHTML();
                test(team);
            }
        })
};

const test = (team) => {
    
    console.log('inside test')
    for (let i = 0; i < team.length; i++){
        const employee = team[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const manCard = createManager(employee)
            console.log(manCard)
        } else {
            console.log('done')
        }
    }
};

const createManager = (d) => {

    return `<div class="col-6">
                    <div class="card mx-auto mb-4 shadow-sm">
                        <div class="card-header">
                            <h3>${d.name}<br/><br/>${d.getRole()}</h3>
                        </div>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li>ID: ${d.id}</li>
                            <li>Email: ${d.email}</li>
                            <li>Office Number: ${d.getOfficeNumber()}</li>
                        </ul>
                    </div>
                </div>`
}
// createHTML = team => {
//     const htmlPage = generateHTML(team)

//     fs.writeFile("./dist/test.html", htmlPage, err =>
//     err ? console.error(err) : console.log("created index.html"))
// }

// starts the program
managerPrompt();



