const Intern = require('../lib/Intern');
const { test, expect } = require('@jest/globals');

test('creates intern object', () => {
    const intern = new Intern('Tom', '3', 'tom@tom.com', 'UNCC');

    expect(intern.name).toBe('Tom');
    expect(intern.id).toBe('3');
    expect(intern.email).toBe('tom@tom.com');
    expect(intern.school).toBe('UNCC');
});