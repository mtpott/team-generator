const Employee = require('./Employee');
const fs = require('fs');
const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole () {
        return 'Engineer';
    }

    getInfo = function() {
        return {
            name: this.name,
            id: this.id,
            email: this.email,
            github: this.github,
            role: 'Engineer'
        }
    }
}

module.exports = Engineer;