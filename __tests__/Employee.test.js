const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('John', '1', 'john@john.com');

    expect(employee.name).toBe('John');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('john@john.com');
});

test('returns role', () => {
    const employee = new Employee('John', '1', 'john@john.com');

    expect(employee.getRole()).toHaveProperty('Employee');
})