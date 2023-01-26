class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // returns name
    getName(){
        return this.name;
    }

    // returns id
    getId(){
        return this.id;
    }

    // returns email
    getEmail(){
        return this.email
    }

    //Returns 'Employee'
    getRole(){
        return 'Employee'
    }

}

// exports Employee class
module.exports = Employee;