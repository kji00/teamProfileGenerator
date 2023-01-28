const Employee = require("../lib/employee");

describe("Employee", () => {
    it("Test Employee object creation", () => {
        const testEmployee = new Employee();
        expect(typeof(testEmployee)).toBe("object")
    })
    it("Create new employee object and test properties and methods", () => {

        // create test variables to use
        const name = 'Joe';
        const id = 1;
        const email = 'joe@joe.com';

        // create testEmployee object with values
        const testEmployee = new Employee(name, id, email);

        // Test properties of the object
        expect(testEmployee.name).toBe(name);
        expect(testEmployee.id).toBe(id);
        expect(testEmployee.email).toBe(email);

        // Test object methods 
        expect(testEmployee.getName()).toBe(name);
        expect(testEmployee.getId()).toBe(id);
        expect(testEmployee.getEmail()).toBe(email);
        expect(testEmployee.getRole()).toBe('Employee')
    })
})