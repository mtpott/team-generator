const Manager = require('../lib/Manager');
const { test, expect } = require('@jest/globals');

test('creates a new manager object', () => {
    const manager = new Manager('Jane', '1', 'jane@jane.com', '10', 'Manager');

    expect(manager.name).toBe('Jane');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('jane@jane.com');
    expect(manager.getOffice()).toBe('10');
    expect(manager.getRole()).toBe('Manager');
});

test('accesses office number', () => {
    const manager = new Manager('Jane', '1', 'jane@jane.com', '10', 'Manager');

    expect(manager.getOffice()).toBe('10');
});

test('accesses role', () => {
    const manager = new Manager('Jane', '1', 'jane@jane.com', '10', 'Manager');

    expect(manager.getRole()).toBe('Manager');
});

test('gets manager info as an object', () => {
    const manager = new Manager('Jane', '1', 'jane@jane.com', '10', 'Manager');

    expect(manager.getInfo()).toHaveProperty('name');
    expect(manager.getInfo()).toHaveProperty('id');
    expect(manager.getInfo()).toHaveProperty('email');
    expect(manager.getInfo()).toHaveProperty('office');
    expect(manager.getInfo()).toHaveProperty('role');
})