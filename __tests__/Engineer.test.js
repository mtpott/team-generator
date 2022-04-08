const Engineer = require('../lib/Engineer');
const { test, expect } = require('@jest/globals');

test('creates engineer object', () => {
    const engineer = new Engineer('Bob', '2', 'bob@bob.com', 'gitbob', 'Engineer');

    expect(engineer.name).toBe('Bob');
    expect(engineer.id).toBe('2');
    expect(engineer.email).toBe('bob@bob.com');
    expect(engineer.getGithub()).toBe('gitbob');
    expect(engineer.getRole()).toBe('Engineer');
});

test('accesses github', () => {
    const engineer = new Engineer('Bob', '2', 'bob@bob.com', 'gitbob', 'Engineer');

    expect(engineer.getGithub()).toBe('gitbob');
});

test('accesses role', () => {
    const engineer = new Engineer('Bob', '2', 'bob@bob.com', 'gitbob', 'Engineer');

    expect(engineer.getRole()).toBe('Engineer');
});

test('gets engineer info as an object', () => {
    const engineer = new Engineer('Bob', '2', 'bob@bob.com', 'gitbob', 'Engineer');

    expect(engineer.getInfo()).toHaveProperty('name');
    expect(engineer.getInfo()).toHaveProperty('id');
    expect(engineer.getInfo()).toHaveProperty('email');
    expect(engineer.getInfo()).toHaveProperty('github');
    expect(engineer.getInfo()).toHaveProperty('role');
})