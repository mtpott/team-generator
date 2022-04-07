const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee.js');
//const { test } = require('picomatch');
//const checkIfEqual = require('../lib/employee.js');

test('creates an employee object', () => {
    const employee = new Employee('John', 'john@john.com');

    expect(employee.name).toBe('John');
    //expect(employee.id).toEqual(1);
    expect(employee.email).toBe('john@john.com');
    //expect(employee.office).toEqual(expect.any(Number));
});