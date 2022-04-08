const Employee = require('./Employee');
const fs = require('fs');
const inquirer = require('inquirer');
var team = [];

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }

    getInfo = function() {
        return {
            name: this.name,
            id: this.id,
            email: this.email,
            school: this.school,
            role: 'Intern'
        };
    }
};

module.exports = Intern;