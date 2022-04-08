const Intern = require('../lib/Intern');
const { test, expect } = require('@jest/globals');

test('creates intern object', () => {
    const intern = new Intern('Tom', '3', 'tom@tom.com', 'UNCC', 'Intern');

    expect(intern.name).toBe('Tom');
    expect(intern.id).toBe('3');
    expect(intern.email).toBe('tom@tom.com');
    expect(intern.getSchool()).toBe('UNCC');
    expect(intern.getRole()).toBe('Intern');
});

test('accesses school', () => {
    const intern = new Intern('Tom', '3', 'tom@tom.com', 'UNCC', 'Intern');

    expect(intern.getSchool()).toBe('UNCC');
});

test('accesses role', () => {
    const intern = new Intern('Tom', '3', 'tom@tom.com', 'UNCC', 'Intern');

    expect(intern.getRole()).toBe('Intern');
});

test('gets intern info as an object', () => {
    const intern = new Intern('Tom', '3', 'tom@tom.com', 'UNCC', 'Intern');

    expect(intern.getInfo()).toHaveProperty('name');
    expect(intern.getInfo()).toHaveProperty('id');
    expect(intern.getInfo()).toHaveProperty('email');
    expect(intern.getInfo()).toHaveProperty('school');
    expect(intern.getInfo()).toHaveProperty('role');
});