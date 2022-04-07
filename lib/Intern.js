const Employee = require('./Employee');
const fs = require('fs');
const inquirer = require('inquirer');

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
}

function internQuestions() {
    inquirer.prompt({
        type: 'input',
        name: 'school',
        message: 'please enter the school that you attend.'
    })
    .then(response => {
        console.log(response);
    })
}

module.exports = { Intern, internQuestions };