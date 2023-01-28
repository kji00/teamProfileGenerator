const Manager = require("../lib/manager");

describe("Manager", () => {
    it("Test Manager object creation", () => {
        const testManager = new Manager();
        expect(typeof(testManager)).toBe("object")
    })
    it("Create new employee object and test properties and methods", () => {

        // create test variables to use
        const name = 'Joe';
        const id = 1;
        const email = 'joe@joe.com';
        const officeNumber = '555-5555';

        // create testManager object with values
        const testManager = new Manager(name, id, email, officeNumber);

        // Test properties of the object
        expect(testManager.name).toBe(name);
        expect(testManager.id).toBe(id);
        expect(testManager.email).toBe(email);
        expect(testManager.officeNumber).toBe(officeNumber);

        // Test object methods 
        expect(testManager.getName()).toBe(name);
        expect(testManager.getId()).toBe(id);
        expect(testManager.getEmail()).toBe(email);
        expect(testManager.getOfficeNumber()).toBe(officeNumber);
        expect(testManager.getRole()).toBe('Manager')
    })
})