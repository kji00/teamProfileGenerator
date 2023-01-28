const Employee = require("./employee.js")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school
    }

    // getSchool method is specific to the intern role
    getSchool(){
        return this.school;
    }

    // this overrides the employee getRoles
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;