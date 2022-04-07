const Manager = require('../lib/Manager');
const { test, expect }= require('@jest/globals');

test('creates a new manager object', () => {
    const manager = new Manager('Jane', '1', 'jane@jane.com', '10');

    expect(manager.name).toBe('Jane');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('jane@jane.com');
    expect(manager.office).toBe('10');
});

