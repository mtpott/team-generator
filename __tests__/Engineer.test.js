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
    const engineer = new Engineer('Bob', '2', 'bob@bob.com', 'gitbob', 'Engineer', 'Yes');

    expect(engineer.getInfo()).toHaveProperty('engineerName');
    expect(engineer.getInfo()).toHaveProperty('engineerId');
    expect(engineer.getInfo()).toHaveProperty('engineerEmail');
    expect(engineer.getInfo()).toHaveProperty('engineerGithub');
    expect(engineer.getInfo()).toHaveProperty('engineerRole');
    expect(engineer.getInfo()).toHaveProperty('continueConfirm');
})

test('returns confirm statement', () => {
    const engineer = new Engineer('Bob', '2', 'bob@bob.com', 'gitbob','Yes', 'Engineer');

    expect(engineer.getContinue()).toBe('Yes');
})