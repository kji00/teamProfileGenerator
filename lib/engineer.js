const Employee = require("./employee.js")

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github
    }

    // getGithub method is specific to the Engineer role
    getGithub(){
        return this.github;
    }

    // this overrides the employee getRoles
    getRole(){
        return "Engineer";
    }
};

module.exports = Engineer;