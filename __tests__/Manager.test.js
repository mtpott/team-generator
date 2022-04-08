const Manager = require('../lib/Manager');
const { test, expect } = require('@jest/globals');

test('creates a new manager object', () => {
    const manager = new Manager('Jane', '1', 'jane@jane.com');

    expect(manager.name).toBe('Jane');
    expect(manager.id).toHaveProperty('1');
    expect(manager.email).toHaveProperty('jane@jane.com');
});

test('accesses office number', () => {
    const manager = new Manager('Jane', '1', 'jane@jane.com');

    expect(manager.getOffice()).toHaveProperty('10');
});

test('accesses role', () => {
    const manager = new Manager('Jane', '1', 'jane@jane.com');

    expect(manager.getRole()).toHaveProperty('Manager');
});

test('gets manager info as an object', () => {
    const manager = new Manager('Jane', '1', 'jane@jane.com');

    expect(manager.getInfo()).toHaveProperty('name');
    expect(manager.getInfo()).toHaveProperty('id');
    expect(manager.getInfo()).toHaveProperty('email');
    expect(manager.getInfo()).toHaveProperty('office');
    expect(manager.getInfo()).toHaveProperty('role');
})