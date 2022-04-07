const Engineer = require('../lib/Engineer');
const { test, expect } = require('@jest/globals');

test('creates engineer object', () => {
    const engineer = new Engineer('Bob', '2', 'bob@bob.com', 'gitbob');

    expect(engineer.name).toBe('Bob');
    expect(engineer.id).toBe('2');
    expect(engineer.email).toBe('bob@bob.com');
    expect(engineer.github).toBe('gitbob');
})