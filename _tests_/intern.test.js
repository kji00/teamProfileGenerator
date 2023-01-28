const Intern = require("../lib/intern");

describe("Intern", () => {
    it("Test Intern object creation", () => {
        const testIntern = new Intern();
        expect(typeof(testIntern)).toBe("object")
    })
    it("Create new employee object and test properties and methods", () => {

        // create test variables to use
        const name = 'Joe';
        const id = 1;
        const email = 'joe@joe.com';
        const school = 'college';

        // create testIntern object with values
        const testIntern = new Intern(name, id, email, school);

        // Test properties of the object
        expect(testIntern.name).toBe(name);
        expect(testIntern.id).toBe(id);
        expect(testIntern.email).toBe(email);
        expect(testIntern.school).toBe(school);

        // Test object methods 
        expect(testIntern.getName()).toBe(name);
        expect(testIntern.getId()).toBe(id);
        expect(testIntern.getEmail()).toBe(email);
        expect(testIntern.getSchool()).toBe(school);
        expect(testIntern.getRole()).toBe('Intern')
    })
})