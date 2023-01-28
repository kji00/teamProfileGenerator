const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    it("Test Engineer object creation", () => {
        const testEngineer = new Engineer();
        expect(typeof(testEngineer)).toBe("object")
    })
    it("Create new employee object and test properties and methods", () => {

        // create test variables to use
        const name = 'Joe';
        const id = 1;
        const email = 'joe@joe.com';
        const github = 'joeGithub';

        // create testEngineer object with values
        const testEngineer = new Engineer(name, id, email, github);

        // Test properties of the object
        expect(testEngineer.name).toBe(name);
        expect(testEngineer.id).toBe(id);
        expect(testEngineer.email).toBe(email);
        expect(testEngineer.github).toBe(github);

        // Test object methods 
        expect(testEngineer.getName()).toBe(name);
        expect(testEngineer.getId()).toBe(id);
        expect(testEngineer.getEmail()).toBe(email);
        expect(testEngineer.getGithub()).toBe(github);
        expect(testEngineer.getRole()).toBe('Engineer')
    })
})