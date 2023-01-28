const Employee = require("./employee.js")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber
    }

    // getOfficeNumber method is specific to the manager role
    getOfficeNumber(){
        return this.officeNumber;
    }

    // this overrides the employee getRoles
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;
